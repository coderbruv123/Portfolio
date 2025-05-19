import { MdEmail } from "react-icons/md";

const Contact = ()=>{
    return(
        <div className="bg-black h-3/4 flex flex-col justify-center items-center">
            <h1 className="text-4xl text-white font-bold mb-4">Contact Me</h1>
            <p className="text-white mb-8">I would love to hear from you!</p>
        <div className=" text-white section flex gap-6 items-center justify-center" id="contact">
            
            <div>
                <form>
                    <div className=" flex flex-col gap-4">
                        <input type="text" id="name"   name="name" placeholder="Name"  className="text-black border border-white bg-white placeholder-black  h-[3rem] w-80 px-4 py-2 rounded" required />
                        <input type="text" id="contact" name="name" placeholder="Gmail" className="text-black border border-white bg-white placeholder-black  h-[3rem] w-80   px-4 py-2 rounded" required />
                        <textarea id="name" name="name" placeholder="Message" className="text-black border border-white bg-white placeholder-black px-4 py-2 h-[8rem] w-80 rounded" required />
                  </div>
                  <button type="submit" className="bg-blue-400 text-white px-4 py-2 rounded mt-4">Send Message</button>
                    </form>
            </div>
            <div className="flex flex-col gap-2">
                <div className="bg-blue-900 flex flex-col justify-center items-center h-[8rem] w-[20rem] rounded">
                    <MdEmail size={40} className="text-5xl text-white " />
                    <h1 className="text-2xl text-white  font-bold ">Email</h1>
                    <p className="text-white">name@gmail.com</p>
                </div>
                <div className="bg-blue-900 flex flex-col justify-center items-center h-[8rem] w-[20rem] rounded">
                    {/* <Phone size={30} className="text-5xl text-white " /> */}
                    <h1 className="text-2xl text-white  font-bold ">Contact</h1>
                    <p className="text-white">980000000</p>
                </div>
                <div className="bg-blue-900 flex flex-col justify-center items-center h-[8rem] w-[20rem] rounded">
                    {/* <Phone size={30} className="text-5xl text-white " /> */}
                    <h1 className="text-2xl text-white  font-bold ">Contact</h1>
                    <p className="text-white">980000000</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Contact;