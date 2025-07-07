const About = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Banner */}
      <div
        className="w-full h-60 md:h-80 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('https://music.speedeeinc.com/speedee-banner.webp')" }} 
      >
        <div className="bg-black bg-opacity-50 w-full h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">About Speedee Music</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-10 text-gray-800 space-y-6">
        <p>
          Speedee Music is a US-run business whose utmost passion is positive customer experience.
          We are committed to providing each customer with the highest standard of customer service.
        </p>

        <p>
          We believe that there's a bit of MUSIC in all of us. With this mantra in heart and mind,
          we came up with quality musical instrument accessories to support both your drive in learning
          and love in playing your favorite instruments. Our products are designed to suit all-level
          players – from beginners to pros alike.
        </p>

        <p>
          Please don't hesitate to ask if you have any questions, or any problems with your order.
          We are family owned and operated so you will always get that friendly and personal touch.
          Rest assured, we will always take care of you.
        </p>

        <p>
          Let Speedee Music be a part of your musical journey!
        </p>
      </div>
    </div>
  );
};

export default About;
