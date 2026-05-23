import { useContext } from "react";
import assets from "../../assets/assets";
import { Button } from "primereact/button";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignupForm from '../../components/SignupForm/SignupForm'
import MyContext from '../../components/context/MyContext';

const Login = () => {
    const {
        activeTab, setActiveTab
    } = useContext(MyContext);

    return (
        <div className="tw:min-h-screen  tw:max-h-0 tw:flex tw:justify-center tw:lg:justify-between  tw:bg-[#f5f7fa]">

            {/* LEFT SIDE */}
            <div className="tw:relative tw:hidden tw:w-[60%] tw:lg:block">

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

                <div className="tw:flex tw:flex-col tw:max-w-140 tw:w-full tw:mx-auto">

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
                    {activeTab === "login"
                        ? <LoginForm />
                        : <SignupForm />
                    }
                </div>
            </div>
        </div>
    );
};

export default Login;
