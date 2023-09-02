import Carousel from "@/components/Carousel";
import Campaigns from "@/components/Campaigns";
import MenuWrapper from "@/components/MenuWrapper";
import About from "@/pages/about";
import Image from "next/image";
import CustomButton from "@/components/Buttons/CustomButton";
import ReservationForm from "@/components/Forms/ReservationForm";
import Customer from "@/components/Customer";
import Footer from "@/components/Footer";
import Reservation from "@/components/Reservation";

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
            <Reservation />
            <Customer/>
        </div>
    )
}

export default HomePage
