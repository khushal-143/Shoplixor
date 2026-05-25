import MyContext from '../../components/context/MyContext';
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import { useNavigate } from "react-router-dom";
import { Password } from 'primereact/password';
import { useState, useContext } from "react";
import { Button } from "primereact/button";
import { Formik, Form } from "formik";
import axios from 'axios'

const LoginForm = () => {
    const { setUser } = useContext(MyContext);
    const [checked, setChecked] = useState(false);
    const navigate = useNavigate();
    const validate = (values) => {
        const errors = {};

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
                    Welcome back
                </h2>
                <p className="tw:text-[#4b5563] tw:text-base tw:leading-6tw:mt-0 ">
                    Please enter your details to sign in to your account.
                </p>

                {/* Form */}
                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                    }}
                    validate={validate}
                    onSubmit={async (values, { setErrors }) => {

                        try {
                            const res = await axios.post(
                                'http://localhost:5000/login',
                                values
                            );

                            const data = res.data.user;
                            console.log(res.data);
                            
                            localStorage.setItem("token", res.data.token);

                            setUser({
                                name: data.name,
                                email: data.email,
                                year: data.createdAt.slice(0, 4),
                            });

                            localStorage.setItem(
                                "user",
                                JSON.stringify({
                                    name: data.name,
                                    email: data.email,
                                    year: data.createdAt.slice(0, 4),
                                })
                            );
                            navigate("/home");
                        } catch (error) {
                            // console.log(error);
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
                        <Form className="tw:flex tw:flex-col tw:gap-2 tw:space-y-8">
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
                                    className="tw:w-full tw:bg-[#f4f7fc] tw:rounded-xl tw:outline-none tw:border tw:border-transparent tw:text-base tw:placeholder:text-[#94a3b8]"
                                    pt={{
                                        input: {
                                            className: "tw:focus:shadow-none tw:focus:bg-[#f4f7fc]"
                                        },
                                        panel: {
                                            className: "tw:hidden"
                                        }
                                    }}
                                />
                            </div>

                            {errors.password && touched.password && (
                                <small className="tw:text-red-500 tw:mb-2 tw:pl-2">
                                    {errors.password}
                                </small>
                            )}

                            {/* Extra */}
                            <div className="tw:flex tw:flex-col tw:sm:flex-row tw:justify-between tw:gap-2 tw:mb-4">
                                <label className="tw:flex tw:items-center tw:gap-3 tw:text-lg tw:text-[#374151]">
                                    <Checkbox onChange={e => setChecked(e.checked)} checked={checked} pt={{
                                        input: {
                                            className: "tw:border tw:border-[#94a3b8] tw:rounded-[6px]",
                                        }
                                    }}></Checkbox>
                                    Remember me
                                </label>

                                <Button
                                    type="button"
                                    className="tw:text-[#0d5cab] tw:text-base tw:hover:underline tw:focus:shadow-none">
                                    Forgot Password?
                                </Button>
                            </div>

                            {/* Submit */}
                            <Button
                                type="submit"
                                className="tw:w-full tw:flex tw:items-center tw:justify-center tw:gap-3 tw:bg-[#0d5cab] tw:hover:bg-[#084b8d] tw:text-white tw:text-xl tw:font-medium tw:py-4 tw:rounded-2xl tw:transition-all tw:focus:shadow-none">
                                Sign In
                                <i className="pi pi-arrow-right"></i>
                            </Button>
                        </Form>)}
                </Formik>
            </div>
        </>
    )
}

export default LoginForm
