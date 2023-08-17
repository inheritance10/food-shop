import Carousel from "@/components/Carousel";
import Campaigns from "@/components/Campaigns";
import MenuWrapper from "@/components/MenuWrapper";
import About from "@/pages/about";
import Image from "next/image";
import CustomButton from "@/components/Buttons/CustomButton";
import ReservationForm from "@/components/Forms/ReservationForm";

const data = [
    {
        title: "Campaign 1",
        discount: "50% OFF",
        image: "/images/food1.png",
    },
    {
        title: "Campaign 2",
        discount: "30% OFF",
        image: "/images/food2.png",
    },
    {
        title: "Campaign 2",
        discount: "30% OFF",
        image: "/images/food2.png",
    },
    // Add more data items as needed
];
const HomePage = () => {
    return (
        <div>
            <Carousel/>
            <div className='md:flex-row md:flex flex w-full flex-col mx-auto my-auto justify-between py-40 container flex-1 flex-wrap'>
                {data.map((item, index) => (
                    <Campaigns key={index} title={item.title} discount={item.discount} image={item.image} buttonText='Order Now'/>
                ))}
            </div>

            <MenuWrapper/>

            <About/>


            <div className='flex-col w-full h-full flex container md:flex-row mx-auto mt-12 mb-12 items-center'>
                <div className='w-full md:w-[75%] h-full md:h-1/2 '>
                    <ReservationForm/>
                </div>
                <div className='flex items-end w-full justify-end mt-4'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.0360697126!2d-74.3093296070908!3d40.697539963305694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20Amerika%20Birle%C5%9Fik%20Devletleri!5e0!3m2!1str!2str!4v1691840878435!5m2!1str!2str" width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>


        </div>
    )
}

export default HomePage
