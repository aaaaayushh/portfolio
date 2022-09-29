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
                  Internship Opportunities
                </h1>
                <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                  I&apos;m looking for a software development internships
                  currently. If you see me as a good fit, please reach out.
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
                    href={userData.socialLinks.twitter}
                    className="flex flex-row items-center space-x-4 group"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="my-4">&rarr;</div>
                    <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                      <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-28 group-hover:translate-x-0 transition duration-300"></div>
                      Instagram
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-1 md:col-span-2">
              <p className="text-xl text-gray-700 mb-4 dark:text-gray-300">
                I&apos;m a third-year undergraduate student currently pursuing
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
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
                  className="h-20 w-20 mx-4 my-4"
                  alt="javascript"
                />
                <img
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png"
                  className="h-20 w-20 mx-4 my-4"
                  alt="typescript"
                />
                <img
                  src="data:image/png;base64,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"
                  className="h-20 w-20 mx-4 my-4"
                  alt="python"
                />
                <img
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
                  className="h-20 w-20 mx-4 my-4"
                  alt="html5"
                />
                <img
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"
                  className="h-20 w-20 mx-4 my-4"
                  alt="css3"
                />
                <img
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png"
                  className="h-20 w-20 mx-4 my-4"
                  alt="git"
                />
                <img
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
                  className="h-20 w-20 mx-4 my-4"
                  alt="react"
                />
                <img
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/firebase/firebase.png"
                  className="h-20 w-20 mx-4 my-4"
                  alt="firebase"
                />
                <img
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png"
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
