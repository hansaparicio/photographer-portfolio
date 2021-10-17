import React from "react";
import {HeartIcon} from "@heroicons/react/solid";

export function SideBody() {
  return <div className="flex flex-col max-w-1/4 text-white gap-y-4 font-bold">
    <h1 className="text-3xl">Hello!</h1>
    <h1 className="text-3xl">I am Mayank.</h1>
    <h1 className="text-3xl flex flex-row justify-start	items-center gap-4">I <HeartIcon className="h-5 w-5 text-red-500"/> to take photos.</h1>
    <span className="text-base font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Integer malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Euismod in pellentesque massa placerat. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper.</span>
  </div>;
}
