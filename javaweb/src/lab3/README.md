# Lab 3 useEffect
**Due Date: Monday October 17 by Midnight**

### Instructions

You will be building a react project that has `Counter` component to explore `useEffect`. 

- Create a Counter component that displays a counter that starts at 0 and has a button. Every time the button is pressed, the counter increments and we can see the changes. 
- Using `useEffect`:
    - output to the console "counter component is created" when the component is first created
    - output to the console "counter component is destroyed" when the component is destroyed (no longer rendered)
    - output to the console "the counter is now VALUE_OF_COUNTER" every time the counter changes

Hint: 
1. You can use multiple useEffect in your component.
2. to test your app, you might want to conditionally render a Counter component in App so that it gets created and destroyed. 

Reference to study from: [react-useeffect-explanation](https://dmitripavlutin.com/react-useeffect-explanation/)


### Important Note
In class we saw that useEffect is being triggered twice at the beginning. This behavior is happening in development mode because of what's known as Strict Mode in React. You can read more about Strict Mode [here](https://reactjs.org/docs/strict-mode.html).

In the template project we create using `npx create-react-app ...` it creates an App component for us in Strict Mode. 

```js
<React.StrictMode>
    <App/>
</React.StrictMode>
```

To remove the strict mode, delete it from the `index.js` and just render the `App` component. 

```js
<App/>
```

Basically Strict Mode activates additional checks and warning for the children of the `React.StrictMode` component. In our template projects, the full app is a child of `React.StrictMode`. 

However, for react to do the extra checks, it is causing our app to render twice at the beginning which is resulting in useEffect being triggered twice. 

So to test the functionality of this lab properly, remove the strict mode from your app. 



### Submission

You will be submitting your project online on LEA and demonstrating your solution in the upcoming lab after the due date in class. You are responsible to present to me how are you testing that the requirements are satisfied for your labs. 

Before you zip your project to upload to LEA, make sure you **delete node_modules folder from your project!!** If your project is more than 1MB it means there is something wrong and I will not be accepting your submission. After deleting `node_modules`, zip the full project and upload the zipped file to LEA before the due date.
