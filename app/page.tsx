
export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf9f6] text-[#222]">
      <div className="mx-auto max-w-3xl px-6 py-24">

        <nav className="flex justify-between mb-24 text-sm">
          <span className="font-semibold">Mainak Dey</span>
          <div className="flex gap-5">
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <section className="mb-24">
          <p className="text-sm text-gray-500 mb-4">
            SOFTWARE ENGINEER / AI ENTHUSIAST
          </p>

          <h1 className="text-5xl font-bold tracking-tight mb-6">
            Building things
            <br />
            that solve problems.
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed">
            I'm Mainak, a software developer interested
            in backend engineering, distributed systems
            and artificial intelligence.
          </p>

          <div className="flex gap-5 mt-8 text-sm">
            <a href="https://github.com/" className="underline">
              GitHub
            </a>
            <a href="https://linkedin.com/" className="underline">
              LinkedIn
            </a>
            <a href="mailto:your-email@example.com" className="underline">
              Email
            </a>
          </div>
        </section>

        <section id="projects" className="mb-24">
          <h2 className="text-2xl font-semibold mb-8">
            Selected Projects
          </h2>

          <div className="space-y-8">
            <article>
              <h3 className="font-semibold">
                Project One
              </h3>
              <p className="text-gray-600 mt-2">
                A short explanation of what the project
                does and the problem it solves.
              </p>
            </article>

            <article>
              <h3 className="font-semibold">
                Project Two
              </h3>
              <p className="text-gray-600 mt-2">
                Describe the interesting engineering
                decisions behind this project.
              </p>
            </article>
          </div>
        </section>

        <section id="about" className="mb-24">
          <h2 className="text-2xl font-semibold mb-4">
            About
          </h2>
          <p className="text-gray-600 leading-relaxed">
            I enjoy understanding how software systems
            work under the hood, experimenting with new
            technologies and building useful tools.
          </p>
        </section>

        <footer id="contact" className="border-t pt-8">
          <p className="text-sm text-gray-500">
            Let's build something interesting.
          </p>
        </footer>

      </div>
    </main>
  );
}
