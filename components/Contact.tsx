import React, { useState } from "react";
import { send } from "emailjs-com";
import { FaGithub } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { FiClipboard } from "react-icons/fi";
import { userData } from "../constants/userData";
import { showErrorToast, showSuccessToast } from "../lib/toast";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    let templateParams = {
      from_name: `${name}(${email})`,
      to_name: "Aayush",
      message: message,
    };
    send(
      process.env.NEXT_PUBLIC_SERVICE_ID,
      process.env.NEXT_PUBLIC_TEMPLATE_ID,
      templateParams,
      process.env.NEXT_PUBLIC_USER_ID
    )
      .then((res) => {
        if (res.status === 200) {
          showSuccessToast("Message sent!");
          setName("");
          setMessage("");
          setEmail("");
        } else {
          showErrorToast("An unexpected error occured");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <section>
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800 dark:text-gray-200 antialiased">
        <h1 className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Contact
        </h1>
      </div>
      <div className="relative z-10 bg-[#02044A] rounded-md shadow-md p-4 md:p-10 lg:p-20 max-w-6xl mx-auto mb-20 -mt-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:ml-4">
            <header>
              <h1 className="text-gray-50 font-semibold text-2xl">
                See something you&apos;re excited about? Let&apos;s talk!
              </h1>
              <p className="font-light text-base text-gray-200 mt-2">
                Fill in the details and I&apos;ll get back to you as soon as I
                can.
              </p>
            </header>
            <div className="icons-container inline-flex flex-col my-20">
              <div className="flex flex-row items-center justify-between space-x-6 rounded-md border hover:border hover:border-blue-500 p-4 border-[#02044A]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-telephone-fill h-4 w-4 text-blue-500"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                  />
                </svg>
                <p className="text-gray-50 font-light text-sm">
                  {userData.phone}
                </p>
                <FiClipboard
                  className="text-white cursor-pointer self-end"
                  onClick={() => {
                    navigator.clipboard.writeText(userData.phone);
                  }}
                />
              </div>
              <div className="flex flex-row items-center space-x-6 rounded-md border border-[#02044A] hover:border hover:border-blue-500 p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-envelope-fill h-4 w-4 text-blue-500"
                  viewBox="0 0 16 16"
                >
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                </svg>
                <p className="text-gray-50 font-light text-sm">
                  {userData.email}
                </p>
                <FiClipboard
                  className="text-white cursor-pointer"
                  onClick={() => {
                    navigator.clipboard.writeText(userData.email);
                  }}
                />
              </div>
            </div>
            <div className="social-icons flex flex-row space-x-8">
              <a
                href={userData.socialLinks.github}
                className="h-10 w-10 rounded-full text-white hover:bg-blue-500 flex items-center justify-center cursor-pointer transform scale-150"
              >
                <FaGithub />
              </a>
              <a
                href={userData.socialLinks.twitter}
                className="h-10 w-10 rounded-full hover:bg-blue-500 flex items-center justify-center cursor-pointer"
              >
                <svg
                  width="24"
                  height="24"
                  className="text-gray-50"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 3C9.10457 3 10 3.89543 10 5V8H16C17.1046 8 18 8.89543 18 10C18 11.1046 17.1046 12 16 12H10V14C10 15.6569 11.3431 17 13 17H16C17.1046 17 18 17.8954 18 19C18 20.1046 17.1046 21 16 21H13C9.13401 21 6 17.866 6 14V5C6 3.89543 6.89543 3 8 3Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                href={userData.socialLinks.linkedin}
                className="h-10 w-10 rounded-full text-white hover:bg-blue-500 flex items-center justify-center cursor-pointer transform scale-150"
              >
                <GrLinkedin />
              </a>
            </div>
          </div>
          <form
            className="form rounded-lg bg-white p-4 flex flex-col"
            onSubmit={(e) => handleSubmit(e)}
          >
            <label htmlFor="name" className="text-sm text-gray-600 mx-4">
              {" "}
              Name
            </label>
            <input
              type="text"
              className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="email" className="text-sm text-gray-600 mx-4 mt-4">
              Email
            </label>
            <input
              type="text"
              className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label
              htmlFor="message"
              className="text-sm text-gray-600 mx-4 mt-4"
            >
              Message
            </label>
            <textarea
              rows={4}
              className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              type="submit"
              className="bg-blue-500 rounded-md w-1/2 mx-4 mt-8 py-2 text-gray-50 text-xs font-bold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
