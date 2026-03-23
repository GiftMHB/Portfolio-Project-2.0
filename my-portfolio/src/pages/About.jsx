export default function About() {
  return (
    <section id="about" className="pb-15 bg-linear-to-b from-black via-gray-900 to-gray-800 text-white ">

      <div className=" text-black font-bold flex items-center justify-center mb-8">
        <h2 className="text-4xl font-bold text-white pr-8">About Me</h2>
      </div> 

      <div className="px-4 md:-20">

        <div className="  bg-gray-800/60 border border-yellow-400/20 rounded-2xl p-8">
          <p className="text-lg text-white">
            I am a software developer with a strong interest in building clean, efficient, and user-focused applications. I am currently a final-year Computer Science student at the University of Pretoria, where I have developed a solid foundation in algorithms, systems, and software engineering principles. I enjoy tackling complex problems, exploring new technologies, and translating ideas into practical solutions. My goal is to continue growing as a software engineer while contributing to projects that are both impactful and thoughtfully designed.
          </p>

          {/* <a href="" className="mt-4 text-yellow-400 font-bold group">
            Find out more
          </a> */}
        </div>

      </div>

      <div className=" text-black font-bold  flex items-center justify-center rounded-r-lg mt-16">
        <h2 className="text-4xl font-bold text-white pr-8">What I Do</h2>
      </div>

      <div id="cards" className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-8">
        <div className="bg-gray-800/60 border border-yellow-400/20 rounded-2xl p-6 hover:border-yellow-400/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-yellow-400/10 transition-all duration-300">
          <h3 className="text-xl font-bold mb-2">Web Development</h3>
          <p className="text-white">
            I build responsive and user-friendly web applications using modern technologies like React, Node.js, and Express.
          </p>
        </div>

        <div className=" bg-gray-800/60 border border-yellow-400/20 rounded-2xl p-6 hover:border-yellow-400/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-yellow-400/10 transition-all duration-300">
          <h3 className="text-xl font-bold mb-2">Mobile Development</h3>
          <p className="text-white">
            I create mobile applications using frameworks like React Native, ensuring a seamless experience across both iOS and Android platforms.
          </p>
        </div>

        <div className="bg-gray-800/60 border border-yellow-400/20 rounded-2xl p-6 hover:border-yellow-400/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-yellow-400/10 transition-all duration-300">
          <h3 className="text-xl font-bold mb-2">Data Science</h3>
          <p className="text-white">
            I analyze and visualize data using Python libraries such as Pandas, Matplotlib, and Seaborn to derive insights and inform decision-making.
          </p>
        </div>
      </div>

    </section>
  );
}
