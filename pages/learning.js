import Head from 'next/head';
import Link from 'next/link';

const learning = () => {
  return (
    <div>
      <Head>
        <title>Learning Page</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Front end web developer." />
        <link rel="canonical" href="https://www.ragrog.com.au/learning" />
        <meta property="og:title" content="Learning Page" />
        <meta property="og:description" content="Front end web developer." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ragrog.com.au/learning" />
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
          <li>Learning</li>
        </ul>
      </div>

      {/* Learning Paragraph */}
      <div className="h-80 mt-9">
        <div className="hero bg-base-200 rounded-box p-3">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Learning</h1>
              <p className="py-6">
                So much to learn... so much to do... where do I start? Just pick
                one and just start working through it.
              </p>
              <Link href="/contact">
                <a className="btn btn-primary">Contact</a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
          Learning Path
        </h2>

        {/* Stat */}
        <div className="stats shadow">
          <div className="stat place-items-center bg-primary text-white">
            <div className="stat-title">Completed</div>
          </div>

          <div className="stat place-items-center bg-accent text-white">
            <div className="stat-title">In Progress</div>
          </div>

          <div className="stat place-items-center bg-gray-200">
            <div className="stat-title">To Do</div>
          </div>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
          <div>
            <h3 className="text-2xl font-extrabold text-slate-700 mb-4">
              HTML
            </h3>
            <ul className="steps steps-vertical">
              <li className="step" data-content="">
                Custom Components
              </li>
              <li className="step" data-content="">
                Service Workers
              </li>
              <li className="step step-accent" data-content="●">
                Canvas
              </li>
              <li className="step step-primary" data-content="✓">
                Web Storage
              </li>
              <li className="step step-primary" data-content="✓">
                PWAs
              </li>
              <li className="step step-primary" data-content="✓">
                SVG
              </li>
              <li className="step step-primary" data-content="✓">
                HTTP Protocols
              </li>
              <li className="step step-primary" data-content="✓">
                XML
              </li>
              <li className="step step-primary" data-content="✓">
                XHTML
              </li>
              <li className="step step-primary" data-content="✓">
                HTML
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-extrabold text-slate-700 mb-4">CSS</h3>
            <ul className="steps steps-vertical">
              <li className="step" data-content="">
                Foundation
              </li>
              <li className="step" data-content="">
                Animations
              </li>
              <li className="step" data-content="">
                Patterns
              </li>
              <li className="step step-accent" data-content="●">
                Gradients
              </li>
              <li className="step step-accent" data-content="●">
                Tailwind CSS
              </li>
              <li className="step step-primary" data-content="✓">
                Materialise
              </li>
              <li className="step step-primary" data-content="✓">
                UI Kit
              </li>
              <li className="step step-primary" data-content="✓">
                Bootsrap
              </li>
              <li className="step step-primary" data-content="✓">
                SASS
              </li>
              <li className="step step-primary" data-content="✓">
                CSS
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-extrabold text-slate-700 mb-4">
              Javascript
            </h3>
            <ul className="steps steps-vertical">
              <li className="step" data-content="">
                Express JS
              </li>
              <li className="step step-accent" data-content="●">
                Node JS
              </li>
              <li className="step step-accent" data-content="✓">
                APIs
              </li>
              <li className="step step-accent" data-content="✓">
                ES6
              </li>
              <li className="step step-primary" data-content="✓">
                JSON
              </li>
              <li className="step step-primary" data-content="✓">
                Fetch
              </li>
              <li className="step step-primary" data-content="✓">
                AJAX
              </li>
              <li className="step step-primary" data-content="✓">
                DOM
              </li>
              <li className="step step-primary" data-content="✓">
                Vanilla JS
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-extrabold text-slate-700 mb-4">
              JS Frameworks
            </h3>
            <ul className="steps steps-vertical">
              <li className="step" data-content="">
                Angular
              </li>
              <li className="step" data-content="">
                Vue
              </li>
              <li className="step step-accent" data-content="●">
                Sapper
              </li>
              <li className="step step-accent" data-content="●">
                Ember
              </li>
              <li className="step step-accent" data-content="●">
                Preact
              </li>
              <li className="step step-primary" data-content="✓">
                Next JS
              </li>
              <li className="step step-primary" data-content="✓">
                React
              </li>
              <li className="step step-primary" data-content="✓">
                Svelte
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-extrabold text-slate-700 mb-4">
              JS Libraries
            </h3>
            <ul className="steps steps-vertical">
              <li className="step" data-content="">
                Three
              </li>
              <li className="step" data-content="">
                DoJo
              </li>
              <li className="step" data-content="">
                Adonis
              </li>
              <li className="step step-accent" data-content="●">
                Ramda
              </li>
              <li className="step step-accent" data-content="●">
                Mermaid
              </li>
              <li className="step step-primary" data-content="✓">
                Parsley
              </li>
              <li className="step step-primary" data-content="✓">
                Lodash
              </li>
              <li className="step step-primary" data-content="✓">
                Axios
              </li>
              <li className="step step-primary" data-content="✓">
                jQuery
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-extrabold text-slate-700 mb-4">
              Static Site
            </h3>
            <ul className="steps steps-vertical">
              <li className="step" data-content="">
                Nuxt
              </li>
              <li className="step" data-content="">
                VuePress
              </li>
              <li className="step step-accent" data-content="●">
                Astro
              </li>
              <li className="step step-primary" data-content="✓">
                Gatsby
              </li>
              <li className="step step-primary" data-content="✓">
                11ty
              </li>
              <li className="step step-primary" data-content="✓">
                Hugo
              </li>
              <li className="step step-primary" data-content="✓">
                Next JS
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-extrabold text-slate-700 mb-4">
              Headless CMS
            </h3>
            <ul className="steps steps-vertical">
              <li className="step" data-content="">
                Butter
              </li>
              <li className="step" data-content="">
                Ghost
              </li>
              <li className="step" data-content="">
                Directus
              </li>
              <li className="step" data-content="">
                Prismic
              </li>
              <li className="step step-accent" data-content="●">
                Sanity IO
              </li>
              <li className="step step-accent" data-content="●">
                Builder IO
              </li>
              <li className="step step-accent" data-content="●">
                Storyblok
              </li>
              <li className="step step-primary" data-content="✓">
                Strapi IO
              </li>
              <li className="step step-primary" data-content="✓">
                Contentful
              </li>
              <li className="step step-primary" data-content="✓">
                Wordpress
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-extrabold text-slate-700 mb-4">
              Hosting
            </h3>
            <ul className="steps steps-vertical">
              <li className="step" data-content="">
                Azure
              </li>
              <li className="step" data-content="">
                Railway
              </li>
              <li className="step" data-content="">
                Render
              </li>
              <li className="step" data-content="">
                Cyclic
              </li>
              <li className="step step-accent" data-content="●">
                Github Pages
              </li>
              <li className="step step-accent" data-content="●">
                Cloudfare
              </li>
              <li className="step step-primary" data-content="✓">
                Heroku
              </li>
              <li className="step step-primary" data-content="✓">
                Vercel
              </li>
              <li className="step step-primary" data-content="✓">
                Netlify
              </li>
              <li className="step step-primary" data-content="✓">
                cPanel
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-extrabold text-slate-700 mb-4">
              Databases
            </h3>
            <ul className="steps steps-vertical">
              <li className="step" data-content="">
                SupaBase
              </li>
              <li className="step step-accent" data-content="●">
                MongoDB
              </li>
              <li className="step step-accent" data-content="●">
                FireBase
              </li>
              <li className="step step-accent" data-content="●">
                Azure
              </li>
              <li className="step step-primary" data-content="✓">
                Postgres SQL
              </li>
              <li className="step step-primary" data-content="✓">
                Teradata
              </li>
              <li className="step step-primary" data-content="✓">
                Maria DB
              </li>
              <li className="step step-primary" data-content="✓">
                MySQL
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-extrabold text-slate-700 mb-4">
              Design Elements
            </h3>
            <ul className="steps steps-vertical">
              <li className="step" data-content="">
                Semantic UI
              </li>
              <li className="step" data-content="">
                Stencil JS
              </li>
              <li className="step" data-content="">
                Lit JS
              </li>
              <li className="step step-accent" data-content="●">
                Headless UI
              </li>
              <li className="step step-accent" data-content="●">
                Daisy UI
              </li>
              <li className="step step-accent" data-content="●">
                Tailwind UI
              </li>
              <li className="step step-primary" data-content="✓">
                Google Fonts
              </li>
              <li className="step step-primary" data-content="✓">
                Emotion
              </li>
              <li className="step step-primary" data-content="✓">
                Styled Components
              </li>
              <li className="step step-primary" data-content="✓">
                Bootstrap Icons
              </li>
              <li className="step step-primary" data-content="✓">
                Hero Icons
              </li>
              <li className="step step-primary" data-content="✓">
                Font Awesome
              </li>
              <li className="step step-primary" data-content="✓">
                Material Icons
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-extrabold text-slate-700 mb-4">
              Animation
            </h3>
            <ul className="steps steps-vertical">
              <li className="step" data-content="">
                Three JS
              </li>
              <li className="step" data-content="">
                Create JS
              </li>
              <li className="step" data-content="">
                Velocity
              </li>
              <li className="step step-accent" data-content="●">
                Pixi JS
              </li>
              <li className="step step-accent" data-content="●">
                Rolly JS
              </li>
              <li className="step step-accent" data-content="●">
                Framer Motion
              </li>
              <li className="step step-accent" data-content="●">
                Prism JS
              </li>
              <li className="step step-primary" data-content="✓">
                MO JS
              </li>
              <li className="step step-primary" data-content="✓">
                Anime JS
              </li>
              <li className="step step-primary" data-content="✓">
                GSAP
              </li>
              <li className="step step-primary" data-content="✓">
                Flickety
              </li>
              <li className="step step-primary" data-content="✓">
                Swiper
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default learning;
