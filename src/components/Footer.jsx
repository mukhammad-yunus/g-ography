import React from "react";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlineTwitter,
} from "react-icons/ai";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="text-white bg-zinc-950 flex flex-col gap-2">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between md:px-20 sm:px-8 px-6 pt-2">
        <p>Follow us on Social Media</p>
        <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
          <a
            className="block hover:text-zinc-400"
            href="https://github.com/mukhammad-yunus"
            target="_blank"
          >
            <AiOutlineGithub fontSize={28} />
          </a>
          <a
            className="block hover:text-zinc-400"
            href="mailto:dr.mukhammadyunus@gmail.com"
            target="_blank"
          >
            <AiOutlineMail fontSize={28} />
          </a>
          <a
            className="block hover:text-zinc-400"
            href=""
            // target="_blank"
          >
            <AiOutlineInstagram fontSize={28} />
          </a>
          <a
            className="block hover:text-zinc-400"
            href=""
            // target="_blank"
          >
            <AiOutlineTwitter fontSize={28} />
          </a>
        </div>
      </div>
      <p className="md:px-20 sm:px-8 px-6 text-sm pt-2">©2023 Copyright Mukhammadyunus</p>
    </footer>
  );
}

export default Footer;
