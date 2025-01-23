import Logo from "../_components/Logo";
import Image from "next/image";
import ruka from "../../images/Ruka.png";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GENERALNI ŠTRAJK",
  description: "GENERALNI ŠTRAJK",
};

export default function Home() {
  return (
    <div className="flex flex-col h-auto justify-center items-start text-center mt-[20%]">
      <div className="w-[300px] text-center mx-auto mb-[50px]">
        <Logo isHomePage={true} />
      </div>
      <h1 className="text-[30px] lg:text-[60px] font-bold uppercase w-full">
        GENERALNI ŠTRAJK
      </h1>
      <p className="text-2xl text-center w-full mt-5">Petak 24.01.2025.</p>
      <Image
        src={ruka}
        alt="logo"
        width={450}
        height={300}
        className="mx-auto"
      />
    </div>
  );
}
