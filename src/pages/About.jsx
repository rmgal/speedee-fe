const About = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Banner */}
      <div
        className="w-full h-60 md:h-80 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('https://music.speedeeinc.com/speedee-banner.webp')" }} 
      >
        <div className="bg-black bg-opacity-50 w-full h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">About Us</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-10 text-gray-800 space-y-6">
        <p data-start="175" data-end="411">Speedee Music is a <strong data-start="194" data-end="227">family-owned, US-run business</strong> driven by a passion for providing a <strong data-start="264" data-end="296">positive customer experience</strong>. We are committed to delivering each customer the <strong data-start="347" data-end="410">highest standard of service with a friendly, personal touch</strong>.</p>
        <p data-start="413" data-end="722">We believe there&rsquo;s a bit of <strong data-start="441" data-end="463">music in all of us</strong>. Guided by this mantra, we have developed <strong data-start="506" data-end="548">quality musical instrument accessories</strong> to support your journey &ndash; whether you&rsquo;re learning your first notes or performing as a seasoned pro. Our products are thoughtfully designed to suit <strong data-start="696" data-end="721">players of all levels</strong>.</p>
        <p data-start="724" data-end="922">If you have any questions or encounter any issues with your order, please don&rsquo;t hesitate to reach out. As a family-run business, we pride ourselves on ensuring that <strong data-start="889" data-end="921">you are always taken care of</strong>.</p>
        <p data-start="924" data-end="990">Let <strong data-start="928" data-end="945">Speedee Music</strong> be a part of your <strong data-start="964" data-end="989">musical journey today</strong>.</p>
      </div>
    </div>
  );
};

export default About;
