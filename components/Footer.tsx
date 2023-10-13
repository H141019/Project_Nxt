import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer
      className="text-white-800 flex-between body-text w-full gap-y-10 border-t boder-black-400
    bg-black-100 px-20 py-12 max-md:flex-col"
    >
      <p>Copyright © 2023 , Next Project | All Right Reserved</p>
      <p>Developed and Maintained by Owner</p>

      <div>
        <Link href="/terms-of-use">Terms & Conditions</Link>
        <Link href="/privacy-policy">Privacy Policy</Link>
      </div>
    </footer>
  );
};

export default Footer;
