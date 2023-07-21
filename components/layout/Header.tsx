import Logo from "@/components/ui/Logo";
import Menu from "@/components/ui/Menu";
import {FaUserAlt, FaShoppingCart, FaSearch} from 'react-icons/fa'
import {useState} from "react";
import SearchModal from "@/components/modals/search-modal";
const Header = () => {

  const [searchModalShow, setSearchModalShow] = useState<boolean>(false)

  return (
    <div className='h-[5.5rem] bg-secondary'>
      <div className='mx-auto text-white flex justify-between items-center h-full max-w-7xl px-4'>
        <div>
          <Logo/>
        </div>
        <nav>
          <Menu/>
        </nav>
        <div className='flex gap-x-4 items-center'>
          <a className='hover:text-primary cursor-pointer transition-colors duration-300 ease-in-out' href=""><FaUserAlt /></a>
          <a className='hover:text-primary cursor-pointer transition-colors duration-300 ease-in-out' href=""><FaShoppingCart /></a>
          <button className='hover:text-primary cursor-pointer transition-colors duration-300 ease-in-out' onClick={() => setSearchModalShow(true)}><FaSearch /></button>
          <button className="btn-primary">Order Online</button>
        </div>
      </div>

      {
        searchModalShow && (
          <SearchModal setSearchModalShow={setSearchModalShow} title={'Search'} />
        )
      }

    </div>
  )
}

export default Header;
