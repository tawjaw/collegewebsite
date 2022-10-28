# Conditional Rendering 

Before we look at conditional rendering in React, let's say we want to hide and show a text when a button is pressed. 

## CSS Hiding

We can hide an html element in css using something like:
```css
.hidden {
  display: none;
}
```
In the following example, we have a text wrapped in `div` and a state that is keeping track of whether that `div` is hidden or not. If it is hidden, we are adding the css class `hidden` to the `div`. 

<iframe src="https://codesandbox.io/embed/react-toggle-hidden-p3zu0r?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="react-toggle-hidden"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## Javascript Conditional Rendering 

The problem here is that our text is being rendered to the HTML either way! If you inspect the page, you will see our text in the HTML. It is only simply hidden with css which we can even easily override from the browser. 

So if we are looking to render something conditionally in our application, doing it with css would not be the right way! Because we would only be hiding the element but it will still be part of our HTML. 

Instead, we can add a condition on whether we want to have it in the JSX or not. For example, in our component we can be doing the following:

```javascript
import { useState } from "react";
import "./styles.css";

export default function App() {
  const [hidden, setHidden] = useState(true);
  return (
    <>
      {hidden ? "" : <div>Hello</div>}
      <button onClick={() => setHidden(!hidden)}>Toggle</button>
    </>
  );
}
```
The line `{hidden ? "" : <div>Hello</div>}` is checking if hidden is true and just returning an empty string. And if hidden is false then it is returning the HTML we want to be part of our component. In this case, the HTML will only be rendered as part of our component if the condition is satisfied. 

If we inspect our page when the text is hidden, we will not find it in the HTML because the javascript part is not returning the `div`!

## && Operator for Conditional Rendering 

In many cases when we are applying conditional rendering, we would only have something to render based on a condition. In other words, if the condition is not met, we don't want to render anything. Similar to our example above.

In such case, we can do this without the need to be returning something for when the condition is not met (the empty string). Instead of using the ternary operator (`condition? return_if_true : return_if_false`), we can use AND boolean operator. 

Our conditional line becomes this 
```javascript
{!hidden && <div>Hello</div>}
```
If hidden is true, then `!hidden` would be false. And `false && ANYTHING` would result in false. So our JSX would not be rendered. If hidden is false, then `!hidden` would be true and the right side of the && operator would be processed and rendered. 

This technique is used when we don't have something to render for the "else" part of the condition. 

The following example has a button that toggles the rendering of some text. 

<iframe src="https://codesandbox.io/embed/react-toggle-conditional-rendering-dughu6?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="react-toggle-conditional-rendering"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
