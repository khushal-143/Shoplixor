import { Checkbox } from "primereact/checkbox";
import { Dropdown } from "primereact/dropdown";
import assets from '../../assets/assets'
import { Rating } from "primereact/rating";
import { useState } from "react";
import { Slider } from "primereact/slider";

export default function ShopHero() {
    const [value, setValue] = useState(null);
    const [priceValue, setPriceValue] = useState([20, 800]);
    const [selectedCity, setSelectedCity] = useState(null);

    const sortOptions = [
        { label: "Popularity", value: "popularity" },
        { label: "Newest", value: "newest" },
        { label: "Price: Low to High", value: "low" },
        { label: "Price: High to Low", value: "high" },
    ];
    const [subject, setSubject] = useState([]);

    const Subjects = (e) => {
        let _subject = [...subject];

        if (e.checked)
            _subject.push(e.value);
        else
            _subject.splice(_subject.indexOf(e.value), 1);

        setSubject(_subject);
    }

    const products = [
        {
            tag: "NEW",
            image: assets.p1,
            brand: "AETHER TECH",
            title: "Aura-V1 Sneaker",
            price: "$1,299",
            rating: "4.9",
        },
        {
            image: assets.p2,
            brand: "TEMPORAL DESIGN",
            title: "Zenith Chrono",
            price: "$3,450",
            rating: "5.0",
        },
        {
            tag: "SALE",
            image: assets.p3,
            brand: "SONIC SPHERE",
            title: "Echo Max Wireless",
            price: "$599",
            rating: "4.8",
        },
        {
            image: assets.p4,
            brand: "LUMIX PRO",
            title: "Aether Cam X",
            price: "$2,100",
            rating: "4.9",
        },
        {
            image: assets.p5,
            brand: "VISION ELITE",
            title: "Skyframe Gradient",
            price: "$450",
            rating: "4.7",
        },
        {
            image: assets.p6,
            brand: "AETHER CORE",
            title: "Canvas Tab Pro",
            price: "$1,850",
            rating: "4.9",
        },
        {
            image: assets.p7,
            brand: "LIFE SYNC",
            title: "Aura Smart Mirror",
            price: "$2,700",
            rating: "4.8",
        },
        {
            image: assets.p8,
            brand: "AMBIENT AIR",
            title: "Mist Sculpt Pro",
            price: "$320",
            rating: "4.6",
        },
    ];

    return (
        <div className="tw:min-h-screen tw:bg-[#f8f9ff] tw:px-4 tw:md:px-8 tw:py-8">
            <div className="tw:mb-8">
                <h2 className="tw:font-geist tw:text-4xl tw:md:text-6xl  tw:md:leading-15 tw:font-bold tw:leading-10 tw:text-[#0B1C30]">The Designer Collection</h2>
                <p className="tw:font-geist tw:text-lg tw:leading-7 tw:mt-2 tw:text-[#404751] tw:max-w-2xl">
                    Curation of technological masterpieces and high-end digital luxury items
                    designed for the modern connoisseur.
                </p>
            </div>

            <div className="tw:grid tw:grid-cols-1 tw:lg:grid-cols-4 tw:gap-6">
                

                
                <div className="tw:bg-white tw:rounded-2xl tw:p-6 tw:shadow-sm tw:h-fit tw:lg:sticky tw:top-0">

                    <div className="tw:mb-6">
                        <h3 className="tw:text-base tw:font-normal tw:text-[#404751] tw:mb-6">CATEGORY</h3>
                        <div className="tw:space-y-2 tw:text-sm">
                            <div className="tw:flex tw:items-center tw:gap-2">
                                <Checkbox inputId="allProducts" name="study" value="All Products" onChange={Subjects} checked={subject.includes('All Products')}
                                    pt={{
                                        box: { style: { border: '1px solid #c0c7d2' } }
                                    }}
                                />
                                <label htmlFor="allProducts" className="tw:text-base tw:font-inter tw:font-normal tw:leading-6 tw:text-[#0B1C30] ">All Products</label>
                            </div>
                            <div className="tw:flex tw:items-center tw:gap-2">
                                <Checkbox inputId="digitalWearables" name="study" value="Digital Wearables" onChange={Subjects} checked={subject.includes('Digital Wearables')}
                                    pt={{
                                        box: { style: { border: '1px solid #c0c7d2' } }
                                    }}
                                />
                                <label htmlFor="digitalWearables" className="tw:text-base tw:font-inter tw:font-normal tw:leading-6 tw:text-[#0B1C30] ">Digital Wearables</label>
                            </div>
                            <div className="tw:flex tw:items-center tw:gap-2">
                                <Checkbox inputId="smartHardware" name="study" value="Smart Hardware" onChange={Subjects} checked={subject.includes('Smart Hardware')}
                                    pt={{
                                        box: { style: { border: '1px solid #c0c7d2' } }
                                    }}
                                />
                                <label htmlFor="smartHardware" className="tw:text-base tw:font-inter tw:font-normal tw:leading-6 tw:text-[#0B1C30] ">Smart Hardware</label>
                            </div>
                            <div className="tw:flex tw:items-center tw:gap-2">
                                <Checkbox inputId="atmosphereTech" name="study" value="Atmosphere Tech" onChange={Subjects} checked={subject.includes('Atmosphere Tech')}
                                    pt={{
                                        box: { style: { border: '1px solid #c0c7d2' } }
                                    }}
                                />
                                <label htmlFor="atmosphere Tech" className="tw:text-base tw:font-inter tw:font-normal tw:leading-6 tw:text-[#0B1C30] ">Atmosphere Tech</label>
                            </div>
                        </div>
                    </div>
                    <div className="tw:flex tw:justify-between tw:gap-4">
                        <h4 className="tw:font-geist tw:font-medium tw:text-base tw:leading-5 tw:text-[#404751] tw:mb-3">Max Price</h4>
                        <span className="tw:font-geist tw:font-semibold tw:text-sm tw:leading-3 tw:text-[#00609F] ">$5-$5000</span>
                    </div>
                    <div className="tw:flex tw:justify-center  ">
                        <Slider value={priceValue} onChange={(e) => setPriceValue(e.value)} className="tw:w-full" min={0}
                            max={5000} range
                            pt={{
                                handle: {
                                    style: {
                                        border: '1px solid #c0c7d2',
                                        top: "-110%",

                                    }
                                }
                            }}
                        />
                    </div>
                    <div className="tw:my-6">
                        <h4 className="tw:font-geist tw:font-medium tw:text-base tw:leading-5 tw:text-[#404751] tw:mb-3">Rating</h4>
                        <div className="tw:flex tw:gap-2 tw:items-center">
                            <Rating value={value} onChange={(e) => setValue(e.value)} cancel={false} className="tw:text-yellow-500"
                                pt={{
                                    onIcon: {
                                        style: {
                                            color: "#eab308"
                                        }
                                    },
                                    offIcon: {
                                        style: {
                                            color: "#eab308"
                                        }
                                    },
                                }}
                            />
                            <p className="tw:font-geist tw:font-semibold tw:text-sm tw:leading-3 tw:text-[#0B1C30] ">& Up</p>
                        </div>
                    </div>
                    </div>
                <div className="tw:lg:col-span-3">
                    <div className="tw:flex tw:flex-col tw:md:flex-row tw:justify-between tw:items-start tw:md:items-center tw:my-6 tw:gap-4">
                        <p className="tw:font-inter tw:font-normal tw:text-base tw:leading-6 tw:text-[#0B1C30]">Showing 12 of 48 products</p>
                        <div className="tw:flex tw:items-center tw:gap-3">
                            <span className="tw:text-sm tw:font-medium tw:font-geist tw:leading-5 tw:text-[#404751]">Sort By:</span>
                            <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={sortOptions} optionLabel="label"
                                placeholder="Featured" className="w-full md:w-14rem tw:py-2 tw:pl-4 tw:focus:shadow-none! tw:bg-[#eff4ff]!" checkmark={true} highlightOnSelect={false} />
                        </div>
                    </div>

                    <div className="tw:mt-10 tw:border-t tw:border-[#e5e7eb]">

                        <section className="tw:w-full tw:bg-[#f5f7fa] tw:py-16 tw:px-4 md:tw:px-10">

                            <div className="tw:flex tw:flex-wrap tw:justify-around tw:gap-6">

                                {products.map((item, index) => (
                                    <div
                                        key={index}
                                        className="tw:bg-white tw:rounded-[22px] tw:overflow-hidden tw:shadow-sm hover:tw:shadow-xl tw:transition-all tw:duration-300 tw:md:max-w-70"
                                    >

                                        {/* Image */}
                                        <div className="tw:relative">

                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="tw:w-full tw:h-67.5 tw:object-cover"
                                            />

                                            {/* Tag */}
                                            {item.tag && (

                                                <span
                                                    className={`tw:absolute tw:top-4 tw:left-4 tw:px-4 tw:py-1.5 tw:text-xs tw:font-semibold tw:rounded-full tw:text-white
                                        
                                        ${item.tag === "SALE" ? "tw:bg-[#e1261c]" : "tw:bg-[#0070d1]"}`}
                                                >
                                                    {item.tag}
                                                </span>
                                            )}

                                            {/* Cart Button */}
                                            <button className="tw:absolute tw:bottom-4 tw:right-4 tw:w-12 tw:h-12 tw:bg-white tw:rounded-full tw:flex tw:items-center tw:justify-center tw:shadow-lg hover:tw:scale-110 tw:transition-all">

                                                <i className="pi pi-cart-plus tw:text-[#0070d1] tw:text-xl"></i>
                                                {/* <ShoppingBasket
                                                    size={22}
                                                    className=""
                                                /> */}
                                            </button>
                                        </div>

                                        {/* Content */}
                                        <div className="tw:p-5">

                                            {/* Brand */}
                                            <p className="tw:text-[11px] tw:font-semibold tw:tracking-[2px] tw:text-[#64748b] tw:uppercase">
                                                {item.brand}
                                            </p>

                                            {/* Title */}
                                            <h3 className="tw:font-geist tw:text-[24px] tw:leading-8 tw:font-bold tw:text-[#0f172a] tw:mt-2">
                                                {item.title}
                                            </h3>

                                            {/* Price + Rating */}
                                            <div className="tw:flex tw:items-center tw:justify-between tw:mt-2">

                                                <span className="tw:text-[#0070d1] tw:text-[24px] tw:font-bold">
                                                    {item.price}
                                                </span>

                                                <div className="tw:flex tw:items-center tw:gap-1">
                                                    <i className="pi pi-star-fill tw:text-[#eab308] "></i>
                                                    <span className="tw:text-[#4b5563] tw:text-lg tw:font-medium">
                                                        {item.rating}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
