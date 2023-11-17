import Head from 'next/head';
import Link from 'next/link';

const contact = () => {
  return (
    <div>
      <Head>
        <title>Contact Page</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Front end web developer." />
        <link rel="canonical" href="https://www.ragrog.com.au/contact" />
        <meta property="og:title" content="Contact Page" />
        <meta property="og:description" content="Front end web developer." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ragrog.com.au/contact" />
        <meta
          property="og:image"
          content="https://www.ragrog.com.au/ragrog-logo.svg"
        />
        <meta property="og:site_name" content="RagRog" />
        <meta name="author" content="Keith Rowles" />
        <meta name="robots" content="index,follow" />
      </Head>

      {/* Breadcrumb */}
      <div className="text-sm breadcrumbs mx-6 mt-4">
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>Contact</li>
        </ul>
      </div>

      {/* About Paragraph */}
      <div className="h-80 mt-9">
        <div className="hero bg-base-200 rounded-box p-3">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Contact</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <Link href="/about">
                <a className="btn btn-primary">About</a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full lg:flex-row mb-5">
        <div className="grid flex-grow card bg-base-300 rounded-box place-items-start p-4 h-52">
          <h3 className="text-2xl font-extrabold text-slate-900 border-b-slate-500 border-b m-0">
            Contact Details
          </h3>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="col-span-1 border-r border-slate-600 pr-4">
              Email
            </div>
            <div className="col-span-2">info@company.com.au</div>
            <div className="col-span-1 border-r border-slate-600 pr-4">
              Phone
            </div>
            <div className="col-span-2">0400 90 90 90</div>
          </div>
        </div>

        <div className="divider lg:divider-horizontal">OR</div>

        <div className="grid flex-grow card bg-base-300 rounded-box place-items-start p-4 h-52">
          <h3 className="text-2xl font-extrabold text-slate-900 border-b-slate-500 border-b m-0">
            Social Media
          </h3>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="col-span-1 border-r border-slate-600 pr-4">
              GitHub
            </div>
            <div className="col-span-2">@username</div>
            <div className="col-span-1 border-r border-slate-600 pr-4">
              Stack Overflow
            </div>
            <div className="col-span-2">@username</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
