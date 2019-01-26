# edw_react_patterns

https://reactjs.org/docs/react-component.html

- **setState()** does not always immediately update the component. It may batch or defer the update until later. This makes reading this.state right after calling **setState()** a potential pitfall. Instead, use **componentDidUpdate** or a **setState callback** (**setState(updater, callback)**), either of which are guaranteed to fire after the update has been applied. If you need to set the state based on the previous state, read about the updater argument below.
- **Render Props**
  - props.children can be used for jsx
  - props.children can be function, so it can be called by child component and pass set of properties
