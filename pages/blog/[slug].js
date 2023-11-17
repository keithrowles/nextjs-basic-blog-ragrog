// Blog Post Page
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import Link from 'next/link';
import Head from 'next/head';

export default function PostPage({
  frontmatter: { title, date, cover_image },
  slug,
  content,
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="" />
        <link rel="canonical" href={`https://www.ragrog.com.au/${slug}`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://www.ragrog.com.au/${slug}`} />
        <meta property="og:image" content="/ragrog-logo.svg" />
        <meta property="og:site_name" content="RagRog" />
        <meta name="author" content="Keith Rowles" />
        <meta name="robots" content="index,follow" />
      </Head>

      <div className="text-sm breadcrumbs mx-6 mt-4">
        {/* <Link href='/'>
            <a className="btn btn-back mx-6 mt-4">Go Back</a>
        </Link> */}
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/blog/">
              <a>Blog</a>
            </Link>
          </li>
          <li>{title}</li>
        </ul>
      </div>

      <div className="card bg-base-100 shadow-xl m-6 p-4">
        <figure className="h-44">
          <img src={cover_image} alt={title} />
        </figure>
        <h1 className="card-title text-4xl my-3">{title}</h1>
        <div className="badge badge-secondary p-3 my-3">Posted On {date}</div>
        <div className="mb-10 prose prose-slate sm:prose-sm md:prose-lg lg:prose-xl max-w-none">
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }));

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', slug + '.md'),
    'utf-8'
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
