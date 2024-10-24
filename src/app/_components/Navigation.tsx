import NavLink from "./ui/NavLink";

const Navigation = () => {
  return (
    <nav className="mt-3 lg:mt-10 px-3">
      <ul className="flex flex-wrap">
        <NavLink href="/">HOME</NavLink>
        <NavLink href="/about-us">About Us</NavLink>
        <NavLink href="/portfolio">Portfolio</NavLink>
        <NavLink href="/contact">Contact</NavLink>
      </ul>
    </nav>
  );
};

export default Navigation;
