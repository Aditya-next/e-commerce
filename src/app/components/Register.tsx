"use client"

import React, { useState } from 'react'
import { useFormik } from 'formik';
import Link from 'next/link';
import Input from './Input';
import PasswordInput from './PasswordInput';

const Register = () => {
  
  async function registerUser(values: Values) {
    try {
      const res = await fetch('/signup',{
        method: 'Post',
        body: JSON.stringify(values)
      })
      if (!res.ok) {
        throw new Error(`Response status: ${res.status}`);
      }
      const result = await res.json();
      console.log("The return data", result)
    }
    catch (error) {
      console.log("This route is not working", error);
    }

  }

  const [visiblePas, setVisiblePas] = useState(false);
  const [visibleCpas, setVisibleCpas] = useState(false)

  function visiblePassword() {
    setVisiblePas(pre => !pre)
  }

  function visibleConPassword() {
    setVisibleCpas(pre => !pre)
  }
  interface Values {
    fname: string,
    lname: string,
    email: string,
    password: string,
    cpassword: string

  }

  interface Errors {
  fname?: string;
  lname?: string;
  email?: string;
  password?: string;
  cpassword?: string;
}

  function validate(values: Values):Errors {
    const errors: Errors = {};

    if (!values.fname) {
      errors.fname = 'Required';
    } else if (values.fname.length > 15) {
      errors.fname = 'Must be 15 characters or less';
    }

    if (!values.lname) {
      errors.lname = 'Required';
    } else if (values.lname.length > 20) {
      errors.lname = 'Must be 20 characters or less';
    }

    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if (!values.password) {
      errors.password = 'Required';
    } else if (values.password.length < 8) {
      errors.password = 'Password lenght must be 8 or more'
    }
    if (!values.cpassword) {
      errors.cpassword = 'Required';
    } else if (values.cpassword !== values.password) {
      errors.cpassword = 'Password not matched!'
    }

    return errors;
  };


  const formik = useFormik({
    initialValues: {
      fname: '',
      lname: '',
      email: '',
      password: '',
      cpassword: ''
    },
    validate,
    onSubmit: values => {
      console.log("adajsklfdj", values)
      // alert(JSON.stringify(values, null, 2));

      registerUser(values);
    },
  });
  return (
    <div className='w-full h-[100vh] flex justify-center items-center'>
      <form onSubmit={formik.handleSubmit} className='text-center w-[350px] border rounded-md bg-gray-100 px-10 py-10 space-y-4' >
        <h4 className='font-bold text-[25px]'>Register</h4>
        <div className='flex flex-col items-start w-full'>
          <label htmlFor="fname">First Name</label>
          <Input
            type="text"
            name='fname'
            id='fname'
            placeholder='First Name'
            onChange={formik.handleChange}
            value={formik.values.fname}
            onBlur={formik.handleBlur}
            error = {formik.errors.fname}
            className="px-2 py-1 border-[0.5px] border-gray-500 rounded-md w-full relative"
          />
        </div>

        <div className='flex flex-col items-start w-full'>
          <Input
            type="text"
            name='lname'
            id='lname'
            placeholder='Last Name'
            onChange={formik.handleChange}
            value={formik.values.lname}
            onBlur={formik.handleBlur}
            error = {formik.errors.lname}
            className="px-2 py-1 border-[0.5px] border-gray-500 rounded-md w-full relative"
          />
        </div>

        <div className='flex flex-col items-start w-full'>
          <Input
            type="email"
            name='email'
            id='email'
            onChange={formik.handleChange}
            value={formik.values.email}
            placeholder='Enter your email'
            onBlur={formik.handleBlur}
            error={formik.errors.email}
            className="px-2 py-1 border-[0.5px] border-gray-500 rounded-md w-full relative"
          />
        </div>

        <div className='flex flex-col items-start w-full'>
          <PasswordInput
            type={visiblePas ? 'text' : 'password'}
            name='password'
            id='password'
            onChange={formik.handleChange}
            value={formik.values.password}
            placeholder='Enter your password'
            show={visiblePassword}
            onBlur={formik.handleBlur}
            />
          {formik.errors.password ? <div className='text-red-500 text-[12px]'>{formik.errors.password}</div> : null}
        </div>

        <div className='flex flex-col items-start w-full'>
          <label htmlFor="password">Password</label>
                    <PasswordInput
                      type={visibleCpas ? "text" : "password"}
                      id="password"
                      name="password"
                      onChange={formik.handleChange}
                      value={formik.values.cpassword}
                      onBlur={formik.handleBlur}
                      placeholder="Enter your password"
                      show={visibleConPassword}
                    />
          {formik.errors.cpassword ? <div className='text-red-500 text-[12px]'>{formik.errors.cpassword}</div> : null}
        </div>

        <div>
          <button type='submit' className='px-2 py-1 border-[0.5px] border-gray-500 rounded-md w-full cursor-pointer bg-gray-800 text-white font-semibold text-[15px] mt-4'>
            Register
          </button>
          <p className='text-left'>Already have account? <Link className='text-blue-500' href='/login'>Login</Link></p>
        </div>

      </form>
    </div>
  )
}

export default Register
