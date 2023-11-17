import Head from 'next/head';
import Link from 'next/link';

const skills = () => {
  return (
    <div>
      <Head>
        <title>Skills Page</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Front end web developer." />
        <link rel="canonical" href="https://www.ragrog.com.au/skills" />
        <meta property="og:title" content="Skills Page" />
        <meta property="og:description" content="Front end web developer." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ragrog.com.au/skills" />
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
          <li>Skills</li>
        </ul>
      </div>

      {/* Skills Paragraph */}
      <div className="h-80 mt-9">
        <div className="hero bg-base-200 rounded-box p-3">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Skills</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <Link href="/contact">
                <a className="btn btn-primary">Contact</a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-extrabold text-slate-900 mb-6">
          Expertise{' '}
          <span className="badge badge-lg badge-warning">...Out of 100%</span>
        </h2>

        <div>
          <h3 className="text-xl font-bold text-slate-600 mb-3 mt-3">
            HTML / CSS / Javascript
          </h3>
          <progress
            className="progress progress-error w-full h-8 mb-2"
            value="95"
            max="100"
          ></progress>

          <h3 className="text-xl font-bold text-slate-600 mb-3 mt-3">
            Adobe Creative Suite
          </h3>
          <progress
            className="progress progress-error w-full h-8 mb-2"
            value="97"
            max="100"
          ></progress>

          <h3 className="text-xl font-bold text-slate-600 mb-3 mt-3">
            Data Analysis and Visualisation
          </h3>
          <progress
            className="progress progress-error w-full h-8 mb-2"
            value="90"
            max="100"
          ></progress>

          <h3 className="text-xl font-bold text-slate-600 mb-3 mt-3">
            Content Creation
          </h3>
          <progress
            className="progress progress-error w-full h-8 mb-2"
            value="95"
            max="100"
          ></progress>

          <h3 className="text-xl font-bold text-slate-600 mb-3 mt-3">
            Search Engine Optimisation (SEO)
          </h3>
          <progress
            className="progress progress-error w-full h-8 mb-2"
            value="98"
            max="100"
          ></progress>

          <h3 className="text-xl font-bold text-slate-600 mb-3 mt-3">
            Marketing
          </h3>
          <progress
            className="progress progress-error w-full h-8 mb-2"
            value="95"
            max="100"
          ></progress>

          <h3 className="text-xl font-bold text-slate-600 mb-3 mt-3">
            Social Media
          </h3>
          <progress
            className="progress progress-error w-full h-8 mb-2"
            value="90"
            max="100"
          ></progress>

          <h3 className="text-xl font-bold text-slate-600 mb-3 mt-3">
            Web Design / Web Development
          </h3>
          <progress
            className="progress progress-error w-full h-8 mb-2"
            value="98"
            max="100"
          ></progress>
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-extrabold text-slate-900 mb-6 mt-6">
          Skills
        </h2>

        <div className="badge badge-lg p-5 badge-primary mr-2 mb-4 text-lg font-semibold">
          Bootstrap
        </div>
        <div className="badge badge-lg p-5 badge-primary mr-2 mb-4 text-lg font-semibold">
          Website Design
        </div>
        <div className="badge badge-lg p-5 badge-primary mr-2 mb-4 text-lg font-semibold">
          Tableau Desktop
        </div>
        <div className="badge badge-lg p-5 badge-primary mr-2 mb-4 text-lg font-semibold">
          Tableau Server
        </div>
        <div className="badge badge-lg p-5 badge-primary mr-2 mb-4 text-lg font-semibold">
          JS Libraries / JQuery
        </div>
        <div className="badge badge-lg p-5 badge-primary mr-2 mb-4 text-lg font-semibold">
          JSON / XML
        </div>
        <div className="badge badge-lg p-5 badge-primary mr-2 mb-4 text-lg font-semibold">
          Browser Web Dev Tools
        </div>
        <div className="badge badge-lg p-5 badge-primary mr-2 mb-4 text-lg font-semibold">
          React JS
        </div>
        <div className="badge badge-lg p-5 badge-primary mr-2 mb-4 text-lg font-semibold">
          HTTP Protocols
        </div>
        <div className="badge badge-lg p-5 badge-primary mr-2 mb-4 text-lg font-semibold">
          Restful APIs
        </div>
        <div className="badge badge-lg p-5 badge-primary mr-2 mb-4 text-lg font-semibold">
          Google Adwords
        </div>
        <div className="badge badge-lg p-5 badge-primary mr-2 mb-4 text-lg font-semibold">
          CMS
        </div>
        <div className="badge badge-lg p-5 badge-primary mr-2 mb-4 text-lg font-semibold">
          Wordpress
        </div>
        <div className="badge badge-lg p-5 badge-primary mr-2 mb-4 text-lg font-semibold">
          Front End Web Dev
        </div>
        <div className="badge badge-lg p-5 badge-primary mr-2 mb-4 text-lg font-semibold">
          SEO / SEM/ WPO
        </div>
        <div className="badge badge-lg p-5 badge-primary mr-2 mb-4 text-lg font-semibold">
          Illustration
        </div>
        <div className="badge badge-lg p-5 badge-primary mr-2 mb-4 text-lg font-semibold">
          Data Analysis
        </div>
        <div className="badge badge-lg p-5 badge-primary mr-2 mb-4 text-lg font-semibold">
          Facebook Ads
        </div>
        <div className="badge badge-lg p-5 badge-primary mr-2 mb-4 text-lg font-semibold">
          Power BI
        </div>
        <div className="badge badge-lg p-5 badge-primary mr-2 mb-4 text-lg font-semibold">
          Font Awesome
        </div>
        <div className="badge badge-lg p-5 badge-primary mr-2 mb-4 text-lg font-semibold">
          Vanilla JS
        </div>
        <div className="badge badge-lg p-5 badge-primary mr-2 mb-4 text-lg font-semibold">
          Git Hub
        </div>
        <div className="badge badge-lg p-5 badge-primary mr-2 mb-4 text-lg font-semibold">
          Next JS
        </div>
        <div className="badge badge-lg p-5 badge-primary mr-2 mb-4 text-lg font-semibold">
          CSS Media Queries
        </div>
        <div className="badge badge-lg p-5 badge-primary mr-2 mb-4 text-lg font-semibold">
          NPM
        </div>
        <div className="badge badge-lg p-5 badge-primary mr-2 mb-4 text-lg font-semibold">
          Google Search Console
        </div>
        <div className="badge badge-lg p-5 badge-primary mr-2 mb-4 text-lg font-semibold">
          Graphic Design
        </div>
        <div className="badge badge-lg p-5 badge-primary mr-2 mb-4 text-lg font-semibold">
          Electronic Direct Mail
        </div>
        <div className="badge badge-lg p-5 badge-primary mr-2 mb-4 text-lg font-semibold">
          Domains
        </div>
        <div className="badge badge-lg p-5 badge-primary mr-2 mb-4 text-lg font-semibold">
          Advertising
        </div>
        <div className="badge badge-lg p-5 badge-primary mr-2 mb-4 text-lg font-semibold">
          SharePoint
        </div>
        <div className="badge badge-lg p-5 badge-primary mr-2 mb-4 text-lg font-semibold">
          SQL / MySQL DB
        </div>
        <div className="badge badge-lg p-5 badge-primary mr-2 mb-4 text-lg font-semibold">
          CSS Frameworks
        </div>
        <div className="badge badge-lg p-5 badge-primary mr-2 mb-4 text-lg font-semibold">
          CSS Flexbox / Grid
        </div>
        <div className="badge badge-lg p-5 badge-primary mr-2 mb-4 text-lg font-semibold">
          DOM
        </div>
        <div className="badge badge-lg p-5 badge-primary mr-2 mb-4 text-lg font-semibold">
          VS Code / XCode
        </div>
        <div className="badge badge-lg p-5 badge-primary mr-2 mb-4 text-lg font-semibold">
          eCommerce
        </div>
        <div className="badge badge-lg p-5 badge-primary mr-2 mb-4 text-lg font-semibold">
          Payment Gateways
        </div>
        <div className="badge badge-lg p-5 badge-primary mr-2 mb-4 text-lg font-semibold">
          cPanel / Web Servers
        </div>
        <div className="badge badge-lg p-5 badge-primary mr-2 mb-4 text-lg font-semibold">
          Google Web Master
        </div>
        <div className="badge badge-lg p-5 badge-primary mr-2 mb-4 text-lg font-semibold">
          Microsoft Office
        </div>
        <div className="badge badge-lg p-5 badge-primary mr-2 mb-4 text-lg font-semibold">
          Photography
        </div>
        <div className="badge badge-lg p-5 badge-primary mr-2 mb-4 text-lg font-semibold">
          Ajax
        </div>
        <div className="badge badge-lg p-5 badge-primary mr-2 mb-4 text-lg font-semibold">
          WAMP/MAMP
        </div>
        <div className="badge badge-lg p-5 badge-primary mr-2 mb-4 text-lg font-semibold">
          Fetch API
        </div>
        <div className="badge badge-lg p-5 badge-primary mr-2 mb-4 text-lg font-semibold">
          Array Methods
        </div>
      </div>
    </div>
  );
};

export default skills;
