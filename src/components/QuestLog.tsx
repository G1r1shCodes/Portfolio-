const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hover:text-void transition-colors cursor-pointer">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hover:text-void transition-colors cursor-pointer">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

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
            <div className="h-48 bg-sun relative brutal-border border-l-0 border-r-0 border-t-0 p-4 flex items-center justify-center">
              <img src="/images/lexscan.png" alt="LexScan" className="w-full h-full object-contain" />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <span className="badge bg-sun text-void">★ LEGENDARY</span>
                <div className="flex gap-3 text-gray-500">
                  <a href="https://github.com/G1r1shCodes/AI-Contract-Risk-Highlighter" target="_blank" rel="noopener noreferrer" title="GitHub Repository">
                    <GithubIcon />
                  </a>
                  <a href="https://ai-contract-risk-highlighter.vercel.app/" target="_blank" rel="noopener noreferrer" title="Live Demo">
                    <ExternalLinkIcon />
                  </a>
                </div>
              </div>
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
            <div className="h-48 bg-mint relative brutal-border border-l-0 border-r-0 border-t-0 p-4 flex items-center justify-center">
              <img src="/images/pathshala.png" alt="PathShala AI" className="w-full h-full object-contain" />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <span className="badge bg-mint text-void">★ EPIC</span>
                <div className="flex gap-3 text-gray-500">
                  <a href="https://github.com/G1r1shCodes/PathShala_AI" target="_blank" rel="noopener noreferrer" title="GitHub Repository">
                    <GithubIcon />
                  </a>
                  <a href="https://github.com/G1r1shCodes/PathShala_AI/releases/tag/v1.1.0" target="_blank" rel="noopener noreferrer" title="App Release (v1.1.0)">
                    <ExternalLinkIcon />
                  </a>
                </div>
              </div>
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
            <div className="h-48 bg-ice relative brutal-border border-l-0 border-r-0 border-t-0 p-4 flex items-center justify-center" style={{ background: '#00D4FF' }}>
              <img src="/images/elephant.png" alt="Elephant Re-ID" className="w-full h-full object-contain" />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <span className="badge text-void" style={{ background: '#00D4FF' }}>★ EPIC</span>
                <div className="flex gap-3 text-gray-500">
                  <a href="https://github.com/G1r1shCodes/Elephant_Identification" target="_blank" rel="noopener noreferrer" title="GitHub Repository">
                    <GithubIcon />
                  </a>
                </div>
              </div>
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
            <div className="h-48 bg-hot relative brutal-border border-l-0 border-r-0 border-t-0 p-4 flex items-center justify-center">
              <img src="/images/insightflow.png" alt="InsightFlow" className="w-full h-full object-contain" />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <span className="badge bg-hot text-white">★ RARE</span>
                <div className="flex gap-3 text-gray-500">
                  <a href="https://github.com/G1r1shCodes/InsightFlow" target="_blank" rel="noopener noreferrer" title="GitHub Repository">
                    <GithubIcon />
                  </a>
                </div>
              </div>
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
