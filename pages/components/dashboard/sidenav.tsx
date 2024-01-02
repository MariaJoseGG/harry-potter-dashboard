import Link from "next/link";
import Image from "next/image";
import NavLinks from "./nav-links";

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-30 items-end justify-start rounded-md p-4 bg-jambalaya-800"
        href="/"
      >
        <div className="flex flex-row items-center leading-none w-24 sm:w-32 text-white">
          <Image
            src="/Hogwarts-Logo.png"
            alt="Logo de Hogwarts"
            width={200}
            height={200}
            priority={true}
          />
          <p className="invisible sm:visible text-base text-[#fff] font-semibold">Mundo Hogwarts</p>
        </div>
      </Link>
      <div className="grid grid-cols-4 gap-1 sm:grid-cols-1">
        <NavLinks />
      </div>
    </div>
  );
}