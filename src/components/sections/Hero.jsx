function Hero() {
  return (
    <section id="home" className="min-h-[85vh] flex items-center justify-center px-6">
      <div className="text-center max-w-3xl">

        <p className="text-slate-400 text-lg">
          👋 Hello, I'm
        </p>

        <h1 className="text-5xl md:text-6xl font-bold mt-3 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          Muhammad Sheraz
        </h1>

        <p className="text-xl text-slate-300 mt-5">
          Frontend Developer | React Developer | Freelancer
        </p>

        <p className="text-slate-500 mt-4 leading-relaxed">
          I build modern, responsive and high-performance web applications
          using React and modern frontend tools.
        </p>

        <div className="mt-10 flex gap-5 justify-center flex-wrap">

          <button className="px-7 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-xl font-semibold shadow-lg">
            Hire Me
          </button>

          <button className="px-7 py-3 border border-slate-600 hover:border-white transition rounded-xl">
            View Projects
          </button>

        </div>

      </div>
    </section>
  )
}

export default Hero