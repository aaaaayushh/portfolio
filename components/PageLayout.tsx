import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Navbar } from "./Navbar";

export default function PageLayout({ children, ...customMeta }) {
  const router = useRouter();

  const meta = {
    title: "Aayush Shah",
    description: "Student, Developer, Learner.",
    type: "website",
    ...customMeta,
  };

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://yourwebsite.com${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://yourwebsite.com${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Manu Arora" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        {/* <meta property="og:image" content={meta.image} /> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mannupaaji" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        {/* <meta name="twitter:image" content={meta.image} /> */}
      </Head>
      <main className="dark:bg-gray-800 w-full">
        {/* navbar */}
        <Navbar />
        <div>{children}</div>
        {/* footer */}
      </main>
    </div>
  );
}
