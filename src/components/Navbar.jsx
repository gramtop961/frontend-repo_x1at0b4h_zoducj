import React, { useState } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur border-b border-neutral-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <a href="#" className="inline-flex items-center gap-2">
            <div className="h-8 w-8 bg-black text-white grid place-items-center rounded-md font-bold">N</div>
            <span className="font-extrabold tracking-tight text-xl">Nike</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#home" className="hover:text-black/80 text-neutral-700">Home</a>
            <a href="#releases" className="hover:text-black/80 text-neutral-700">New Releases</a>
            <a href="#contact" className="hover:text-black/80 text-neutral-700">Contact</a>
            <button className="ml-4 inline-flex items-center rounded-full bg-black px-4 py-2 text-white font-medium shadow hover:shadow-md transition">Sign In</button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-neutral-700 hover:bg-neutral-100"
            aria-label="Toggle Menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-6 w-6"
            >
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile panel */}
        {open && (
          <div className="md:hidden pb-4">
            <nav className="grid gap-2">
              <a href="#home" onClick={() => setOpen(false)} className="rounded-md px-3 py-2 hover:bg-neutral-100">Home</a>
              <a href="#releases" onClick={() => setOpen(false)} className="rounded-md px-3 py-2 hover:bg-neutral-100">New Releases</a>
              <a href="#contact" onClick={() => setOpen(false)} className="rounded-md px-3 py-2 hover:bg-neutral-100">Contact</a>
              <button className="mt-2 inline-flex items-center justify-center rounded-full bg-black px-4 py-2 text-white font-medium shadow hover:shadow-md transition">Sign In</button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
