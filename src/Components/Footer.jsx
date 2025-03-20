export default function Footer() {
  return (
    <footer className="bg-white text-gray-600 py-10 px-6 md:px-20">
      <div className="max-w-8xl mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand Section */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-blue-600">MORENT</h2>
          <p className="mt-3 text-sm text-gray-500">
            Our vision is to provide convenience and help increase your sales business.
          </p>
        </div>

        {/* About Section */}
        <div className="about-footer">
          <h3 className="font-semibold text-gray-800 text-lg">About</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-500">
            <li>How it works</li>
            <li>Featured</li>
            <li>Partnership</li>
            <li>Business Relation</li>
          </ul>
        </div>

        {/* Socials Section */}
        <div className="socials-footer">
          <h3 className="font-semibold text-gray-800 text-lg">Socials</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-500">
            <li>Discord</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Facebook</li>
          </ul>
        </div>

        {/* Community Section */}
        <div className="community-footer">
          <h3 className="font-semibold text-gray-800 text-lg">Community</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-500">
            <li>Events</li>
            <li>Blog</li>
            <li>Podcast</li>
            <li>Invite a friend</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 border-t pt-4 flex flex-col sm:flex-row justify-between text-sm text-gray-500">
        <div className="flex flex-col sm:flex-row gap-4 text-center">
          <a href="#">Privacy & Policy</a>
          <a href="#">Terms & Condition</a>
        </div>
        <p className="mt-4 sm:mt-0 text-center">©2022 MORENT. All rights reserved</p>
      </div>
    </footer>
  );
}
