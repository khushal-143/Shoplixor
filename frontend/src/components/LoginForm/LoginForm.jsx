import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import { useState } from "react";
import { Button } from "primereact/button";
const LoginForm = () => {
    const [checked, setChecked] = useState(false);
    
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
                <form className="tw:flex tw:flex-col tw:gap-2 tw:space-y-8"
                    
                >

                    {/* Email */}
                    <div className="tw:mb-4">
                        <InputText
                            type="email"
                            placeholder="abc@gmail.com"
                            className="tw:w-full tw:bg-[#f4f7fc] tw:px-4 tw:py-3 tw:rounded-xl tw:outline-none tw:border tw:border-transparent  tw:text-base tw:placeholder:text-[#94a3b8] tw:focus:shadow-none"
                        />
                    </div>

                    {/* Password */}
                    <div className="tw:mb-4">
                        <InputText
                            type="password"
                            placeholder="Password"
                            className="tw:w-full tw:bg-[#f4f7fc] tw:px-4 tw:py-3 tw:rounded-xl tw:outline-none tw:border tw:border-transparent tw:text-base tw:placeholder:text-[#94a3b8] tw:focus:shadow-none"
                        />
                    </div>

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
                            className="tw:text-[#0d5cab] tw:text-base tw:hover:underline tw:focus:shadow-none"
                        >
                            Forgot Password?
                        </Button>
                    </div>

                    {/* Submit */}
                    <Button className="tw:w-full tw:flex tw:items-center tw:justify-center tw:gap-3 tw:bg-[#0d5cab] tw:hover:bg-[#084b8d] tw:text-white tw:text-xl tw:font-medium tw:py-4 tw:rounded-2xl tw:transition-all tw:focus:shadow-none">
                        Sign In
                        <i className="pi pi-arrow-right"></i>
                    </Button>
                </form>
            </div>
        </>
    )
}

export default LoginForm
