import backgroundImage from '../../assets/background.jpg';

export default function ContactSection() {
  return (
    <div 
    style={{
      backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
    }}
     className='bg-welcome-bg-overlay bg-cover bg-center bg-fixed py-16 px-4 mb-[-80px]'>
      <div className='container mx-auto max-w-4xl bg-black bg-opacity-50 p-8 rounded-lg shadow-lg'>
        <h1 className='text-3xl font-bold mb-6 text-center text-white'>
          Contact Us
        </h1>
        <form className='space-y-6'>
          <div className='flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0'>
            <div className='flex-1'>
              <input
                type="text"
                placeholder="Your Name"
                className='w-full p-3 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 text-white'
              />
            </div>
            <div className='flex-1'>
              <input
                type="email"
                placeholder="Your Email"
                className='w-full p-3 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 text-white'
              />
            </div>
          </div>
          <div>
            <textarea
              placeholder="Your Message"
              rows="4"
              className='w-full p-3 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 text-white'
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className='w-full bg-transparent border border-white rounded-full px-8 py-3 text-lg text-white font-semibold hover:bg-white hover:text-black transition duration-300 mt-10 min-w-[200px]'
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
