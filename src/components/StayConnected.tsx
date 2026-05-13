"use client";

import { useState } from "react";

export default function StayConnected() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="bg-white py-10 sm:py-12">
      <div className="container-x grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
        <div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-brand-blue uppercase tracking-wide">
            Stay Connected
          </h2>
          <p className="mt-2 text-sm text-brand-ink">
            Sign up to get updates on upcoming events, stories, and ways to get involved.
          </p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (email) setSubmitted(true);
          }}
          className="flex flex-col sm:flex-row gap-3 lg:justify-end"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 sm:max-w-sm h-12 rounded-md border border-slate-300 px-4 text-brand-ink placeholder:text-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-blue"
          />
          <button
            type="submit"
            className="h-12 px-7 rounded-md bg-brand-blue text-white font-semibold hover:bg-brand-blue-deep transition-colors"
          >
            {submitted ? "Subscribed!" : "Sign Up"}
          </button>
        </form>
      </div>
    </section>
  );
}
