const Contact = ()=>{
    return(
        <div className=" text-white section flex gap-6 items-center justify-center" id="contact">
            
            <div>
                <form>
                    <h1>Message Me </h1>
                    <div className=" flex flex-col gap-4">
                        <input type="text" id="name"   name="name" placeholder="Name"  className="text-white border border-white bg-white placeholder-black  px-4 py-2 rounded" required />
                        <input type="text" id="contact" name="name" placeholder="Gmail" className="text-white border border-white bg-white placeholder-black  px-4 py-2 rounded" required />
                        <input type="text" id="name" name="name" placeholder="Message" className="text-white border border-white bg-white placeholder-black px-4 py-2 rounded" required />
                  </div>
                  <button type="submit" className="bg-blue-400 text-white px-4 py-2 rounded mt-4">Submit</button>
                    </form>
            </div>
            <div>
            <p>Message me  or connect with me on LinkedIn.</p>
            </div>
            </div>
    )
}

export default Contact;