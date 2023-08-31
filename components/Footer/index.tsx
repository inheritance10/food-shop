import Title from "@/components/ui/Title";
import {FaLocationArrow} from 'react-icons/fa'
const Footer = () => {
    return(
        <div className='bg-secondary  h-[100%]'>
            <div className='container h-[75%] mx-auto flex justify-evenly flex-row p-10'>
                <div className='flex flex-col justify-evenly h-[100%] text-white py-4'>
                    <Title addClass='text-2xl'>CONTACT US</Title>
                    <FaLocationArrow />
                    <p>gsafgjsaşgma</p>
                    <small>gsfahgjşsali</small>
                </div>
                <div className='flex flex-col justify-evenly h-[100%] text-white py-4'>
                    <Title addClass='text-2xl'>CONTACT US</Title>
                    <FaLocationArrow />
                    <p>gsafgjsaşgma</p>
                    <small>gsfahgjşsali</small>
                </div>
                <div className='flex flex-col justify-evenly h-full text-white py-4'>
                    <Title addClass='text-2xl'>CONTACT US</Title>
                    <FaLocationArrow />
                    <p>gsafgjsaşgma</p>
                    <small>gsfahgjşsali</small>
                </div>
            </div>

        </div>
    )
}

export default Footer