function Projects() {
  return (
    <section id="projects" className="py-20 px-6">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">
          My Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-slate-900 p-6 rounded-2xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold">E-Commerce Website</h3>
            <p className="text-slate-400 mt-2">
              React + Tailwind based shopping platform UI.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-900 p-6 rounded-2xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold">Portfolio Website</h3>
            <p className="text-slate-400 mt-2">
              Modern responsive developer portfolio.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-900 p-6 rounded-2xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold">Blog App</h3>
            <p className="text-slate-400 mt-2">
              Full responsive blog UI with React.
            </p>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Projects