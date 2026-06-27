export default function Club() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 bg-[#FAFAFA]" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight mb-4">
          Let's Work Together
        </h2>
        <p className="text-lg text-gray-500 font-medium mb-12">
          Open to new opportunities, collaborations, and freelance projects.
        </p>
        
        <div className="bg-white border-[3px] border-[#0F172A] shadow-[8px_8px_0_#0F172A] rounded-3xl p-8 sm:p-12 mb-12 text-left">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
            {/* Perk 1 */}
            <div className="flex gap-4">
              <div className="w-12 h-12 flex-shrink-0 bg-yellow-100 rounded-xl flex items-center justify-center border-2 border-[#0F172A]">
                 <span className="iconify text-2xl text-yellow-500" data-icon="lucide:star"></span>
              </div>
              <div>
                <h4 className="font-extrabold text-lg text-[#0F172A] mb-1">Full-Stack Expertise</h4>
                <p className="text-sm text-gray-600 font-medium">Delivering complete, production-ready web and mobile applications.</p>
              </div>
            </div>
            
            {/* Perk 2 */}
            <div className="flex gap-4">
              <div className="w-12 h-12 flex-shrink-0 bg-blue-100 rounded-xl flex items-center justify-center border-2 border-[#0F172A]">
                 <span className="iconify text-2xl text-blue-500" data-icon="lucide:bot"></span>
              </div>
              <div>
                <h4 className="font-extrabold text-lg text-[#0F172A] mb-1">AI Integration</h4>
                <p className="text-sm text-gray-600 font-medium">Implementing state-of-the-art LLMs and machine learning features.</p>
              </div>
            </div>
            
            {/* Perk 3 */}
            <div className="flex gap-4">
              <div className="w-12 h-12 flex-shrink-0 bg-green-100 rounded-xl flex items-center justify-center border-2 border-[#0F172A]">
                 <span className="iconify text-2xl text-green-500" data-icon="lucide:zap"></span>
              </div>
              <div>
                <h4 className="font-extrabold text-lg text-[#0F172A] mb-1">Fast Delivery</h4>
                <p className="text-sm text-gray-600 font-medium">Agile development with quick turnaround times and regular updates.</p>
              </div>
            </div>
            
            {/* Perk 4 */}
            <div className="flex gap-4">
              <div className="w-12 h-12 flex-shrink-0 bg-purple-100 rounded-xl flex items-center justify-center border-2 border-[#0F172A]">
                 <span className="iconify text-2xl text-purple-500" data-icon="lucide:code-2"></span>
              </div>
              <div>
                <h4 className="font-extrabold text-lg text-[#0F172A] mb-1">Clean Code</h4>
                <p className="text-sm text-gray-600 font-medium">Maintainable, well-documented, and thoroughly tested codebases.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 flex justify-center">
            <a href="mailto:contact@example.com" className="bg-[#FACC15] text-[#0F172A] font-extrabold text-lg py-4 px-12 border-[3px] border-[#0F172A] rounded-xl shadow-[0_6px_0_#D97706] hover:translate-y-[6px] hover:shadow-none transition-all inline-block">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
