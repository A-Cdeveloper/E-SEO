import Image from "next/image";
import logo from "../../images/LOGO.png";
import Link from "next/link";

const Logo = ({ isHomePage }: { isHomePage: boolean }) => {
  return (
    <Link href="/">
      <Image
        src={logo}
        alt="logo"
        width={isHomePage ? 400 : 250}
        height={isHomePage ? 400 : 250}
        className="mx-auto md:mx-0"
      />
    </Link>
  );
};

export default Logo;
