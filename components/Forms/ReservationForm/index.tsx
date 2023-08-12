import FormInput from "@/components/FormInput";
import Title from "@/components/ui/Title";
import CustomButton from "@/components/Buttons/CustomButton";

const ReservationForm = () => {
    return(
        <div className='flex flex-col justify-between gap-y-5'>
            <Title addClass='text-4xl w-full'>Book A Table</Title>
            <FormInput type='text' label='Your Full Name' />
            <FormInput type='text' label='Your Phone Number' />
            <FormInput type='text' label='Your Email' />
            <FormInput type='number' label='How Many Person?' />
            <FormInput type='date' label='Date' />
            <CustomButton text={'Book Now'} addClass='btn-primary'/>
        </div>
    )
}


export default ReservationForm