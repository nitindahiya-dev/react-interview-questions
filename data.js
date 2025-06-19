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
    }
];
