import React from "react";
import { ToastContainer } from "react-toastify";
import Contact from "../components/Contact";
import PageLayout from "../components/PageLayout";

export default function contact() {
  return (
    <PageLayout>
      <ToastContainer />
      <Contact />
    </PageLayout>
  );
}
