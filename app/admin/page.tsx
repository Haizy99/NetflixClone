"use client";

import { useState } from "react";
import Link from "next/link";

const stats = [
  { label: "Total Users", value: "12,483", icon: "👥", change: "+12% this month" },
  { label: "Active Subscriptions", value: "9,271", icon: "💳", change: "+8% this month" },
  { label: "Total Content", value: "1,340", icon: "🎬", change: "+24 this week" },
  { label: "Monthly Revenue", value: "R1.2M", icon: "💰", change: "+15% this month" },
];

const recentContent = [
  { id: 1, title: "Stranger Things S5", type: "Series", status: "Published", date: "2026-05-01" },
  { id: 2, title: "The Gray Man 2", type: "Movie", status: "Draft", date: "2026-05-10" },
  { id: 3, title: "Squid Game S3", type: "Series", status: "Published", date: "2026-04-28" },
  { id: 4, title: "Extraction 3", type: "Movie", status: "Draft", date: "2026-05-15" },
  { id: 5, title: "Bridgerton S4", type: "Series", status: "Published", date: "2026-04-20" },
];

const recentUsers = [
  { id: 1, name: "Thabo Nkosi", email: "thabo@email.com", plan: "Premium", status: "Active" },
  { id: 2, name: "Lerato Dlamini", email: "lerato@email.com", plan: "Standard", status: "Active" },
  { id: 3, name: "Sipho Mthembu", email: "sipho@email.com", plan: "Basic", status: "Suspended" },
  { id: 4, name: "Nomsa Khumalo", email: "nomsa@email.com", plan: "Premium", status: "Active" },
  { id: 5, name: "Kagiso Sithole", email: "kagiso@email.com", plan: "Standard", status: "Active" },
];

type Tab = "dashboard" | "content" | "users" | "upload";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<Tab>("dashboard");
  const [uploadForm, setUploadForm] = useState({
    title: "", type: "movie", synopsis: "", ageRating: "PG-13", releaseYear: "2026",
  });

  return (
    <div className="min-h-screen bg-gray-950 text-white flex">

      {/* Sidebar */}
      <aside className="w-56 bg-gray-900 flex flex-col fixed h-full border-r border-gray-800">
        <div className="px-6 py-6 border-b border-gray-800">
          <h1 className="text-red-600 text-xl font-bold tracking-wider">Netflix</h1>
          <p className="text-gray-500 text-xs mt-1">Admin Portal</p>
        </div>

        <nav className="flex-1 px-4 py-6 flex flex-col gap-1">
          {[
            { id: "dashboard", label: "Dashboard", icon: "📊" },
            { id: "content", label: "Content", icon: "🎬" },
            { id: "users", label: "Users", icon: "👥" },
            { id: "upload", label: "Upload Content", icon: "⬆️" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id as Tab)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-left transition ${
                activeTab === item.id
                  ? "bg-red-600 text-white"
                  : "text-gray-400 hover:bg-gray-800 hover:text-white"
              }`}
            >
              <span>{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        <div className="px-4 py-6 border-t border-gray-800">
          <Link href="/browse">
            <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-gray-400 hover:bg-gray-800 hover:text-white transition w-full text-left">
              <span>←</span> Back to App
            </button>
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <main className="ml-56 flex-1 p-8">

        {/* ── DASHBOARD TAB ── */}
        {activeTab === "dashboard" && (
          <div>
            <h2 className="text-2xl font-bold mb-2">Dashboard</h2>
            <p className="text-gray-400 text-sm mb-8">Welcome back, Admin</p>

            {/* Stats grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-gray-900 rounded-lg p-5 border border-gray-800">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl">{stat.icon}</span>
                    <span className="text-green-400 text-xs">{stat.change}</span>
                  </div>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Recent content */}
            <div className="bg-gray-900 rounded-lg border border-gray-800 mb-8">
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
                <h3 className="font-semibold">Recent Content</h3>
                <button
                  onClick={() => setActiveTab("content")}
                  className="text-red-400 text-sm hover:text-red-300"
                >
                  View all
                </button>
              </div>
              <table className="w-full">
                <thead>
                  <tr className="text-gray-500 text-xs border-b border-gray-800">
                    <th className="text-left px-6 py-3">Title</th>
                    <th className="text-left px-6 py-3">Type</th>
                    <th className="text-left px-6 py-3">Status</th>
                    <th className="text-left px-6 py-3">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {recentContent.map((item) => (
                    <tr key={item.id} className="border-b border-gray-800 hover:bg-gray-800/50 transition">
                      <td className="px-6 py-4 text-sm text-white">{item.title}</td>
                      <td className="px-6 py-4 text-sm text-gray-400">{item.type}</td>
                      <td className="px-6 py-4">
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          item.status === "Published"
                            ? "bg-green-900 text-green-400"
                            : "bg-yellow-900 text-yellow-400"
                        }`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-400">{item.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Recent users */}
            <div className="bg-gray-900 rounded-lg border border-gray-800">
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
                <h3 className="font-semibold">Recent Users</h3>
                <button
                  onClick={() => setActiveTab("users")}
                  className="text-red-400 text-sm hover:text-red-300"
                >
                  View all
                </button>
              </div>
              <table className="w-full">
                <thead>
                  <tr className="text-gray-500 text-xs border-b border-gray-800">
                    <th className="text-left px-6 py-3">Name</th>
                    <th className="text-left px-6 py-3">Email</th>
                    <th className="text-left px-6 py-3">Plan</th>
                    <th className="text-left px-6 py-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentUsers.map((user) => (
                    <tr key={user.id} className="border-b border-gray-800 hover:bg-gray-800/50 transition">
                      <td className="px-6 py-4 text-sm text-white">{user.name}</td>
                      <td className="px-6 py-4 text-sm text-gray-400">{user.email}</td>
                      <td className="px-6 py-4 text-sm text-gray-400">{user.plan}</td>
                      <td className="px-6 py-4">
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          user.status === "Active"
                            ? "bg-green-900 text-green-400"
                            : "bg-red-900 text-red-400"
                        }`}>
                          {user.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ── CONTENT TAB ── */}
        {activeTab === "content" && (
          <div>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold mb-1">Content Management</h2>
                <p className="text-gray-400 text-sm">Manage all movies and series</p>
              </div>
              <button
                onClick={() => setActiveTab("upload")}
                className="bg-red-600 text-white px-5 py-2 rounded text-sm hover:bg-red-700 transition"
              >
                + Upload Content
              </button>
            </div>

            <div className="bg-gray-900 rounded-lg border border-gray-800">
              <table className="w-full">
                <thead>
                  <tr className="text-gray-500 text-xs border-b border-gray-800">
                    <th className="text-left px-6 py-3">Title</th>
                    <th className="text-left px-6 py-3">Type</th>
                    <th className="text-left px-6 py-3">Status</th>
                    <th className="text-left px-6 py-3">Date Added</th>
                    <th className="text-left px-6 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {recentContent.map((item) => (
                    <tr key={item.id} className="border-b border-gray-800 hover:bg-gray-800/50 transition">
                      <td className="px-6 py-4 text-sm text-white">{item.title}</td>
                      <td className="px-6 py-4 text-sm text-gray-400">{item.type}</td>
                      <td className="px-6 py-4">
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          item.status === "Published"
                            ? "bg-green-900 text-green-400"
                            : "bg-yellow-900 text-yellow-400"
                        }`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-400">{item.date}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <button className="text-blue-400 text-xs hover:text-blue-300 transition">Edit</button>
                          <button className="text-yellow-400 text-xs hover:text-yellow-300 transition">
                            {item.status === "Published" ? "Unpublish" : "Publish"}
                          </button>
                          <button className="text-red-400 text-xs hover:text-red-300 transition">Delete</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ── USERS TAB ── */}
        {activeTab === "users" && (
          <div>
            <h2 className="text-2xl font-bold mb-2">User Management</h2>
            <p className="text-gray-400 text-sm mb-8">View and manage all users</p>

            <div className="bg-gray-900 rounded-lg border border-gray-800">
              <table className="w-full">
                <thead>
                  <tr className="text-gray-500 text-xs border-b border-gray-800">
                    <th className="text-left px-6 py-3">Name</th>
                    <th className="text-left px-6 py-3">Email</th>
                    <th className="text-left px-6 py-3">Plan</th>
                    <th className="text-left px-6 py-3">Status</th>
                    <th className="text-left px-6 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {recentUsers.map((user) => (
                    <tr key={user.id} className="border-b border-gray-800 hover:bg-gray-800/50 transition">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-xs font-bold">
                            {user.name.charAt(0)}
                          </div>
                          <span className="text-sm text-white">{user.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-400">{user.email}</td>
                      <td className="px-6 py-4 text-sm text-gray-400">{user.plan}</td>
                      <td className="px-6 py-4">
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          user.status === "Active"
                            ? "bg-green-900 text-green-400"
                            : "bg-red-900 text-red-400"
                        }`}>
                          {user.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <button className="text-blue-400 text-xs hover:text-blue-300 transition">View</button>
                          <button className="text-yellow-400 text-xs hover:text-yellow-300 transition">
                            {user.status === "Active" ? "Suspend" : "Activate"}
                          </button>
                          <button className="text-red-400 text-xs hover:text-red-300 transition">Delete</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ── UPLOAD TAB ── */}
        {activeTab === "upload" && (
          <div>
            <h2 className="text-2xl font-bold mb-2">Upload Content</h2>
            <p className="text-gray-400 text-sm mb-8">Add a new movie or series to the platform</p>

            <div className="bg-gray-900 rounded-lg border border-gray-800 p-8 max-w-2xl">
              <div className="flex flex-col gap-5">

                {/* Title */}
                <div>
                  <label className="text-gray-400 text-sm mb-2 block">Title</label>
                  <input
                    type="text"
                    placeholder="Enter content title"
                    value={uploadForm.title}
                    onChange={(e) => setUploadForm({ ...uploadForm, title: e.target.value })}
                    className="w-full bg-gray-800 border border-gray-700 text-white rounded px-4 py-3 text-sm focus:outline-none focus:border-red-500"
                  />
                </div>

                {/* Type and Age Rating */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-400 text-sm mb-2 block">Type</label>
                    <select
                      value={uploadForm.type}
                      onChange={(e) => setUploadForm({ ...uploadForm, type: e.target.value })}
                      className="w-full bg-gray-800 border border-gray-700 text-white rounded px-4 py-3 text-sm focus:outline-none focus:border-red-500"
                    >
                      <option value="movie">Movie</option>
                      <option value="series">Series</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm mb-2 block">Age Rating</label>
                    <select
                      value={uploadForm.ageRating}
                      onChange={(e) => setUploadForm({ ...uploadForm, ageRating: e.target.value })}
                      className="w-full bg-gray-800 border border-gray-700 text-white rounded px-4 py-3 text-sm focus:outline-none focus:border-red-500"
                    >
                      <option>G</option>
                      <option>PG</option>
                      <option>PG-13</option>
                      <option>R</option>
                      <option>NC-17</option>
                    </select>
                  </div>
                </div>

                {/* Synopsis */}
                <div>
                  <label className="text-gray-400 text-sm mb-2 block">Synopsis</label>
                  <textarea
                    placeholder="Enter content description"
                    value={uploadForm.synopsis}
                    onChange={(e) => setUploadForm({ ...uploadForm, synopsis: e.target.value })}
                    rows={4}
                    className="w-full bg-gray-800 border border-gray-700 text-white rounded px-4 py-3 text-sm focus:outline-none focus:border-red-500 resize-none"
                  />
                </div>

                {/* Release Year */}
                <div>
                  <label className="text-gray-400 text-sm mb-2 block">Release Year</label>
                  <input
                    type="number"
                    value={uploadForm.releaseYear}
                    onChange={(e) => setUploadForm({ ...uploadForm, releaseYear: e.target.value })}
                    className="w-full bg-gray-800 border border-gray-700 text-white rounded px-4 py-3 text-sm focus:outline-none focus:border-red-500"
                  />
                </div>

                {/* Poster upload */}
                <div>
                  <label className="text-gray-400 text-sm mb-2 block">Poster Image</label>
                  <div className="border-2 border-dashed border-gray-700 rounded-lg p-8 text-center hover:border-gray-500 transition cursor-pointer">
                    <p className="text-gray-500 text-sm">Click to upload poster image</p>
                    <p className="text-gray-600 text-xs mt-1">PNG, JPG up to 10MB</p>
                  </div>
                </div>

                {/* Video upload */}
                <div>
                  <label className="text-gray-400 text-sm mb-2 block">Video File</label>
                  <div className="border-2 border-dashed border-gray-700 rounded-lg p-8 text-center hover:border-gray-500 transition cursor-pointer">
                    <p className="text-gray-500 text-sm">Click to upload video file</p>
                    <p className="text-gray-600 text-xs mt-1">MP4, MOV up to 10GB</p>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-4 pt-2">
                  <button className="bg-red-600 text-white font-semibold px-8 py-3 rounded hover:bg-red-700 transition text-sm">
                    Upload & Publish
                  </button>
                  <button className="border border-gray-600 text-gray-300 px-8 py-3 rounded hover:border-white hover:text-white transition text-sm">
                    Save as Draft
                  </button>
                </div>

              </div>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}