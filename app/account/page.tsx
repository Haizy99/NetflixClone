"use client";

import { useState } from "react";
import Link from "next/link";

const plans = [
  {
    id: 1,
    name: "Basic",
    price: "R99",
    quality: "SD",
    resolution: "480p",
    devices: 1,
    downloads: 1,
    color: "border-gray-600",
  },
  {
    id: 2,
    name: "Standard",
    price: "R159",
    quality: "HD",
    resolution: "1080p",
    devices: 2,
    downloads: 2,
    color: "border-blue-500",
    popular: true,
  },
  {
    id: 3,
    name: "Premium",
    price: "R219",
    quality: "Ultra HD",
    resolution: "4K + HDR",
    devices: 4,
    downloads: 6,
    color: "border-red-600",
  },
];

export default function AccountPage() {
  const [currentPlan, setCurrentPlan] = useState(2);
  const [selectedPlan, setSelectedPlan] = useState(2);

  return (
    <div className="min-h-screen bg-black text-white">

      {/* Header */}
      <header className="flex items-center justify-between px-8 md:px-16 py-6 border-b border-gray-800">
        <Link href="/browse">
          <h1 className="text-red-600 text-2xl font-bold tracking-wider cursor-pointer">
            Netflix
          </h1>
        </Link>
        <Link href="/browse">
          <button className="text-gray-400 text-sm hover:text-white transition">
            ← Back to Browse
          </button>
        </Link>
      </header>

      <div className="max-w-4xl mx-auto px-8 py-12">

        {/* Page title */}
        <h2 className="text-3xl font-bold mb-2">Account</h2>
        <p className="text-gray-400 text-sm mb-10">Manage your profile and subscription</p>

        {/* Profile section */}
        <div className="bg-gray-900 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-3">
            Profile Details
          </h3>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-md bg-red-600 flex items-center justify-center text-2xl font-bold">
              Z
            </div>
            <div>
              <p className="text-white font-semibold">Zama</p>
              <p className="text-gray-400 text-sm">zama@email.com</p>
            </div>
          </div>
          <Link href="/profile">
            <button className="text-sm border border-gray-600 text-gray-300 px-4 py-2 rounded hover:border-white hover:text-white transition">
              Manage Profiles
            </button>
          </Link>
        </div>

        {/* Current plan */}
        <div className="bg-gray-900 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-3">
            Current Plan
          </h3>
          <div className="flex items-center justify-between mb-2">
            <div>
              <p className="text-white font-semibold">
                {plans.find(p => p.id === currentPlan)?.name} Plan
              </p>
              <p className="text-gray-400 text-sm">
                {plans.find(p => p.id === currentPlan)?.price}/month
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Next billing date: 25 June 2026
              </p>
            </div>
            <span className="bg-green-600 text-white text-xs px-3 py-1 rounded-full">
              Active
            </span>
          </div>
        </div>

        {/* Change plan */}
        <div className="bg-gray-900 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-3">
            Change Plan
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {plans.map((plan) => (
              <div
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                className={`relative border-2 rounded-lg p-5 cursor-pointer transition ${
                  selectedPlan === plan.id
                    ? plan.color + " bg-gray-800"
                    : "border-gray-700 hover:border-gray-500"
                }`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs px-3 py-0.5 rounded-full whitespace-nowrap">
                    Most Popular
                  </span>
                )}

                {/* Current badge */}
                {plan.id === currentPlan && (
                  <span className="absolute -top-3 right-3 bg-green-600 text-white text-xs px-3 py-0.5 rounded-full">
                    Current
                  </span>
                )}

                <h4 className="text-white font-bold text-lg mb-1">{plan.name}</h4>
                <p className="text-red-400 font-semibold text-xl mb-4">{plan.price}<span className="text-gray-500 text-sm">/mo</span></p>

                <div className="flex flex-col gap-2 text-sm text-gray-400">
                  <div className="flex justify-between">
                    <span>Quality</span>
                    <span className="text-white">{plan.quality}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Resolution</span>
                    <span className="text-white">{plan.resolution}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Devices</span>
                    <span className="text-white">{plan.devices}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Downloads</span>
                    <span className="text-white">{plan.downloads}</span>
                  </div>
                </div>

                {/* Selected indicator */}
                {selectedPlan === plan.id && (
                  <div className="mt-4 flex items-center gap-1 text-xs text-green-400">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                    Selected
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Update plan button */}
          {selectedPlan !== currentPlan && (
            <button
              onClick={() => setCurrentPlan(selectedPlan)}
              className="bg-red-600 text-white font-semibold px-8 py-3 rounded hover:bg-red-700 transition text-sm"
            >
              Update to {plans.find(p => p.id === selectedPlan)?.name} Plan
            </button>
          )}
        </div>

        {/* Payment method */}
        <div className="bg-gray-900 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-3">
            Payment Method
          </h3>
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-gray-700 rounded px-3 py-2 text-xs font-bold text-white">
              VISA
            </div>
            <div>
              <p className="text-white text-sm">•••• •••• •••• 4242</p>
              <p className="text-gray-500 text-xs">Expires 12/27</p>
            </div>
          </div>
          <button className="text-sm border border-gray-600 text-gray-300 px-4 py-2 rounded hover:border-white hover:text-white transition">
            Update Payment Method
          </button>
        </div>

        {/* Cancel subscription */}
        <div className="bg-gray-900 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-2">Cancel Subscription</h3>
          <p className="text-gray-400 text-sm mb-4">
            You can cancel at any time. You will still have access until the end of your billing period.
          </p>
          <button className="text-sm border border-red-600 text-red-400 px-6 py-2 rounded hover:bg-red-600 hover:text-white transition">
            Cancel Subscription
          </button>
        </div>

      </div>
    </div>
  );
}