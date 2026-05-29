import { Button } from "primereact/button";
import { useState, useEffect } from "react";
import axios from "axios";

const FeaturedProducts = () => {
    const [featuredproducts, setFeaturedProducts] = useState([]);
    useEffect(() => {

        const fetchProducts = async () => {
            try {
                const res = await axios(
                    "http://localhost:5000/api/products/featured"
                );

                console.log(res.data.featuredProducts);
                
                setFeaturedProducts(res.data.featuredProducts.slice(4, 7))

            } catch (error) {
                console.log(
                    "Error fetching categories:",
                    error
                );
            }
        };

        fetchProducts();
    }, []);
    return (
        <div className="tw:w-full tw:bg-[#f5f7fa] tw:py-16 tw:px-6 md:tw:px-16">

            {/* Heading */}
            <div className="tw:flex tw:flex-col tw:items-center tw:mb-16">

                <p className="tw:font-geist tw:text-[#2b77c0] tw:text-[11px] tw:font-semibold tw:uppercase tw:tracking-[2px]">
                    Curated Selection
                </p>

                <h2 className="tw:font-geist tw:text-4xl tw:text-center tw:font-bold tw:text-[#0f172a] tw:mt-1">
                    Featured Masterpieces
                </h2>

                <div className="tw:w-16 tw:h-0.75 tw:bg-[#2b77c0] tw:rounded-full tw:mt-5"></div>
            </div>

            {/* Product Cards */}
            <div className="tw:flex tw:flex-wrap tw:justify-around tw:gap-6">

                {featuredproducts.map((item, index) => (
                    <div
                        key={index}
                        className="tw:bg-white tw:rounded-[22px] tw:max-w-82.5 tw:p-4 tw:border tw:border-[#edf1f5] hover:tw:shadow-xl tw:transition-all tw:duration-300"
                    >

                        {/* Image */}
                        <div className="tw:relative tw:rounded-[18px] tw:overflow-hidden">

                            <img
                                src={item.image}
                                alt={item.title}
                                className="tw:w-full tw:h-72.5 tw:object-cover"
                            />

                            {/* Heart Icon */}
                            <button className="tw:absolute tw:top-4 tw:right-4 tw:w-8 tw:h-8 tw:flex tw:items-center tw:justify-center tw:bg-white tw:rounded-full tw:shadow-sm hover:tw:scale-110 tw:transition-all tw:cursor-pointer">
                                <i className="pi pi-heart "></i>
                            </button>
                        </div>

                        {/* Content */}
                        <div className="tw:mt-5">

                            {/* Title + Price */}
                            <div className="tw:flex tw:items-start tw:justify-between  tw:gap-4">

                                <h3 className="tw:font-geist tw:text-[22px] tw:mb:text-[24px] tw:leading-tight tw:font-semibold tw:text-[#0B1C30]">
                                    {item.title}
                                </h3>

                                <span className="tw:text-[#2b77c0] tw:text-sm tw:font-medium tw:mt-1">
                                    ₹{item.discountPrice}
                                </span>
                            </div>

                            {/* Description */}
                            <p className="tw:text-[#404751] tw:text-sm tw:mb:text-base tw:leading-7 tw:mt-3">
                                {item.description}
                            </p>

                            {/* Button */}
                            <Button label="Add to Cart" className="tw:flex tw:justify-center tw:text-[#2b77c0]! tw:w-full! tw:mt-6! tw:border tw:border-[#2b77c0]! tw:bg-white! tw:hover:bg-[#2b77c0]! tw:hover:text-white! tw:py-3! tw:rounded-xl!  tw:font-medium! tw:transition-all! tw:duration-300! tw:focus:shadow-none!">
                            </Button>
                            
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedProducts;