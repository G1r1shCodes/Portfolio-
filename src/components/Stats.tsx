export default function Stats() {
  return (
    <section className="py-24 px-4 sm:px-6 bg-[#0F172A] text-white" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">Impact & Open Source</h2>
          <p className="text-lg text-gray-400 font-medium">Building software that scales and contributing to the global developer community.</p>
        </div>



        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-t-2 border-gray-800 pt-16">
          <div>
            <p className="text-5xl font-extrabold text-[#FACC15] mb-2 tracking-tight">10K+</p>
            <p className="text-gray-400 font-bold text-sm tracking-widest uppercase">Lines of Code</p>
          </div>
          <div>
            <p className="text-5xl font-extrabold text-[#00D4FF] mb-2 tracking-tight">20+</p>
            <p className="text-gray-400 font-bold text-sm tracking-widest uppercase">Repositories</p>
          </div>
          <div>
            <p className="text-5xl font-extrabold text-[#34D399] mb-2 tracking-tight">5+</p>
            <p className="text-gray-400 font-bold text-sm tracking-widest uppercase">Hackathons</p>
          </div>
          <div>
            <p className="text-5xl font-extrabold text-[#FF6B9D] mb-2 tracking-tight">300+</p>
            <p className="text-gray-400 font-bold text-sm tracking-widest uppercase">Contributions</p>
          </div>
        </div>
      </div>
    </section>
  );
}
