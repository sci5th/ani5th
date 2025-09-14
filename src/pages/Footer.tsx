const Footer = () => {
  return (
    // Use responsive height
    <footer className="flex w-full h-10 md:h-20 bg-slate-800 text-white p-4 mt-auto items-center justify-center">
      <p className="text-sm md:text-base">
        &copy; {new Date().getFullYear()}
        {/* Use a span for inline text, not a nested p tag */}
        {/* <span className="ml-4 md:ml-6">ani5th</span> */}
      </p>
    </footer>
  );
};

export default Footer;
