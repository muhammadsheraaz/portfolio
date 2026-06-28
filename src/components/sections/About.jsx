function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Left Side */}
        <div>
          <h2 className="text-4xl font-bold mb-4">
            About Me
          </h2>

          <p className="text-slate-400 leading-relaxed">
            I'm Muhammad Sheraz, a passionate Frontend Developer
            specializing in building modern, responsive, and user-friendly
            web applications using React and Tailwind CSS.
          </p>

          <p className="text-slate-500 mt-4">
            I focus on clean code, performance, and creating smooth UI/UX
            experiences that help businesses grow online.
          </p>

          <div className="mt-6 flex gap-3 flex-wrap">
            <span className="px-3 py-1 bg-slate-800 rounded-full text-sm">React</span>
            <span className="px-3 py-1 bg-slate-800 rounded-full text-sm">Tailwind</span>
            <span className="px-3 py-1 bg-slate-800 rounded-full text-sm">JavaScript</span>
            <span className="px-3 py-1 bg-slate-800 rounded-full text-sm">Frontend</span>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <div className="w-64 h-64 rounded-2xl bg-gradient-to-tr from-blue-600 to-purple-600"></div>
        </div>

      </div>
    </section>
  )
}

export default About