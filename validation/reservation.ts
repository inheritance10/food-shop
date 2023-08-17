import * as Yup from 'yup'
export const reservationValidate = Yup.object({
    fullName: Yup.string().min(3,'Min 3 characters').required('FullName is required'),
    email: Yup.string().email('Email is invalid').required(),
    date: Yup.string().required(),
    phoneNumber: Yup.string().max(11, 'Phone number must be 11 character').min(11,'Phone number must be 11 character')
        .required('Phone number is required')
})
