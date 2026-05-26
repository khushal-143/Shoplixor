import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import assets from "../../assets/assets";
import Footer from "../../components/Footer/Footer";
import { Button } from 'primereact/button'
import { InputText } from "primereact/inputtext";
import OrderSummary from '../../components/OrderSummary/OrderSummary'
const cartItems = [
    {
        id: 1,
        category: "PREMIUM TECH",
        title: "Echo Max Wireless",
        subtitle: "Midnight Slate Finish • Wireless 5.2",
        price: "₹549.00",
        image: assets.p3,
    },
    {
        id: 2,
        category: "TIMEPIECES",
        title: "Aether Cam X",
        subtitle: "Brushed Titanium • Sapphire Crystal",
        price: "₹1,299.00",
        image: assets.p4,
    },
];

const Cart = () => {
    const [quantity, setQuantity] = useState({
        1: 1,
        2: 1,
    });

    const updateQuantity = (id, type) => {
        setQuantity((prev) => ({
            ...prev,
            [id]:
                type === "inc"
                    ? prev[id] + 1
                    : prev[id] > 1
                        ? prev[id] - 1
                        : 1,
        }));
    };


    return (
        <>
            <Navbar />
            <div className="tw:w-full tw:bg-[#f5f7fa] tw:px-6 tw:md:px-12 tw:py-16">

                {/* Heading */}
                <div className="tw:mb-14">

                    <h1 className="tw:text-5xl md:tw:text-6xl tw:font-bold tw:text-[#0f172a]">
                        Your Selection
                    </h1>

                    <p className="tw:text-[#64748b] tw:text-lg tw:leading-8 tw:max-w-3xl tw:mt-5">
                        Refined digital acquisitions curated for your lifestyle.
                        Review your selections before finalizing your aesthetic
                        upgrade.
                    </p>
                </div>

                {/* Layout */}
                <div className="tw:flex tw:flex-col tw:xl:flex-row  tw:gap-12">

                    {/* LEFT SIDE */}
                    <div className="tw:xl:w-[65%]">

                        {/* Cart Items */}
                        <div className="tw:flex tw:flex-wrap tw:justify-around tw:gap-4">

                            {cartItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="tw:bg-white tw:rounded-[28px] tw:p-6 tw:flex tw:flex-col tw:md:flex-row  tw:md:w-full  tw:gap-6 tw:shadow-sm"
                                >

                                    {/* Image */}
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="tw:w-full tw:md:w-auto tw:md:max-w-48 tw:h-full tw:rounded-2xl tw:object-cover"
                                    />

                                    {/* Content */}
                                    <div className="tw:flex-1">

                                        {/* Top */}
                                        <div className="tw:flex tw:flex-col md:tw:flex-row md:tw:items-start md:tw:justify-between tw:gap-4">
                                            <div className="tw:flex tw:flex-col tw:md:flex-row tw:justify-between tw:gap-2">
                                                <div>
                                                    <p className="tw:text-[11px] tw:font-semibold tw:tracking-[2px] tw:text-[#2b77c0] tw:uppercase">
                                                        {item.category}
                                                    </p>
                                                    <h2 className="tw:text-3xl tw:font-bold tw:text-[#0f172a] tw:mt-2">
                                                        {item.title}
                                                    </h2>
                                                </div>
                                                <span className="tw:text-[#0070d1] tw:text-3xl tw:font-bold">
                                                    {item.price}
                                                </span>
                                            </div>
                                            <p className="tw:text-[#64748b] tw:text-sm tw:mt-1">
                                                {item.subtitle}
                                            </p>
                                        </div>

                                        {/* Bottom */}
                                        <div className="tw:flex tw:flex-wrap tw:items-center tw:justify-between tw:gap-6 tw:mt-8">

                                            {/* Quantity */}
                                            <div className="tw:flex tw:items-center tw:bg-[#eef3fb] tw:rounded-full tw:px-5 tw:py-3 tw:gap-2 tw:mb:gap-4 " >

                                                <Button
                                                    onClick={() =>
                                                        updateQuantity(
                                                            item.id,
                                                            "dec"
                                                        )
                                                    }
                                                    className="tw:text-[#64748b] tw:focus:shadow-none! tw:hover:bg-[#0070d1] tw:hover:text-white tw:p-1 tw:rounded-full tw:transition-all! tw:duration-200! tw:ease-in!"
                                                >
                                                    <i className="pi pi-minus"></i>
                                                </Button>

                                                <span className="tw:text-sm tw:font-medium tw:text-[#0f172a]">
                                                    {quantity[item.id]}
                                                </span>

                                                <Button
                                                    onClick={() =>
                                                        updateQuantity(
                                                            item.id,
                                                            "inc"
                                                        )
                                                    }
                                                    className="tw:text-[#64748b] tw:focus:shadow-none! tw:hover:bg-[#0070d1] tw:hover:text-white tw:p-1 tw:rounded-full tw:transition-all! tw:duration-200! tw:ease-in!"
                                                >
                                                    <i className="pi pi-plus"></i>
                                                </Button>
                                            </div>

                                            {/* Remove */}
                                            <Button className="tw:flex tw:items-center tw:gap-2 tw:text-[#64748b] tw:hover:text-red-500 tw:text-sm tw:transition-all tw:focus:shadow-none!">
                                                <i className="pi pi-trash"></i>
                                                <span>Remove</span>
                                            </Button>

                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Promo Code */}
                        <div className="tw:mt-12">
                            <p className="tw:text-[11px] tw:font-semibold tw:tracking-[2px] tw:text-[#0f172a] tw:uppercase tw:mb-5">
                                Privilege Code
                            </p>

                            <div className="tw:flex tw:flex-col tw:sm:flex-row tw:gap-4">
                                <InputText
                                    type="text"
                                    placeholder="Enter promotion code"
                                    className="tw:flex-1 tw:bg-[#eef3fb] tw:px-6 tw:py-5 tw:rounded-2xl tw:outline-none tw:text-[#0f172a] placeholder:tw:text-[#94a3b8]"
                                />

                                <Button className="tw:flex tw:justify-center tw:bg-[#1f3148] tw:hover:bg-[#162538] tw:text-white tw:px-10 tw:py-3 tw:rounded-2xl tw:font-medium tw:transition-all tw:focus:shadow-none!">
                                    <span>Apply</span>
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <OrderSummary />

                </div>
            </div>
            <Footer />
        </>
    );
};

export default Cart;