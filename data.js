const faqData = [
    {
        id: 1,
        question: "What is the Virtual DOM and how does React use it?",
        answer: "The Virtual DOM is a lightweight representation of the actual DOM. React creates a virtual copy of the DOM in memory and uses it to compute the minimal set of changes needed to update the UI. When state changes occur, React compares the current virtual DOM with a new version, calculates the differences (diffing), and updates only those specific parts of the actual DOM. This approach significantly improves performance by minimizing expensive DOM operations.",
        difficulty: "Easy",
        topic: "Core Concepts"
    },
    {
        id: 2,
        question: "Explain React Fiber.",
        answer: "React Fiber is a complete rewrite of React's core algorithm that enables incremental rendering of the virtual DOM. It allows React to split rendering work into chunks and spread it out over multiple frames, improving responsiveness and user experience. Fiber introduces features like prioritizing certain updates, pausing and resuming work, and reusing completed work. This architecture enables capabilities like asynchronous rendering and better error handling.",
        difficulty: "Super Hard",
        topic: "Advanced"
    },
    {
        id: 3,
        question: "What is the difference between React.Component and React.PureComponent?",
        answer: "React.Component implements shouldComponentUpdate() with a default behavior that always returns true, causing the component to re-render whenever state or props change. React.PureComponent implements shouldComponentUpdate() with a shallow prop and state comparison. This means PureComponent only re-renders if there are shallow differences in state or props, which can improve performance by preventing unnecessary renders.",
        difficulty: "Medium",
        topic: "Components"
    },
    {
        id: 4,
        question: "Describe the reconciliation process in React.",
        answer: "Reconciliation is the process through which React updates the DOM to match the most recent component tree. When a component's state changes, React creates a new virtual DOM tree and compares it with the previous version (diffing algorithm). It then determines the most efficient way to update the actual DOM by calculating the minimal set of changes.",
        difficulty: "Hard",
        topic: "Core Concepts"
    },
    {
        id: 5,
        question: "How does React's setState work? Is it synchronous or asynchronous?",
        answer: "setState() is asynchronous in nature. React batches multiple setState() calls for performance optimization. When you call setState(), React doesn't immediately update the component but instead adds the update to a queue. The component re-renders after the state has been updated.",
        difficulty: "Medium",
        topic: "State Management"
    },
    {
        id: 6,
        question: "What are React Hooks and why were they introduced?",
        answer: "React Hooks are functions that let you 'hook into' React state and lifecycle features from function components. They were introduced to solve several problems: 1) Reusing stateful logic between components 2) Making complex components easier to understand 3) Allowing function components to have state and other React features.",
        difficulty: "Medium",
        topic: "Hooks"
    },
    {
        id: 7,
        question: "What are the rules of using Hooks?",
        answer: "1. Only call Hooks at the top level (not inside loops, conditions, or nested functions). 2. Only call Hooks from React function components or custom Hooks. 3. The names of custom Hooks must start with 'use'.",
        difficulty: "Easy",
        topic: "Hooks"
    },
    {
        id: 8,
        question: "Explain the useEffect Hook.",
        answer: "The useEffect Hook lets you perform side effects in function components. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes. You can think of useEffect as running after every render.",
        difficulty: "Medium",
        topic: "Hooks"
    },
    {
        id: 9,
        question: "What is the purpose of the key prop?",
        answer: "The key prop helps React identify which items have changed, been added, or been removed. Keys should be given to the elements inside arrays to give the elements a stable identity. The best way to pick a key is to use a string that uniquely identifies a list item among its siblings.",
        difficulty: "Easy",
        topic: "Core Concepts"
    },
    {
        id: 10,
        question: "What are React Fragments?",
        answer: "Fragments let you group a list of children without adding extra nodes to the DOM. You can use the empty tag syntax (<>) or the Fragment component from React (import { Fragment } from 'react').",
        difficulty: "Easy",
        topic: "Components"
    },
    // Questions 11-20
    {
        id: 11,
        question: "What is the difference between state and props?",
        answer: "Props are read-only and allow you to pass data from a parent component to a child component. State is mutable and is managed within the component. When the state changes, the component re-renders.",
        difficulty: "Easy",
        topic: "Core Concepts"
    },
    {
        id: 12,
        question: "What are controlled components?",
        answer: "In React, a controlled component is a component where form data is handled by the component's state. The input elements controlled this way are called 'controlled components' because React controls their state.",
        difficulty: "Medium",
        topic: "Forms"
    },
    {
        id: 13,
        question: "What are uncontrolled components?",
        answer: "Uncontrolled components are form elements where form data is handled by the DOM itself. You use a ref to get form values from the DOM, similar to traditional HTML form inputs.",
        difficulty: "Medium",
        topic: "Forms"
    },
    {
        id: 14,
        question: "What is React Context?",
        answer: "Context provides a way to pass data through the component tree without having to pass props down manually at every level. It's designed to share data that can be considered 'global' for a tree of React components.",
        difficulty: "Medium",
        topic: "State Management"
    },
    {
        id: 15,
        question: "What are Higher-Order Components?",
        answer: "A higher-order component (HOC) is a function that takes a component and returns a new component. HOCs are used for reusing component logic, such as adding additional props or modifying behavior.",
        difficulty: "Hard",
        topic: "Advanced"
    },
    {
        id: 16,
        question: "What is prop drilling?",
        answer: "Prop drilling is the process of passing data from a parent component down to nested components through props, even when intermediate components don't need the data themselves.",
        difficulty: "Medium",
        topic: "State Management"
    },
    {
        id: 17,
        question: "Explain the virtual DOM in more detail.",
        answer: "The virtual DOM is a lightweight copy of the real DOM that React maintains. When state changes occur, React compares the virtual DOM with a previous version (diffing), then updates only the changed parts of the real DOM.",
        difficulty: "Medium",
        topic: "Core Concepts"
    },
    {
        id: 18,
        question: "What is JSX?",
        answer: "JSX is a syntax extension to JavaScript used with React to describe what the UI should look like. It produces React 'elements' that get rendered to the DOM. JSX makes your code more readable and expressive.",
        difficulty: "Easy",
        topic: "Core Concepts"
    },
    {
        id: 19,
        question: "How does React handle events?",
        answer: "React events are named using camelCase rather than lowercase. With JSX you pass a function as the event handler rather than a string. React uses a synthetic event system that wraps the browser's native events.",
        difficulty: "Easy",
        topic: "Events"
    },
    {
        id: 20,
        question: "What is the purpose of refs?",
        answer: "Refs provide a way to access DOM nodes or React elements created in the render method. They should be used sparingly - good use cases include managing focus, text selection, or integrating with third-party DOM libraries.",
        difficulty: "Medium",
        topic: "DOM Manipulation"
    },
    // Questions 21-30
    {
        id: 21,
        question: "Explain the useState Hook.",
        answer: "The useState Hook allows you to add state to functional components. It returns an array with two elements: the current state value and a function to update it. You can call this function to update the state and re-render the component.",
        difficulty: "Easy",
        topic: "Hooks"
    },
    {
        id: 22,
        question: "What is the useReducer Hook?",
        answer: "useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one. It's similar to how Redux works.",
        difficulty: "Medium",
        topic: "Hooks"
    },
    {
        id: 23,
        question: "What is the useContext Hook?",
        answer: "useContext accepts a context object and returns the current context value for that context. It lets you consume context in functional components.",
        difficulty: "Medium",
        topic: "Hooks"
    },
    {
        id: 24,
        question: "What is the useRef Hook?",
        answer: "useRef returns a mutable ref object whose .current property is initialized to the passed argument. The returned object will persist for the full lifetime of the component and is commonly used to access DOM elements.",
        difficulty: "Medium",
        topic: "Hooks"
    },
    {
        id: 25,
        question: "Explain the useMemo Hook.",
        answer: "useMemo will only recompute the memoized value when one of the dependencies has changed. This optimization helps to avoid expensive calculations on every render.",
        difficulty: "Medium",
        topic: "Hooks"
    },
    {
        id: 26,
        question: "What is the useCallback Hook?",
        answer: "useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed. It's useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.",
        difficulty: "Hard",
        topic: "Hooks"
    },
    {
        id: 27,
        question: "What are React Portals?",
        answer: "Portals provide a way to render children into a DOM node that exists outside the DOM hierarchy of the parent component. This is useful for modals, tooltips, and other cases where you need to break out of the current DOM hierarchy.",
        difficulty: "Advanced",
        topic: "DOM Manipulation"
    },
    {
        id: 28,
        question: "What is server-side rendering?",
        answer: "Server-side rendering (SSR) is a technique where you render pages on the server instead of the client. This improves performance and SEO since search engines can crawl the fully rendered pages.",
        difficulty: "Advanced",
        topic: "Performance"
    },
    {
        id: 29,
        question: "What is code splitting?",
        answer: "Code splitting is a technique to split your code into smaller chunks which can then be loaded on demand. This helps improve performance by reducing the initial bundle size that needs to be loaded.",
        difficulty: "Medium",
        topic: "Performance"
    },
    {
        id: 30,
        question: "Explain React Suspense.",
        answer: "Suspense lets your components 'wait' for something before rendering. It's currently used for code splitting with React.lazy and for data fetching. It displays a fallback component while the content is being loaded.",
        difficulty: "Advanced",
        topic: "Performance"
    },
    // Questions 31-40
    {
        id: 31,
        question: "What is the React.memo function?",
        answer: "React.memo is a higher order component that memoizes the result of a component. It will skip re-rendering if the props haven't changed, similar to PureComponent but for function components.",
        difficulty: "Medium",
        topic: "Performance"
    },
    {
        id: 32,
        question: "What is the difference between useMemo and useCallback?",
        answer: "useMemo is used to memoize values, while useCallback is used to memoize functions. Both help optimize performance by preventing unnecessary recalculations and re-renders.",
        difficulty: "Hard",
        topic: "Hooks"
    },
    {
        id: 33,
        question: "What is prop types?",
        answer: "PropTypes is a library for typechecking props in React components. It helps catch bugs by validating that components receive props of the correct type. PropTypes are only checked in development mode.",
        difficulty: "Easy",
        topic: "Testing"
    },
    {
        id: 34,
        question: "What are default props?",
        answer: "Default props allow you to set default values for props in a component. If a prop isn't passed to the component, the default value will be used instead.",
        difficulty: "Easy",
        topic: "Components"
    },
    {
        id: 35,
        question: "How do you optimize performance in React applications?",
        answer: "1. Use React.memo, useMemo, and useCallback 2. Implement code splitting 3. Virtualize long lists 4. Avoid inline function definitions in render 5. Use production builds 6. Profile components with React DevTools",
        difficulty: "Hard",
        topic: "Performance"
    },
    {
        id: 36,
        question: "What is the children prop?",
        answer: "The children prop is a special prop that contains the content between the opening and closing tags of a component. It allows you to compose components by passing other components or elements as children.",
        difficulty: "Easy",
        topic: "Components"
    },
    {
        id: 37,
        question: "How does React handle forms?",
        answer: "React handles forms differently than HTML forms. In React, form data is typically handled by the components (controlled components) rather than by the DOM. This gives React components full control over the form data.",
        difficulty: "Medium",
        topic: "Forms"
    },
    {
        id: 38,
        question: "What is the purpose of the dependency array in useEffect?",
        answer: "The dependency array tells React which values the effect depends on. React will only re-run the effect if one of these values changes between renders. An empty array means the effect only runs once after initial render.",
        difficulty: "Medium",
        topic: "Hooks"
    },
    {
        id: 39,
        question: "What is the difference between React.lazy and React.Suspense?",
        answer: "React.lazy is a function that enables dynamic imports for components. React.Suspense is a component that displays fallback content while waiting for lazy-loaded components to load.",
        difficulty: "Medium",
        topic: "Performance"
    },
    {
        id: 40,
        question: "How do you create a custom Hook?",
        answer: "A custom Hook is a JavaScript function whose name starts with 'use' and that may call other Hooks. Custom Hooks allow you to extract component logic into reusable functions.",
        difficulty: "Medium",
        topic: "Hooks"
    },
    // Questions 41-50
    {
        id: 41,
        question: "What is the purpose of the useImperativeHandle Hook?",
        answer: "useImperativeHandle customizes the instance value that is exposed when using ref with forwardRef. It should be used sparingly as it breaks the typical React data flow.",
        difficulty: "Advanced",
        topic: "Hooks"
    },
    {
        id: 42,
        question: "What is the difference between class and function components?",
        answer: "1. Syntax: Classes use ES6 class syntax, functions use regular functions. 2. State: Previously only classes could use state, now functions can with hooks. 3. Lifecycle: Classes use lifecycle methods, functions use useEffect. 4. Performance: Function components are slightly lighter.",
        difficulty: "Medium",
        topic: "Components"
    },
    {
        id: 43,
        question: "What are render props?",
        answer: "The term 'render prop' refers to a technique for sharing code between React components using a prop whose value is a function. A component with a render prop takes a function that returns a React element.",
        difficulty: "Hard",
        topic: "Advanced"
    },
    {
        id: 44,
        question: "What is the difference between useLayoutEffect and useEffect?",
        answer: "useLayoutEffect fires synchronously after all DOM mutations. Use this to read layout and synchronously re-render. useEffect fires asynchronously and doesn't block the browser painting.",
        difficulty: "Advanced",
        topic: "Hooks"
    },
    {
        id: 45,
        question: "How does React Router work?",
        answer: "React Router is a collection of navigational components that compose declaratively with your application. It keeps your UI in sync with the URL while providing dynamic routing capabilities.",
        difficulty: "Medium",
        topic: "Routing"
    },
    {
        id: 46,
        question: "What is the purpose of the shouldComponentUpdate method?",
        answer: "shouldComponentUpdate lets React know if a component's output is not affected by the current change in state or props. This method is not called for the initial render or when forceUpdate is used.",
        difficulty: "Medium",
        topic: "Performance"
    },
    {
        id: 47,
        question: "What is error boundary in React?",
        answer: "Error boundaries are React components that catch JavaScript errors in their child components, log them, and display a fallback UI instead of crashing. They catch errors during rendering, in lifecycle methods, and in constructors.",
        difficulty: "Medium",
        topic: "Error Handling"
    },
    {
        id: 48,
        question: "How do you create an error boundary?",
        answer: "A class component becomes an error boundary if it defines either or both of the lifecycle methods static getDerivedStateFromError() or componentDidCatch(). Error boundaries in React work like catch blocks.",
        difficulty: "Medium",
        topic: "Error Handling"
    },
    {
        id: 49,
        question: "What is React.StrictMode?",
        answer: "StrictMode is a tool for highlighting potential problems in an application. It does not render any visible UI but activates additional checks and warnings for its descendants. It helps catch problems early.",
        difficulty: "Easy",
        topic: "Debugging"
    },
    {
        id: 50,
        question: "What is the purpose of React.Fragment?",
        answer: "React.Fragment lets you group multiple children without adding extra nodes to the DOM. This is useful when you need to return multiple elements from a component's render method.",
        difficulty: "Easy",
        topic: "Components"
    },
    // Questions 51-60
    {
        id: 51,
        question: "What is the difference between React and React Native?",
        answer: "React is for building web UIs using the virtual DOM. React Native is for building mobile apps using native components. Both use JSX and React concepts but have different renderers and APIs.",
        difficulty: "Easy",
        topic: "General"
    },
    {
        id: 52,
        question: "How do you handle authentication in React?",
        answer: "1. Use token-based authentication 2. Store tokens in HTTP-only cookies or secure storage 3. Use context or state management for auth state 4. Protect routes with higher-order components 5. Handle JWT expiration",
        difficulty: "Medium",
        topic: "Security"
    },
    {
        id: 53,
        question: "What is Redux?",
        answer: "Redux is a predictable state container for JavaScript apps. It helps manage global state in large applications using a single store, actions to describe changes, and reducers to handle those changes.",
        difficulty: "Medium",
        topic: "State Management"
    },
    {
        id: 54,
        question: "When would you use Redux vs Context API?",
        answer: "Use Redux for complex state logic, middleware needs, time-travel debugging, or large applications. Use Context for simpler apps or when you need to avoid prop drilling.",
        difficulty: "Medium",
        topic: "State Management"
    },
    {
        id: 55,
        question: "What is the difference between useState and useReducer?",
        answer: "useState is simple local state management. useReducer is better for complex state logic where the next state depends on the previous one, similar to how Redux works.",
        difficulty: "Medium",
        topic: "Hooks"
    },
    {
        id: 56,
        question: "What are React's principles?",
        answer: "1. Declarative 2. Component-based 3. Learn once, write anywhere 4. One-way data flow 5. Just JavaScript 6. Composition over inheritance",
        difficulty: "Easy",
        topic: "Core Concepts"
    },
    {
        id: 57,
        question: "How do you test React components?",
        answer: "1. Unit tests with Jest 2. Component tests with React Testing Library 3. Integration tests 4. End-to-end tests with Cypress 5. Snapshot testing 6. Mocking modules when needed",
        difficulty: "Medium",
        topic: "Testing"
    },
    {
        id: 58,
        question: "What are synthetic events in React?",
        answer: "Synthetic events are cross-browser wrappers around the browser's native events. They provide a consistent API across browsers and improve performance by pooling event objects.",
        difficulty: "Medium",
        topic: "Events"
    },
    {
        id: 59,
        question: "How does React handle server-side rendering?",
        answer: "React provides ReactDOMServer API to render components on the server. Popular frameworks like Next.js abstract this complexity. SSR improves SEO and initial load performance.",
        difficulty: "Advanced",
        topic: "Performance"
    },
    {
        id: 60,
        question: "What is the purpose of the useDebugValue Hook?",
        answer: "useDebugValue can be used to display a label for custom Hooks in React DevTools. It's only useful in the context of custom Hooks for debugging purposes.",
        difficulty: "Advanced",
        topic: "Debugging"
    },
    // Questions 61-70
    {
        id: 61,
        question: "What is the difference between React.PureComponent and React.memo?",
        answer: "React.PureComponent is for class components and does a shallow comparison of props and state. React.memo is for function components and does a shallow comparison of props only.",
        difficulty: "Medium",
        topic: "Performance"
    },
    {
        id: 62,
        question: "How do you create a portal in React?",
        answer: "Use ReactDOM.createPortal(child, container) to render children into a DOM node outside the parent component hierarchy. Useful for modals, tooltips, etc.",
        difficulty: "Advanced",
        topic: "DOM Manipulation"
    },
    {
        id: 63,
        question: "What is the purpose of the key prop?",
        answer: "Keys help React identify which items have changed, are added, or are removed. They should be unique among siblings to prevent unnecessary re-renders.",
        difficulty: "Easy",
        topic: "Core Concepts"
    },
    {
        id: 64,
        question: "How do you prevent component from rendering?",
        answer: "1. Return null from render 2. Use shouldComponentUpdate in class components 3. Use React.memo for function components 4. Conditionally render components with state/logic",
        difficulty: "Medium",
        topic: "Performance"
    },
    {
        id: 65,
        question: "What are controlled and uncontrolled components?",
        answer: "Controlled components have form data handled by React state. Uncontrolled components use refs to access form data directly from the DOM, similar to traditional HTML forms.",
        difficulty: "Medium",
        topic: "Forms"
    },
    {
        id: 66,
        question: "What is the purpose of the useTransition Hook?",
        answer: "useTransition lets you mark some state updates as lower priority, allowing the UI to stay responsive during heavy updates.",
        difficulty: "Advanced",
        topic: "Concurrency"
    },
    {
        id: 67,
        question: "What is the danger of inline functions in JSX?",
        answer: "Inline functions create new function instances on every render, which can cause unnecessary re-renders in child components that rely on reference equality for optimization.",
        difficulty: "Medium",
        topic: "Performance"
    },
    {
        id: 68,
        question: "How do you reuse component logic?",
        answer: "1. Custom Hooks 2. Higher-Order Components 3. Render Props 4. Context 5. Component composition",
        difficulty: "Medium",
        topic: "Patterns"
    },
    {
        id: 69,
        question: "What is the purpose of the useDeferredValue Hook?",
        answer: "useDeferredValue lets you defer updating part of the UI, similar to debouncing but optimized for React rendering.",
        difficulty: "Advanced",
        topic: "Concurrency"
    },
    {
        id: 70,
        question: "How do you handle forms with multiple inputs?",
        answer: "1. Use a separate state for each input 2. Use a single state object 3. Dynamically update the corresponding property 4. Use computed property names in setState",
        difficulty: "Medium",
        topic: "Forms"
    },
    // Questions 71-80
    {
        id: 71,
        question: "What is the purpose of the useId Hook?",
        answer: "useId generates unique IDs that remain stable across server and client, avoiding hydration mismatches. Useful for accessibility attributes.",
        difficulty: "Medium",
        topic: "Accessibility"
    },
    {
        id: 72,
        question: "How do you optimize large lists in React?",
        answer: "1. Use virtualization (react-window, react-virtualized) 2. Implement pagination 3. Use memoization 4. Avoid complex calculations in render 5. Consider Intersection Observer API",
        difficulty: "Hard",
        topic: "Performance"
    },
    {
        id: 73,
        question: "What is hydration in React?",
        answer: "Hydration is the process where React attaches to HTML created by server-side rendering and makes it interactive. It reuses the existing DOM instead of recreating it.",
        difficulty: "Advanced",
        topic: "SSR"
    },
    {
        id: 74,
        question: "How do you handle errors in React components?",
        answer: "1. Use try/catch in event handlers 2. Use error boundaries for rendering errors 3. Log errors to monitoring services 4. Show fallback UIs 5. Handle promise rejections",
        difficulty: "Medium",
        topic: "Error Handling"
    },
    {
        id: 75,
        question: "What is the purpose of the useSyncExternalStore Hook?",
        answer: "useSyncExternalStore enables React components to subscribe to external stores, integrating React with non-React state management solutions.",
        difficulty: "Advanced",
        topic: "State Management"
    },
    {
        id: 76,
        question: "How does React 18 improve concurrent rendering?",
        answer: "In React 18, concurrent rendering allows React to work on multiple versions of the UI simultaneously, enabling features like transitions, suspense streaming, and selective hydration.",
        difficulty: "Advanced",
        topic: "Concurrency"
    },
    {
        id: 77,
        question: "What are React Server Components?",
        answer: "Server Components allow components to be rendered on the server, reducing bundle size by keeping large dependencies server-side. They complement SSR by allowing partial hydration.",
        difficulty: "Advanced",
        topic: "SSR"
    },
    {
        id: 78,
        question: "How do you create a custom event in React?",
        answer: "1. Use native custom events with dispatchEvent 2. Create a pub/sub system 3. Use context with handlers 4. Pass callback props down the tree",
        difficulty: "Medium",
        topic: "Events"
    },
    {
        id: 79,
        question: "What is the difference between render and commit phases?",
        answer: "Render phase determines what changes are needed (can be interrupted). Commit phase applies the changes to the DOM (cannot be interrupted). This separation enables concurrent features.",
        difficulty: "Advanced",
        topic: "Core Concepts"
    },
    {
        id: 80,
        question: "How do you implement animations in React?",
        answer: "1. CSS transitions/animations 2. React Transition Group 3. Framer Motion 4. React Spring 5. GSAP 6. UseLayoutEffect for FLIP animations",
        difficulty: "Medium",
        topic: "UI"
    },
    // Questions 81-90
    {
        id: 81,
        question: "What is the purpose of the useInsertionEffect Hook?",
        answer: "useInsertionEffect is specifically for CSS-in-JS libraries. It fires before all DOM mutations, allowing styles to be injected before layout effects read the computed styles.",
        difficulty: "Advanced",
        topic: "Styling"
    },
    {
        id: 82,
        question: "How do you test custom Hooks?",
        answer: "1. Use React Testing Library's renderHook 2. Test Hook in a test component 3. Verify state and effects 4. Mock dependencies when needed 5. Test edge cases and error states",
        difficulty: "Medium",
        topic: "Testing"
    },
    {
        id: 83,
        question: "What is the difference between useRef and useState?",
        answer: "useState triggers re-renders when updated, useRef doesn't. useState values are immutable snapshots, useRef's current value is mutable. Both persist across renders.",
        difficulty: "Medium",
        topic: "Hooks"
    },
    {
        id: 84,
        question: "How do you implement localization in React?",
        answer: "1. Use libraries like react-i18next 2. Store translations in JSON files 3. Create context for current language 4. Format dates/numbers appropriately 5. Support RTL languages when needed",
        difficulty: "Medium",
        topic: "Internationalization"
    },
    {
        id: 85,
        question: "What is the purpose of the forwardRef function?",
        answer: "forwardRef passes a ref through a component to one of its children. This is necessary because function components don't have instances, and refs don't pass through like props.",
        difficulty: "Medium",
        topic: "Components"
    },
    {
        id: 86,
        question: "How do you integrate third-party DOM libraries with React?",
        answer: "1. Use refs to access DOM nodes 2. Initialize library in useEffect 3. Clean up in useEffect's cleanup 4. Avoid direct DOM manipulation outside React 5. Use portals if needed",
        difficulty: "Medium",
        topic: "Integration"
    },
    {
        id: 87,
        question: "What is the purpose of the createRoot API?",
        answer: "createRoot is the new root API in React 18 that enables concurrent features. It replaces ReactDOM.render and provides access to concurrent rendering capabilities.",
        difficulty: "Advanced",
        topic: "Concurrency"
    },
    {
        id: 88,
        question: "How do you optimize context performance?",
        answer: "1. Split contexts by concern 2. Use memoization 3. Avoid frequent updates 4. Use selectors with useContextSelector 5. Consider component composition",
        difficulty: "Medium",
        topic: "Performance"
    },
    {
        id: 89,
        question: "What are some React performance measurement tools?",
        answer: "1. React DevTools Profiler 2. Chrome Performance Tab 3. Why Did You Render 4. Lighthouse 5. React Strict Mode warnings 6. Custom profiling components",
        difficulty: "Medium",
        topic: "Performance"
    },
    {
        id: 90,
        question: "How do you implement drag and drop in React?",
        answer: "1. Use libraries like react-dnd or react-beautiful-dnd 2. Implement native drag events 3. Handle mouse/touch events 4. Manage drag state 5. Optimize for performance",
        difficulty: "Medium",
        topic: "UI"
    },
    // Questions 91-100
    {
        id: 91,
        question: "What is the difference between useEffect and useLayoutEffect?",
        answer: "useLayoutEffect fires synchronously after DOM mutations but before painting. useEffect fires asynchronously after painting. Use useLayoutEffect for layout measurements.",
        difficulty: "Advanced",
        topic: "Hooks"
    },
    {
        id: 92,
        question: "How do you implement routing in React without a library?",
        answer: "1. Use the History API 2. Create route components 3. Match pathnames 4. Manage navigation state 5. Handle 404s 6. Implement route guards",
        difficulty: "Hard",
        topic: "Routing"
    },
    {
        id: 93,
        question: "What are compound components in React?",
        answer: "Compound components are components that work together to form a complete UI. They share an implicit state while giving rendering control to the user (e.g., select + option).",
        difficulty: "Advanced",
        topic: "Patterns"
    },
    {
        id: 94,
        question: "How do you implement dark mode in React?",
        answer: "1. Use CSS variables 2. Toggle a theme class on the body 3. Store preference in localStorage 4. Use context for theme state 5. Support system preferences 6. Animate transitions",
        difficulty: "Medium",
        topic: "Styling"
    },
    {
        id: 95,
        question: "What are some React architectural patterns?",
        answer: "1. Container/Presentational 2. Atomic Design 3. Feature-based organization 4. Provider pattern 5. HOC composition 6. Microfrontends",
        difficulty: "Advanced",
        topic: "Architecture"
    },
    {
        id: 96,
        question: "How do you implement real-time updates in React?",
        answer: "1. WebSocket connections 2. Server-Sent Events 3. Polling (for fallback) 4. Optimistic UI updates 5. Use state management for synchronization 6. Handle connection states",
        difficulty: "Medium",
        topic: "Data Fetching"
    },
    {
        id: 97,
        question: "What is the purpose of the useReducer Hook?",
        answer: "useReducer is preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one. It's similar to Redux reducers.",
        difficulty: "Medium",
        topic: "Hooks"
    },
    {
        id: 98,
        question: "How do you handle forms with validation in React?",
        answer: "1. Track validation state 2. Show error messages 3. Use libraries like Formik or React Hook Form 4. Validate on blur and submit 5. Async validation support 6. Accessibility considerations",
        difficulty: "Medium",
        topic: "Forms"
    },
    {
        id: 99,
        question: "What is the purpose of the useCallback Hook?",
        answer: "useCallback returns a memoized callback that only changes if one of the dependencies has changed. Useful for preventing unnecessary re-renders in optimized child components.",
        difficulty: "Medium",
        topic: "Hooks"
    },
    {
        id: 100,
        question: "How do you implement accessibility in React?",
        answer: "1. Semantic HTML 2. ARIA attributes 3. Keyboard navigation 4. Focus management 5. Color contrast 6. Screen reader testing 7. Use ESLint-jsx-a11y plugin",
        difficulty: "Medium",
        topic: "Accessibility"
    },
      {
    id: 101,
    question: "What is hoisting in JavaScript?",
    answer: "Hoisting is JavaScript's default behavior of moving declarations of functions, variables, and classes to the top of their containing scope during compilation phase. Only declarations are hoisted, not initializations.",
    difficulty: "Easy",
    topic: "Core Concepts"
  },
  {
    id: 102,
    question: "Explain the difference between var, let, and const.",
    answer: "var is function-scoped and can be redeclared; let and const are block-scoped. const declarations cannot be reassigned after initialization.",
    difficulty: "Easy",
    topic: "Variables"
  },
  {
    id: 103,
    question: "What are closures and how are they used?",
    answer: "A closure is a function that retains access to its lexical scope even when executed outside its original context. They are used for data privacy and to create function factories.",
    difficulty: "Medium",
    topic: "Functions"
  },
  {
    id: 104,
    question: "What is the difference between == and === operators?",
    answer: "== compares values after type coercion, === compares both value and type with no coercion.",
    difficulty: "Easy",
    topic: "Operators"
  },
  {
    id: 105,
    question: "Explain event delegation.",
    answer: "Event delegation leverages event bubbling by attaching a single event listener to a parent element; events on its children are caught and handled by checking event.target.",
    difficulty: "Medium",
    topic: "DOM"
  },
  {
    id: 106,
    question: "What is the purpose of the 'use strict' directive?",
    answer: "'use strict' enforces stricter parsing and error handling in code, preventing silent errors and disallowing unsafe actions like implicitly creating global variables.",
    difficulty: "Easy",
    topic: "Core Concepts"
  },
  {
    id: 107,
    question: "Explain the concept of promises in JavaScript.",
    answer: "A promise represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It has states: pending, fulfilled, or rejected.",
    difficulty: "Easy",
    topic: "Asynchronous"
  },
  {
    id: 108,
    question: "What is async/await and how does it relate to promises?",
    answer: "async/await is syntactic sugar over promises, allowing asynchronous code to be written in a synchronous style. await pauses execution until the promise resolves.",
    difficulty: "Medium",
    topic: "Asynchronous"
  },
  {
    id: 109,
    question: "How do you clone an object in JavaScript?",
    answer: "You can clone objects using Object.assign({}, obj) for shallow copy, or JSON.parse(JSON.stringify(obj)), or structuredClone(), or custom deep copy functions.",
    difficulty: "Medium",
    topic: "Objects"
  },
  {
    id: 110,
    question: "What are arrow functions and how are they different from regular functions?",
    answer: "Arrow functions provide a concise syntax and do not have their own this, arguments, or prototype. They inherit this from the enclosing context.",
    difficulty: "Easy",
    topic: "Functions"
  },
  {
    id: 111,
    question: "What is the event loop in JavaScript?",
    answer: "The event loop is a mechanism that allows JavaScript to perform non-blocking I/O by managing the call stack, callback queue, and microtask queue.",
    difficulty: "Hard",
    topic: "Asynchronous"
  },
  {
    id: 112,
    question: "Explain the difference between call, apply, and bind.",
    answer: "call invokes a function with a given this value and arguments provided individually; apply takes arguments as an array; bind returns a new function with bound this and optional preset arguments.",
    difficulty: "Medium",
    topic: "Functions"
  },
  {
    id: 113,
    question: "What is a prototype in JavaScript?",
    answer: "A prototype is an object from which other objects inherit properties. All functions have a prototype property used for implementing inheritance.",
    difficulty: "Easy",
    topic: "Objects"
  },
  {
    id: 114,
    question: "Describe prototypal inheritance.",
    answer: "Prototypal inheritance allows objects to inherit directly from other objects. Each object has an internal link to its prototype object.",
    difficulty: "Medium",
    topic: "Objects"
  },
  {
    id: 115,
    question: "What is the difference between null and undefined?",
    answer: "undefined means a variable has been declared but not assigned a value; null is an assignment value that represents no value.",
    difficulty: "Easy",
    topic: "Types"
  },
  {
    id: 116,
    question: "Explain how JavaScript handles asynchronous operations internally.",
    answer: "JavaScript uses an event loop, task queue, and microtask queue to handle asynchronous callbacks and promise resolutions without blocking the main thread.",
    difficulty: "Hard",
    topic: "Asynchronous"
  },
  {
    id: 117,
    question: "What are generator functions?",
    answer: "Generator functions, declared with function*, can pause execution with yield and resume later, returning an iterator.",
    difficulty: "Medium",
    topic: "ES6+"
  },
  {
    id: 118,
    question: "What is the purpose of the Symbol type?",
    answer: "Symbol is a primitive data type whose instances are unique and immutable, often used as unique object property keys.",
    difficulty: "Medium",
    topic: "ES6+"
  },
  {
    id: 119,
    question: "Explain the module system in JavaScript (ESM).",
    answer: "ESM uses import/export syntax for module encapsulation. Imports are statically analyzed, supporting tree shaking and asynchronous loading.",
    difficulty: "Medium",
    topic: "Modules"
  },
  {
    id: 120,
    question: "How do you handle errors in asynchronous code?",
    answer: "You can handle errors with .catch on promises, try/catch within async functions, or using Promise.allSettled for multiple promises.",
    difficulty: "Medium",
    topic: "Asynchronous"
  },
  {
    id: 121,
    question: "What are template literals?",
    answer: "Template literals are string literals enclosed by backticks that support interpolation with ${expression} and multi-line strings.",
    difficulty: "Easy",
    topic: "Strings"
  },
  {
    id: 122,
    question: "Explain destructuring assignment.",
    answer: "Destructuring assignment allows unpacking values from arrays or properties from objects into distinct variables.",
    difficulty: "Easy",
    topic: "ES6+"
  },
  {
    id: 123,
    question: "What is the spread operator and how is it used?",
    answer: "The spread operator (...) expands iterable elements in function calls, array literals, or object literals for shallow copies.",
    difficulty: "Easy",
    topic: "ES6+"
  },
  {
    id: 124,
    question: "Explain rest parameters.",
    answer: "Rest parameters (...) collect all remaining function arguments into an array.",
    difficulty: "Easy",
    topic: "ES6+"
  },
  {
    id: 125,
    question: "What is a JavaScript promise chain?",
    answer: "A promise chain is a series of .then calls where each returns a value or another promise, allowing sequential asynchronous operations.",
    difficulty: "Medium",
    topic: "Asynchronous"
  },
  {
    id: 126,
    question: "How do you create a custom event in the browser?",
    answer: "Use new CustomEvent('eventName', { detail: data }) and dispatch with element.dispatchEvent().",
    difficulty: "Medium",
    topic: "DOM"
  },
  {
    id: 127,
    question: "What is event bubbling and capturing?",
    answer: "Event bubbling is when an event propagates from target to ancestor elements; capturing is the reverse, from ancestor to target.",
    difficulty: "Medium",
    topic: "DOM"
  },
  {
    id: 128,
    question: "Explain localStorage and sessionStorage.",
    answer: "localStorage and sessionStorage store key-value pairs in the browser. localStorage persists across sessions; sessionStorage clears on tab close.",
    difficulty: "Easy",
    topic: "Web APIs"
  },
  {
    id: 129,
    question: "What is JSON and how do you parse/stringify it?",
    answer: "JSON is a text format for data interchange. Use JSON.parse() to convert JSON string to object and JSON.stringify() to convert object to JSON string.",
    difficulty: "Easy",
    topic: "Data Formats"
  },
  {
    id: 130,
    question: "Describe the differences between GET and POST HTTP methods.",
    answer: "GET retrieves data and appends parameters in the URL; POST sends data in the request body. GET is idempotent, POST is not.",
    difficulty: "Easy",
    topic: "Networking"
  },
  {
    id: 131,
    question: "Explain CORS and how to handle it.",
    answer: "CORS is a browser security feature restricting cross-origin requests. Servers set Access-Control-Allow-Origin header to allow requests.",
    difficulty: "Medium",
    topic: "Security"
  },
  {
    id: 132,
    question: "What is a service worker?",
    answer: "A service worker is a script that runs in the background, intercepting network requests for offline capabilities and caching.",
    difficulty: "Medium",
    topic: "PWA"
  },
  {
    id: 133,
    question: "How do you debounce a function?",
    answer: "Debouncing ensures a function is called only after a specified delay since the last invocation, often implemented with setTimeout/clearTimeout.",
    difficulty: "Medium",
    topic: "Performance"
  },
  {
    id: 134,
    question: "What is throttling?",
    answer: "Throttling limits the number of times a function can be called over time, ensuring at most one execution per interval.",
    difficulty: "Medium",
    topic: "Performance"
  },
  {
    id: 135,
    question: "Explain deep vs shallow copy.",
    answer: "Shallow copy duplicates only the first-level properties, referencing nested objects; deep copy recursively copies all nested objects.",
    difficulty: "Medium",
    topic: "Objects"
  },
  {
    id: 136,
    question: "What is JSONP and why was it used?",
    answer: "JSONP is a workaround for CORS using <script> tags to fetch cross-domain data via callback functions, now largely replaced by CORS.",
    difficulty: "Hard",
    topic: "Networking"
  },
  {
    id: 137,
    question: "Describe the module pattern in JavaScript.",
    answer: "The module pattern uses IIFEs to create private and public members, encapsulating state and exposing an API.",
    difficulty: "Medium",
    topic: "Design Patterns"
  },
  {
    id: 138,
    question: "What is memoization?",
    answer: "Memoization caches function results based on input arguments to avoid redundant computations.",
    difficulty: "Medium",
    topic: "Performance"
  },
  {
    id: 139,
    question: "Explain the factory function pattern.",
    answer: "Factory functions create and return new objects, encapsulating object creation logic without using classes.",
    difficulty: "Easy",
    topic: "Design Patterns"
  },
  {
    id: 140,
    question: "What is the revealing module pattern?",
    answer: "The revealing module pattern exposes only specific methods and properties from an IIFE, keeping other parts private.",
    difficulty: "Medium",
    topic: "Design Patterns"
  },
  {
    id: 141,
    question: "How do you implement inheritance using ES6 classes?",
    answer: "Use class Child extends Parent { constructor() { super(); } } to inherit methods and properties.",
    difficulty: "Easy",
    topic: "ES6+"
  },
  {
    id: 142,
    question: "What is a WeakMap?",
    answer: "WeakMap is a collection of key-value pairs where keys are objects held weakly, allowing garbage collection if no other references exist.",
    difficulty: "Hard",
    topic: "ES6+"
  },
  {
    id: 143,
    question: "What is tail call optimization?",
    answer: "Tail call optimization reuses stack frames for function calls in tail position to prevent stack overflows in recursive calls.",
    difficulty: "Hard",
    topic: "Functions"
  },
  {
    id: 144,
    question: "Explain the difference between for...in and for...of loops.",
    answer: "for...in iterates over object keys (including inherited), for...of iterates over iterable values.",
    difficulty: "Easy",
    topic: "ES6+"
  },
  {
    id: 145,
    question: "How do you check if a property exists on an object?",
    answer: "Use hasOwnProperty, in operator, or Object.prototype.hasOwnProperty.call(obj, prop).",
    difficulty: "Easy",
    topic: "Objects"
  },
  {
    id: 146,
    question: "Explain the concept of immutability and how to enforce it in JavaScript.",
    answer: "Immutability means values cannot be changed; enforce by using const, Object.freeze, spread/rest for copies, and libraries like Immutable.js.",
    difficulty: "Medium",
    topic: "Functional Programming"
  },
  {
    id: 147,
    question: "What is functional programming in JavaScript?",
    answer: "Functional programming emphasizes pure functions, immutability, and higher-order functions to avoid side effects.",
    difficulty: "Medium",
    topic: "Functional Programming"
  },
  {
    id: 148,
    question: "What are higher-order functions?",
    answer: "Higher-order functions take functions as arguments or return functions, e.g., map, filter, reduce.",
    difficulty: "Easy",
    topic: "Functional Programming"
  },
  {
    id: 149,
    question: "Explain currying.",
    answer: "Currying transforms a function with multiple arguments into a sequence of functions each taking a single argument.",
    difficulty: "Medium",
    topic: "Functional Programming"
  },
  {
    id: 150,
    question: "What is the difference between map and forEach?",
    answer: "map returns a new array of transformed elements; forEach iterates but returns undefined.",
    difficulty: "Easy",
    topic: "Arrays"
  },
  {
    id: 151,
    question: "How do you remove duplicates from an array?",
    answer: "Use new Set(array) to remove duplicates and spread back to array: [...new Set(array)].",
    difficulty: "Easy",
    topic: "Arrays"
  },
  {
    id: 152,
    question: "What is a typed array?",
    answer: "Typed arrays like Uint8Array provide arrays of a specific numeric type for binary data manipulation.",
    difficulty: "Hard",
    topic: "Data Types"
  },
  {
    id: 153,
    question: "Explain Promise.all vs Promise.race vs Promise.allSettled.",
    answer: "Promise.all waits for all to fulfill or rejects on first rejection; race settles on first outcome; allSettled waits for all to settle without rejecting.",
    difficulty: "Medium",
    topic: "Asynchronous"
  },
  {
    id: 154,
    question: "What is async iteration?",
    answer: "Async iteration uses for await...of to iterate over async iterables returning promises.",
    difficulty: "Hard",
    topic: "ES6+"
  },
  {
    id: 155,
    question: "How do you create a private field in ES6 classes?",
    answer: "Use # prefix: class A { #private; constructor() { this.#private = 42; } }.",
    difficulty: "Medium",
    topic: "ES6+"
  },
  {
    id: 156,
    question: "Explain the observer pattern in JavaScript.",
    answer: "Observer pattern allows objects (observers) to subscribe to events emitted by subject, often implemented with callbacks or event emitters.",
    difficulty: "Medium",
    topic: "Design Patterns"
  },
  {
    id: 157,
    question: "What is a promise microtask?",
    answer: "Promise callbacks (then, catch) are queued as microtasks, executed after the current job but before rendering and macrotasks.",
    difficulty: "Hard",
    topic: "Asynchronous"
  },
  {
    id: 158,
    question: "Describe the concept of web workers.",
    answer: "Web workers run scripts in background threads separate from the main UI thread for computational tasks.",
    difficulty: "Medium",
    topic: "Web APIs"
  },
  {
    id: 159,
    question: "How do you detect a mobile device in JavaScript?",
    answer: "Check navigator.userAgent for mobile keywords or use matchMedia('(pointer: coarse)').",
    difficulty: "Easy",
    topic: "Web APIs"
  },
  {
    id: 160,
    question: "Explain the fetch API and how to handle JSON responses.",
    answer: "fetch returns a promise resolving to Response. Use response.json() to parse JSON payload.",
    difficulty: "Easy",
    topic: "Web APIs"
  },
  {
    id: 161,
    question: "What is the difference between local scope and global scope in JS?",
    answer: "Global scope is accessible anywhere; local scope (function or block) is limited to that context.",
    difficulty: "Easy",
    topic: "Core Concepts"
  },
  {
    id: 162,
    question: "Explain the purpose of typeof operator.",
    answer: "typeof returns a string indicating the type of its operand, e.g., 'string', 'number', 'object', or 'undefined'.",
    difficulty: "Easy",
    topic: "Operators"
  },
  {
    id: 163,
    question: "What are BigInt and why use them?",
    answer: "BigInt allows representation of integers beyond Number.MAX_SAFE_INTEGER, created with BigInt() or n suffix.",
    difficulty: "Medium",
    topic: "Data Types"
  },
  {
    id: 164,
    question: "Explain optional chaining.",
    answer: "Optional chaining (?.) safely accesses nested properties, returning undefined if any part is null or undefined.",
    difficulty: "Easy",
    topic: "ES6+"
  },
  {
    id: 165,
    question: "What is nullish coalescing operator?",
    answer: "The nullish coalescing operator (??) returns the right operand when the left is null or undefined, unlike ||.",
    difficulty: "Easy",
    topic: "ES6+"
  },
  {
    id: 166,
    question: "How do you check for equality of two objects in JS?",
    answer: "Primitive equality on JSON.stringify outputs, or deep comparison via recursive function or libraries like lodash.isEqual.",
    difficulty: "Medium",
    topic: "Objects"
  },
  {
    id: 167,
    question: "Explain the difference between setTimeout and setInterval.",
    answer: "setTimeout executes a function once after a delay; setInterval executes repeatedly at specified intervals.",
    difficulty: "Easy",
    topic: "Asynchronous"
  },
  {
    id: 168,
    question: "What is a promise constructor anti-pattern?",
    answer: "Avoid wrapping existing promises in new Promise unnecessarily; instead return the original promise or chain.",
    difficulty: "Hard",
    topic: "Asynchronous"
  },
  {
    id: 169,
    question: "Explain the concept of tail recursion.",
    answer: "Tail recursion occurs when a function calls itself as its last action, enabling optimization to reuse stack frame.",
    difficulty: "Hard",
    topic: "Functions"
  },
  {
    id: 170,
    question: "What is event loop starvation?",
    answer: "Event loop starvation happens when long-running tasks block the event loop, delaying callbacks and UI updates.",
    difficulty: "Hard",
    topic: "Asynchronous"
  },
  {
    id: 171,
    question: "How do you implement a linked list in JavaScript?",
    answer: "Use objects with value and next properties, managing head and tail pointers to add/remove nodes.",
    difficulty: "Medium",
    topic: "Data Structures"
  },
  {
    id: 172,
    question: "Explain the difference between document.ready and window.onload.",
    answer: "document.ready (DOMContentLoaded) fires when HTML is parsed; window.onload fires after all resources (images, styles) load.",
    difficulty: "Medium",
    topic: "DOM"
  },
  {
    id: 173,
    question: "What are HTML templates and how are they used?",
    answer: "The <template> tag holds inert HTML fragments; clone with content.cloneNode(true) for dynamic rendering.",
    difficulty: "Medium",
    topic: "DOM"
  },
  {
    id: 174,
    question: "How do you lazy-load images in JavaScript?",
    answer: "Use loading='lazy' attribute or IntersectionObserver to load images when they enter the viewport.",
    difficulty: "Medium",
    topic: "Performance"
  },
  {
    id: 175,
    question: "Explain Cross-Site Scripting (XSS) and prevention techniques.",
    answer: "XSS is injection of malicious scripts; prevent by sanitizing inputs, using Content Security Policy, and encoding output.",
    difficulty: "Hard",
    topic: "Security"
  },
  {
    id: 176,
    question: "What is a Content Security Policy (CSP)?",
    answer: "CSP is a set of HTTP headers to restrict sources of executable scripts, styles, and other resources to mitigate XSS.",
    difficulty: "Medium",
    topic: "Security"
  },
  {
    id: 177,
    question: "How do you detect memory leaks in JavaScript?",
    answer: "Use browser devtools heap snapshots, monitor increasing memory consumption, and find detached DOM nodes.",
    difficulty: "Hard",
    topic: "Performance"
  },
  {
    id: 178,
    question: "What are proxies in JavaScript?",
    answer: "Proxy objects define custom behavior for fundamental operations via handler traps like get, set, and apply.",
    difficulty: "Hard",
    topic: "ES6+"
  },
  {
    id: 179,
    question: "Explain Reflect API.",
    answer: "Reflect provides methods for interceptable JavaScript operations, mirroring proxy traps and builtin behaviors.",
    difficulty: "Hard",
    topic: "ES6+"
  },
  {
    id: 180,
    question: "What is the purpose of Object.assign?",
    answer: "Object.assign copies enumerable properties from source objects to a target object, used for shallow merging.",
    difficulty: "Easy",
    topic: "Objects"
  },
  {
    id: 181,
    question: "How do you export multiple values from a module?",
    answer: "Use named exports: export function fn() {}; export const x = 1;. Import with import { fn, x } from './module'.",
    difficulty: "Easy",
    topic: "Modules"
  },
  {
    id: 182,
    question: "What is default export?",
    answer: "Default export allows exporting a single value as default: export default function() {}. Import with any name.",
    difficulty: "Easy",
    topic: "Modules"
  },
  {
    id: 183,
    question: "Explain dynamic import().",
    answer: "dynamic import() loads modules asynchronously at runtime returning a promise resolving to the module.",
    difficulty: "Medium",
    topic: "Modules"
  },
  {
    id: 184,
    question: "How do you polyfill new features?",
    answer: "Use polyfill libraries like core-js or import via Babel to provide missing functionality in older engines.",
    difficulty: "Medium",
    topic: "Compatibility"
  },
  {
    id: 185,
    question: "What is tree shaking?",
    answer: "Tree shaking is removing unused code during bundling by leveraging ES module static analysis.",
    difficulty: "Medium",
    topic: "Build Tools"
  },
  {
    id: 186,
    question: "Explain how bundlers like Webpack work.",
    answer: "Bundlers analyze module dependencies, transform code via loaders, and output optimized bundles for the browser.",
    difficulty: "Medium",
    topic: "Build Tools"
  },
  {
    id: 187,
    question: "What are source maps?",
    answer: "Source maps map transformed code back to original sources, aiding debugging by preserving line numbers.",
    difficulty: "Easy",
    topic: "Build Tools"
  },
  {
    id: 188,
    question: "How do you minify JavaScript code?",
    answer: "Minification removes whitespace and renames variables via tools like UglifyJS or Terser.",
    difficulty: "Easy",
    topic: "Build Tools"
  },
  {
    id: 189,
    question: "What is a virtual DOM?",
    answer: "The virtual DOM is an in-memory representation of UI; libraries diff virtual and real DOM to update efficiently.",
    difficulty: "Medium",
    topic: "Frameworks"
  },
  {
    id: 190,
    question: "Explain data binding in frameworks like React.",
    answer: "Data binding syncs UI and data. React uses one-way binding: data flows from state/props to UI, changes via events.",
    difficulty: "Medium",
    topic: "Frameworks"
  },
  {
    id: 191,
    question: "What is a Single Page Application (SPA)?",
    answer: "SPA is a web app that loads a single HTML page and dynamically updates content without full page reloads.",
    difficulty: "Easy",
    topic: "Architecture"
  },
  {
    id: 192,
    question: "How do you optimizeRendering performance in a React app?",
    answer: "Use memoization (React.memo), avoid anonymous functions in render, lazy load components, and use key properly.",
    difficulty: "Hard",
    topic: "Frameworks"
  },
  {
    id: 193,
    question: "Explain reconciliation in React.",
    answer: "Reconciliation is React's process to diff virtual DOM trees and compute minimal updates to apply to the real DOM.",
    difficulty: "Medium",
    topic: "Frameworks"
  },
  {
    id: 194,
    question: "What is JSX?",
    answer: "JSX is JavaScript syntax extension that looks like HTML and compiles to React.createElement calls.",
    difficulty: "Easy",
    topic: "Frameworks"
  },
  {
    id: 195,
    question: "How do you handle state in React components?",
    answer: "Use useState in functional components or this.state in class components; lift state up for shared data.",
    difficulty: "Easy",
    topic: "Frameworks"
  },
  {
    id: 196,
    question: "What are hooks in React?",
    answer: "Hooks are functions like useState and useEffect that let you use React state and lifecycle features in functional components.",
    difficulty: "Easy",
    topic: "Frameworks"
  },
  {
    id: 197,
    question: "Explain useEffect hook in React.",
    answer: "useEffect runs side effects after render. You can specify dependencies; cleanup function runs before next effect or unmount.",
    difficulty: "Medium",
    topic: "Frameworks"
  },
  {
    id: 198,
    question: "What is context API in React?",
    answer: "Context API provides a way to pass data through component tree without prop drilling, using React.createContext().",
    difficulty: "Medium",
    topic: "Frameworks"
  },
  {
    id: 199,
    question: "How do you optimize bundle size in a React project?",
    answer: "Use code splitting with React.lazy, dynamic imports, and tree shaking to remove unused exports.",
    difficulty: "Medium",
    topic: "Frameworks"
  },
  {
    id: 200,
    question: "What are Progressive Web Apps (PWAs)?",
    answer: "PWAs are web applications that use modern web capabilities to deliver app-like experiences including offline support and installability.",
    difficulty: "Medium",
    topic: "PWA"
  },
];
