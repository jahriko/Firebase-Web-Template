import { useState, useEffect } from "react";
import { db } from "./firebase";
import {
	collection,
	getDocs,
	addDoc,
	onSnapshot,
	serverTimestamp,
	orderBy,
	query,
} from "firebase/firestore";

function App() {
	const [todos, setTodos] = useState([]);
	const [input, setInput] = useState("");

	const addTodo = (event) => {
		event.preventDefault();

		addDoc(collection(db, "todos"), {
			todo: input,
			timestamp: serverTimestamp(),
			completed: false,
		});

		setInput("");
	};

	useEffect(() => {
		const sortedTodos = query(
			collection(db, "todos"),
			orderBy("timestamp", "desc")
		);

		const unsubscribe = onSnapshot(sortedTodos, (snapshot) => {
			setTodos(
				snapshot.docs.map((doc) => ({
					id: doc.id,
					todo: doc.data().todo,
					completed: doc.data().completed,
				}))
			);
		});

		return unsubscribe;
	}, []);

	return (
		<div>
			<form>
				<input
					value={input}
					onChange={(event) => setInput(event.target.value)}
				/>
				<button type="submit" onClick={addTodo}>
					Add Todo
				</button>
			</form>

			<ul>
				{todos.map((todo) => (
					<li key={todo.id}>
						<input
							type="checkbox"
							checked={todo.completed}
							onChange={() => toggleComplete(todo.id, todo.completed)}
						/>
						{todo.todo}
					</li>
				))}
			</ul>
		</div>
	);
}
async function toggleComplete(id, completed) {
	await updateDoc(doc(db, "todos", id), {
		completed: !completed,
	});
}

export default App;
