// Home Page
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head';
import Post from '../components/Post';
import { sortByDate } from '../utils';

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Home Page</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Front end web developer." />
        <link rel="canonical" href="https://www.ragrog.com.au" />
        <meta property="og:title" content="Home Page" />
        <meta property="og:description" content="Front end web developer." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ragrog.com.au" />
        <meta
          property="og:image"
          content="https://www.ragrog.com.au/ragrog-logo.svg"
        />
        <meta property="og:site_name" content="RagRog" />
        <meta name="author" content="Keith Rowles" />
        <meta name="robots" content="index,follow" />
      </Head>

      {/* Blog Section */}
      <div className="h-80 mt-9">
        <div className="hero bg-base-200 rounded-box p-3">
          <div className="hero-content text-center">
            <div className="max-w-6xl">
              <h1 className="text-5xl font-bold">Welcome to my Blog</h1>
              <p className="py-6 text-2xl">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
                repellat ab tempora, deserunt totam perspiciatis hic unde
                doloribus, saepe nisi a impedit velit eum quidem? Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Ducimus, quam.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-6 mb-6">
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  // get files from posts directory
  const files = fs.readdirSync(path.join('posts'));

  // get slug and front matter from posts
  const posts = files.map((filename) => {
    // create a slug
    const slug = filename.replace('.md', '');

    // get front matter
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}
