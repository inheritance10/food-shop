import Carousel from "@/components/Carousel";
import Campaigns from "@/components/Campaigns";

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
  // Add more data items as needed
];
const HomePage = () => {
  return(
    <div>
      <Carousel />
      <div className='md:flex-row md:flex flex flex-col mx-auto my-auto justify-between py-40 container'>
        {data.map((item, index) => (
          <Campaigns key={index} title={item.title} discount={item.discount} image={item.image} buttonText='Order Now' />
        ))}
      </div>

    </div>
  )
}

export default HomePage
