# Recursive Grid (React)

A **3×3 interactive grid** built in React.  
Each cell starts at **0** and updates based on click + ripple rules.

---

## Live Demo

👉 **Vercel Link:** https://ripples-psi.vercel.app/

---

## Features

- **3×3 grid** centered on screen
- **Even numbers:** light gray (`#e0e0e0`)
- **Odd numbers:** navy (`#1a237e`) with white text
- Rounded corners + shadow styling

### Click interaction
- Clicking a box increments its value by **+1**

### Ripple rules
- If the new value is divisible by **3**, the box to the **right** is decremented by **-1**
- If the new value is divisible by **5**, the box **below** is incremented by **+2**

### Locked state
- If a box reaches **15 or higher**, it turns **red**
- Locked boxes cannot be clicked
- Locked boxes cannot be modified by ripple updates

- **Reset button** to restart the grid

---

## Tech Stack

- React (Vite)
- TailwindCSS
- Deployed on Vercel

---

## How to Run Locally

```bash
git clone https://github.com/deveshanim3/ripples
cd ripples
npm install
npm run dev
