import { useState, useEffect } from "react";
import { db } from "./firebase";
import {
	collection,
	addDoc,
	onSnapshot,
	serverTimestamp,
	orderBy,
	query,
	doc,
	updateDoc,
	deleteDoc,
} from "firebase/firestore";
import "./App.css";

// Your task is to add the functionality to add, toggle, and delete todos. Goodluck!

function App() {
	const [todos, setTodos] = useState([]);
	const [input, setInput] = useState("");

	async function addTodo(event) {
		event.preventDefault();

		// ... code goes here

		setInput("");
	}

	async function toggleComplete(id, completed) {
		// Toggle todo as complete with the given id
	}

	async function deleteTodo(id) {
		// Delete the todo with the given id
	}

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
		<div className="container">
			<form>
				<input
					value={input}
					onChange={(event) => setInput(event.target.value)}
					className="todo-input"
				/>
				<button type="submit" onClick={addTodo} className="add-todo">
					Add Todo
				</button>
			</form>

			<ul className="todo-list">
				{todos.map((todo) => (
					<li key={todo.id}>
						<div>
							<input
								type="checkbox"
								checked={todo.completed}
								onChange={() => toggleComplete(todo.id, todo.completed)}
							/>
							<span className={todo.completed ? "completed" : ""}>
								{todo.todo}
							</span>
						</div>
						<button onClick={() => deleteTodo(todo.id)} className="delete">
							Delete
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default App;
