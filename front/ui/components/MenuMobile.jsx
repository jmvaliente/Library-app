import React from "react";
import Image from "next/image";

function MenuMobile() {
  return (
    <nav className="fixed bottom-0">
      <Image
        loading="lazy"
        className="object-cover object-center"
        alt="Icon Menu"
        src={"/../public/home.png"}
        width={48}
        height={48}
      />
      {/* <ul>
        <li>
          <a>INICIO</a>
        </li>
        <li>
          <a>MI PERFIL</a>
        </li>
      </ul> */}
    </nav>
  );
}

export default MenuMobile;
