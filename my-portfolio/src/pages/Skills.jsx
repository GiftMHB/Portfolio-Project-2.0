import { useState } from "react";

export default function Skills() {
  const [activeTab, setActiveTab] = useState("tab1");

  const tabs = [
    { id: "tab1", label: "Programming Languages" },
    { id: "tab2", label: "Frameworks & Technologies" },
    { id: "tab3", label: "Databases" },
    { id: "tab4", label: "Tools & Platforms" },
    { id: "tab5", label: "Modules" },
  ];

  const [openYear, setOpenYear] = useState(null);

    const years = [
    { year: "2023", title: "First year", desc: "Introduced to OOP, data structures and core CS fundamentals. Built the foundation for everything that followed." },
    { year: "2024", title: "Repeat year 1", desc: "Faced a setback with COS 151 but came back stronger. This year taught me resilience and how to learn from failure." },
    { year: "2025", title: "Second year", desc: "Dived into databases, networking, concurrency and software modelling. Complexity increased, so did confidence." },
    { year: "2026", title: "Final year", desc: "Capstone software engineering project, security, compilers and AI. Bringing it all together." },
  ];

  const content = {
    tab1: (
      <div className="flex flex-wrap gap-3" >
        {["java","Python","javaScript","C++","SQL"].map(skill =>(
          <span key={skill} className="px-4 py-2 bg-gray-800 text-yellow-400 border border-yellow-400/30 rounded-full text-sm font-medium hover:bg-yellow-400 hover:text-black transition-all duration-200">{skill}</span>
        ))}
      </div>
    ),
    tab2: (
      <div className="flex flex-wrap gap-3">
        {["React / Vite", "Node.js", "Express", "Angular", "WebSockets","REST APIs"].map(skill => (
          <span key={skill} className="px-4 py-2 bg-gray-800 text-yellow-400 border border-yellow-400/30 rounded-full text-sm font-medium hover:bg-yellow-400 hover:text-black transition-all duration-200">
            {skill}
          </span>
        ))}
      </div>
    ),
    tab3: (
      <div className="flex flex-wrap gap-3">
        {["MySQL", "MongoDB"].map(skill => (
          <span key={skill} className="px-4 py-2 bg-gray-800 text-yellow-400 border border-yellow-400/30 rounded-full text-sm font-medium hover:bg-yellow-400 hover:text-black transition-all duration-200">
            {skill}
          </span>
        ))}
      </div>
    ),
    tab4: (
      <div className="flex flex-wrap gap-3">
        {["Git & GitHub", "Docker", "VS Code", "Postman", "Figma"].map(skill => (
          <span key={skill} className="px-4 py-2 bg-gray-800 text-yellow-400 border border-yellow-400/30 rounded-full text-sm font-medium hover:bg-yellow-400 hover:text-black transition-all duration-200">
            {skill}
          </span>
        ))}

      </div>
    ),
    tab5: (
      <div className="flex flex-wrap gap-3">
        {["Data Structures & Algorithms", "Object Oriented Programming", "Software Design Principles", "Networking Fundamentals", "Concurrent Programming"].map(skill => (
          <span key={skill} className="px-4 py-2 bg-gray-800 text-yellow-400 border border-yellow-400/30 rounded-full text-sm font-medium hover:bg-yellow-400 hover:text-black transition-all duration-200">
            {skill}
          </span>
        ))}
        
      </div>
    ),
  };

  return (
    <section
      id="skills"
      className="min-h-screen bg-linear-to-b from-gray-800 via-gray-900 to-black text-white"
    >
      <div className=" text-black font-bold  flex items-center justify-center">
        <h2 className="text-4xl font-bold text-white pr-8">Skills</h2>
      </div>

      <p className="flex justify-center text-lg text-white mt-4">
        Here are the skills I have developed over the years.
      </p>

      <div className=" rounded-3xl bg-black p-8 mx-10 shadow-xl space-y-5 mt-8">
        {/* for tabs */}
        <div className="flex overflow-x-auto border-b gap-1 no-srollbar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-4 py-2 font-semibold ${activeTab === tab.id ? "border-b-4 border-yellow-400" : "text-gray-500 hover:text-gray-300"}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        {/* for content */}
        <div>{content[activeTab]}</div>
      </div>

      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-9 pt-9">
       
       {years.map(({ year, title, desc }) => (
        <div
          key={year}
          className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-yellow-400/20 hover:border-yellow-400/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-yellow-400/10 transition-all duration-300"
        >
          <span className="text-xs font-semibold text-yellow-400/60 uppercase tracking-wide whitespace-nowrap">UP · BSc CS</span>
          <h3 className="text-yellow-400 text-3xl font-bold mt-1">{year}</h3>
          <h4 className="text-white font-semibold mt-1 text-sm">{title}</h4>
          <button
            onClick={() => setOpenYear(openYear === year ? null : year)}
            className="text-xs text-gray-500 mt-4 hover:text-yellow-400 transition-colors duration-200 flex items-center gap-1"
          >
            {openYear === year ? "Show less " : "Read more "}
          </button>
          {openYear === year && (
            <p className="text-gray-400 text-xs mt-3 leading-relaxed border-t border-yellow-400/10 pt-3">
              {desc}
            </p>
          )}
        </div>
      ))}

      </div>
    </section>
  );
}
