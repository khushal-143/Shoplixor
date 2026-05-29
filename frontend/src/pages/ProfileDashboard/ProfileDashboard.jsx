import MyContext from '../../components/context/MyContext';
import { useState, useContext } from "react";
import Navbar from '../../components/Navbar/Navbar'
import { Button } from "primereact/button";
import { Navigate } from "react-router-dom";
import {
    Package,
    BadgeCheck,
    Bookmark,
} from "lucide-react";
import axios from "axios";
import { useEffect } from "react";
import Footer from '../../components/Footer/Footer';

const ProfileDashboard = () => {
    const { user, setUser } = useContext(MyContext);
    const [activeTab, setActiveTab] = useState("Profile");

    useEffect(() => {
        const getProfile = async () => {
            try {
                const token =
                    localStorage.getItem("token") ||
                    sessionStorage.getItem("token");

                //  Redirect immediately if no token
                if (!token) {
                    return <Navigate to="/" replace />;
                }

                const res = await axios.get("http://localhost:5000/profile", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                console.log(res.data);

            } catch (error) {
                console.log(error);
                // ✅ Also redirect if token is invalid/expired (401)
                if (error.response?.status === 401) {
                    localStorage.removeItem("token");
                    sessionStorage.removeItem("token");
                    <Navigate to="/" replace />
                }
            }
        };
        getProfile();
    }, []);


    const sidebarItems = [
        {
            name: "Profile",
            icon: 'pi pi-user',
        },
        {
            name: "Orders",
            icon: 'pi pi-shopping-bag',
        },
        {
            name: "Wishlist",
            icon: 'pi pi-heart',
        },
        {
            name: "Settings",
            icon: 'pi pi-cog',
        },
        {
            name: "Logout",
            icon: "pi pi-sign-out"
        }
    ];
    const stats = [
        {
            title: "Recent Orders",
            value: "12",
            icon: <Package size={20} />,
        },
        {
            title: "Member Since",
            value: `${user?.year || ""}`,
            icon: <BadgeCheck size={20} />,
        },
        {
            title: "Cart Items",
            value: "45",
            icon: <Bookmark size={20} />,
        },
    ];
    return (
        <>
            <Navbar />
            <div className="tw:w-full tw:min-h-screen tw:bg-[#f5f7fa] tw:px-6 tw:md:px-10 tw:py-10">

                <div className="tw:flex tw:flex-col tw:md:flex-row  tw:gap-8">

                    {/* LEFT SIDEBAR */}
                    <div className="tw:flex tw:flex-col tw:xs:flex-row tw:md:flex-col tw:xs:justify-between tw:md:justify-start tw:space-y-6 tw:min-w-67.5">

                        {/* Menu */}
                        <div className="tw:bg-white tw:rounded-[22px] tw:p-4 tw:shadow-sm tw:xs:w-1/2 tw:md:w-full">

                            <div className="tw:flex tw:flex-col   tw:gap-2">

                                {sidebarItems.map((item, index) => (
                                    <Button
                                        key={index}
                                        onClick={() => {
                                            if (item.name === "Logout") {
                                                localStorage.removeItem("token");
                                                localStorage.removeItem("user");

                                                sessionStorage.removeItem("token");
                                                sessionStorage.removeItem("user");

                                                setUser(null);

                                                <Navigate to="/" replace />
                                            } else {
                                                setActiveTab(item.name);
                                            }
                                        }}
                                        className={`tw:flex tw:mb:justify-center tw:md:justify-start tw:w-full tw:gap-4 tw:px-5 tw:py-4 tw:rounded-xl tw:text-left tw:font-medium tw:transition-all! tw:focus:shadow-none
                                        ${item.name === 'Logout' && "tw:text-[#ee0a0a]"}
                                        ${activeTab === item.name
                                                ? "tw:bg-[#2b77c0] tw:text-white"
                                                : "tw:text-[#0f172a] hover:tw:bg-[#f4f7fc]"
                                            }
                                    `}
                                    >
                                        <i className={item.icon}></i>
                                        {item.name}
                                    </Button>
                                ))}
                            </div>
                        </div>

                        {/* Rewards Card */}
                        <div className="tw:bg-white tw:rounded-[22px] tw:p-5 tw:shadow-sm tw:text-center tw:xs:w-[45%]  tw:md:w-full">

                            <div className="tw:w-18 tw:h-18 tw:bg-[#dceafe] tw:rounded-full tw:flex tw:items-center tw:justify-center tw:mx-auto">
                                <i className="pi pi-sparkles tw:text-[#2b77c0] tw:text-3xl"></i>
                            </div>

                            <p className="tw:text-[#2b77c0] tw:text-xs tw:font-semibold tw:tracking-[2px] tw:uppercase tw:mt-6">
                                Aether Elite
                            </p>

                            <h3 className="tw:text-2xl tw:md:text-4xl tw:font-bold tw:text-[#0f172a] tw:mt-3">
                                2,450 Points
                            </h3>

                            <Button className="tw:flex tw:justify-center tw:w-full tw:bg-[#0d5cab] tw:hover:bg-[#084b8d] tw:text-white tw:py-4 tw:rounded-full tw:font-medium tw:mt-5 tw:md:mt-8 tw:transition-all tw:focus:shadow-none">
                                Redeem Rewards
                            </Button>
                        </div>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="tw:w-full">

                        {/* Top Stats */}
                        <div className="tw:flex tw:flex-col tw:lg:flex-row tw:w-full tw:gap-4 tw:md:gap-6">

                            {stats.map((item, index) => (
                                <div
                                    key={index}
                                    className={`tw:flex-1 tw:bg-white tw:rounded-[20px] tw:p-3 tw:md:p-6 tw:flex tw:items-center tw:gap-5 tw:shadow-sm
                                `}
                                >

                                    <div className="tw:w-14 tw:h-14 tw:bg-[#eef4ff] tw:rounded-xl tw:flex tw:items-center tw:justify-center tw:text-[#2b77c0]">
                                        {item.icon}
                                    </div>

                                    <div>
                                        <p className="tw:text-sm tw:text-[#64748b]">
                                            {item.title}
                                        </p>

                                        <h3 className="tw:text-2xl tw:md:text-4xl tw:font-bold tw:text-[#0f172a] tw:mt-1">
                                            {item.value}
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Profile Card */}
                        <div className="tw:bg-white tw:rounded-[26px] tw:shadow-sm tw:mt-8">

                            {/* Header */}
                            <div className="tw:flex tw:flex-col tw:lg:flex-row tw:md:items-center tw:md:justify-between tw:gap-6 tw:p-8 tw:md:p-10">

                                {/* Profile */}
                                <div className="tw:flex tw:flex-col tw:lg:flex-row tw:items-center tw:gap-6">

                                    <div className="tw:relative">

                                        <img
                                            src="/profile/Profile.png"
                                            alt="Profile"
                                            className="tw:w-24 tw:h-24 tw:rounded-full tw:object-cover"
                                        />

                                        <button className="tw:absolute tw:bottom-0 tw:right-0 tw:w-8 tw:h-8 tw:bg-[#0d5cab] tw:rounded-full tw:flex tw:items-center tw:justify-center tw:text-white tw:border-2 tw:border-white">
                                            <i className="pi pi-pencil"></i>
                                        </button>
                                    </div>

                                    <div>
                                        <h2 className="tw:text-2xl tw:md:text-4xl tw:font-bold tw:text-[#0f172a]">
                                            {user?.name || ""}
                                        </h2>

                                        <p className="tw:text-[#64748b] tw:text-base tw:md:text-lg tw:mt-2">
                                            {user?.email || ""}
                                        </p>
                                    </div>
                                </div>

                                {/* Edit Button */}
                                <button className="tw:px-8 tw:py-4 tw:border-2 tw:border-[#2b77c0] tw:text-[#2b77c0] tw:hover:bg-[#2b77c0] tw:hover:text-white tw:rounded-full tw:font-medium tw:transition-all">
                                    Edit Profile
                                </button>
                            </div>

                            {/* Divider */}
                            <div className="tw:border-t tw:border-[#eef2f7]"></div>

                            {/* Form */}
                            <div className="tw:p-8 tw:md:p-10">

                                <div className="tw:flex tw:flex-col tw:gap-8">

                                    {/* Full Name */}
                                    <div>
                                        <label className="tw:block tw:text-sm tw:font-medium tw:text-[#0f172a] tw:mb-3">
                                            Full Name
                                        </label>

                                        <input
                                            type="text"
                                            value={user?.name || ""}
                                            readOnly
                                            className="tw:w-full tw:bg-[#f4f7fc] tw:px-5 tw:py-4 tw:rounded-xl tw:outline-none tw:text-[#0f172a]"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="tw:block tw:text-sm tw:font-medium tw:text-[#0f172a] tw:mb-3">
                                            Email Address
                                        </label>

                                        <input
                                            type="email"
                                            value={user?.email || ""}
                                            readOnly
                                            className="tw:w-full tw:bg-[#f4f7fc] tw:px-5 tw:py-4 tw:rounded-xl tw:outline-none tw:text-[#0f172a]"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProfileDashboard;