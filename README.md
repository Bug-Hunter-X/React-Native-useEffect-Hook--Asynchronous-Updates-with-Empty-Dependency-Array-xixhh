# React Native useEffect Hook: Asynchronous Updates with Empty Dependency Array

This repository demonstrates a subtle bug in React Native involving the `useEffect` hook and asynchronous updates. When using an empty dependency array (`[]`), the effect runs only once after the initial render. However, if asynchronous updates modify the component's state or props afterward, the component may not re-render, leading to unexpected behavior.

## Bug Description

The provided `UnexpectedAsyncUpdate.js` file showcases this issue. An asynchronous operation modifies the component's state, but the `useEffect` hook, with its empty dependency array, doesn't trigger a re-render, resulting in stale data displayed on the screen.

## Solution

The `AsyncUpdateSolution.js` file demonstrates the solution.  By adding the relevant state variables to the dependency array, the `useEffect` hook now correctly triggers a re-render whenever these variables change, ensuring the component always reflects the latest data.