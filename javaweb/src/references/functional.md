# Functional Programming 

<style>
    
.interactive.is-js-height {
height: 444px;
width: 100%;
}
</style>

Functional programming is a way of writing programs that are constructed by applying and composing functions. In functional programming we don't use the normal loops (`for` and `while`) that we are used to especially when we are handling a collection of data or objects (like in an array).

## `Array.prototype.map()`

The map method creates a new array populated with the results of calling the function you provide on every element in the array you are using map on. 


<iframe src="https://codesandbox.io/embed/array-map-example-zmrzck?fontsize=14&hidenavigation=1&theme=dark&previewwindow=console"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="array-map-example"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>


This is used a lot in front-end development especially. Whenever we have an array of data objects and we want to display a list, then we map every object in the array to some html. 

In React we can map an array to some JSX. Usually when we are doing that, it means we are displaying a list. React requires us to pass a key for every element in the list which would help react identify which element has changed, added or removed. 

The following is a simple App component example in React that displays a list of strings and a list of objects. In the first case, the string itself is used as key. And in the second case, the id of each object is used as key. 



<iframe src="https://codesandbox.io/embed/flamboyant-tristan-8s86zw?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="flamboyant-tristan-8s86zw"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## `Array.prototype.filter()`

The filter method returns a new array with a shallow copy of the elements in the array that we want to stay in it. To decide which elements in the array we want to copy, we pass a function that takes an element as parameter and returns `true` to keep the element or `false` to not copy the element. 

The following examples filter an array of numbers and an array of objects. This is used a lot in React whenever we want to filter an array state. Because every time we need to set a new state, we have to pass a new array to become our new state. 

<iframe src="https://codesandbox.io/embed/array-filter-example-x55u2v?fontsize=14&hidenavigation=1&module=%2Fsrc%2Findex.js&theme=dark&previewwindow=console"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="array-filter-example"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
