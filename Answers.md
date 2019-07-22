1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

> Data manipulation methods of map, filter, and reduce will create a new array/object without affecting the orginial array/object. As well you can use a method called concat to extend an object into a new object.

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

> - `actions` are packets that contain the action type and information that will relate to the action.
> - `reducers` "listen" inside the store to decide what to do.
> - `store` is the environment that is displayed to the user.

> So you have the environment (the store) in which an `action creator` will produce an `action` type. The `action type` will then go thru the `dispatch` and gets forwarded to the `reducers`. The `reducers` will process the request and create a new state in the `store`.

> This causes is why the store is known as a 'single source of truth', because it is like a one-way circuit. Although multiple requests can be made they all process one-way.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

> The application state is a global state, while the Component state is local. Redux uses application state which allows the state data to be available on any page as long as it is requested. While the Component state requires the state to be sent to a page, thru props, in order to view the state of a previous page. 
> Component states are good for small apps that don't require a lot of information to be transferred, however for large apps the application state is very useful due to the flexibility it offers. For example, `grandparent` may know a recipe. However the `parent` may not be interested in cooking, yet the `child` loves to cook. In the application state, the recipe can be store in a cookbook (the reducer state) in which both `grandparent` and `child` can access the recipe. While, in a Component state the recipe can be passed from `grandparent` to `parent` to `child` and the `cousin` will never be able to access the book (while in application state it is possible for `cousin` to access with the right information).

4.  What is middleware?

> Middleware is basically middle functions that are called between actions and reducers. Middleware recieves the action and can log, stop, and modify before it goes to the reducer to be parsed.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
6.  Which `react-redux` method links up our `components` with our `redux store`?
