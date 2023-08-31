import Title from "@/components/ui/Title";
import {GrNext, GrPrevious} from 'react-icons/gr'
import CustomerItem from "@/components/Customer/CustomerItem";

const Customer = () => {
    return (
        <div className='h-screen container mx-auto gap-y-10 flex flex-col justify-center items-center'>
            <Title addClass='text-3xl text-dark'>What Says Our Customer</Title>
            <CustomerItem/>
            <div className='w-1/6 flex items-center justify-evenly'>

                <button className='bg-primary rounded-full p-4'>
                    <GrPrevious/>
                </button>
                <button className='bg-primary rounded-full p-4'>
                    <GrNext/>
                </button>
            </div>
        </div>
    )
}

export default Customer