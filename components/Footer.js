export default function Footer() {
  return (
    <>
      <section className="w-full mx-auto bg-base-200">
        <footer className="footer p-10 text-base-content max-w-6xl mx-auto">
          <div>
            <span className="footer-title">Recent Projects</span>
            <a className="link link-hover">Project 1</a>
            <a className="link link-hover">Project 2</a>
            <a className="link link-hover">Project 3</a>
            <a className="link link-hover">Project 4</a>
            <a className="link link-hover">Project 5</a>
          </div>
          <div>
            <span className="footer-title">Tags</span>
            <a className="link link-hover">Javascript</a>
            <a className="link link-hover">React</a>
            <a className="link link-hover">11ty</a>
            <a className="link link-hover">Next JS</a>
            <a className="link link-hover">Node JS</a>
          </div>

          <div>
            <span className="footer-title">Profile</span>
            <a className="link link-hover">About</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Skills</a>
            <a className="link link-hover">Learning</a>
          </div>
        </footer>
      </section>

      <section className="w-full mx-auto border-t bg-neutral text-neutral-content border-base-300">
        <footer className="footer px-10 py-4   max-w-6xl mx-auto">
          <div className="items-center grid-flow-col">
            <img
              src="/ragrog-logo.svg"
              alt="RagRog"
              className="w-40 fill-current"
            ></img>
            <p>Web Developer</p>
          </div>
          <div className="md:place-self-center md:justify-self-end">
            <div className="grid grid-flow-col gap-4">
              <a>
                <img
                  src="/icon-facebook.svg"
                  alt="Facebook"
                  className="fill-current"
                />
              </a>
              <a>
                <img src="/icon-youtube.svg" alt="" className="fill-current" />
              </a>
              <a>
                <img src="/icon-twitter.svg" alt="" className="fill-current" />
              </a>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
}
