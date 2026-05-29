import { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';
import { Rating } from 'primereact/rating';
import { Button } from 'primereact/button';
import './ProductDetails.css'
import axios from 'axios';
const ProductDetails = ({ id }) => {
    const [product, setProduct] = useState(null);
    const images =
        product?.images?.map((img) => ({
            itemImageSrc: img,
            thumbnailImageSrc: img,
            alt: product.title,
        })) || [];
    const [value, setValue] = useState(4);
    const [openIndex, setOpenIndex] = useState(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await axios.get(
                    `http://localhost:5000/api/products/${id}`
                );

                setProduct(res.data.product);

            } catch (error) {
                console.log(error);
            }
        };

        fetchProduct();
    }, [id]);


    const responsiveOptions = [
        {
            breakpoint: '991px',
            numVisible: 4
        },
        {
            breakpoint: '767px',
            numVisible: 3
        }
    ];
    const accordionData = [
        {
            title: "CATEGORY",
            content:
                `${product?.category}`,
        },
        {
            title: "SHIPPING",
            content:
                "Free worldwide shipping. Orders are processed within 24 hours and delivered in 3–7 business days.",
        },
        {
            title: "RETURNS",
            content:
                "30-day hassle-free returns with full refund eligibility on unused products.",
        },
    ];

    const itemTemplate = (item) => {
        return (
            <div className="tw:w-full tw:h-125 tw:bg-white tw:flex tw:items-center tw:justify-center">
                <img
                    src={item.itemImageSrc}
                    alt={item.alt}
                    className="tw:w-full tw:h-full tw:object-contain tw:mt-4"
                />
            </div>
        );
    };

    const thumbnailTemplate = (item) => {
        return (
            <div className="tw:h-20 tw:w-20">
                <img
                    src={item.thumbnailImageSrc}
                    alt={item.alt}
                    className="tw:w-full tw:h-full tw:object-contain"
                />
            </div>
        );
    };
    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    const addToCart = async () => {
        try {

            const token =
                localStorage.getItem("token") ||
                sessionStorage.getItem("token");

            if (!token) {
                alert("Please login first");
                return;
            }

            const res = await axios.post(
                "http://localhost:5000/api/cart/add",
                {
                    productId: product._id,
                    quantity,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            alert("Product added to cart");

            console.log(res.data);

        } catch (error) {

            console.log(error);

            alert(
                error.response?.data?.message ||
                "Failed to add to cart"
            );
        }
    };

    return (
        <>
            <div className="product-card tw:flex tw:flex-col tw:md:flex-row tw:p-4 tw:bg-[#f5fbf7]  ">
                <div className='tw:flex tw:justify-center tw:px-4 tw:py-8 tw:relative tw:rounded-3xl tw:min-h-150 tw:md:w-[60%] tw:lg:w-[65%]'>
                    <Galleria className='tw:rounded-xl! tw:overflow-hidden tw:md:pt-8'
                        value={images}
                        responsiveOptions={responsiveOptions}
                        numVisible={5}
                        style={{
                            width: '100%',
                            maxWidth: '700px'
                        }}
                        item={itemTemplate} thumbnail={thumbnailTemplate}
                        pt={{
                            item: {
                                style: {
                                    borderRadius: "20px",
                                    overflow: "hidden"
                                }
                            },
                            thumbnailContainer: { style: { background: 'transparent' } },
                            thumbnailItemContent: {
                                style: {
                                    border: "3px solid transparent",
                                    borderRadius: "10px",
                                    overflow: "hidden"
                                }
                            }
                        }} />
                    <p className='tw:absolute tw:top-5 tw:left-5 tw:bg-[#01609f] tw:text-white tw:py-2 tw:px-4 tw:rounded-3xl tw:font-jakarta tw:font-normal tw:text-sm tw:leading-6'>Bestseller</p>
                </div>
                <div className='tw:px-4 tw:py-8 tw:flex tw:flex-col tw:gap-4 tw:md:w-[40%] tw:lg:w-[35%]'>
                    <p className='tw:font-geist tw:font-normal tw:text-sm tw:leading-6 tw:text-[#00609F]'>{product?.brand}</p>
                    <p className='tw:font-geist tw:font-bold tw:text-3xl tw:md:text-4xl tw:lg:text-5xl tw:lg:leading-12 tw:leading-10 '>{product?.title}</p>
                    <div className="tw:flex tw:items-center tw:gap-2">
                        <Rating value={value} onChange={(e) => setValue(e.value)} cancel={false}
                            pt={{
                                onIcon: {
                                    style: {
                                        color: "#fc9d41",
                                    }
                                }
                            }}
                        />
                        <p className='tw:font-jakarta tw:font-medium tw:text-xs tw:leading-3.5 tw:text-[#6D7A76] '>(149)reviews </p>
                    </div>
                    <p className='tw:font-jakarta tw:font-normal tw:text-sm tw:text-[#6D7A76] tw:leading-7'>By {product?.brand}</p>
                    <div className='tw:flex tw:gap-2 tw:items-baseline'>
                        <p className='tw:font-jakarta tw:font-bold tw:text-2xl tw:leading-10 tw:text-[#00609f] '>₹{product?.discountPrice}</p>
                        <p className='tw:font-jakarta tw:font-normal tw:text-base tw:leading-7 tw:text-[#6D7A76]'><s>₹{product?.price}</s></p>
                        <p className='tw:font-jakarta tw:font-normal tw:text-sm tw:leading-10 tw:bg-[#a5d9fc] tw:text-[#00609f] tw:px-2 tw:rounded-xl '>25% OFF</p>
                    </div>
                    <p className='tw:font-normal tw:text-sm tw:leading-6 tw:my-2 tw:text-[#404751] '>{product?.description}</p>

                    <div className='tw:flex tw:flex-col tw:gap-1'>
                        <div className='tw:flex tw:items-center tw:gap-4 tw:px-2'>
                            <div className='tw:flex tw:items-center tw:gap-4 tw:p-2 tw:px-3 tw:border tw:border-[#dde1e8] tw:rounded-3xl tw:bg-white' >
                                <i
                                    className='pi pi-minus tw:text-[#4c525b] tw:text-xs tw:cursor-pointer'
                                    onClick={() =>
                                        setQuantity((prev) =>
                                            Math.max(1, prev - 1)
                                        )
                                    }
                                />

                                <p className='tw:text-sm'>
                                    {quantity}
                                </p>

                                <i
                                    className='pi pi-plus tw:text-[#4c525b] tw:text-xs tw:cursor-pointer'
                                    onClick={() =>
                                        setQuantity((prev) => prev + 1)
                                    }
                                />
                            </div>
                            <Button
                                onClick={addToCart}
                                className='tw:flex tw:gap-2 tw:items-center tw:justify-center tw:bg-[#2279c0]! tw:border-none! tw:px-4! tw:py-2! tw:rounded-3xl! tw:focus:shadow-none! tw:w-full!'
                            >
                                <i className='pi pi-shopping-cart tw:text-white tw:block'></i>
                                <span className='tw:text-white tw:font-jakarta tw:font-normal tw:text-base tw:leading-6 tw:items-center'>Add to Cart</span>
                            </Button>
                        </div>
                        <div className='tw:flex tw:items-center tw:gap-2 tw:p-2'>
                            <Button className='tw:flex tw:gap-2 tw:items-center tw:bg-[#0b1c30]! tw:border-none! tw:px-4! tw:py-2! tw:rounded-3xl! tw:focus:shadow-none!  tw:w-full tw:shrink tw:justify-center'>
                                <span className='tw:text-white tw:font-jakarta tw:font-normal tw:text-base tw:leading-6 tw:items-center '>Buy Now</span>
                            </Button>
                            <i className='pi pi-heart tw:border tw:p-3 tw:rounded-xl tw:border-[#bccac5] tw:text-[#8b918f] '></i>
                        </div>
                        <div className="tw:mt-4 tw:border-t tw:border-[#e5e7eb]">

                            {accordionData.map((item, index) => (
                                <div
                                    key={index}
                                    className="tw:border-b tw:border-[#e5e7eb] "
                                >

                                    {/* Header */}
                                    <button
                                        onClick={() => toggleAccordion(index)}
                                        className="tw:w-full tw:flex tw:items-center tw:justify-between tw:py-6 tw:text-left tw:cursor-pointer"
                                    >

                                        <span className="tw:text-[#0f172a] tw:text-sm tw:font-medium tw:tracking-[0.5px] ">
                                            {item.title}
                                        </span>

                                        {/* PrimeReact Icon */}
                                        <i
                                            className={`pi pi-angle-down tw:text-sm tw:text-[#0f172a] tw:transition-transform tw:duration-300
                                
                                ${openIndex === index
                                                    ? "tw:rotate-180"
                                                    : ""
                                                }
                            `}
                                        />
                                    </button>

                                    {/* Content */}
                                    <div
                                        className={`tw:overflow-hidden tw:transition-all tw:duration-300
                            
                            ${openIndex === index
                                                ? "tw:max-h-40 tw:pb-6"
                                                : "tw:max-h-0"
                                            }
                        `}
                                    >

                                        <p className="tw:text-[#64748b] tw:text-sm tw:leading-7 tw:pr-6">
                                            {item.content}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails
