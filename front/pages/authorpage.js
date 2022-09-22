import React from "react";
import Author from "../ui/components/Author";
import MenuMobile from "../ui/components/MenuMobile";

export default function authorPage() {
  return (
    <div className="p-2 md:32 lg:48">
      <MenuMobile />
      <Author />
    </div>
  );
}
