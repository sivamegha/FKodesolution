export default function CTA() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 flex justify-center items-center bg-gradient-to-b from-gray-900 to-black min-h-[400px]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="px-8 md:px-16 py-12 rounded-3xl text-center bg-gradient-to-r from-red-500 to-red-600 transform transition-all duration-300 hover:scale-105" style={{ boxShadow: '0 0 80px rgba(255, 69, 0, 0.8)' }}>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Ready to Start Your Business?
          </h2>
          <p className="text-red-100 mb-8 text-lg">
            Let's transform your idea into a successful business today
          </p>
          <button 
            onClick={scrollToContact}
            className="px-8 py-4 bg-white text-red-600 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 shadow-lg"
          >
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
}
