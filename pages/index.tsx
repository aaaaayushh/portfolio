import { Hero } from "../components/Hero";
import { LatestCode } from "../components/LatestCode";
import PageLayout from "../components/PageLayout";
import Projects from "../components/Projects";
import { userData } from "../constants/userData";
import getLatestRepos from "../utils/getLatestRepos";
export default function Home({ repositories }) {
  return (
    <PageLayout>
      <Hero />
      <LatestCode repositories={repositories} />
      <Projects />
    </PageLayout>
  );
}

export const getServerSideProps = async () => {
  // let token = process.env.GITHUB_AUTH_TOKEN;
  // const repositories = await getLatestRepos(userData, token);
  const repositories = [
    {
      name: "GetBetterAPI",
      description:
        "Backend server made for the Get-Better project on Express/Node.js",
      url: "https://github.com/aaaaayushh/get-betterAPI",
    },
    {
      name: "GetBetterUI",
      description:
        "Frontend application for the Get-Better project built using ReactJS",
      url: "https://github.com/aaaaayushh/get-betterUI",
    },
    {
      name: "Code Editor",
      description: "An online code editor built using NextJS",
      url: "https://github.com/aaaaayushh/code-editor",
    },
    {
      name: "Covid Tracker",
      description:
        "Covid Tracker application built using ReactJS and MaterialUI",
      url: "https://github.com/aaaaayushh/covid-tracker",
    },
    {
      name: "Portfolio",
      description: "Code for portfolio website built using NextJS",
      url: "https://github.com/aaaaayushh/portfolio",
    },

    {
      name: "Mars Rover Manipal",
      description:
        "Website for the student project team Mars Rover Manipal built on ReactJS",
      url: "https://github.com/aaaaayushh/mrm2021",
    },
  ];
  return {
    props: {
      repositories,
    },
  };
};
