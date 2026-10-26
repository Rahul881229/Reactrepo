
import { useState } from 'react'
import './App.css'
import "tailwindcss";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      {/* Header */}
      <header className="mb-8 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white shadow-lg">
        <h1 className="text-4xl font-bold">
          Tailwind CSS Test
        </h1>
        <p className="mt-3 text-lg text-blue-100">
          React + Vite + Tailwind CSS
        </p>
        <button className="mt-5 rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 transition hover:scale-105 hover:bg-blue-50">
          Get Started
        </button>
      </header>

      {/* Cards */}
      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
          <div className="mb-3 text-3xl">🎨</div>
          <h2 className="text-xl font-bold text-slate-800">
            Colors & Typography
          </h2>
          <p className="mt-2 leading-7 text-slate-600">
            Test background colors, font sizes, font weights and text colors.
          </p>
          <span className="mt-4 inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
            Working
          </span>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
          <div className="mb-3 text-3xl">📱</div>
          <h2 className="text-xl font-bold text-slate-800">
            Responsive Design
          </h2>
          <p className="mt-2 leading-7 text-slate-600">
            Resize the browser to test responsive grid columns.
          </p>
          <div className="mt-4 rounded-lg bg-blue-100 p-3 text-center font-semibold text-blue-700">
            Mobile → Tablet → Desktop
          </div>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
          <div className="mb-3 text-3xl">⚡</div>
          <h2 className="text-xl font-bold text-slate-800">
            Hover Effects
          </h2>
          <p className="mt-2 leading-7 text-slate-600">
            Move your mouse over this card or the buttons to test transitions.
          </p>
          <button className="mt-4 rounded-lg bg-purple-600 px-4 py-2 text-white transition hover:bg-purple-800">
            Hover Me
          </button>
        </div>
      </section>

      {/* Interactive Counter */}
      <section className="mt-8 rounded-xl border border-slate-200 bg-white p-8 shadow-md">
        <h2 className="text-2xl font-bold text-slate-800">
          Interactive Counter
        </h2>
        <p className="mt-3 text-slate-600">
          Click the button to test React state and Tailwind styling together.
        </p>

        <div className="mt-5 flex items-center gap-5">
          <span className="text-4xl font-bold text-blue-600">
            {count}
          </span>
          <button
            onClick={() => setCount(count + 1)}
            className="rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white shadow transition hover:bg-blue-700 active:scale-95"
          >
            Increment +
          </button>
          <button
            onClick={() => setCount(0)}
            className="rounded-lg bg-slate-200 px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-300"
          >
            Reset
          </button>
        </div>
      </section>

      {/* Form */}
      <section className="mt-8 rounded-xl bg-white p-8 shadow-md">
        <h2 className="text-2xl font-bold text-slate-800">
          Form Elements
        </h2>

        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Select Technology
            </label>
            <select className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200">
              <option>React</option>
              <option>Tailwind CSS</option>
              <option>Java Spring Boot</option>
              <option>Angular</option>
            </select>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-8 rounded-xl bg-slate-900 p-5 text-center text-slate-300">
        <p>
          Built with <span className="font-bold text-cyan-400">React</span>
          {' '}and{' '}
          <span className="font-bold text-sky-400">Tailwind CSS</span>
        </p>
      </footer>
    </div>
  )
}

export default App
