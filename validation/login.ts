import * as Yup from 'yup'
export const loginValidate = Yup.object({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required(),
})
