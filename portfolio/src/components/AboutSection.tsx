// src/components/AboutSection.tsx

const AboutSection = () => {
  return (
    <section className="w-full lg:w-1/2 bg-slate-900 text-white p-8 lg:p-16 flex flex-col justify-center">
      <h1 className="text-5xl lg:text-7xl font-black mb-2">Jecinta N.</h1>
      <h2 className="text-xl lg:text-2xl text-gray-400 mb-8">Software Engineer & Product Innovator</h2>
      
      <img 
        src="/jess.jpg" 
        alt="Jecinta N." 
        className="w-48 h-48 rounded-full mx-auto mb-8 object-cover border-4 border-yellow-400 shadow-lg"
      />

      <p className="text-gray-300 mb-12 leading-relaxed text-lg">
        More than just code, I build products. I am a versatile engineer passionate about creating impactful solutions, from scalable backends and intuitive mobile apps to data-driven insights. I thrive where creativity meets logical problem-solving.
      </p>
      
      <a 
        href="/path/to/your/resume.pdf" // <-- IMPORTANT: Add your resume link
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-yellow-400 text-slate-900 text-center font-bold py-3 px-8 rounded-lg hover:bg-yellow-300 transition-colors self-start shadow-lg"
      >
        Download Resume
      </a>
    </section>
  );
};

export default AboutSection;