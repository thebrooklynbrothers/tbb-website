import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
// import Hero from "../components/sections/Hero";
// import CaseShowcase from "../components/sections/CaseShowcase";
// import Awards from "../components/sections/Awards";
import { sanityClient } from "@/lib/sanity";
import groq from "groq";

type Post = { _id: string; title?: string; excerpt?: string };

const postsQuery = groq`*[_type == "post"]{_id, title, excerpt} | order(_createdAt desc)`;

const Home = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    sanityClient.fetch<Post[]>(postsQuery).then(setPosts).catch(console.error);
  }, []);

  console.log(posts);

  return (
    <>
      <Helmet>
        <title>The Brooklyn Brothers - Creative Agency</title>
        <meta
          name="description"
          content="Creative agency specializing in digital development and innovative solutions"
        />
      </Helmet>

      {/* <Hero />
      <CaseShowcase />
      <Awards /> */}

      <section className="w-full h-full flex flex-col items-center justify-center pt-20">
        <h2 className="text-2xl font-bold mb-4">Latest posts (Sanity)</h2>
        <ul className="list-disc pl-4">
          {posts.map((p) => (
            <li key={p._id}>
              <strong>{p.title || "Untitled"}</strong>
              {p.excerpt ? ` — ${p.excerpt}` : ""}
            </li>
          ))}
          {posts.length === 0 && <li>No posts yet.</li>}
        </ul>
      </section>
    </>
  );
};

export default Home;
