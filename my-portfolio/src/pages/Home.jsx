import giftImage from '../assets/Gift.jpg';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen bg-linear-to-b from-black via-gray-900 to-black text-white flex items-center justify-center px-6 pt-24">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        {/* image */}
        <div className="flex justify-center">
          <img 
            src={giftImage}
            alt="Gift Mohuba" 
            className="w-70 h-65 rounded-full border-4 border-yellow-400 shadow-lg object-cover"
          />
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
          <div className="flex gap-4 justify-center pt-4 pb-7">
            <a 
              href="#projects" 
              className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition transform hover:scale-105"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 border-2 border-yellow-400 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-400 hover:text-black transition transform hover:scale-105"
            >
              Get in Touch
            </a>
          </div>

        </div>
    </div>
    </section>
  );
}