import Image from "next/image";
import {CampaignsCardProps} from "@/components/Campaigns/type";
import {BsBasketFill} from 'react-icons/Bs'
import Title from "@/components/ui/Title";
const Campaigns = (props: CampaignsCardProps) => {
  const {title, discount ,image , buttonText} = props
  return(
    <div className='flex flex-col lg:flex-row md:flex-row justify-between m-5 md:items-center md:w-full w-auto bg-secondary rounded-2xl p-4'>
      <div className='md:w-1/3 flex justify-center md:justify-start mb-4 md:mb-0'>
        <Image src='/images/food.png' alt='food' className='rounded-full border-primary border-4 hover:scale-105 transition-all' width='200' height='200'/>
      </div>
      <div className='w-full flex flex-col h-full justify-between md:items-end'>
        <div className='md:flex-col flex flex-row h-full justify-between mb-4'>
          <Title addClass={'font-bold text-white md:text-xl text-3xl'}>{title}</Title>
          <span className='font-bold text-white md:text-xl text-3xl'>{discount}</span>
        </div>
        <button className=' gap-x-8 btn-primary flex items-center justify-between'>
          {buttonText}
          <BsBasketFill size={25}/>
        </button>
      </div>
    </div>

  )
}


export default Campaigns
