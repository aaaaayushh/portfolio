import React from "react";
import PageLayout from "../components/PageLayout";
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';


export default function blog({posts}){
    console.log(posts)
    return(
        <PageLayout>
            <section className="bh-white dark:bg-gray-800 dark:text-gray-200">
                <div className="max-w-6xl mx-auto h-48">
                    <h1 className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
                        Blog
                    </h1>
                </div>
                <div className="dark:bg-gray-900 bg-[#F1F1F1]">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
                        {posts.map((post,idx)=>(
                            <div key={idx} className="max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <img className="rounded-t-lg" src={post.coverImage} alt="" />
                                <div className="p-5 flex flex-col h-72 justify-between items-start">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post.title}</h5>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                        {post.brief}
                                    </p>
                                    <a target="_blank" href={`https://aaaaayushh.hashnode.dev/${post.slug}`} className="inline-flex mt-auto items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Read more
                                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </PageLayout>
    )
}

export async function getStaticProps(){
    const client = new ApolloClient({
        uri: 'https://api.hashnode.com/',
        cache: new InMemoryCache(),
      })
      const { data } = await client.query({
        query: gql`
          query GetPosts {
            user(username: "aaaaayushh") {
              publication {
                posts(page: 0) {
                  _id
                  coverImage
                  slug
                  title
                  brief
                }
              }
            }
          }
        `,
      })
      return {
        props: {
          posts: data.user.publication.posts,
        },
      }    
}