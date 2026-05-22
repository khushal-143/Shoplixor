import { useState } from "react";
import assets from "../../assets/assets";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
const Login = () => {
    const [activeTab, setActiveTab] = useState("login");
    const [checked, setChecked] = useState(false);

    return (
        <section className="tw:min-h-screen  tw:max-h-screen tw:flex tw:justify-between  tw:bg-[#f5f7fa]">

            {/* LEFT SIDE */}
            <div className="tw:relative tw:hidden tw:w-1/2 tw:lg:block">

                {/* Background Image */}
                <img
                    src={assets.loginBg}
                    alt="Aether Commerce"
                    className="tw:w-full tw:h-full tw:object-cover"
                />

                {/* Dark Overlay */}
                <div className="tw:absolute tw:inset-0 tw:bg-[#02111f]/45"></div>

                {/* Glass Card */}
                <div className="tw:absolute tw:inset-0 tw:flex tw:items-center tw:justify-center tw:px-10">

                    <div className="tw:backdrop-blur-xl tw:bg-white/10 tw:border tw:border-white/20 tw:rounded-[34px] tw:p-12 tw:max-w-155 tw:text-white tw:shadow-2xl">

                        <h1 className="tw:text-7xl tw:leading-20.5 tw:font-bold">
                            Shoplixor
                        </h1>

                        <p className="tw:text-2xl tw:leading-10 tw:text-white/85 tw:mt-8">
                            Elevate your digital retail experience with the
                            world's most advanced headless commerce engine.
                        </p>

                        {/* Features */}
                        <div className="tw:flex tw:flex-wrap tw:gap-10 tw:mt-12">

                            <div className="tw:flex tw:items-center tw:gap-2">
                                <i className="pi pi-verified tw:text-[24px]"></i>
                                <span className="tw:text-xl">
                                    SECURE
                                </span>
                            </div>

                            <div className="tw:flex tw:items-center tw:gap-2">
                                <i className="pi pi-bolt tw:text-[24px]"></i>
                                <span className="tw:text-xl">
                                    RAPID
                                </span>
                            </div>

                            <div className="tw:flex tw:items-center tw:gap-2">
                                <i className="pi pi-globe tw:text-[24px]"></i>

                                <span className="tw:text-xl">
                                    GLOBAL
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="tw:flex tw:flex-col tw:px-6 tw:md:px-10 tw:py-6 ">

                <div className="tw:max-w-140 tw:w-full tw:mx-auto">

                    {/* Tabs */}
                    <div className="tw:bg-[#dfe9fb] tw:p-3 tw:rounded-[28px] tw:flex tw:gap-3">

                        {/* Login */}
                        <Button
                            onClick={() => setActiveTab("login")}
                            className={`tw:flex-1! tw:flex tw:items-center tw:justify-center tw:gap-3 tw:py-2 tw:md:py-4 tw:rounded-full tw:text-base tw:font-medium tw:transition-all! tw:duration-300! tw:focus:shadow-none
                                
                                ${activeTab === "login"
                                    ? "tw:bg-white tw:text-[#0f172a]"
                                    : "tw:text-[#0f172a]/80"
                                }
                            `}
                        >
                            <i className="pi pi-sign-in tw:text-[20px]"></i>
                            Login
                        </Button>

                        {/* Signup */}
                        <Button
                            onClick={() => setActiveTab("signup")}
                            className={`tw:flex-1 tw:flex tw:items-center tw:justify-center tw:gap-3 tw:py-2 tw:rounded-full tw:text-base tw:font-medium tw:transition-all tw:focus:shadow-none
                                
                                ${activeTab === "signup"
                                    ? "tw:bg-white tw:text-[#0f172a]"
                                    : "tw:text-[#0f172a]/80"
                                }
                            `}
                        >
                            <i className="pi pi-user-plus tw:text-[20px]"></i>
                            Sign Up
                        </Button>
                    </div>

                    {/* Form Card */}
                    <div className="tw:flex tw:flex-col tw:gap-2 tw:bg-white tw:rounded-[30px] tw:p-6 tw:md:p-8 tw:mt-4 tw:border tw:border-[#e8edf5]">

                        <h2 className="tw:text-xl tw:md:text-3xl tw:leading-7 tw:font-bold tw:text-[#071c36]">
                            {activeTab === "login"
                                ? "Welcome back"
                                : "Create account"}
                        </h2>

                        <p className="tw:text-[#4b5563] tw:text-base tw:md:text-xl tw:leading-6 tw:mt-0 tw:md:mt-6">
                            {activeTab === "login"
                                ? "Please enter your details to sign in to your account."
                                : "Join the next generation commerce platform today."}
                        </p>

                        {/* Form */}
                        <form className="tw:flex tw:flex-col tw:gap-2 tw:mt-4 tw:space-y-8">

                            {/* Email */}
                            <div className="tw:mb-4">
                                <label className="tw:block tw:text-base tw:md:text-xl tw:font-medium tw:text-[#0f172a] tw:mb-2">
                                    Email Address
                                </label>

                                <InputText
                                    type="email"
                                    placeholder="name@gmail.com"
                                    className="tw:w-full tw:bg-[#f4f7fc] tw:px-4 tw:py-3 tw:rounded-xl tw:outline-none tw:border tw:border-transparent  tw:text-base tw:placeholder:text-[#94a3b8] tw:focus:shadow-none"
                                />
                            </div>

                            {/* Password */}
                            <div className="tw:mb-4">
                                <label className="tw:block tw:text-base tw:md:text-xl tw:font-medium tw:text-[#0f172a] tw:mb-2">
                                    Password
                                </label>

                                <InputText
                                    type="password"
                                    placeholder="••••••••"
                                    className="tw:w-full tw:bg-[#f4f7fc] tw:px-4 tw:py-3 tw:rounded-xl tw:outline-none tw:border tw:border-transparent tw:text-xl tw:placeholder:text-[#94a3b8] tw:focus:shadow-none"
                                />
                            </div>

                            {/* Extra */}
                            <div className="tw:flex tw:flex-col tw:sm:flex-row tw:justify-between tw:gap-2 tw:mb-4">

                                <label className="tw:flex tw:items-center tw:gap-3 tw:text-lg tw:text-[#374151]">
                                    <Checkbox onChange={e => setChecked(e.checked)} checked={checked} pt={{
                                        input: {
                                            className:"tw:border tw:border-[#94a3b8] tw:rounded-[6px]",
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

                                {activeTab === "login"
                                    ? "Sign In"
                                    : "Create Account"}
                                <i className="pi pi-arrow-right"></i>
                            </Button>
                        </form>
                    </div>

                    {/* Footer */}
                    <p className="tw:text-center tw:text-[#6b7280] tw:text-base tw:mt-12">
                        © 2026 Shoplixor. ALL RIGHTS RESERVED.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Login;
