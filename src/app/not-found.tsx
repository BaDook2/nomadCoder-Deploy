import React from "react";
import Navigation from "../../components/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Not found"
}

const NotFound = () => {
  return (
    <>
      <Navigation />
      <div>NotFound</div>
    </>
  );
};

export default NotFound;
