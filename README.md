# 🛠️ React Debugging Checkpoint – State & Lifecycle

## 📌 Project Name:
**checkpoint-state-lifecycle**

## 📅 Date:
August 2, 2025

## 🧰 Tools Used:
- React (Class-based Component)
- React Developer Tools (Microsoft Edge extension)
- Tailwind CSS (for styling)

---

## 🎯 Objective:
The goal of this checkpoint was to **debug a React application** using the **React Developer Tools** browser extension. The application consists of a class-based component that renders a user profile and tracks time since mount using `setInterval`.

---

## ✅ Tasks Completed:

- [x] Ran the app in the browser (`localhost:5173`)
- [x] Opened React DevTools and navigated through the component tree
- [x] Inspected the `App` component's **state** and **props**
- [x] Toggled the `shows` boolean using DevTools
- [x] Confirmed that `secondsElapsed` increases over time
- [x] Verified the profile is conditionally rendered
- [x] Simulated broken image URL and fixed it
- [x] Documented the debugging process

---

## 🔍 Issues Found and Resolved:

| Issue | Fix |
|-------|-----|
| `shows` not updating correctly | Used DevTools to verify and fixed event handler |
| `imgSrc` was broken | Replaced with a valid image URL |
| `secondsElapsed` didn't reset on toggle | Confirmed expected behavior and improved UX |

---

## ✅ Final Result:
The app functions as expected. All state values and rendering behavior were verified using React Developer Tools. Conditional rendering and lifecycle methods were tested and debugged successfully.

---

## 🧠 Learnings:
- How to use **React DevTools** to inspect and manipulate state & props
- How to debug lifecycle behavior (componentDidMount + setInterval)
- How to simulate and fix common React issues interactively

---

## 🚀 Screenshot (Optional)