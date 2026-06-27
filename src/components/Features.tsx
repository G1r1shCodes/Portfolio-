export default function Features() {
  return (
    <section className="py-24 px-4 sm:px-6 bg-white overflow-hidden" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight">Engineering Excellence</h2>
        </div>

        {/* Feature 1 */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-32">
          <div className="w-full md:w-1/2 relative">
            <div className="absolute inset-0 bg-blue-100 rounded-full blur-3xl opacity-50 transform -translate-y-8"></div>
            <img src="/codedex/battle.gif" alt="Full-stack expertise" className="w-full h-auto relative z-10" />
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-3xl font-extrabold text-[#0F172A] mb-4">Full-Stack Development</h3>
            <p className="text-lg text-gray-600 leading-relaxed font-medium">
              Building end-to-end applications with modern frameworks. From pixel-perfect React frontends to robust Node.js and FastAPI backends, I bring ideas to life.
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-32">
          <div className="w-full md:w-1/2 relative">
            <div className="absolute inset-0 bg-green-100 rounded-full blur-3xl opacity-50 transform -translate-y-8"></div>
            <img src="/codedex/minesweaper.webp" alt="Build real projects" className="w-full h-auto relative z-10 drop-shadow-xl rounded-xl border border-gray-200" />
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-3xl font-extrabold text-[#0F172A] mb-4">Scalable Architectures</h3>
            <p className="text-lg text-gray-600 leading-relaxed font-medium">
              Designing robust systems with cloud deployment and reliable APIs. Experience integrating AI, optimizing databases, and ensuring production readiness.
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 relative">
            <div className="absolute inset-0 bg-purple-100 rounded-full blur-3xl opacity-50 transform -translate-y-8"></div>
            <img src="/codedex/tekmLsi.gif" alt="Join a community" className="w-[80%] mx-auto h-auto relative z-10 drop-shadow-xl" />
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-3xl font-extrabold text-[#0F172A] mb-4">Open Source Collaboration</h3>
            <p className="text-lg text-gray-600 leading-relaxed font-medium">
              Active contributor to open-source software, participating in hackathons, and constantly sharing knowledge with the global developer community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
