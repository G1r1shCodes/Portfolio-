export default function Journey() {
  return (
    <section id="journey" className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="reveal text-center mb-12">
          <h2 className="font-pixel text-2xl sm:text-3xl text-void inline-block bg-mint px-6 py-2 brutal-border brutal-shadow-sm">JOURNEY</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education */}
          <div className="reveal card p-6 sm:p-8 rounded-none">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-sun brutal-border flex items-center justify-center"><span className="iconify" data-icon="lucide:graduation-cap" data-width="20"></span></div>
              <h3 className="font-pixel text-sm">EDUCATION</h3>
            </div>
            <div className="bg-cream brutal-border p-5 rounded-none mb-6">
              <p className="font-extrabold text-lg text-void mb-1">IILM University</p>
              <p className="font-mono text-xs text-gray-500 mb-3">Greater Noida · 2023 - 2027</p>
              <p className="font-pixel text-xs text-void mb-3">B.Tech CSE — AI & Machine Learning</p>
              <span className="badge bg-sun text-void font-bold">CGPA 9.2/10</span>
            </div>

            <p className="font-pixel text-[10px] text-gray-500 mb-3">// certifications:</p>
            <div className="space-y-2">
              <div className="flex items-center gap-3 p-3 brutal-border bg-cream rounded-none">
                <span className="iconify" data-icon="lucide:cloud" data-width="16" style={{ color: '#FF6B9D' }}></span>
                <div><p className="text-xs font-extrabold">Agentic AI on AWS</p><p className="text-[10px] text-gray-500 font-mono">AWS Training · Dec 2025</p></div>
              </div>
              <div className="flex items-center gap-3 p-3 brutal-border bg-cream rounded-none">
                <span className="iconify" data-icon="lucide:cpu" data-width="16" style={{ color: '#00D4FF' }}></span>
                <div><p className="text-xs font-extrabold">IBM AI Fundamentals</p><p className="text-[10px] text-gray-500 font-mono">IBM · Jul 2025</p></div>
              </div>
              <div className="flex items-center gap-3 p-3 brutal-border bg-cream rounded-none">
                <span className="iconify" data-icon="lucide:code-2" data-width="16" style={{ color: '#34D399' }}></span>
                <div><p className="text-xs font-extrabold">Intro to Machine Learning</p><p className="text-[10px] text-gray-500 font-mono">Kaggle · Sep 2025</p></div>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="reveal card p-6 sm:p-8 rounded-none">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 brutal-border flex items-center justify-center" style={{ background: '#00D4FF' }}><span className="iconify" data-icon="lucide:swords" data-width="20"></span></div>
              <h3 className="font-pixel text-sm">EXPERIENCE</h3>
            </div>

            <div className="bg-cream brutal-border p-5 rounded-none mb-4">
              <p className="font-extrabold text-lg text-void mb-1">Wildlife Institute of India</p>
              <p className="font-pixel text-[10px] mb-3" style={{ color: '#0097b2' }}>RESEARCH INTERN · MAR 2026 – APR 2026</p>
              <ul className="space-y-2 text-sm font-medium">
                <li className="flex items-start gap-2"><span className="font-bold">▸</span> Open-set elephant re-ID using ConvNeXt-Tiny</li>
                <li className="flex items-start gap-2"><span className="font-bold">▸</span> 384-D embeddings for 259+ identities</li>
                <li className="flex items-start gap-2"><span className="font-bold">▸</span> <span className="font-pixel text-xs bg-sun px-1">92.16%</span> Rank-1 & <span className="font-pixel text-xs bg-mint px-1">100%</span> Rank-5 accuracy</li>
              </ul>
            </div>

            <div className="bg-cream brutal-border p-5 rounded-none">
              <p className="font-extrabold text-lg text-void mb-1">IBM SkillBuild</p>
              <p className="font-pixel text-[10px] text-hot mb-3">AI INTERNSHIP PROGRAM</p>
              <ul className="space-y-2 text-sm font-medium">
                <li className="flex items-start gap-2"><span className="font-bold">▸</span> Machine learning fundamentals</li>
                <li className="flex items-start gap-2"><span className="font-bold">▸</span> AI applications in industry contexts</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
