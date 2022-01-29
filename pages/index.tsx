import Head from "next/head";
import Image from "next/image";
import { Hero } from "../components/Hero";
import PageLayout from "../components/PageLayout";
export default function Home() {
  return (
    <PageLayout>
      <Hero />
    </PageLayout>
  );
}
