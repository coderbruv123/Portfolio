import { MdEmail } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import Footer from "../sections/Footer";

const Contact = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-black to-gray-800 py-12">
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Contact Me</h1>
            <p className="text-gray-300 mb-10">I would love to hear from you! Feel free to reach out via email or phone.</p>
            <div className="flex flex-col md:flex-row gap-10 items-center justify-center w-full max-w-3xl">
                <div className="flex flex-col gap-8 w-full md:w-1/2">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex flex-col items-center justify-center h-40 w-80 shadow-lg p-6 mx-auto">
                        <MdEmail size={48} className="text-blue-400 mb-2" />
                        <h2 className="text-2xl font-bold text-white mb-1">Email</h2>
                        <a
                            href="mailto:giriprashant516@gmail.com"
                            className="text-blue-300 underline hover:text-blue-400 transition select-all"
                        >
                            giriprashant516@gmail.com
                        </a>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex flex-col items-center justify-center h-40 w-80 shadow-lg p-6 mx-auto">
                        <MdPhone size={48} className="text-purple-400 mb-2" />
                        <h2 className="text-2xl font-bold text-white mb-1">Phone</h2>
                        <a
                            href="tel:9818057756"
                            className="text-blue-300 underline hover:text-blue-400 transition select-all"
                        >
                            9818057756
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;