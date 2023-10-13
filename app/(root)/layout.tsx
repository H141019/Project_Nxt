import React from "react";
// import { Child } from "sanity/desk";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default layout;
