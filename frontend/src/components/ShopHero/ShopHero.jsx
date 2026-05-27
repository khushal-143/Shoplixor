import { Checkbox } from "primereact/checkbox";
import { Dropdown } from "primereact/dropdown";
import { Rating } from "primereact/rating";
import { useState, useEffect } from "react";
import { Slider } from "primereact/slider";
import axios from 'axios'
import { Paginator } from "primereact/paginator";

export default function ShopHero() {
    const [priceValue, setPriceValue] = useState([400, 50000]);
    const [selectedSort, setSelectedSort] = useState(null);
    const [products, setProducts] = useState([]);
    const [subject, setSubject] = useState([]);
    const [first, setFirst] = useState(0);
    const [value, setValue] = useState(1);
    const [rows, setRows] = useState(8);

    const sortOptions = [
        { label: "Popularity", value: "popularity" },
        { label: "Price: Low to High", value: "low" },
        { label: "Price: High to Low", value: "high" },
    ];

    const Subjects = (e) => {
        let _subject = [...subject];

        if (e.checked)
            _subject.push(e.value);
        else
            _subject.splice(_subject.indexOf(e.value), 1);

        setSubject(_subject);
    }

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios(
                    "http://localhost:5000/api/products"
                );

                setProducts(res.data.products)
            } catch (error) {
                console.log(
                    "Error fetching categories:",
                    error
                );
            }
        };
        fetchProducts();
    }, []);

    useEffect(() => {
        const pageRefresh = () => {
            try {
                setFirst(0);
            } catch (error) {
                console.log(error);
            }
        }
        pageRefresh()
    }, [subject, value, priceValue, selectedSort]);

    const onPageChange = (event) => {
        setFirst(event.first);
        setRows(event.rows);
    };
    const filteredProducts = products
        .filter((item) => {

            // CATEGORY FILTER
            if (
                subject.length > 0 &&
                !subject.includes("All Products")
            ) {
                return subject.includes(item.category);
            }
            return true;
        })

        .filter((item) => {

            // PRICE FILTER
            return (
                item.discountPrice >= priceValue[0] &&
                item.discountPrice <= priceValue[1]
            );
        })

        .filter((item) => {

            return item.ratings >= value;
        });

    const sortedProducts = [...filteredProducts];

    if (selectedSort === "low") {
        sortedProducts.sort(
            (a, b) => a.discountPrice - b.discountPrice
        );
    }

    if (selectedSort === "high") {
        sortedProducts.sort(
            (a, b) => b.discountPrice - a.discountPrice
        );
    }

    if (selectedSort === "popularity") {
        sortedProducts.sort(
            (a, b) => b.ratings - a.ratings
        );
    }
    const paginatedProducts = sortedProducts.slice(
        first,
        first + rows
    );

    return (
        <div className="tw:min-h-screen tw:bg-[#f8f9ff] tw:px-4 tw:md:px-8 tw:py-8">
            <div className="tw:mb-8">
                <h2
                    className="tw:font-geist tw:text-4xl tw:md:text-6xl  tw:md:leading-15 tw:font-bold tw:leading-10 tw:text-[#0B1C30]">
                    The Designer Collection
                </h2>
                <p
                    className="tw:font-geist tw:text-lg tw:leading-7 tw:mt-2 tw:text-[#404751] tw:max-w-2xl">
                    Curation of technological masterpieces and high-end digital luxury items
                    designed for the modern connoisseur.
                </p>
            </div>

            <div className="tw:grid tw:grid-cols-1 tw:lg:grid-cols-4 tw:gap-6">
                <div className="tw:bg-white tw:rounded-2xl tw:p-6 tw:shadow-sm tw:h-fit tw:lg:sticky tw:top-0">

                    <div className="tw:mb-6">
                        <h3
                            className="tw:text-base tw:font-normal tw:text-[#404751] tw:mb-6">
                            CATEGORY
                        </h3>
                        <div className="tw:space-y-2 tw:text-sm">
                            <div className="tw:flex tw:items-center tw:gap-2">
                                <Checkbox
                                    inputId="allProducts"
                                    name="study"
                                    value="All Products"
                                    onChange={Subjects}
                                    checked={subject.includes('All Products')}
                                    pt={{
                                        box: { style: { border: '1px solid #c0c7d2' } }
                                    }}
                                />
                                <label htmlFor="allProducts" className="tw:text-base tw:font-inter tw:font-normal tw:leading-6 tw:text-[#0B1C30] ">All Products</label>
                            </div>
                            <div className="tw:flex tw:items-center tw:gap-2">
                                <Checkbox
                                    inputId="smartphones"
                                    name="study"
                                    value="Smartphones"
                                    onChange={Subjects}
                                    checked={subject.includes('Smartphones')}
                                    pt={{
                                        box: { style: { border: '1px solid #c0c7d2' } }
                                    }}
                                />
                                <label htmlFor="smartphones"
                                    className="tw:text-base tw:font-inter tw:font-normal tw:leading-6 tw:text-[#0B1C30] ">
                                    Smart Phones
                                </label>
                            </div>
                            <div className="tw:flex tw:items-center tw:gap-2">
                                <Checkbox inputId="smarthomes"
                                    name="study" value="Smart Home"
                                    onChange={Subjects}
                                    checked={subject.includes('Smart Home')}
                                    pt={{
                                        box: { style: { border: '1px solid #c0c7d2' } }
                                    }}
                                />
                                <label htmlFor="smarthomes"
                                    className="tw:text-base tw:font-inter tw:font-normal tw:leading-6 tw:text-[#0B1C30] ">
                                    Smart Homes
                                </label>
                            </div>
                            <div className="tw:flex tw:items-center tw:gap-2">
                                <Checkbox inputId="accessories"
                                    name="study"
                                    value="Accessories"
                                    onChange={Subjects}
                                    checked={subject.includes('Accessories')}
                                    pt={{
                                        box: { style: { border: '1px solid #c0c7d2' } }
                                    }}
                                />
                                <label htmlFor="accessories"
                                    className="tw:text-base tw:font-inter tw:font-normal tw:leading-6 tw:text-[#0B1C30] ">
                                    Accessories
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="tw:flex tw:justify-between tw:gap-4">
                        <h4
                            className="tw:font-geist tw:font-medium tw:text-base tw:leading-5 tw:text-[#404751] tw:mb-3">
                            Max Price
                        </h4>
                        <span
                            className="tw:font-geist tw:font-semibold tw:text-sm tw:leading-3 tw:text-[#00609F] ">
                            ₹{priceValue[0]}-₹{priceValue[1]}
                        </span>
                    </div>
                    <div className="tw:flex tw:justify-center  ">
                        <Slider
                            className="tw:w-full"
                            value={priceValue}
                            onChange={(e) => setPriceValue(e.value)}
                            min={0}
                            max={200000} range
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
                        <h4
                            className="tw:font-geist tw:font-medium tw:text-base tw:leading-5 tw:text-[#404751] tw:mb-3">
                            Rating
                        </h4>
                        <div className="tw:flex tw:gap-2 tw:items-center">
                            <Rating
                                className="tw:text-yellow-500"
                                value={value}
                                onChange={(e) => setValue(e.value)}
                                cancel={false}
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
                            <p
                                className="tw:font-geist tw:font-semibold tw:text-sm tw:leading-3 tw:text-[#0B1C30] ">
                                & Up
                            </p>
                        </div>
                    </div>
                </div>
                <div className="tw:lg:col-span-3">
                    <div
                        className="tw:flex tw:flex-col tw:md:flex-row tw:justify-between tw:items-start tw:md:items-center tw:my-6 tw:gap-4">
                        <p
                            className="tw:font-inter tw:font-normal tw:text-base tw:leading-6 tw:text-[#0B1C30]">
                            Showing {first + 1} - {Math.min(first + rows, filteredProducts.length)} of {filteredProducts.length} products
                        </p>
                        <div className="tw:flex tw:items-center tw:gap-3">
                            <span
                                className="tw:text-sm tw:font-medium tw:font-geist tw:leading-5 tw:text-[#404751]">Sort By:</span>
                            <Dropdown
                                className="tw:w-full tw:md:w-40 tw:py-2 tw:pl-4 tw:focus:shadow-none! tw:bg-[#eff4ff]!"
                                value={selectedSort}
                                onChange={(e) => setSelectedSort(e.value)}
                                options={sortOptions}
                                optionLabel="label"
                                placeholder="Featured"
                                checkmark={true}
                                highlightOnSelect={false} />
                        </div>
                    </div>

                    <div className="tw:mt-10 tw:border-t tw:border-[#e5e7eb]">

                        <section className="tw:w-full tw:bg-[#f5f7fa] tw:py-16 tw:px-4 ">

                            <div className="tw:flex tw:flex-wrap tw:justify-around tw:gap-6">

                                {paginatedProducts.map((item) => (
                                    <div
                                        key={item.id}
                                        className=" tw:bg-white tw:rounded-[22px] tw:overflow-hidden tw:shadow-sm tw:hover:shadow-xl tw:transition-all tw:duration-300 tw:md:max-w-70 tw:md:min-w-65"
                                    >

                                        {/* Image */}
                                        <div className="tw:relative">

                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="tw:w-full tw:h-full tw:object-cover"
                                            />

                                            {/* Tag */}
                                            {item.tag && (
                                                <span
                                                    className={`tw:absolute tw:top-4 tw:left-4 tw:px-4 tw:py-1.5 tw:text-xs tw:font-semibold tw:rounded-full tw:text-white
                                                        ${item.tag === "SALE" ? "tw:bg-[#e1261c]" : "tw:bg-[#0070d1]"}`}>
                                                    {item.tag}
                                                </span>
                                            )}

                                            {/* Cart Button */}
                                            <button
                                                className="tw:absolute tw:bottom-4 tw:right-4 tw:w-12 tw:h-12 tw:bg-white tw:rounded-full tw:flex tw:items-center tw:justify-center tw:shadow-lg tw:hover:scale-120 tw:transition-all tw:cursor-pointer">
                                                <i className="pi pi-cart-plus tw:text-[#0070d1] tw:text-xl"></i>
                                            </button>
                                        </div>

                                        {/* Content */}
                                        <div className="tw:p-5 tw:h-fit tw:w-full">

                                            {/* Brand */}
                                            <p
                                                className="tw:text-[11px] tw:font-semibold tw:tracking-[2px] tw:text-[#64748b] tw:uppercase">
                                                {item.brand}
                                            </p>

                                            {/* Title */}
                                            <h3
                                                className="tw:font-geist tw:text-[24px] tw:leading-8 tw:font-bold tw:text-[#0f172a] tw:mt-2">
                                                {item.title}
                                            </h3>

                                            {/* Price + Rating */}
                                            <div className="tw:flex tw:items-center tw:justify-between tw:mt-2">

                                                <span
                                                    className="tw:text-[#0070d1] tw:text-[24px] tw:font-bold">
                                                    ₹{item.discountPrice}
                                                </span>

                                                <div className="tw:flex tw:items-center tw:gap-1">
                                                    <i className="pi pi-star-fill tw:text-[#eab308] "></i>
                                                    <span
                                                        className="tw:text-[#4b5563] tw:text-lg tw:font-medium">
                                                        {item.ratings}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <div className="tw:flex tw:items-center tw:justify-center tw:mt-10 tw:h-fit">
                                    <Paginator
                                        first={first}
                                        rows={rows}
                                        totalRecords={filteredProducts.length}
                                        onPageChange={onPageChange}
                                    />
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
