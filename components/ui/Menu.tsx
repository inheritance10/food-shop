function Menu() {
  return (
    <ul className='flex gap-x-4'>
      <li className='px-[5px] py-[20px] uppercase hover:text-primary cursor-pointer transition-colors duration-300 ease-in-out'>
        <a className="" href="/">Home</a>
      </li>
      <li className='px-[5px] py-[20px] uppercase hover:text-primary cursor-pointer transition-colors duration-300 ease-in-out'>
        <a className="" href="/About">Food Menu</a>
      </li>
      <li className='px-[5px] py-[20px] uppercase hover:text-primary cursor-pointer transition-colors duration-300 ease-in-out'>
        <a className="" href="/About">About</a>
      </li>
      <li className='px-[5px] py-[20px] uppercase hover:text-primary cursor-pointer transition-colors duration-300 ease-in-out'>
        <a className="" href="/BookTable">Book Table</a>
      </li>
    </ul>

  )
}

export default Menu
