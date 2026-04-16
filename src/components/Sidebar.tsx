import { useState } from "react";
import { Bookmark, BookOpenText, Home, Layers, Link, MailOpen, MonitorCog } from "lucide-react";
export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger (mobile only) */}
      <button
        type="button"
        className="fixed top-4 left-4 z-50 rounded bg-white/90 px-3 py-2 shadow md:hidden"
        onClick={() => setOpen(true)}
        aria-label="Open sidebar"
      >
        ☰
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-40 h-full w-56 bg-gray-900 text-white transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static`}
      >
        <div className="p-4 font-bold text-lg flex gap-3">
            <div className="w-12 h-12 bg-gray-700 mb-2"></div>

            
            <div className="flex flex-col">

            <h2>Prashant Giri</h2>
            <h2>Developer</h2>
            </div>
        </div>

        <ul className="space-y-2 p-4">
          <li className="hover:bg-gray-700 p-2 rounded flex gap-2"><Home /> Home</li>
          <li className="hover:bg-gray-700 p-2 rounded flex gap-2"> <MonitorCog />Projects</li>
          <li className="hover:bg-gray-700 p-2 rounded flex gap-2 "> <BookOpenText />About</li>
          <li className="hover:bg-gray-700 p-2 rounded flex gap-2"> <MailOpen />Contact</li>
        </ul>
         <ul className="space-y-2 p-4">
          <li className="hover:bg-gray-700 p-2 rounded flex gap-2"> <Bookmark />Bookmarks</li>
          <li className="hover:bg-gray-700 p-2 rounded flex gap-2"> <Layers />Stack</li>
          <li className="hover:bg-gray-700 p-2 rounded flex gap-2"> <Link />Connect</li>
        </ul>
        <div>
          <button
            className="absolute bottom-4  text-white bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded w-full mx-4"
           
           
          >
            Download Cv
          </button>
        </div>
      </div>
      

      {/* Overlay (mobile) */}
      {open && (
        <div
          className="fixed inset-0 z-30 bg-black/40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}



     
    </>
  );
}
