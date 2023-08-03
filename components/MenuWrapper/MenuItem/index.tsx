import Image from "next/image";
import Title from "@/components/ui/Title";
import {BsFillCartFill} from "react-icons/Bs";

export interface MenuItemProps {
  image?: string,
  title?: string,
  description?: string,
  price?: number
}

const MenuItem = (props: MenuItemProps) => {
  const {image, title, description, price} = props
  return (
    <div className={'bg-secondary flex flex-col rounded-2xl mt-10'}>
      <div className={'w-full h-full bg-secondary'}>
        <Image src={'/images/food.png'} alt={'food'} className={'w-full rounded-bl-3xl'} width={100} height={100}/>
      </div>
      <div className={'py-4 px-4 text-white'}>
        <div className={'w-full '}>
          <Title addClass={'text-2xl'}>{title}</Title>
          <p className={'w-52'}>{description}</p>
        </div>
        <div className={'flex flex-row justify-between items-center mt-10'}>
          <p>${price}</p>
          <button><BsFillCartFill size={25} color={'#ffbe33'}/></button>
        </div>
      </div>

    </div>
  )
}


export default MenuItem
