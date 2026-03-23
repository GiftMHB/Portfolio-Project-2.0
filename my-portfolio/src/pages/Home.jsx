import giftImage from '../assets/Gift.jpg';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen bg-linear-to-b from-black via-gray-900 to-black text-white flex items-center justify-center px-6 pt-24">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        {/* image */}
        <div className="flex justify-center">
          <div className="group">
            <img 
              src={giftImage}
              alt="Gift Mohuba" 
              className="w-70 h-64 md:w-56 md:h-56 rounded-full border-4 border-yellow-400 shadow-lg object-cover
              transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-yellow-400/40"
            />
          </div>
         
        </div>
          
        {/* Home Text */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Hi, I'm <span className="text-yellow-400 animate-pulse">Gift Mohuba</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Passionate about <span className="text-yellow-400 font-semibold">building solutions</span> through clean, efficient code
          </p>
          
          {/* Buttons */}
          <div className="flex gap-4 justify-center pt-4 pb-7 flex-col sm:flex-row items-center">
            <a 
              href="#projects" 
              className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition transform hover:scale-105
              w-full sm:w-auto active:scale-95 hover:-translate-y-1
              hover:shadow-lg hover:shadow-yellow-400/50"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 border-2 border-yellow-400 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-400 hover:text-black transition transform hover:scale-105
              w-full sm:w-auto active:scale-95 hover:-translate-y-1"
            >
              Get in Touch
            </a>
          </div>

        </div>
    </div>
    </section>
  );
}