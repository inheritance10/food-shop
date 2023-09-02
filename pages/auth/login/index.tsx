import {useFormik} from "formik";
import {loginValidate} from "@/validation/login";
import React from "react";
import CustomButton from "@/components/Buttons/CustomButton";

const Login = () => {
    const onSubmit = async (values) => {
        console.log(values);
    };

    const {handleSubmit, touched, errors, handleChange, handleBlur, values} = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        onSubmit,
        validationSchema: loginValidate,
    });

    return (
        <form onSubmit={handleSubmit}>
            <div className="container mx-auto h-screen">
                <div className="flex flex-col w-full h-full justify-center items-center">
                    <h1 className="text-4xl font-bold">Login</h1>

                    <div className="flex flex-col justify-evenly w-[65%] md:w-1/3 p-2">
                        <label htmlFor="username">Username</label>
                        <input
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.username}
                            placeholder="Enter username"
                            name="username"
                            type="text"
                            className="border-primary border-2 rounded p-2"
                        />
                        {touched.username && (
                            <span className="text-red-500 text-xs">
                {errors.username}
              </span>
                        )}
                    </div>
                    <div className="flex flex-col justify-evenly w-[65%] md:w-1/3 p-2">
                        <label htmlFor="password">Password</label>
                        <input
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            placeholder="Enter password"
                            name="password"
                            type="password"
                            className="border-primary border-2 rounded p-2"
                        />
                        {touched.password && (
                            <span className="text-red-500 text-xs">
                {errors.password}
              </span>
                        )}
                    </div>

                    <div className='flex flex-col gap-y-3 mt-3 w-1/3'>
                        <CustomButton type="submit" text="Sign In" addClass="btn-primary w-full"/>
                        <button className='bg-secondary w-full rounded-3xl text-white p-2'>GITHUB</button>
                    </div>

                </div>
            </div>
        </form>
    );
};

export default Login;
