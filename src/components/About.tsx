export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 bg-cream">
      <div className="max-w-5xl mx-auto">
        <div className="reveal text-center mb-12">
          <h2 className="font-pixel text-2xl sm:text-3xl text-void inline-block bg-sun px-6 py-2 brutal-border brutal-shadow-sm">CHARACTER PROFILE</h2>
        </div>

        <div className="reveal flex flex-col lg:flex-row gap-8">
          {/* Left: Info */}
          <div className="flex-1 card p-6 sm:p-8 rounded-none">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-shrink-0">
                <img src="https://z-cdn-media.chatglm.cn/files/06394323-3d6b-40e3-ac60-e8fcc1e698dd.jpg?auth_key=1882511861-cd456e3774c745ed851339001f81e692-0-d02259c0bcebb682bdd1d3731fb9d5e1" alt="Girish Kumar Yadav" className="w-20 h-20 object-cover" style={{ border: '3px solid #000000', boxShadow: '4px 4px 0px #000000', borderRadius: '0px' }} />
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-void">Girish Kumar Yadav</h3>
                <p className="font-pixel text-xs text-ice" style={{ color: '#0097b2' }}>CS Student · AI & ML</p>
              </div>
            </div>
            
            <p className="text-void leading-relaxed mb-6 font-medium">
              I specialize in <span className="bg-sun px-1 font-bold">Artificial Intelligence</span> and <span className="bg-ice px-1 font-bold">Machine Learning</span>, developing intelligent systems — from LLM applications and RAG pipelines to computer vision for wildlife conservation. I turn ideas into practical solutions.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="badge bg-ice text-void">Python</span>
              <span className="badge bg-hot text-white">PyTorch</span>
              <span className="badge bg-mint text-void">FastAPI</span>
              <span className="badge bg-sun text-void">LLMs</span>
              <span className="badge bg-ice text-void">C++</span>
              <span className="badge bg-hot text-white">RAG</span>
              <span className="badge bg-mint text-void">NLP</span>
            </div>

            <p className="font-pixel text-[10px] text-gray-500 mb-3">// currently_training:</p>
            <div className="flex flex-wrap gap-2">
              <span className="badge bg-white text-void">RAG Workflows</span>
              <span className="badge bg-white text-void">LangChain</span>
              <span className="badge bg-white text-void">AI Agents</span>
              <span className="badge bg-white text-void">AWS</span>
              <span className="badge bg-white text-void">Docker</span>
            </div>
          </div>

          {/* Right: Yellow Stats Card */}
          <div className="w-full lg:w-80 flex-shrink-0 bg-sun brutal-border brutal-shadow-lg p-6 rounded-none flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="iconify" data-icon="lucide:graduation-cap" data-width="22"></span>
                <h3 className="font-pixel text-xs">UNIVERSITY</h3>
              </div>
              <p className="font-extrabold text-xl">IILM University</p>
              <p className="text-sm font-semibold opacity-70">Greater Noida, India</p>
              
              <div className="mt-6 space-y-0">
                <div className="flex justify-between items-center py-3 border-b-3 border-void" style={{ borderBottom: '3px solid #000' }}>
                  <span className="font-pixel text-[10px] font-bold">DURATION</span>
                  <span className="font-mono text-sm font-extrabold">2023 - 2027</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b-3 border-void" style={{ borderBottom: '3px solid #000' }}>
                  <span className="font-pixel text-[10px] font-bold">CGPA</span>
                  <span className="font-pixel text-2xl">9.2/10</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-pixel text-[10px] font-bold">MAJOR</span>
                  <span className="font-pixel text-[10px] font-bold text-right leading-tight">AI & MACHINE<br/>LEARNING</span>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-3" style={{ borderTop: '3px solid #000' }}>
              <p className="font-mono text-[10px] font-bold opacity-50">B.TECH CSE — AI & ML</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
