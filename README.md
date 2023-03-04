# Firebase Web Template

### Clone the repository

```
git clone https://github.com/jahriko/Firebase-Web-Template.git
```

### Installation

`npm`

```
> npm install

> npm dev
```

---

This template provides an already built in todo application and uses ReactJS as the front-end. And we have removed parts of the code for you to fill them out, so you don't have to worry creating from scratch!

## ReactJS in a nutshell.

Components are created using functions or classes. Functions are often used to create simple components.

A function in React is just like a regular JavaScript function, but it returns JSX. JSX is a special syntax that allows you to write HTML-like code inside your JavaScript code.

Here's an example of a simple React component created using a function:

```js
function Greeting() {
	return (
		<div>
			<h1>Hello, World!</h1>
		</div>
	);
}
```

## Hooks

In React, a hook is a special function that allows you to use state and other React features in functional components. It makes it easier to reuse stateful logic between components.

The most commonly used hook is called `useEffect`. It's used for fetching data from APIs, including Firebase. When you want to populate your React application with data from Firebase, you can use the useEffect hook to perform the API call and update your component's state with the data.

If you have any questions or have problems setting up the template, raise your hand so that we can see you. Thanks!

To learn more of React, head over to https://beta.reactjs.org/learn

### Firebase for web

- https://firebase.google.com/docs/web

### Firestore Quickstart

- https://firebase.google.com/docs/firestore/quickstart
