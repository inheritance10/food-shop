import Title from "@/components/ui/Title";
import MenuCategory from "@/components/MenuWrapper/MenuCategory";
import MenuItem from "@/components/MenuWrapper/MenuItem";



const MenuWrapper = () => {
  return(
    <div>
      <div className='flex flex-col items-center container mx-auto mb-16'>
        <Title addClass={'text-3xl'}>Our Menu</Title>
        <MenuCategory />

        <div className={'flex flex-col justify-around mb-10 md:flex-wrap md:flex-row-reverse md:mt-10'}>
          <MenuItem title={'Burger'} description={'gıfhsgıafsghafshgıafshısg gsagıhafoıg'} price={44} />
          <MenuItem title={'Burger'} description={'gıfhsgıafsghafshgıafshısg gsagıhafoıg gouhsa'} price={65} />
          <MenuItem title={'Burger'} description={'gıfhsgıafsghafshgıafshısg gsagıhafoıg gouhsa'} price={65} />
          <MenuItem title={'Burger'} description={'gıfhsgıafsghafshgıafshısg gsagıhafoıg'} price={44} />
          <MenuItem title={'Burger'} description={'gıfhsgıafsghafshgıafshısg gsagıhafoıg gouhsa'} price={65} />
          <MenuItem title={'Burger'} description={'gıfhsgıafsghafshgıafshısg gsagıhafoıg gouhsa'} price={65} />
        </div>
      </div>
    </div>
  )
}


export default MenuWrapper
