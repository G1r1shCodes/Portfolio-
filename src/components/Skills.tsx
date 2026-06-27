export default function Skills() {
  const courses = [
    {
      title: "Core Programming",
      subtitle: "LANGUAGES",
      desc: "Strong foundation in computer science fundamentals, OOP, data structures, and problem-solving using Python and C++.",
      tag: "PROFICIENT",
      tagColor: "bg-[#22C55E]",
      image: "/codedex/python-animated.gif",
      href: "#projects"
    },
    {
      title: "Data Science & Analysis",
      subtitle: "ML & DATA",
      desc: "Experience building models, analyzing datasets, and uncovering patterns with NumPy, Pandas, Scikit-learn, and Matplotlib.",
      tag: "INTERMEDIATE",
      tagColor: "bg-[#FACC15]",
      image: "/codedex/css-course-banner.gif",
      href: "#projects"
    },
    {
      title: "Computer Vision",
      subtitle: "DEEP LEARNING",
      desc: "Training deep neural networks using PyTorch & TensorFlow. Specialized in object recognition models like YOLO and ConvNeXt.",
      tag: "ADVANCED",
      tagColor: "bg-[#EF4444]",
      image: "/codedex/html-parralax-combined.gif",
      href: "#projects"
    },
    {
      title: "Generative AI Apps",
      subtitle: "AI & LLMs",
      desc: "Building next-gen intelligent applications using RAG pipelines, LangChain, Vector Databases, and OpenAI APIs.",
      tag: "ADVANCED",
      tagColor: "bg-[#EF4444]",
      image: "/codedex/github-copilots.gif",
      href: "#projects"
    },
    {
      title: "Scalable Backends",
      subtitle: "APIs & SERVERS",
      desc: "Designing and building fast, reliable REST APIs using FastAPI, Node.js, and robust relational databases.",
      tag: "INTERMEDIATE",
      tagColor: "bg-[#FACC15]",
      image: "/codedex/javascript-course-banner.gif",
      href: "#projects"
    },
    {
      title: "My Journey",
      subtitle: "EXPERIENCE",
      desc: "Explore my professional journey, hackathon wins, continuous learning, and future goals across the coding universe.",
      tag: "EXPLORE",
      tagColor: "bg-[#00D4FF]",
      image: "/codedex/worldmap.png",
      href: "#about",
      specialLayout: true
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 bg-[#020617]" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
      <div className="max-w-6xl mx-auto">
        
        {/* Header matching Codedex style */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Explore My Projects & Skillset
          </h2>
          <p className="text-lg text-gray-400 font-medium max-w-2xl mx-auto">
            A collection of my technical skills, personal projects, and continuous journey in software development.
          </p>
        </div>

        {/* Tags filter placeholder */}
        <div className="flex flex-wrap gap-4 mb-10 justify-center">
          <button className="bg-[#1E293B] text-white px-6 py-2 rounded-full font-bold text-sm hover:bg-[#334155] transition-colors border border-gray-700">All Projects</button>
          <button className="bg-[#1E293B] text-white px-6 py-2 rounded-full font-bold text-sm hover:bg-[#334155] transition-colors border border-gray-700">Frontend</button>
          <button className="bg-[#1E293B] text-white px-6 py-2 rounded-full font-bold text-sm hover:bg-[#334155] transition-colors border border-gray-700">Backend</button>
          <button className="bg-[#1E293B] text-white px-6 py-2 rounded-full font-bold text-sm hover:bg-[#334155] transition-colors border border-gray-700">AI & Machine Learning</button>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {courses.map((course, idx) => (
            <div key={idx} className="group cursor-pointer">
              <a href={course.href} className="block relative h-full">
                {/* 3D Bottom Card (Shadow) - Made lighter so it shows on dark bg */}
                <div className={`absolute inset-0 rounded-2xl transform translate-y-2 translate-x-1 group-hover:translate-y-4 group-hover:translate-x-2 transition-transform duration-300 ${course.specialLayout ? 'bg-[#FACC15]' : 'bg-[#334155]'}`}></div>
                
                {/* 3D Top Card */}
                <div className={`relative h-full border-[3px] border-[#0F172A] rounded-2xl flex flex-col overflow-hidden transform group-hover:-translate-y-2 group-hover:-translate-x-1 transition-transform duration-300 ${course.specialLayout ? 'bg-[#0F172A] text-white' : 'bg-[#0F172A] text-white'}`}>
                  
                  {course.specialLayout ? (
                    <div className="p-8 flex-1 flex flex-col items-center justify-center text-center">
                       <img src={course.image} alt="World Map" className="w-32 h-32 object-contain mb-6 drop-shadow-xl" style={{ imageRendering: 'pixelated' }} />
                       <h3 className="text-3xl font-extrabold text-[#FACC15] mb-4 tracking-tight">{course.title}</h3>
                       <p className="text-gray-300 font-medium leading-relaxed mb-8">{course.desc}</p>
                       <div className={`inline-flex items-center px-4 py-1.5 rounded-full border-2 border-white ${course.tagColor}`}>
                         <span className="text-[10px] font-black text-[#0F172A] tracking-wider uppercase">{course.tag}</span>
                       </div>
                    </div>
                  ) : (
                    <>
                      {/* Image Container */}
                      <div className="h-[200px] w-full border-b-[3px] border-[#0F172A] bg-gray-100 overflow-hidden relative">
                        <img 
                          src={course.image} 
                          alt={course.title} 
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      
                      {/* Content Container */}
                      <div className="p-6 flex-1 flex flex-col">
                        <p className="text-gray-400 font-bold text-xs uppercase tracking-widest mb-1">{course.subtitle}</p>
                        <h3 className="text-2xl font-extrabold text-white mb-3">{course.title}</h3>
                        <p className="text-gray-300 font-medium leading-relaxed flex-1">
                          {course.desc}
                        </p>
                        
                        {/* Stats/Tag Container */}
                        <div className="mt-6 flex items-center">
                          <div className={`inline-flex items-center px-3 py-1 rounded-full border-2 border-transparent ${course.tagColor}`}>
                            <span className="text-[10px] font-black text-[#0F172A] tracking-wider uppercase">{course.tag}</span>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
