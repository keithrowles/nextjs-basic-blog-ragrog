import Head from 'next/head';
import Link from 'next/link';

const about = () => {
  return (
    <div>
      <Head>
        <title>About Page</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Front end web developer." />
        <link rel="canonical" href="https://www.ragrog.com.au/about" />
        <meta property="og:title" content="About Page" />
        <meta property="og:description" content="Front end web developer." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ragrog.com.au/about" />
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
          <li>About</li>
        </ul>
      </div>

      {/* About Paragraph */}
      <div className="h-80 mt-9">
        <div className="hero bg-base-200 rounded-box p-3">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">About</h1>
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

      {/* Profile */}
      <div>
        <h2 className="text-2xl font-extrabold text-slate-900 mb-3">Profile</h2>
        <p className="leading-relaxed mb-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui quidem
          accusamus magnam culpa architecto quia ut voluptate, alias, cumque
          quasi quos exercitationem placeat commodi beatae numquam esse
          asperiores illum aspernatur voluptatum temporibus! Cum accusantium
          laborum veritatis eaque deleniti commodi facere fugiat quos nesciunt,
          expedita reprehenderit earum corrupti omnis consectetur sed.
        </p>

        <p className="leading-relaxed mb-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius earum
          debitis qui hic minus perspiciatis, voluptas fugit aut similique
          libero delectus facilis magni modi atque. Velit, nihil possimus? Optio
          accusamus neque similique quia cum ipsum amet nulla distinctio cumque,
          minus fugiat a tempore.
        </p>

        <p className="leading-relaxed mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
          laboriosam alias earum vero ratione esse modi illo numquam perferendis
          repellat doloremque aliquam vel similique, autem at obcaecati
          mollitia, nostrum dolor.
        </p>
      </div>

      {/* Education and Soft Skills */}
      <div className="flex flex-col w-full lg:flex-row mb-5">
        <div className="grid flex-grow card bg-base-300 rounded-box p-4 place-items-start">
          <h3 className="text-2xl font-extrabold text-slate-900 border-b-slate-500 border-b m-0">
            Education
          </h3>
          <p>
            <span className="text-sm font-medium block">2010 - 2014</span>
            <span className="text-2xl font-bold block">
              NAME OF QUALIFICATIONS
            </span>
            <span className="text-base font-medium block">
              Name of University College TAFE
            </span>
          </p>
          <p>
            <span className="text-sm font-medium block">2020 - 2022</span>
            <span className="text-2xl font-bold block">
              NAME OF QUALIFICATIONS
            </span>
            <span className="text-base font-medium block">
              Name of University College TAFE
            </span>
          </p>
        </div>
        <div className="divider lg:divider-horizontal">+</div>
        <div className="grid flex-grow card bg-base-300 rounded-box place-items-center p-4">
          <h3 className="text-2xl font-extrabold text-slate-900 border-b-slate-500 border-b mb-4">
            Soft Skills
          </h3>
          <ul className="list-disc">
            <li>Project and time management skills </li>
            <li>Strong initiative and reliability </li>
            <li>Excellent communication skills </li>
            <li>Liaising with key stakeholders </li>
            <li>Ability to learn new skills quickly </li>
            <li>Able to overcome obstacles</li>
            <li>Works individually and in a team</li>
            <li>Takes ownership of projects </li>
            <li>Problem solving skills</li>
            <li>Highly productive</li>
          </ul>
        </div>
      </div>

      {/* Work Experience */}
      <div className="mb-4">
        <h3 className="text-2xl font-extrabold text-slate-900 mb-4">
          Work Experience{' '}
          <span className="text-xl text-slate-500">Key Achievements</span>
        </h3>

        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-1">
            <p className="text-lg font-bold">2021 - Present</p>
          </div>

          <div className="col-span-3">
            <p className="text-lg font-bold mb-2">Digital Content Creator</p>
            <p className="leading-relaxed mb-2">Name of Organisation</p>
            <p className="leading-relaxed mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              error quaerat commodi. Soluta totam illo perferendis vel voluptate
              ex provident tempora voluptatum aliquam magni consequuntur
              blanditiis, similique voluptas earum, assumenda error temporibus
              quam, natus rerum. Fugit eveniet recusandae inventore ullam,
              accusamus id dolorum, neque esse placeat numquam laboriosam
              perferendis eum.
            </p>

            <p className="leading-relaxed mb-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa hic
              at quos provident quibusdam pariatur asperiores laudantium! Itaque
              autem perspiciatis asperiores quae modi officiis alias.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-1">
            <p className="text-lg font-bold">2014 - 2018</p>
          </div>
          <div className="col-span-3">
            <p className="text-lg font-bold mb-2">
              Digital Content Creator / SEO / Marketing Manager
            </p>
            <p className="leading-relaxed mb-2">Name of Organisation</p>
            <p className="leading-relaxed mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              nemo explicabo quia, rem illum iure quos qui placeat fugit
              blanditiis obcaecati voluptas et maiores impedit perferendis
              architecto facilis nam non! Magnam modi dignissimos iure
              repudiandae. Fugiat magni animi voluptas harum.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-1">
            <p className="text-lg font-bold">2009 - 2014</p>
          </div>
          <div className="col-span-3">
            <p className="text-lg font-bold mb-2">
              eCommerce Web Manager / SEO / Social Media
            </p>
            <p className="leading-relaxed mb-2">Name of Organisation</p>
            <p className="leading-relaxed mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, ea
              corrupti porro ut autem, exercitationem illum provident similique
              inventore possimus deleniti in minima perspiciatis. Atque
              reiciendis sapiente ab totam magnam repellendus voluptates
              similique voluptatem, assumenda deserunt amet nulla explicabo id
              veniam ipsum? Sapiente error perferendis modi numquam!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-1">
            <p className="text-lg font-bold">2005 - 2009</p>
          </div>
          <div className="col-span-3">
            <p className="text-lg font-bold mb-2">Website Content Manager</p>
            <p className="leading-relaxed mb-2">Name of Organisation</p>
            <p className="leading-relaxed mb-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
              mollitia nesciunt necessitatibus saepe, magnam est dignissimos
              eius, alias consectetur qui quos voluptas laborum recusandae eum
              dolorum hic, quis soluta eveniet nam? Nam, ea possimus!
            </p>
          </div>
        </div>
      </div>

      {/* Recent Courses and Interests */}
      <div className="flex flex-col w-full lg:flex-row mb-5">
        <div className="grid flex-grow card bg-base-300 rounded-box place-items-center p-4">
          <h3 className="text-2xl font-extrabold text-slate-900 border-b-slate-500 border-b mb-4">
            Interests
          </h3>
          <ul className="list-disc">
            <li>Technology</li>
            <li>Web development</li>
            <li>Data analysis</li>
            <li>Data visualisation</li>
            <li>Photography</li>
            <li>Design</li>
            <li>Rugby League</li>
            <li>Fishing</li>
            <li>Crabbing</li>
            <li>Camping</li>
            <li>Beach</li>
            <li>Cooking on charcoal grillers</li>
          </ul>
        </div>

        <div className="divider lg:divider-horizontal">+</div>

        <div className="grid flex-grow card bg-base-300 rounded-box p-4 place-items-start">
          <h3 className="text-2xl font-extrabold text-slate-900 border-b-slate-500 border-b m-0">
            Recent Courses
          </h3>
          <p>
            <span className="text-sm font-medium block">2022</span>
            <span className="text-2xl font-bold block">Tableau Desktop I</span>
            <span className="text-base font-medium block">by SalesForce</span>
          </p>
          <p>
            <span className="text-sm font-medium block">2022</span>
            <span className="text-2xl font-bold block">Tableau Desktop II</span>
            <span className="text-base font-medium block">by SalesForce</span>
          </p>
          <p>
            <span className="text-sm font-medium block">2022</span>
            <span className="text-2xl font-bold block">
              Tableau Beginner to Advanced
            </span>
            <span className="text-base font-medium block">by Udemy</span>
          </p>
        </div>
      </div>

      {/* Work History in Detail */}
      <div>
        <h3 className="text-2xl font-extrabold text-slate-900 mb-4">
          Work Duties{' '}
          <span className="text-xl text-slate-500">... In Detail</span>
        </h3>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">ECOMMERCE</h2>
              <p>
                Manage multiple large eCommerce websites in Australia and New
                Zealand using numerous systems, including OpenCart eCommerce
                software, Superior Engineering Enterprise Management System
                (EMS), Commerce Vision Software and the Pronto Enterprise
                Management System (EMS).
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">WEBSITE MANAGEMENT</h2>
              <p>
                Design, develop, manage and implement web projects (websites,
                graphics, marketing, newsletters etc.) from the concept stage
                through to architecture, publishing, monitoring, review and
                maintenance using a variety of publishing platforms and desktop
                software.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">SEO</h2>
              <p>
                Develop, manage, implement and monitor the organisation&apos;s
                Search Engine Optimisation (SEO), Web Page Optimisation (WPO)
                and Search Engine Marketing (SEM) strategies.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">SOCIAL MEDIA</h2>
              <p>
                Develop, manage, implement and promote the organisation&apos;s
                Social Media strategy and online communications to increase
                organic and paid growth on social media channels, including
                Facebook, Instagram, Twitter and YouTube.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">CONTENT CREATION</h2>
              <p>
                Create and deliver high-quality content, including graphics,
                videos, still images and multimedia elements for the
                organisation&apos;s website pages, various microsites,
                electronic newsletters, marketing campaigns and social media
                channels.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">CONTENT MANAGEMENT</h2>
              <p>
                Develop and bring to life exciting and engaging microsites using
                SharePoint, WordPress, Drupal and Joomla Content Management
                Systems (CMS).
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">COLLABORATION</h2>
              <p>
                Work closely with the marketing and sales teams to problem
                solve, develop ideas and help facilitate the production of
                promotional advertising and marketing materials for print and
                online campaigns.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">REPORTING</h2>
              <p>
                Deliver statistics and insights to key stakeholders, including
                business owners, marketing and sales teams and senior
                management, on website metrics, social media engagement, SEO
                performance and newsletter uptake using various analytics tools.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">GRAPHIC DESIGN</h2>
              <p>
                Create and develop graphic design projects for print such as
                magazine ads, newspaper ads, brochures, catalogues, packaging,
                vouchers, posters, signage and merchandise.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">DIRECT MARKETING</h2>
              <p>
                Create, develop and publish electronic newsletters using Active
                Campaign and MailChimp, while maintaining and growing the
                organisation&apos;s Electronic Direct Marketing (EDM) database.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">COMMUNICATION</h2>
              <p>
                Liaise and communicate with internal and external stakeholders
                in the supply of goods and services, including Enterprise
                Management System contractors, database administrators, social
                media companies, advertisers, payment gateway providers,
                printers, freight companies, senior web developers, domain name
                registrars and website hosting providers.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">RESEARCH</h2>
              <p>
                Ensure future development needs to take advantage of new and
                emerging web technologies and techniques without compromising
                current web standards.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">TRAINING</h2>
              <p>
                Provide training, advice and operational guidance to staff on
                how to use the web environment to communicate information
                effectively on matters relating to web publishing (text, images,
                animations, documents, video, audio and forms).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
