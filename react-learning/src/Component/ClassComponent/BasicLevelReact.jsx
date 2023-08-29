import React, { Component } from 'react';

class BasicLevelReact extends Component {
    render() {
        return (
            <div>
                <ol>
                    <li><h5>What is React?</h5></li>
                    <p>React is a popular JavaScript library for building user interfaces. It allows
                        developers to create reusable UI components and efficiently update and
                        render them based on changes in data.</p>
                    <li><h5>What are the key features of React?</h5></li>
                    <p>Some key features of React include:</p>
                    <p><strong>Virtual DOM:</strong> React uses a virtual representation of the actual DOM,
                        which improves performance by minimizing direct manipulations to
                        the real DOM.
                    </p>
                    <p><strong>Component-based architecture:</strong> React promotes the creation of
                        reusable UI components.
                    </p>
                    <p><strong>One-way data flow:</strong> React follows a unidirectional data flow, making it
                        easier to track and manage changes in the application state.</p>
                    <p><strong>JSX:</strong> React uses JSX, a syntax extension that allows you to write HTMLlike code within JavaScript.</p>
                    <li><h5>What is JSX in React?</h5></li>
                    <p>JSX is a syntax extension used in React that allows you to write HTML-like
                        code within JavaScript. It provides a convenient way to define the
                        structure and appearance of React components.</p>
                    <li><h5> What is the difference between React and React Native?</h5></li>
                    <p>React is a library for building web applications, while React Native is a
                        framework for building native mobile applications. React Native allows
                        you to write components using React syntax, but it compiles them to
                        native code rather than rendering them as HTML elements.</p>
                    <li><h5>What is a functional component in React?</h5></li>
                    <p>A functional component, also known as a stateless component, is a
                        JavaScript function that returns JSX to define the structure and
                        appearance of a React component. Functional components are primarily
                        used for presenting UI and don't have their own internal state.
                    </p>
                    <li><h5>What is a class component in React?</h5></li>
                    <p>A class component is a JavaScript class that extends the React.Component
                        class. It uses the render() method to define the structure and appearance
                        of a React component. Class components can have their own state and
                        lifecycle methods.</p>
                    <li><h5>What is the difference between functional and class components?</h5></li>
                    <p>Functional components are simpler and easier to read and test compared
                        to class components. They don't have their own state or lifecycle methods.
                        Class components, on the other hand, can manage their own state and
                        have access to lifecycle methods such as componentDidMount() and
                        componentDidUpdate().</p>
                    <li><h5>What is state in React?</h5></li>
                    <p>State is a built-in object in React that holds component-specific data. It
                        represents the mutable values that can change over time and trigger a rerender of the component.</p>
                    <li><h5>What is props in React?</h5></li>
                    <p>Props (short for properties) are used to pass data from a parent
                        component to a child component. Props are read-only and cannot be
                        modified by the child component. They are passed as attributes to the
                        child component in JSX.</p>
                    <li><h5>What is the purpose of the virtual DOM in React?</h5></li>
                    <p>The virtual DOM is a lightweight copy of the actual DOM maintained by
                        React. It allows React to perform efficient updates and minimize direct
                        manipulations to the real DOM. React compares the virtual DOM with the
                        previous version and updates only the necessary parts, improving
                        performance.</p>
                    <li><h5>What is a React component lifecycle?</h5></li>
                    <p>React component lifecycle refers to a series of phases that a component
                        goes through from initialization to destruction. The key lifecycle methods
                        are:<br />
                        <strong>Mounting:</strong> constructor(), render(), componentDidMount()<br />
                        <strong>Updating:</strong> render(), componentDidUpdate()<br />
                        <strong>Unmounting:</strong> componentWillUnmount()
                    </p>
                    <li><h5>What is the significance of the render() method in React?</h5></li>
                    <p>The render() method is a required method in React components. It returns
                        JSX that describes the structure and appearance of the component. The
                        render() method is called whenever the component needs to be rerendered due to changes in props or state.</p>
                    <p><a href="https://youtu.be/eSKDjVc7QQ4?si=f5h7jqafT2m83WIR">render() method videos</a>(code step by step)</p>
                    <li><h5>What is the purpose of the componentDidMount() method?</h5></li>
                    <p>The componentDidMount() method is a lifecycle method that is called
                        after a component has been mounted (inserted into the DOM). It is
                        commonly used for performing side effects, such as fetching data from an
                        API orsubscribing to events.</p>
                    <li><h5>What is the difference between controlled and uncontrolled components in React?</h5></li>
                    <p>In a controlled component, the value of the form elements is controlled by
                        React. The component's state is used to manage the value, and any
                        changes to the value are handled by updating the state. In an
                        uncontrolled component, the value of the form elements is managed by
                        the DOM itself, and React doesn't control or track the value.</p>
                    <li><h5>. What is the purpose of keys in React lists?</h5></li>
                    <p>Keys are used in React lists to give each item a unique identifier. They help
                        React identify which items have changed, been added, or been removed
                        in a list, improving performance and avoiding unnecessary re-rendering of
                        components.</p>
                    <li><h5>What are React refs used for?</h5></li>
                    <p>Refs are used in React to get direct access to a DOM element or a React
                        component instance. They provide a way to interact with the underlying
                        DOM or component imperatively, outside of the typical React data flow.
                    </p>
                    <li><h5>What is conditional rendering in React?</h5></li>
                    <p>Conditional rendering in React allows you to render different content or
                        components based on certain conditions or state. It enables dynamic
                        Mounting: constructor(), render(), componentDidMount()
                        Updating: render(), componentDidUpdate()
                        Unmounting: componentWillUnmount()
                        rendering and helps in creating responsive and interactive UIs.
                    </p>
                    <li><h5>What is the purpose of the shouldComponentUpdate() method?</h5></li>
                    <p>The shouldComponentUpdate() method is a lifecycle method that allows
                        you to optimize performance by controlling whether or not a component
                        should re-render. By implementing this method, you can compare the
                        current props and state with the next props and state and decide if a rerender is necessary.
                    </p>
                    <li><h5>What are React Hooks?</h5></li>
                    <p>React Hooks are functions introduced in React 16.8 that allow you to use
                        state and other React features in functional components. Hooks provide a
                        way to use local component state, lifecycle methods, and other React
                        features without writing a class.</p>
                    <li><h5>What is the useState() Hook used for?</h5></li>
                    <p>The useState() Hook is a built-in Hook in React that allows functional
                        components to manage local state. It returns an array with two elements:
                        the current state value and a function to update the state. It replaces the
                        need for using a class and this.setState() to manage state.</p>
                    <li>What is the useContext() Hook used for?</li>
                    <p>The useContext() Hook is a built-in Hook in React that allows functional
                        components to access a context directly. It retrieves the current value of a
                        context and subscribes the component to updates when the context value
                        changes.</p>
                    <li><h5>What is the useEffect() Hook used for?</h5></li>
                    <p>The useEffect() Hook is a built-in Hook in React that allows functional
                        components to perform side effects. It replaces the lifecycle methods like
                        componentDidMount(), componentDidUpdate(), and
                        componentWillUnmount(). The useEffect() Hook runs after every render by
                        default.
                    </p>
                    <li><h5>What is the purpose of the useMemo() Hook?</h5></li>
                    <p>The useMemo() Hook is a built-in Hook in React that memoizes the result
                        of a computation and returns the cached result when the dependencies
                        haven't changed. It helps in optimizing performance by avoiding
                        unnecessary expensive calculations.</p>
                    <li><h5>What is the useReducer() Hook used for</h5></li>
                    <p>The useReducer() Hook is a built-in Hook in React that provides a way to
                        manage complex state logic in a predictable way. It is an alternative to
                        useState() for managing state when the state transitions are more
                        complex and involve multiple sub-values.</p>
                    <li><h5>What is React Router used for?</h5></li>
                    <p>React Router is a popular library for routing in React applications. It
                        provides a way to handle navigation and routing between different
                        components and views in a single-page application.</p>
                    <li><h5>What are React Fragments?</h5></li>
                    <p>React Fragments are a feature in React that allows you to group a list of
                        children without adding extra nodes to the DOM. They are useful when
                        you need to return multiple elements from a component's render()
                        method, but they don't need a parent container element.
                    </p>
                    <li><h5>What is the purpose of the useCallback() Hook?</h5></li>
                    <p>The useCallback() Hook is a built-in Hook in React that returns a
                        memoized version of the callback function that only changes if one of the
                        dependencies has changed. It helps in optimizing performance by
                        preventing unnecessary re-rendering of components that depend on the
                        callback.</p>
                    <li><h5>What is the purpose of the useRef() Hook?</h5></li>
                    <p>The useRef() Hook is a built-in Hook in React that provides a way to create
                        a mutable reference that persists across re-renders of a component. It can
                        be used to access DOM elements or store mutable values that won't
                        trigger re-renders.</p>
                    <li><h5>What is React context?</h5></li>
                    <p>React context provides a way to pass data through the component tree
                        without having to pass props manually at every level. It allows you to
                        create a global state accessible to all components within a context
                        provider.
                    </p>
                    <li><h5>What is the significance of the displayName property in React?</h5></li>
                    <p>The displayName property is an optional property that you can define on a
                        React component. It is used by React in debugging messages and
                        component identification. It helps in identifying components in React
                        DevTools and error messages.</p>
                    <li><h5>What is the purpose of the dangerouslySetInnerHTML attribute in React?</h5></li>
                    <p>The dangerouslySetInnerHTML attribute is used in React to render raw
                        HTML content inside a component. It is typically used when you need to
                        render HTML received from an external source, but you need to be
                        cautious as it can expose your application to cross-site scripting (XSS)
                        attacks if used improperly.
                    </p>
                    <li><h5>. What is the difference between a controlled and an uncontrolled component in React forms?</h5></li>
                    <p>In a controlled component, the value of the form input is controlled by
                        React using the value prop, and any changes to the input value are
                        handled by updating the state. In an uncontrolled component, the value of
                        the form input is managed by the DOM, and React doesn't control or track
                        the value.</p>
                    <li><h5>What is the purpose of the React Developer Tools extension?</h5></li>
                    <p>The React Developer Tools extension is a browser extension that helps in
                        debugging and inspecting React component hierarchies. It provides a
                        visual representation of component trees, allows inspection of component
                        props and state, and helps in understanding the component's lifecycle.</p>
                    <li><h5>How can you optimize performance in React applications?</h5></li>
                    <p><strong>Some techniques to optimize performance in React applications include:</strong></p>
                    <p>Using React.memo() to memoize functional components </p>
                    <p>Using shouldComponentUpdate() or React.memo() to prevent unnecessary re-renders</p>
                    <p>Using useMemo() or useCallback() to memoize expensive calculations or event handlers</p>
                    <p>Using lazy loading and code splitting to load components on-demand</p>
                    <p>Optimizing list rendering using keys and React's reconciliation algorithm</p>
                    <li><h5>What is the purpose of the PureComponent in React?</h5></li>
                    <p>The PureComponent is a base class in React that automatically
                        implements the shouldComponentUpdate() method with a shallow prop
                        and state comparison. It helps in optimizing performance by preventing
                        unnecessary re-renders when the prop and state values haven't changed.</p>
                    <li><h5>What is the difference between createElement and JSX?</h5></li>
                    <p>createElement is a method provided by React to create React elements
                        programmatically. JSX, on the other hand, is a syntax extension that allows
                        you to write HTML-like code within JavaScript, which is then transpiled to
                        createElement calls during the build process.
                    </p>
                    <li><h5>What is the significance of the key prop in React lists?</h5></li>
                    <p>The key prop is used in React lists to give each item a unique identifier. It
                        helps React identify which items have changed, been added, or been
                        removed in a list, improving performance and avoiding unnecessary rerendering of components.</p>
                    <li><h5>What is the purpose of the componentDidCatch() method?</h5></li>
                    <p>The componentDidCatch() method is a lifecycle method in React that is
                        called when an error occurs during rendering, in a lifecycle method, or in
                        the constructor of any child component. It provides an opportunity to
                        handle the error gracefully and display an error message.</p>
                    <li><h5>What is ReactRouter's history object used for? </h5></li>
                    <p>React Router's history object is used for programmatically navigating
                        between different routes in a React application. It provides methods and
                        properties for managing the browser history, such as pushing new routes,
                        replacing the current route, or going back and forward in the history.
                    </p>
                    <li><h5>0. What is the purpose of the withRouter() higher-order component in React Router?F</h5></li>
                    <p>The withRouter() higher-order component is used in React Router to wrap
                        a component and provide access to the router's history, match, and
                        location objects. It allows a component that is not directly rendered by a
                        Route component to access the router-related props.
                    </p>
                    <li><h5>What is the difference between the react-router-dom and reactrouter-native packages?</h5></li>
                    <p>The react-router-dom package is used for routing in web applications built
                        with React, while the react-router-native package is used for routing in
                        React Native applications. The core functionality of routing is the same,
                        but the packages provide different implementations based on the target
                        platform.
                    </p>
                    <li><h5>What is the purpose of the react-transition-group library?</h5></li>
                    <p>The react-transition-group library is used to create animated transitions in
                        React components. It provides a way to animate the mounting and
                        unmounting of components and allows for easy integration with CSS
                        transitions or animations.
                    </p>
                    <li><h5>What is the React Context API and when is it useful?</h5></li>
                    <p>The React Context API provides a way to share data across a component
                        tree without manually passing props down through every level. It is useful
                        when you have data that needs to be accessed by multiple components at
                        different levels in the component hierarchy.</p>
                    <li><h5>What is the purpose of the useCallback() Hook in React?</h5></li>
                    <p>The useCallback() Hook is used to memoize a function. It returns a
                        memoized version of the function that only changes if one of the
                        dependencies has changed. It is useful when passing callbacks to child
                        components to prevent unnecessary re-renders.</p>
                    <li><h5>What is the React DevTools Profiler used for?</h5></li>
                    <p>The React DevTools Profiler is a tool used for profiling and optimizing the
                        performance of React applications. It allows you to analyze and measure
                        component render times and interactions to identify performance
                        bottlenecks and optimize your application.</p>
                    <li><h5>What is the purpose of the react-router-config package?</h5></li>
                    <p>The react-router-config package is used to configure and render routes in
                        React Router. It provides a way to define routes as a configuration object
                        or array, making it easier to manage and maintain route configurations in
                        large applications.</p>
                    <li><h5>What are React Hooks rules or guidelines?</h5></li>
                    <p><strong>Some rules or guidelines for using React Hooks include:</strong></p>
                    <p>Hooks should only be used in functional components or custom Hooks,
                        not in regular JavaScript functions or class components.</p>
                    <p>Hooks should be called at the top level of a functional component, not
                        within loops, conditions, or nested functions.</p>
                    <p>Hooks should always be called in the same order in every render of a
                        component.</p>
                    <p>Hooks should not be called conditionally based on some condition or
                        branch of code</p>
                    <p>Custom Hooks should always start with the word "use" to indicate that
                        they follow the rules of Hooks.</p>
                    <li><h5>What is the purpose of the react-router-dom's Link component?</h5></li>
                    <p>The Link component in react-router-dom is used to create links to
                        different routes in a React application. It allows for easy navigation
                        between different views without reloading the page and provides a
                        declarativeway to define navigation links.</p>
                    <li><h5>What is the purpose of the React.StrictMode component?</h5></li>
                    <p>The React.StrictMode component is used to highlight potential problems
                        in a React application during development. It enables additional checks
                        and warnings, and helps in identifying common mistakes or anti-patterns.</p>
                    <li><h5>How can you handle form submissions in React?</h5></li>
                    <p>To handle form submissions in React, you can use the onSubmit event
                        handler on the form element. You can prevent the default form
                        submission behavior using event.preventDefault() and then access the
                        form data from the event object to perform further processing or submit
                        data to a server.</p>
                </ol>
            </div>
        );
    }
}

export default BasicLevelReact;