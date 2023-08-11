import Title from "@/components/ui/Title";
import Image from "next/image";
import {IoFastFoodSharp} from 'react-icons/io5'
import CustomButton from "@/components/Buttons/CustomButton";
import Checkbox from "@/components/Checkboxes/Checkbox";


const productSize = [ //todo gelen urunun id sine bagl olarak size bilgisi eklenecek
    {
        size: 30,
        name: 'small'
    },
    {
        size: 35,
        name: 'medium'
    },
    {
        siz: 45,
        name: 'large'
    }
]
const ChooseSize = () => {
    return(
        <div className='flex flex-col w-full justify-between items-start'>
            <Title addClass='text-xl'>Choose the Size</Title>
            <div className=' flex gap-x-14 flex-row w-full items-center'>
                {
                    productSize.map((item, key) => {
                        return(
                            <div className='relative'>
                                <IoFastFoodSharp key={key} size={25 + key * 10}/>
                                <span key={key} className='bg-primary px-1 rounded-full text-black text-sm font-medium absolute top-0 left-5'>{item.name}</span>
                            </div>
                        )
                    })

                }
            </div>
        </div>
    )
}

const ProductDetail = (props: {data?: any}) => {
    return(
        <div className='flex h-screen items-center flex-wrap gap-20 py-20'>
            <div className=' relative items-center mt-10 flex-1 w-full h-1/2 md:w-[80%] md:h-[80%] md:mx-20 md:mt-20'>
                <Image className='' objectFit='contain' layout={'fill'} src='/images/burger.jpg' alt='food'/>
            </div>
            <div className='px-4 flex flex-col w-full md:w-[42%]  h-full md:h-[88%] md:mx-20 justify-around items-start'>,
                <div>
                    <Title addClass='text-4xl'>Product Name</Title>

                    <span className='text-primary text-2xl tracking-wider underline'>$335</span>
                </div>

                <p className='text-sm gap-x-14'>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>

                <ChooseSize />


                <div className='flex flex-col justify-between w-full h-[13%]'>
                    <Title addClass='text-2xl'>Choose Additional Ingredients </Title>
                    <div className='flex justify-between w-2/3'>
                        <Checkbox key={1} label={'Ketçap'} />
                        <Checkbox key={2} label={'Mayonez'} />
                        <Checkbox key={3} label={'Burger Sosu'} />
                    </div>
                </div>



                <div className='flex w-1/2 justify-end'>
                    <CustomButton text={'Add To Cart'} addClass={'btn-primary w-full'} />
                </div>

            </div>
        </div>
    )
}

export default ProductDetail