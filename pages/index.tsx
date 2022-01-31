import { Hero } from "../components/Hero";
import { LatestCode } from "../components/LatestCode";
import PageLayout from "../components/PageLayout";
import Projects from "../components/Projects";
import { userData } from "../constants/userData";
import getLatestRepos from "../utils/getLatestRepos";
export default function Home({ repositories }) {
  console.log(repositories);
  return (
    <PageLayout>
      <Hero />
      <LatestCode repositories={repositories} />
      <Projects />
    </PageLayout>
  );
}

export const getServerSideProps = async () => {
  let token = process.env.GITHUB_AUTH_TOKEN;
  const repositories = await getLatestRepos(userData, token);
  console.log(repositories.length);
  return {
    props: {
      repositories,
    },
  };
};
