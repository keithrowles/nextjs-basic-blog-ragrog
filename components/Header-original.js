


export default function Header() {
  return (
    // Nav
    <div className="sticky top-0 z-40 w-full mx-auto bg-slate-50 border-b backdrop-blur transition-colors duration-500 bg-white/90 supports-backdrop-blur:bg-white/60">

      <div className="max-w-4xl mx-auto py-4">

      <div className="flex items-center justify-between">


            <a className="text-2xl font-bold mr-3">
              RagRog
            </a>

            <div className="relative">
              <button className="text-xs leading-5 font-semibold bg-slate-400/10 rounded-full py-1 px-3 flex items-center space-x-2">Announcement</button>
            </div>
          

            <nav className="text-small leading-6 font-semibold text-slate-800">
              <ul className="flex space-x-8">
                <li>
                  <a href="#" className="hover:text-sky-500">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-sky-500">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>


            <div className="flex items-center border-l border-slate-300 pl-6">
              <a className="ml-6 block">Icons</a>
            </div>

            </div>

      </div>

    

    </div>
  )
}
