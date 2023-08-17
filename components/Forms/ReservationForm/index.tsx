import FormInput from "@/components/FormInput";
import Title from "@/components/ui/Title";
import CustomButton from "@/components/Buttons/CustomButton";
import {useFormik} from "formik";
import React from "react";
import {reservationValidate} from "@/validation/reservation";


const ReservationForm = () => {

    const onSubmit = async (values: any) => {
        console.log(values)
    }


    const {touched,handleBlur,errors, values, handleChange, handleSubmit} = useFormik({
        initialValues: {
            fullName: '',
            phoneNumber: '',
            email: '',
            date: ''
        },
        onSubmit,
        validationSchema: reservationValidate
    });



    const input = [
        {
            id: 1,
            name: 'fullName',
            type: 'text',
            placeHolder: 'Your FullName',
            values: values.fullName,
            errorMessage: errors.fullName,
            touched:touched.fullName
        },
        {
            id: 2,
            name: 'phoneNumber',
            type: 'text',
            placeHolder: 'Your Phone Number',
            values: values.phoneNumber,
            errorMessage: errors.phoneNumber,
            touched:touched.phoneNumber
        },
        {
            id: 3,
            name: 'email',
            type: 'email',
            placeHolder: 'Your Email',
            values: values.email,
            errorMessage: errors.email,
            touched:touched.email
        },
        {
            id: 4,
            name: 'date',
            type: 'date',
            placeHolder: 'Date',
            values: values.date,
            errorMessage: errors.date,
            touched:touched.date
        }
    ]

    return (
        <form onSubmit={handleSubmit}>
            <div className='flex flex-col justify-between gap-y-5'>
                <Title addClass='text-4xl w-full'>Book A Table</Title>
                {
                    input.map((item) => {
                        return (
                            <FormInput onBlur={handleBlur} key={item.id} {...item} onChange={handleChange}/>

                        )
                    })
                }
                <CustomButton onClick={onSubmit} type={'submit'} text={'Book Now'} addClass='btn-primary'/>
            </div>

        </form>
    )
}


export default ReservationForm