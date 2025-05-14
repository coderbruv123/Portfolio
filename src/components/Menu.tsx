import { Home } from 'lucide-react'
import { FaAddressBook } from 'react-icons/fa'

const Menu = () => {
  return (
<div className='fixed left-1/2 bottom-8 transform -translate-x-1/2 flex justify-around items-center bg-black h-[5rem] w-[20rem] rounded-lg shadow-lg z-50'>   
     <div>

        <Home size={40} className="text-5xl text-white " />
        </div>
        <div>

        <FaAddressBook size={40} className="text-5xl text-white " />
        </div>
        
    </div>
  )
}

export default Menu