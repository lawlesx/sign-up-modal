# 🛠️ Auth Modals – Sign Up & Sign In

A modern authentication UI built using **React (Vite)**, **Tailwind CSS**, **Framer Motion**, **TypeScript**, **React Hook Form**, and **Zod**.

## ✨ Features

- 🔐 Modal-based **Sign Up** and **Sign In** forms
- 🎯 Schema validation with Zod
- 💅 Responsive and clean UI via Tailwind
- 🎬 Animations with Framer Motion
- 🍞 Toasts for success feedback
- ♿ Fully accessible with focus trapping
- ⚡ Fast dev environment using Vite

---

## 🚀 Getting Started

To run this project locally, follow these steps:

```bash
git clone https://github.com/lawlesx/sign-up-modal.git
cd sign-up-modal
yarn
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🧪 Tech Stack

| Tool            | Purpose               |
| --------------- | --------------------- |
| React + Vite    | Frontend Framework    |
| Tailwind CSS    | Utility-first styling |
| TypeScript      | Type safety           |
| Framer Motion   | UI animations         |
| React Hook Form | Form state handling   |
| Zod             | Schema validation     |
| React Toastify  | Toast notifications   |

---

## 🔓 Sign Up Modal

**Fields:**

- Name
- Email
- Password
- Accept Terms & Conditions ✅

**Validations:**

- Required fields
- Email format check
- Password strength (optional)
- Terms checkbox must be checked

---

## 🔑 Sign In Modal

**Fields:**

- Email
- Password

**Validations:**

- Required fields
- Valid email format

---

## ✅ User Flow

- Clicking **Sign Up** or **Sign In** opens modal
- Modal can be closed by:
  - Clicking outside
  - Using the close button
- On successful submission:
  - Show success toast

---

## ♿ Accessibility

- Focus is trapped within modal
- Full keyboard navigation

---
