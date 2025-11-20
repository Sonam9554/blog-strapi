export default function Example() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        * { font-family: 'Poppins', sans-serif; }
      `}</style>

      <footer className="bg-black text-gray-500 px-6 md:px-16 lg:px-24 xl:px-32 py-16">
        {/* Top content */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 md:gap-20">
          {/* Flex logo */}
          <div>
            <a href="/">
              <h1 className="text-6xl font-bold text-orange-500">Flex</h1>
            </a>

            {/* Five text items below flex */}
            <div className="mt-4">
              <div className="flex flex-wrap gap-4">
                {/* First row - 3 items */}
                <p className="text-gray-300 before:content-['•'] before:text-orange-500 before:mr-2">Dashboard</p>
                <p className="text-gray-300 before:content-['•'] before:text-orange-500 before:mr-2">Analytics</p>
                <p className="text-gray-300 before:content-['•'] before:text-orange-500 before:mr-2">Reports</p>
              </div>
              <div className="flex flex-wrap gap-4 mt-2">
                {/* Second row - 2 items */}
                <p className="text-gray-300 before:content-['•'] before:text-orange-500 before:mr-2">Settings</p>
                <p className="text-gray-300 before:content-['•'] before:text-orange-500 before:mr-2">Profile</p>
              </div>
            </div>
          </div>

          {/* The rest of your footer links */}
          <div className="flex flex-wrap gap-10 md:gap-[60px] xl:gap-[140px]">
            {/* Product */}
            <div>
              <p className="text-slate-100 font-semibold">Product</p>
              <ul className="mt-2 space-y-2">
                <li><a href="/" className="hover:text-indigo-600 transition">Home</a></li>
                <li><a href="/" className="hover:text-indigo-600 transition">Support</a></li>
                <li><a href="/" className="hover:text-indigo-600 transition">Pricing</a></li>
                <li><a href="/" className="hover:text-indigo-600 transition">Affiliate</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <p className="text-slate-100 font-semibold">Resources</p>
              <ul className="mt-2 space-y-2">
                <li><a href="/" className="hover:text-indigo-600 transition">Company</a></li>
                <li><a href="/" className="hover:text-indigo-600 transition">Blogs</a></li>
                <li><a href="/" className="hover:text-indigo-600 transition">Community</a></li>
                <li><a href="/" className="hover:text-indigo-600 transition">Careers</a></li>
                <li><a href="/" className="hover:text-indigo-600 transition">About</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <p className="text-slate-100 font-semibold">Legal</p>
              <ul className="mt-2 space-y-2">
                <li><a href="/" className="hover:text-indigo-600 transition">Privacy</a></li>
                <li><a href="/" className="hover:text-indigo-600 transition">Terms</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom section - text & social icons */}
        <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col items-center gap-4">
          <p className="text-center text-gray-200 max-w-md">
            Making every customer feel valued—no matter the size of your audience.
          </p>
          <div className="flex items-center gap-6">
            {/* Social icons here */}
          </div>
          <p className="text-center text-gray-500 mt-2">
            © 2025 <a href="/" className="hover:text-indigo-600">PrebuiltUI</a>
          </p>
        </div>
      </footer>
    </>
  );
}
