# Three Dots ...

The three dots in javascript are known as the spread operator and it can be applied on arrays or objects. 

## Copying an Array or Object

We can use the spread operator to easily create a shallow copy of an array or object.

```js
//arr2 will be a new array
//with the same values copied from arr
const arr = [1,2,3];
const arr2 = [...arr];  
```

```js
const user = { name: "Tawfiq", occupation: "teacher", gender: "male" };
//creating a new object
//with the same key/values in user
const user2 = { ...user };
```

## Add element to a copied array

Sometimes we want to add a new element to an array, but we also don't want to modify our existing array. So we want to create a new array and copy everything from the first array into it and then add whatever elements we want. 

Of course we can do something like this:
```js
const array1 = [1, 2, 3];
const array2 = [...array1];
array2.push(4)
//array2 : [1,2,3,4]
```

But we can also just add the element to array2 in the initialization:
```js
const array1 = [1, 2, 3];
const array2 = [...array1, 4];
```

The spread operator will take the elements out of `array1` and pass them to the initialization of `array2` with comma separated and we just add more to it. 

This is also used a lot in React when we want to add an element to an array state but we can't modify the actual state, we have to pass a new array to the set function. So we create a new array as a copy and then add the element we want to it. The new array then get passed to the set function so it becomes our new state. 

## Modify a copied object

In many cases you would want to create a new object based on another object with small modifications in it. 

```js
const user = { name: "Tawfiq", occupation: "teacher", gender: "male" };
```

Given the above object, we want to create a new object for another teacher Brendan. Everything in the current object will be the same except the name. 

We maybe can do the following:

```js
const user2 = {name: 'Brendan', 
               occupation: user.occupation,
               gender: user.gender}
```
this will work, but what if we have much more than just occupation and gender. 

What we can do is copy everything from the `user` object, then override the values we want. 

If we assign multiple values to the same key, then each one overrides the one previous value. 

```js
const user2 = { ...user, name: "Brendan" };
```
This will take everything in `user` object including the `name:Tawfiq` and then assign a new value to the key `name` which is `Brendan`. 

## Sandbox
<iframe src="https://codesandbox.io/embed/spread-operator-example-vi6669?fontsize=14&hidenavigation=1&theme=dark&previewwindow=console"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="spread-operator-example"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>