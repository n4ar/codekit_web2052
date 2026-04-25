export function Footer() {
  return (
    <footer className="w-full bg-[#F8FAFC] border-t border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6 py-12 md:py-16 flex flex-col lg:flex-row gap-10 lg:gap-8 justify-between">
        
        {/* Left brand column */}
        <div className="flex flex-col items-start gap-4 lg:max-w-sm">
          <div className="font-bold text-xl md:text-2xl text-slate-900">
            T-Goda
          </div>
          <p className="font-normal text-sm md:text-base leading-relaxed text-slate-500 m-0 w-full">
            Making world travel accessible, affordable, and delightful for everyone since 2024. Your journey starts here.
          </p>
          <div className="pt-2">
            <span className="font-normal text-sm text-slate-500">
              © 2024 T-Goda Booking. All rights reserved.
            </span>
          </div>
          
          {/* Social icons */}
          <div className="flex items-center pt-2 gap-4">
            {/* Facebook */}
            <a href="#" className="flex items-center text-slate-300 hover:text-slate-500 transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            {/* Instagram */}
            <a href="#" className="flex items-center text-slate-300 hover:text-slate-500 transition-colors">
              <svg width="21" height="21" viewBox="0 0 21 21" fill="currentColor">
                <path d="M10.5 2.163c2.804 0 3.135.012 4.235.061 1.02.047 1.573.218 1.942.36a3.24 3.24 0 011.198.779 3.24 3.24 0 01.78 1.198c.143.368.313.922.36 1.942.05 1.1.061 1.431.061 4.235s-.012 3.135-.062 4.235c-.046 1.02-.216 1.573-.36 1.942a3.24 3.24 0 01-.779 1.198 3.24 3.24 0 01-1.198.78c-.368.143-.921.313-1.942.36-1.1.05-1.43.061-4.235.061s-3.135-.012-4.235-.062c-1.02-.046-1.573-.216-1.942-.36a3.24 3.24 0 01-1.198-.779 3.24 3.24 0 01-.779-1.198c-.143-.368-.313-.921-.36-1.942C2.174 13.635 2.163 13.305 2.163 10.5s.012-3.135.061-4.235c.047-1.02.218-1.573.36-1.942A3.24 3.24 0 013.363 3.125a3.24 3.24 0 011.198-.779c.368-.143.922-.313 1.942-.36C7.365 2.174 7.695 2.163 10.5 2.163zm0-2.163C7.645 0 7.332.012 6.22.073 5.11.134 4.352.31 3.692.56A5.4 5.4 0 001.737 1.737 5.4 5.4 0 00.56 3.692C.31 4.352.133 5.11.073 6.22.012 7.332 0 7.645 0 10.5s.012 3.168.073 4.28c.06 1.11.237 1.868.487 2.528a5.4 5.4 0 001.177 1.955 5.4 5.4 0 001.955 1.177c.66.25 1.418.428 2.528.487C7.332 20.988 7.645 21 10.5 21s3.168-.012 4.28-.073c1.11-.06 1.868-.237 2.528-.487a5.4 5.4 0 001.955-1.177 5.4 5.4 0 001.177-1.955c.25-.66.428-1.418.487-2.528C20.988 13.668 21 13.355 21 10.5s-.012-3.168-.073-4.28c-.06-1.11-.237-1.868-.487-2.528a5.4 5.4 0 00-1.177-1.955A5.4 5.4 0 0017.308.56C16.648.31 15.89.133 14.78.073 13.668.012 13.355 0 10.5 0zm0 5.108a5.392 5.392 0 100 10.784 5.392 5.392 0 000-10.784zm0 8.892a3.5 3.5 0 110-7 3.5 3.5 0 010 7zm5.608-10.25a1.26 1.26 0 10-.001 2.519 1.26 1.26 0 000-2.52z" />
              </svg>
            </a>
            {/* Twitter / X */}
            <a href="#" className="flex items-center text-slate-300 hover:text-slate-500 transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full lg:w-auto mt-6 lg:mt-0">
          {[
            { heading: "Company", links: ["About Us", "Careers"] },
            { heading: "Support", links: ["Support", "Mobile App"] },
            { heading: "Legal", links: ["Privacy Policy", "Terms of Service"] },
          ].map((col) => (
            <div key={col.heading} className="flex flex-col items-start gap-3">
              <div className="font-bold text-sm md:text-base text-slate-900">
                {col.heading}
              </div>
              {col.links.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="font-normal text-sm text-slate-500 no-underline hover:text-blue-600 transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>
        
      </div>
    </footer>
  );
}
