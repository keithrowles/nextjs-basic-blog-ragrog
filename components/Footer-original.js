

export default function Footer() {
  return (
    <footer className="border-t mt-16 bg-gray-800">

        <div className="max-w-4xl mx-auto py-6 text-white">
        <div className="flex items-center justify-between">
            <div>
                <h1>Category</h1>
                <ul>
                    <li>Item 1</li>
                </ul>
            </div>

            <div>
                <h1>Tags</h1>
                <ul>
                    <li>Item 1</li>
                </ul>
            </div>

            <div>
                <h1>Profile</h1>
                <ul>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Work History</li>
                    <li>Social</li>
                    <li>Skills</li>
                    <li>Learning Path</li>
                </ul>
            </div>
        </div>
        </div>

        

        <div className="max-w-4xl mx-auto py-6 text-white">
        <div className="flex items-center justify-between border-t py-6">

            <div>Copyright &copy; 2022, All Rights Reserved</div>

            <div className="flex justify-center space-x-4">
                <a href="#">
                    <img src="icon-facebook.svg" alt="" className="h-6" />
                </a>
                <a href="#">
                    <img src="icon-youtube.svg" alt="" className="h-6" />
                </a>
                <a href="#">
                    <img src="icon-twitter.svg" alt="" className="h-6" />
                </a>
            </div>

        </div>
        </div>

    </footer>
  )
}
