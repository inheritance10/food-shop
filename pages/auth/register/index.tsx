import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";
import CustomButton from "@/components/Buttons/CustomButton";
import { registerValidate } from "@/validation/register";
import Link from "next/link";

const Register = () => {
  const onSubmit = async (values: any) => {
    console.log(values);
    // Burada kayıt işlemi gerçekleştirebilirsiniz.
  };

  

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit,
    validationSchema: registerValidate,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="container mx-auto h-screen">
        <div className="flex flex-col w-full h-full justify-center items-center">
          <h1 className="text-4xl font-bold">Register</h1>

          <div className="flex flex-col justify-evenly w-[65%] md:w-1/3 p-2">
            <label htmlFor="username">Username</label>
            <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
              placeholder="Enter username"
              name="username"
              type="text"
              className="border-primary border-2 rounded p-1"
            />
            {formik.touched.username && (
              <span className="text-red-500 text-xs">
                {formik.errors.username}
              </span>
            )}
          </div>
          <div className="flex flex-col justify-evenly w-[65%] md:w-1/3 p-2">
            <label htmlFor="email">Email</label>
            <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              placeholder="Enter email"
              name="email"
              type="text"
              className="border-primary border-2 rounded p-1"
            />
            {formik.touched.email && (
              <span className="text-red-500 text-xs">
                {formik.errors.email}
              </span>
            )}
          </div>
          <div className="flex flex-col justify-evenly w-[65%] md:w-1/3 p-2">
            <label htmlFor="password">Password</label>
            <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              placeholder="Enter password"
              name="password"
              type="password"
              className="border-primary border-2 rounded p-1"
            />
            {formik.touched.password && (
              <span className="text-red-500 text-xs">
                {formik.errors.password}
              </span>
            )}
          </div>
          <div className="flex flex-col justify-evenly w-[65%] md:w-1/3 p-2">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
              placeholder="Confirm password"
              name="confirmPassword"
              type="password"
              className="border-primary border-2 rounded p-1"
            />
            {formik.touched.confirmPassword && (
              <span className="text-red-500 text-xs">
                {formik.errors.confirmPassword}
              </span>
            )}
        </div>  

          <div className='flex flex-col gap-y-3 mt-3 w-1/3'>
               <CustomButton type="submit" text="Register" addClass="btn-primary w-full" />
            <div className='text-center'>
                <Link href='/auth/login' className="text-primary">Do you have a account?</Link>
            </div>
        </div>
    
        </div>
      </div>
    </form>
  );
};

export default Register;
