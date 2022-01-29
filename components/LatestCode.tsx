import React, { useEffect, useState } from "react";
import Link from "next/link";
import getLatestRepos from "../hooks/getLatestRepos";
import { userData } from "../constants/userData";

interface CodeProps {
  repositories: Array<any>;
}
export const LatestCode: React.FC<CodeProps> = ({ repositories }) => {
  //   const [repos, setRepos] = useState<Array<any>>([]);

  return (
    <section className="bg-[#F1F1F1] -mt-40 dark:bg-gray-900 pb-40">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:pt-40 mx-10">
          <h1 className="text-6xl lg:text-9xl max-w-lg font-bold text-gray-500 my-20 md:my-0 md:text-white dark:text-gray-600 text-center lg:text-left">
            Latest Code
          </h1>
          <a
            href={`https://github.com/${userData.githubUsername}`}
            className="mb-20 md:mb-0 px-8 py-4 rounded-md bg-white shadow-lg text-xl font-semibold flex flex-row space-x-4 items-center dark:text-gray-700"
          ></a>
        </div>
      </div>
    </section>
  );
};
