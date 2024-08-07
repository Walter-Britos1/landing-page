export default function WelcomeSection() {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./src/assets/background.jpg')",
      }}
      className='bg-welcome-bg-overlay bg-cover bg-center bg-fixed h-screen flex items-center justify-center flex-col text-center p-6'
    >
      <h1 className='text-white text-3xl mt-[-65px] sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-sans'>
        Welcome to Delicious Food
      </h1>
      <p className='text-white text-sm sm:text-base md:text-lg lg:text-xl font-merriweather'>
        Discover our wide variety of fresh, local, <br />
        and sustainably sourced food options.
        Enjoy our delicious treats and indulge in the <br />
        best in our culinary world.
      </p>
      <button className='bg-transparent border border-white rounded-full px-8 py-3 text-lg text-white font-semibold hover:bg-white hover:text-black transition duration-300 mt-10 min-w-[200px]'>
        Menu
      </button>
    </div>
  );
}
