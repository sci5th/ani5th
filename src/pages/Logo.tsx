const Logo = () => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center w-full bg-slate-600 p-2 md:p-4 lg:p-6">
        <img
          src="ani5th_Logo_B.svg"
          alt="ani5th_Logo_B"
          className="w-16 md:w-24 lg:w-32 mx-2 md:mx-4"
        />
        <h1 className="text-xl md:text-3xl font-bold text-white whitespace-nowrap px-1 md:px-2">
          ani5th
        </h1>
        <img
          src="ani5th_Logo.svg"
          alt="ani5th_Logo"
          className="w-16 md:w-24 lg:w-32 mx-2 md:mx-4"
        />
      </div>
      {/* <p className="text-white mt-4 text-2xl ml-auto mr-20">
        <Link to="/gsap_to" className="hover:text-blue-300">
          animation_1
        </Link>
      </p> */}
    </div>
  );
};

export default Logo;
