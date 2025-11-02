import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Background gradient */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-sky-50" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-14 sm:py-20 lg:py-24">
          {/* Text content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-700 shadow-sm">
              <span className="inline-block h-2 w-2 rounded-full bg-green-500" />
              In Stock • Free Shipping
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Elevate Your Run with Nike Air
            </h1>
            <p className="mt-4 text-neutral-600 text-base sm:text-lg max-w-xl">
              Lightweight comfort, responsive cushioning, and a sleek profile made to move. Discover the latest performance footwear engineered for every stride.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#releases" className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-white font-semibold shadow hover:shadow-md transition">
                Shop New Releases
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white px-6 py-3 font-semibold text-neutral-800 hover:bg-neutral-50">
                Learn More
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-neutral-600">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-neutral-900">4.8</span>
                <span>Customer Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-neutral-900">30-Day</span>
                <span>Return Policy</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-xl lg:max-w-none">
              <div className="absolute -inset-6 -z-0 rounded-full bg-gradient-to-tr from-orange-200/60 via-amber-100/60 to-sky-200/60 blur-2xl" aria-hidden />
              <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1600&auto=format&fit=crop"
                alt="Featured Nike shoe"
                className="relative z-10 h-full w-full object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
