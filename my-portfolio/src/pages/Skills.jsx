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

  const content = {
    tab1: (
      <div>
        <ul className="list-disc list-inside text-white">
          <li>Java</li>
          <li>Python</li>
          <li>JavaScript</li>
          <li>C++</li>
          <li>SQL</li>
        </ul>
      </div>
    ),
    tab2: (
      <div>
        <ul className="list-disc list-inside text-white">
          <li>React / Vite</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>Angular</li>
          <li>WebSockets</li>
          <li>REST APIs</li>
        </ul>
      </div>
    ),
    tab3: (
      <div>
        <ul className="list-disc list-inside text-white">
          <li>MySQL</li>
          <li>MongoDB</li>
        </ul>
      </div>
    ),
    tab4: (
      <div>
        <ul className="list-disc list-inside text-white">
          <li>Git & GitHub</li>
          <li>Docker</li>
          <li>VS Code</li>
          <li>Postman</li>
          <li>Figma</li>
        </ul>
      </div>
    ),
    tab5: (
      <div>
        <ul className="list-disc list-inside text-white">
          <li>Data Structures & Algorithms</li>
          <li>Object-Oriented Programming</li>
          <li>Software Design Principles</li>
          <li>Networking Fundamentals</li>
          <li>Concurrent Programming</li>
        </ul>
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
        <div className="flex flex-wrap border-b">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-4 py-2 font-semibold ${activeTab === tab.id ? "border-b-2 border-yellow-400" : "text-gray-500"}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        {/* for content */}
        <div>{content[activeTab]}</div>
      </div>
    </section>
  );
}
