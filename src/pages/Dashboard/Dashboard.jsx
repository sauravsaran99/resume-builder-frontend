import React from "react";
import ResumeUi from "../../components/ResumeUi";

// Dashboard.jsx
// Single-file React component that reproduces the provided Dashboard UI design
// Requires TailwindCSS in your project. Place this file in src/pages/Dashboard/Dashboard.jsx

export default function Dashboard() {
  const resumes = [
    { id: 1, title: "Software Engineer - Google", date: "Nov 2, 2025" },
    { id: 2, title: "Product Manager - Meta", date: "Nov 18, 2025" },
    { id: 3, title: "Data Analyst - Apple", date: "Oct 18, 2025" },
  ];

  return (
    <div className="w-screen h-screen bg-gray-100 text-gray-900">
      <div className="w-screen h-full mx-auto p-6">
        <div className="flex h-full gap-6">
          {/* SIDEBAR */}
          <aside className="w-64 bg-white rounded-2xl shadow-md p-4 flex flex-col gap-6">
            <div className="px-2 py-1">
              <h2 className="text-xl font-semibold">CareerBoost AI</h2>
            </div>

            <nav className="flex-1">
              <ul className="flex flex-col gap-2">
                <li className="flex items-center gap-3 px-3 py-2 rounded-lg bg-blue-50 text-blue-600 font-medium">
                  <span className="w-6 h-6 flex items-center justify-center rounded-md bg-white shadow-sm">
                    🏠
                  </span>
                  Dashboard
                </li>
                <li className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50 text-gray-600">
                  <span className="w-6 h-6 flex items-center justify-center rounded-md">
                    ➕
                  </span>
                  Create resume
                </li>
                <li className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50 text-gray-600">
                  <span className="w-6 h-6 flex items-center justify-center rounded-md">
                    💳
                  </span>
                  Subscription
                </li>
                <li className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50 text-gray-600">
                  <span className="w-6 h-6 flex items-center justify-center rounded-md">
                    ⚙️
                  </span>
                  Settings
                </li>
              </ul>
            </nav>

            <div className="text-sm text-gray-500 px-3">
              © {new Date().getFullYear()} CareerBoost AI
            </div>
          </aside>

          {/* MAIN */}
          <main className="flex-1">
            {/* Header bar */}
            <header className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                {/* Search placeholder */}
                <div className="bg-white rounded-xl px-4 py-2 shadow-sm">
                  app.careerboostai.com/dashboard
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                  S
                </div>
              </div>
            </header>

            {/* Welcome banner */}
            <section className="mb-6">
              <div className="bg-white rounded-2xl p-6 shadow-md flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold">Welcome back, Saurav!</h3>
                  <p className="text-gray-500">
                    You've generated 4 resumes this month.
                  </p>
                </div>

                <div>
                  <div className="bg-blue-600 dark:bg-blue-600 text-white px-5 py-2 rounded-full shadow hover:opacity-95">
                    + Create New Resume
                  </div>
                </div>
              </div>
            </section>

            {/* Resumes list */}
            <section className="mb-6 mt-20">
              <h4 className="text-lg text-left font-semibold mb-4">
                Your Resumes
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
                {resumes.map((r) => (
                  <ResumeUi key={r.id} r={r} />
                ))}
              </div>
            </section>

            {/* Bottom area: usage + subscription */}
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">
              <div className="lg:col-span-2">
                <div className="rounded-2xl p-6">
                  <h5 className="font-semibold text-left text-2xl mb-2">
                    Usage Summary
                  </h5>
                  <p className="text-gray-500 text-sm mb-4">
                    2 of 5 free resumes used this month
                  </p>

                  <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                    <div className="bg-blue-600 h-2 rounded-full w-2/5"></div>
                  </div>

                  <div className="mt-6">
                    <div className="bg-blue-600 text-white px-5 py-2 rounded-full">
                      Upgrade to Pro
                    </div>
                  </div>
                </div>
              </div>

              <aside className="bg-white rounded-2xl p-6 shadow-md">
                <h6 className="font-semibold mb-2">Subscription Info</h6>
                <p className="text-gray-500 text-sm mb-4">
                  Current Plan: <span className="font-medium">Free Tier</span>
                </p>
                <div className="bg-white text-blue-600 border border-blue-100 px-4 py-2 rounded-full">
                  Manage Subscription
                </div>
              </aside>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

/*
Usage:
1. Ensure TailwindCSS is configured in your project.
2. Place this file at src/pages/Dashboard/Dashboard.jsx and import it into your router.
3. Replace emoji placeholders with SVG/icon components if you prefer.
4. Tweak colors, spacing, and shadows in Tailwind theme or via utility classes to match pixel-perfect design.
*/
