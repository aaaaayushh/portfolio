/* eslint-disable @next/next/no-img-element */
import React from "react";
import PageLayout from "../components/PageLayout";
import { userData } from "../constants/userData";

export default function about() {
  return (
    <PageLayout>
      <section className="bg-white dark:bg-gray-800 dark:text-gray-200">
        <div className="max-w-6xl mx-auto h-48">
          <h1 className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
            About Me.
          </h1>
        </div>
        <div className="-mt-10 dark:bg-gray-900 bg-[#F1F1F1]">
          <div className="text-container max-w-6xl mx-auto pt-20">
            <p
              className="leading-loose text-2xl md:text-4xl font-semibold mx-4"
              style={{ lineHeight: "3rem" }}
            >
              {userData.about.title}. Currently working on{" "}
              <a
                href={userData.about.currentProjectUrl1}
                className="bg-red-500 rounded-md px-2 py-1 text-white"
                target="_blank"
                rel="noreferrer"
              >
                {userData.about.currentProject1}
              </a>{" "}
              and{" "}
              <a
                href={userData.about.currentProjectUrl2}
                className="bg-red-500 rounded-md px-2 py-1 text-white"
                target="_blank"
                rel="noreferrer"
              >
                {userData.about.currentProject2}
              </a>
            </p>
          </div>
        </div>
        <div className="dark:bg-gray-900 px-4 bg-[#F1F1F1]">
          <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
            <div className="inline-flex flex-col">
              <div>
                <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                  Contact
                </h1>
                <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                  For any sort enquiry, shoot a{" "}
                  <a
                    href={`mailto:${userData.email}`}
                    className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                  >
                    mail
                  </a>{" "}
                  and I&apos;ll get back as soon as possible.
                </p>
              </div>
              <div className="mt-8">
                <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                  Full-time Opportunities
                </h1>
                <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                  I&apos;m looking for software development roles with a start
                  date in July 2023 currently. If you see me as a good fit,
                  please reach out.
                </p>
              </div>
              <h1 className="text-xl font-semibold text-gray-700 mt-8 dark:text-gray-200">
                Social Links
              </h1>
              <div className="mt-4 ml-4">
                <div className="flex flex-row justify-start items-center">
                  <a
                    href={userData.socialLinks.twitter}
                    className="flex flex-row items-center space-x-4 group"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="my-4">&rarr;</div>
                    <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                      <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                      Twitter
                    </p>
                  </a>
                </div>
                <div className="flex flex-row justify-start items-center">
                  <a
                    href={userData.socialLinks.github}
                    className="flex flex-row items-center space-x-4 group"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="my-4">&rarr;</div>
                    <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                      <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                      Github
                    </p>
                  </a>
                </div>
                <div className="flex flex-row justify-start items-center">
                  <a
                    href={userData.socialLinks.linkedin}
                    className="flex flex-row items-center space-x-4 group"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="my-4">&rarr;</div>
                    <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                      <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                      LinkedIn
                    </p>
                  </a>
                </div>
                <div className="flex flex-row justify-start items-center">
                  <a
                    href={userData.socialLinks.blog}
                    className="flex flex-row items-center space-x-4 group"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="my-4">&rarr;</div>
                    <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                      <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-28 group-hover:translate-x-0 transition duration-300"></div>
                      Blog
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-1 md:col-span-2">
              <p className="text-xl text-gray-700 mb-4 dark:text-gray-300">
                I&apos;m a fourth-year undergraduate student currently pursuing
                my B.Tech from Manipal Institute of Technology. My first
                encounter with developing websites was when I was a mere 15
                years old. I started with rudimentary HTML and CSS static pages,
                and have come a long way since to make full stack web
                applications using various frameworks like ReactJS, NextJS etc.
                <br />
                <br />I have always believed that technology is the one tool
                that has the capability to improve every facet of our life.
                Improving the quality of life of people is what drives me to
                make better products.
              </p>
              <h1 className="bg-blue-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">
                Tech Stack
              </h1>
              <div className="flex flex-row flex-wrap mt-8">
                <img
                  src="/icons/javascript.svg"
                  className="h-20 w-20 mx-4 my-4"
                  alt="javascript"
                />
                <img
                  src="/icons/typescript.svg"
                  className="h-20 w-20 mx-4 my-4"
                  alt="typescript"
                />
                <img
                  src="/icons/python.svg"
                  className="h-20 w-20 mx-4 my-4"
                  alt="python"
                />
                <img
                  src="/icons/html.svg"
                  className="h-20 w-20 mx-4 my-4"
                  alt="html5"
                />
                <img
                  src="/icons/css.svg"
                  className="h-20 w-20 mx-4 my-4"
                  alt="css3"
                />
                <img
                  src="/icons/git.svg"
                  className="h-20 w-20 mx-4 my-4"
                  alt="git"
                />
                <img
                  src="/icons/react.svg"
                  className="h-20 w-20 mx-4 my-4"
                  alt="react"
                />
                <img
                  src="/icons/firebase.svg"
                  className="h-20 w-20 mx-4 my-4"
                  alt="firebase"
                />
                <img
                  src="/icons/mongodb.svg"
                  className="h-20 w-20 mx-4 my-4"
                  alt="mongodb"
                />
                <img
                  src="https://images.ctfassets.net/23aumh6u8s0i/c04wENP3FnbevwdWzrePs/1e2739fa6d0aa5192cf89599e009da4e/nextjs"
                  className="h-20 w-30 mx-4 my-4"
                  alt="nextjs"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
