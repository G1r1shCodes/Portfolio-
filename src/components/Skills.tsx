export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="reveal text-center mb-12">
          <h2 className="font-pixel text-2xl sm:text-3xl text-void inline-block bg-ice px-6 py-2 brutal-border brutal-shadow-sm" style={{ color: '#000' }}>SKILL TREE</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Languages */}
          <div className="reveal card p-6 rounded-none" style={{ borderLeft: '8px solid #00D4FF' }}>
            <h3 className="font-pixel text-sm text-void mb-4 flex items-center gap-2"><span className="iconify" data-icon="lucide:swords" data-width="18"></span> LANGUAGES</h3>
            <div className="flex flex-wrap gap-2">
              <span className="badge text-void" style={{ background: '#00D4FF' }}>Python</span>
              <span className="badge text-void" style={{ background: '#00D4FF' }}>C</span>
              <span className="badge text-void" style={{ background: '#00D4FF' }}>C++</span>
              <span className="badge text-void" style={{ background: '#00D4FF' }}>Java</span>
              <span className="badge text-void" style={{ background: '#00D4FF' }}>JavaScript</span>
              <span className="badge text-void" style={{ background: '#00D4FF' }}>HTML</span>
              <span className="badge text-void" style={{ background: '#00D4FF' }}>CSS</span>
            </div>
          </div>

          {/* ML & Data Science */}
          <div className="reveal card p-6 rounded-none" style={{ borderLeft: '8px solid #FF6B9D' }}>
            <h3 className="font-pixel text-sm text-void mb-4 flex items-center gap-2"><span className="iconify" data-icon="lucide:brain" data-width="18"></span> ML & DATA</h3>
            <div className="flex flex-wrap gap-2">
              <span className="badge text-white" style={{ background: '#FF6B9D' }}>NumPy</span>
              <span className="badge text-white" style={{ background: '#FF6B9D' }}>Pandas</span>
              <span className="badge text-white" style={{ background: '#FF6B9D' }}>Scikit-learn</span>
              <span className="badge text-white" style={{ background: '#FF6B9D' }}>Matplotlib</span>
              <span className="badge text-white" style={{ background: '#FF6B9D' }}>EDA</span>
              <span className="badge text-white" style={{ background: '#FF6B9D' }}>Feature Eng.</span>
            </div>
          </div>

          {/* Deep Learning & CV */}
          <div className="reveal card p-6 rounded-none" style={{ borderLeft: '8px solid #FFD600' }}>
            <h3 className="font-pixel text-sm text-void mb-4 flex items-center gap-2"><span className="iconify" data-icon="lucide:eye" data-width="18"></span> DL & CV</h3>
            <div className="flex flex-wrap gap-2">
              <span className="badge text-void" style={{ background: '#FFD600' }}>PyTorch</span>
              <span className="badge text-void" style={{ background: '#FFD600' }}>TensorFlow</span>
              <span className="badge text-void" style={{ background: '#FFD600' }}>YOLOv7</span>
              <span className="badge text-void" style={{ background: '#FFD600' }}>YOLOv8</span>
              <span className="badge text-void" style={{ background: '#FFD600' }}>ConvNeXt</span>
              <span className="badge text-void" style={{ background: '#FFD600' }}>Computer Vision</span>
            </div>
          </div>

          {/* AI & LLMs */}
          <div className="reveal card p-6 rounded-none" style={{ borderLeft: '8px solid #34D399' }}>
            <h3 className="font-pixel text-sm text-void mb-4 flex items-center gap-2"><span className="iconify" data-icon="lucide:sparkles" data-width="18"></span> AI & LLMS</h3>
            <div className="flex flex-wrap gap-2">
              <span className="badge text-void" style={{ background: '#34D399' }}>RAG</span>
              <span className="badge text-void" style={{ background: '#34D399' }}>LangChain</span>
              <span className="badge text-void" style={{ background: '#34D399' }}>LlamaIndex</span>
              <span className="badge text-void" style={{ background: '#34D399' }}>Vector DB</span>
              <span className="badge text-void" style={{ background: '#34D399' }}>AI Agents</span>
              <span className="badge text-void" style={{ background: '#34D399' }}>Prompt Eng.</span>
            </div>
          </div>

          {/* Backend & APIs */}
          <div className="reveal card p-6 rounded-none" style={{ borderLeft: '8px solid #FF9900' }}>
            <h3 className="font-pixel text-sm text-void mb-4 flex items-center gap-2"><span className="iconify" data-icon="lucide:server" data-width="18"></span> BACKEND</h3>
            <div className="flex flex-wrap gap-2">
              <span className="badge text-void" style={{ background: '#FF9900' }}>FastAPI</span>
              <span className="badge text-void" style={{ background: '#FF9900' }}>REST APIs</span>
              <span className="badge text-void" style={{ background: '#FF9900' }}>Pydantic</span>
            </div>
          </div>

          {/* Databases */}
          <div className="reveal card p-6 rounded-none" style={{ borderLeft: '8px solid #A855F7' }}>
            <h3 className="font-pixel text-sm text-void mb-4 flex items-center gap-2"><span className="iconify" data-icon="lucide:database" data-width="18"></span> DATABASES</h3>
            <div className="flex flex-wrap gap-2">
              <span className="badge text-white" style={{ background: '#A855F7' }}>MySQL</span>
            </div>
          </div>

          {/* Tools & Platforms */}
          <div className="reveal card p-6 rounded-none" style={{ borderLeft: '8px solid #FF3333' }}>
            <h3 className="font-pixel text-sm text-void mb-4 flex items-center gap-2"><span className="iconify" data-icon="lucide:wrench" data-width="18"></span> TOOLS</h3>
            <div className="flex flex-wrap gap-2">
              <span className="badge text-white" style={{ background: '#FF3333' }}>Git</span>
              <span className="badge text-white" style={{ background: '#FF3333' }}>GitHub</span>
              <span className="badge text-white" style={{ background: '#FF3333' }}>VS Code</span>
              <span className="badge text-white" style={{ background: '#FF3333' }}>Streamlit</span>
              <span className="badge text-white" style={{ background: '#FF3333' }}>Figma</span>
              <span className="badge text-white" style={{ background: '#FF3333' }}>Linux</span>
              <span className="badge text-white" style={{ background: '#FF3333' }}>Docker</span>
              <span className="badge text-white" style={{ background: '#FF3333' }}>AWS</span>
            </div>
          </div>

          {/* Core CS */}
          <div className="reveal card p-6 rounded-none" style={{ borderLeft: '8px solid #22C55E' }}>
            <h3 className="font-pixel text-sm text-void mb-4 flex items-center gap-2"><span className="iconify" data-icon="lucide:cpu" data-width="18"></span> CORE CS</h3>
            <div className="flex flex-wrap gap-2">
              <span className="badge text-void" style={{ background: '#22C55E' }}>DSA</span>
              <span className="badge text-void" style={{ background: '#22C55E' }}>OOP</span>
              <span className="badge text-void" style={{ background: '#22C55E' }}>Problem Solving</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
