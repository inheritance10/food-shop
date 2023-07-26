import Title from "@/components/ui/Title";


const MenuCategory = () => {
  return(
      <ul className='flex flex-row justify-around gap-x-14'>
        <li className='active:bg-secondary'>All</li>
        <li>Burger</li>
        <li>Pizza</li>
        <li>Pasta</li>
        <li>Fries</li>
      </ul>
  )
}
const MenuWrapper = () => {
  return(
    <div>
      <div className='flex flex-col items-center w-full container mx-auto'>
        <Title>Our Menu</Title>
        <MenuCategory />
      </div>
    </div>
  )
}


export default MenuWrapper
