import Link from "next/link";
import { BiLogoFacebook, BiLogoInstagram } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
export default function Header() {
  return (
    <nav className="">
      <div className="flex pr-20 pl-20 items-center text-white bg-black">
        <Link href="/" className="mr-2 p-4">
          Acceuil
        </Link>
        <Link href="/" className="mr-2 p-4">
          Boutique
        </Link>
        <Link href="/" className="mr-2 p-4">
          Vente en gros
        </Link>
        <Link href="/" className="mr-2 p-4">
          Contactez-nous
        </Link>
        <div className="flex flex-row ml-auto">
          <BiLogoFacebook />
          <BiLogoInstagram />
          <span className="flex flex-row ml-10">
            <BsPerson className="mr-2" />
            <Link href="/">Se connecter</Link>/
            <Link href="/">S'enregister</Link>
          </span>
        </div>
      </div>
    </nav>
  );
}
