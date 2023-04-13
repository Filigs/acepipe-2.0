import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Link from "next/link";
function SocialLinks() {
  return (
    <div className="flex space-x-4">
      <Link
        href="https://www.instagram.com/acepipe.algarve/"
        target="_blank"
        rel="noopener noreferrer"
        className=" text-secondary"
      >
        <FaInstagram className="text-secondary" />
      </Link>
      <Link
        href="https://www.facebook.com/acepipe.algarve/"
        target="_blank"
        rel="noopener noreferrer"
        className=" text-secondary"
      >
        <FaFacebookF className="text-secondary" />
      </Link>
    </div>
  );
}

export default SocialLinks;
