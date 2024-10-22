const Navbar = () => {
  return (
    <nav className="flex justify-between items-center max-w-[900px] mx-auto w-full ">
      <a href="/">Escape</a>
      <ul className="md:flex gap-8 hidden">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Categories</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
