import Image from "next/image";
import Title from "@/components/ui/Title";

const About = () => {
    return (
        <div className='h-screen w-screen bg-secondary py-16'>
            <div className='md:flex-row flex flex-col justify-center items-center container w-full h-full mx-auto'>
                <div className='md:w-1/2 w-full h-1/2 m-4'>
                    <Image src='/images/indir.jpg' alt='food' width={100} height={100} className='w-full h-full rounded-2xl'/>
                </div>
                <div className='flex flex-col justify-evenly w-full h-full m-7'>
                    <Title addClass='text-3xl text-white'>TITLE</Title>
                    <p className='text-cyan-50'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                    </p>
                    <div className='flex'>
                        <button className='btn-primary md:w-1/2 w-full'>
                            Read More
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About
