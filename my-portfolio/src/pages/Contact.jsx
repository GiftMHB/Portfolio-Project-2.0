import React, {useRef} from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact(){

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(

    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    form.current,
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  )
    .then(
      ()=>{
        alert("Message sent successfully")
        form.current.reset();
      },
      (error) => {
        alert("failed to sent message, please try again.",error.text);
      }
    )
  }
  return (
    <section id="contact" className="py-20 bg-linear-to-b from-gray-800 via-gray-900 to-gray-800 text-white pt-8 flex iteams-center justify-center">
    
      {/* <div className=" text-black font-bold flex items-center justify-center mb-8">
        <h2 className="text-4xl font-bold text-white pr-8">Contact Me</h2>
      </div>   */}

      <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl mx-auto px-6">
        <div className="flex-1 flex flex-col justify-between" >
          <h3 className="text-2xl font-bold text-center">Contact info</h3>

          <p>Feel free to reach out. I am always excited to collaborate, explore new opportunities, and work on meaningful projects together</p>

          <div className="space-y-1">
            <h2 className="text-yellow-400 font-semibold">Address</h2>
             <p className=" text-gray-400">Pretoria, Hatfield</p>
            <h2 className="text-yellow-400 font-semibold">Phone</h2>
            <p className="text-gray-400">+27 81 303 6172</p>
            <h2 className="text-yellow-400 font-semibold">Email</h2>
            <p className="text-gray-400"><a href="mailto:giftmohuba159@email.com" className=" hover:underline ">giftmohuba159@email.com</a></p>
          </div>

          <div className="flex gap-5 pt-4 text-xl">
            <a href="https://github.com/GiftMHB" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-gray-400 hover:text-yellow-400 transition" />
            </a>

            <a href="https://www.linkedin.com/in/gift-mohuba-67097b23b/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-gray-400 hover:text-yellow-400 transition" />
            </a>
          </div>

        </div>
        
        <div className="flex-1 bg-gray-800/60 border border-yellow-400/20 rounded-2xl p-8 space-y-4 ">
          <h3 className="text-2xl font-bold text-center">Let's connect!</h3>
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input className="w-full bg-transparent border-b border-gray-600 focus:border-yellow-400 outline-none py-2 text-white placeholder-gray-500 transition-colors duration-200" 
            type="text" name="user_name" required placeholder="Your name" />

            <label>Email</label>
            <input className="w-full bg-transparent border-b border-gray-600 focus:border-yellow-400 outline-none py-2 text-white placeholder-gray-500 transition-colors duration-200"
            type="email" name="user_email" required placeholder="Your email" />

            <label>Subject</label>
            <input className="w-full bg-transparent border-b border-gray-600 focus:border-yellow-400 outline-none py-2 text-white placeholder-gray-500 transition-colors duration-200"
            type="subject" name="subject" required placeholder="Your subject" />

            <label>Message</label>
            <textarea className="w-full bg-transparent border-b border-gray-600 focus:border-yellow-400 outline-none py-2 text-white placeholder-gray-500 transition-colors duration-200"
            name="message" rows="4" required placeholder="Your message"></textarea>

            <button type="submit" className="w-full py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-yellow-400/30 transition-all duration-200 active:scale-95">
              Send Message
            </button>
          </form>
        </div>
        
      </div>

    </section>
  );
}