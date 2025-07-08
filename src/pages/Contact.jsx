const Contact = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Banner */}
      <div
        className="w-full h-60 md:h-80 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/images/contact-hero.jpg')" }} // replace with your actual hero image path
      >
        <div className="bg-black bg-opacity-50 w-full h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Contact Us</h1>
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-2xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">We'd love to hear from you!</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
