import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Formik, Form } from "formik";
import axios from 'axios'
import { Password } from 'primereact/password';
import MyContext from '../context/MyContext';
import { useContext } from "react";

import './SignupForm.css'
const SignupForm = () => {
    const {
            setActiveTab
        } = useContext(MyContext);
    

    const validate = (values) => {
        const errors = {};

        if (!values.name) {
            errors.name = "Name is required";
        }

        if (!values.email) {
            errors.email = "Email is required";
        }
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = "Invalid email format";
        }

        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 4) {
            errors.password = "Password must be at least 4 characters";
        }
        return errors;
    };
    return (
        <>
            <div className="tw:flex tw:flex-col tw:gap-4 tw:bg-white tw:rounded-[30px] tw:p-6 tw:md:p-8 tw:mt-4 tw:border tw:border-[#e8edf5]">
                <h2 className="tw:text-xl tw:md:text-3xl tw:leading-7 tw:font-bold tw:text-[#071c36]">
                    Create account
                </h2>
                <p className="tw:text-[#4b5563] tw:text-base tw:leading-6">
                    Join the next generation commerce platform today.
                </p>

                {/* Form */}
                <Formik
                    initialValues={{
                        name: "",
                        email: "",
                        password: "",
                    }}
                    validate={validate}
                    onSubmit={async (values, { setErrors }) => {
                        try {
                            const res = await axios.post(
                                'http://localhost:5000/formData',
                                values
                            );
                            console.log('response from server:', res.data);

                            setActiveTab("login")
                        } catch (error) {
                            console.log(error);

                            if (error.response?.data?.message) {
                                setErrors({
                                    email: error.response.data.message
                                });
                            }
                        }
                    }}>
                    {({
                        errors,
                        touched,
                        values,
                        handleChange,
                        handleBlur
                    }) => (
                        <Form className="tw:flex tw:flex-col tw:gap-2 tw:space-y-8"

                        >
                            {/* Name */}
                            <div className="tw:mb-4">
                                <InputText
                                    type="text"
                                    name="name"
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="Full Name"
                                    className="tw:w-full tw:bg-[#f4f7fc] tw:px-4 tw:py-3 tw:rounded-xl tw:outline-none tw:border tw:border-transparent  tw:text-base tw:placeholder:text-[#94a3b8] tw:focus:shadow-none"
                                />
                            </div>
                            {errors.name && touched.name && (
                                <small className="tw:text-red-500 tw:mb-2 tw:pl-2">
                                    {errors.name}
                                </small>
                            )}

                            {/* Email */}
                            <div className="tw:mb-4">
                                <InputText
                                    type="email"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="abc@gmail.com"
                                    className="tw:w-full tw:bg-[#f4f7fc] tw:px-4 tw:py-3 tw:rounded-xl tw:outline-none tw:border tw:border-transparent tw:text-base tw:placeholder:text-[#94a3b8] tw:focus:shadow-none"
                                />
                            </div>

                            {errors.email && touched.email && (
                                <small className="tw:text-red-500  tw:mb-2 tw:pl-2">
                                    {errors.email}
                                </small>
                            )}

                            {/* Password */}
                            <div className="tw:mb-4">
                                <Password
                                    type="password"
                                    name="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="Password"
                                    toggleMask
                                    className="tw:w-full tw:bg-[#f4f7fc] tw:rounded-xl tw:outline-none tw:border tw:border-transparent tw:text-base tw:placeholder:text-[#94a3b8] tw:focus:mb:5"
                                    pt={{
                                        input: {
                                            className: "tw:focus:shadow-none tw:focus:bg-[#f4f7fc]"
                                        }
                                    }}
                                />
                            </div>

                            {errors.password && touched.password && (
                                <small className="tw:text-red-500 tw:mb-2 tw:pl-2">
                                    {errors.password}
                                </small>
                            )}

                            {/* Submit */}
                            <Button
                                type="submit"
                                className="tw:w-full tw:flex tw:items-center tw:justify-center tw:gap-3 tw:bg-[#0d5cab] tw:hover:bg-[#084b8d] tw:text-white tw:text-xl tw:font-medium tw:py-4 tw:rounded-2xl tw:transition-all tw:focus:shadow-none">
                                Create Account
                                <i className="pi pi-arrow-right"></i>
                            </Button>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    )
}

export default SignupForm
