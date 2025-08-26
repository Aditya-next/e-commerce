"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useFormik } from 'formik';
import Input from './Input';
import PasswordInput from './PasswordInput';

const Login = () => {

    const [visible, setVisible] = useState(false)

   
   function visiblePassword(){
   setVisible(prev => !prev);
    
   }

  
   
    interface Values {
        email: string,
        password: string,
    }

    function validate(values: Values) {
        const errors: any = {};

        if (!values.email) {
            errors.email = 'Email is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }
        if (!values.password) {
            errors.password = 'Password in required'
        }

        return errors;
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validate,
        onSubmit: values => {
            console.log("login values", values)
        },
    });
    return (
        <div className='w-full h-[100vh] flex justify-center items-center'>
            <form onSubmit={formik.handleSubmit} className='text-center border rounded-md bg-gray-100 px-10 py-10 space-y-4 w-[500px]'>
                <h4 className='font-bold text-[25px]'>Login</h4>
                <div className='flex flex-col items-start'>
                    {/* <label htmlFor="email">Email</label> */}
                    <Input type="text"
                        id='email'
                        name='email'
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        onBlur={formik.handleBlur}
                        error={formik.errors.email}
                        placeholder='Enter your email'
                        className='px-2 py-1 border-[0.5px] border-gray-500 rounded-md w-full relative'
                         />
                        
                    {/* {formik.errors.email ? <div className='text-red-500 text-[12px]'>{formik.errors.email}</div> : null} */}
                </div>

                <div className='flex flex-col items-start relative'>
                    <label htmlFor="password">Password</label>
                    <PasswordInput type={visible? 'text' : 'password'}
                        id='password'
                        name='password'
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        onBlur={formik.handleBlur}
                        placeholder='Enter your password'
                        show={visiblePassword} 
                         />
                         
                    {formik.errors.password ? <div className='text-red-500 text-[12px]'>{formik.errors.password}</div> : null}
                </div>

                <div>
                    <button type='submit' className='px-2 py-1 border-[0.5px] border-gray-500 rounded-md w-full cursor-pointer bg-gray-800 text-white font-semibold text-[15px] mt-4'>
                        Login
                    </button>

                    <div className='flex justify-between gap-8 mt-1'>
                        <div className='flex'>
                            <input type="checkbox" />
                            <p className='text-[14px]'>Remember me</p>
                        </div>

                        <p className='text-[14px] hover:text-blue-500 cursor-pointer'>Forget password</p>
                    </div>
                </div>

                <Link href='/register' className='h-full w-full'>
                    <button className='px-2 py-1 border-[0.5px] border-gray-500 rounded-md w-full cursor-pointer bg-gray-800 text-white font-semibold text-[15px]'>Register</button>
                </Link>

            </form>
        </div>
    )
}

export default Login
