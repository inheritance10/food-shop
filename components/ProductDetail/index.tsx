import Title from "@/components/ui/Title";
import Image from "next/image";
import {IoFastFoodSharp} from 'react-icons/io5'


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
        <div className='flex flex-row w-full justify-between items-center'>
            {
                productSize.map((item, key) => (
                        <IoFastFoodSharp key={key} size={25 + key * 5}/>
                ))
            }
        </div>

    )
}

const ProductDetail = () => {
    return(
        <div className='container mx-auto items-center flex flex-row h-screen w-screen'>
            <div className='w-full h-1/2'>
                <Image width={100} height={100} src='/images/food2.jpg' alt='food'/>
            </div>
            <div className='flex flex-col h-1/2 justify-between items-center'>
                <Title>Product Name</Title>
                <p>335$</p>
                <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
                <div className='flex flex-col'>
                    <h3>Choose the Size</h3>
                    <ChooseSize />
                </div>

            </div>
        </div>
    )
}

export default ProductDetail