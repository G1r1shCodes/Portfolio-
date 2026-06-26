export default function QuestLog() {
  return (
    <section id="quests" className="py-20 px-4 sm:px-6 bg-cream">
      <div className="max-w-5xl mx-auto">
        <div className="reveal text-center mb-12">
          <h2 className="font-pixel text-2xl sm:text-3xl text-white inline-block bg-hot px-6 py-2 brutal-border brutal-shadow-sm">QUEST LOG</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* LexScan */}
          <div className="reveal card overflow-hidden rounded-none">
            <div className="h-44 bg-sun relative brutal-border border-l-0 border-r-0 border-t-0">
              <img src="/images/lexscan.png" alt="LexScan" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <span className="badge bg-sun text-void mb-3">★ LEGENDARY</span>
              <h3 className="font-pixel text-xl text-void mb-1">LexScan</h3>
              <p className="font-pixel text-[10px] text-gray-500 mb-4">AI CONTRACT RISK ANALYZER</p>
              <ul className="space-y-2 text-sm font-medium">
                <li className="flex items-start gap-2"><span className="text-void font-bold">▸</span> AI contract analysis with LLaMA 3.3 via Groq API</li>
                <li className="flex items-start gap-2"><span className="text-void font-bold">▸</span> Prompt-based workflows & retrieval pipelines</li>
                <li className="flex items-start gap-2"><span className="text-void font-bold">▸</span> Multi-format OCR (PDF, DOCX, Images)</li>
              </ul>
            </div>
          </div>

          {/* PathShala AI */}
          <div className="reveal card overflow-hidden rounded-none">
            <div className="h-44 bg-mint relative brutal-border border-l-0 border-r-0 border-t-0">
              <img src="/images/pathshala.png" alt="PathShala AI" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <span className="badge bg-mint text-void mb-3">★ EPIC</span>
              <h3 className="font-pixel text-xl text-void mb-1">PathShala AI</h3>
              <p className="font-pixel text-[10px] text-gray-500 mb-4">AI CO-TEACHER FOR RURAL INDIA</p>
              <ul className="space-y-2 text-sm font-medium">
                <li className="flex items-start gap-2"><span className="text-void font-bold">▸</span> Structured multi-grade lesson plans in &lt;15s</li>
                <li className="flex items-start gap-2"><span className="text-void font-bold">▸</span> Single-teacher classroom support (5 grades)</li>
                <li className="flex items-start gap-2"><span className="text-void font-bold">▸</span> Voice-based interaction & WhatsApp delivery</li>
              </ul>
            </div>
          </div>

          {/* Elephant Re-ID */}
          <div className="reveal card overflow-hidden rounded-none">
            <div className="h-44 bg-ice relative brutal-border border-l-0 border-r-0 border-t-0" style={{ background: '#00D4FF' }}>
              <img src="/images/elephant.png" alt="Elephant Re-ID" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <span className="badge text-void mb-3" style={{ background: '#00D4FF' }}>★ EPIC</span>
              <h3 className="font-pixel text-xl text-void mb-1">Elephant Re-ID</h3>
              <p className="font-pixel text-[10px] text-gray-500 mb-4">WILDLIFE CONSERVATION SYSTEM</p>
              <ul className="space-y-2 text-sm font-medium">
                <li className="flex items-start gap-2"><span className="text-void font-bold">▸</span> ConvNeXt-Tiny with 384-dim embeddings</li>
                <li className="flex items-start gap-2"><span className="text-void font-bold">▸</span> Deep metric learning for 259+ identities</li>
                <li className="flex items-start gap-2"><span className="text-void font-bold">▸</span> <span className="font-pixel text-xs bg-sun px-1">92.16%</span> Rank-1 Accuracy</li>
              </ul>
            </div>
          </div>

          {/* InsightFlow */}
          <div className="reveal card overflow-hidden rounded-none">
            <div className="h-44 bg-hot relative brutal-border border-l-0 border-r-0 border-t-0">
              <img src="/images/insightflow.png" alt="InsightFlow" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <span className="badge bg-hot text-white mb-3">★ RARE</span>
              <h3 className="font-pixel text-xl text-void mb-1">InsightFlow</h3>
              <p className="font-pixel text-[10px] text-gray-500 mb-4">AI BUSINESS INTELLIGENCE</p>
              <ul className="space-y-2 text-sm font-medium">
                <li className="flex items-start gap-2"><span className="text-void font-bold">▸</span> Multi-agent research automation</li>
                <li className="flex items-start gap-2"><span className="text-void font-bold">▸</span> RAG pipelines & market analysis</li>
                <li className="flex items-start gap-2"><span className="text-void font-bold">▸</span> AI-powered reporting via Streamlit</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
