import React from "react";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";


type IProps = {
  link: string;
  children?: string;
  icons: JSX.Element;
};

const ContactButton = ({ link, children, icons }: IProps) => {
  return (
    <a
      className=" lg:px-6 px-2 py-2 hover:bg-red-500 bg-orange-400 items-center  text-white transition duration-300 rounded-tr-none rounded-full flex gap-2"
      href={`${link}`}
      target="_blank"
      rel="noreferrer"
    >
      {icons}
      {children}
    </a>
  );
};

export default ContactButton;
