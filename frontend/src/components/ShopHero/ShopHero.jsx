import { Card } from "primereact/card";
import { Checkbox } from "primereact/checkbox";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
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

    const books = [
        {
            id: 1,
            badge: "BESTSELLER",
            title: "English Literacy: The Beginning",
            author: "Sarah J. Higgins",
            price: "$18.50",
            oldPrice: "$24.00",
            rating: "4.9",
            image: assets.English,
        },
        {
            id: 2,
            badge: "NEW",
            title: "Fun with Numbers: Math Lab",
            author: "David Chen",
            price: "$15.00",
            oldPrice: "",
            rating: "4.8",
            image: assets.Math1,
        },
        {
            id: 3,
            badge: "",
            title: "Whimsical Rhymes & Riddles",
            author: "Maya Angelou Jr.",
            price: "$12.99",
            oldPrice: "",
            rating: "4.7",
            image: assets.Rhymes,
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
                <div className="tw:bg-white tw:rounded-2xl tw:p-6 tw:shadow-sm tw:h-fit">

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
                                            color:"#eab308"
                                        }
                                    },
                                    offIcon: {
                                        style: {
                                            color:"#eab308"
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

                    <div className="tw:grid tw:grid-cols-1 tw:sm:grid-cols-2 tw:xl:grid-cols-3 tw:gap-6">
                        {books.map((book) => (
                            <Card key={book.id} className="tw:rounded-2xl tw:overflow-hidden tw:shadow-sm tw:border-0">
                                <div className="tw:relative tw:bg-[#c7f1ee] tw:rounded-xl tw:p-4">
                                    {book.badge && (
                                        <span className="tw:absolute tw:top-3 tw:left-3 tw:bg-orange-400 tw:text-white tw:text-xs tw:px-3 tw:py-1 tw:rounded-full">
                                            {book.badge}
                                        </span>
                                    )}

                                    <img
                                        src={book.image}
                                        alt={book.title}
                                        className="tw:w-full tw:h-72 tw:object-cover tw:rounded-lg"
                                    />
                                </div>

                                <div className="tw:pt-4">
                                    <div className="tw:flex tw:justify-between tw:gap-3">
                                        <h3 className="tw:font-semibold tw:text-lg">{book.title}</h3>
                                        <span className="tw:text-sm tw:text-yellow-500">★ {book.rating}</span>
                                    </div>

                                    <p className="tw:text-sm tw:text-gray-500 tw:mt-1">By {book.author}</p>

                                    <div className="tw:flex tw:justify-between tw:items-center tw:mt-5">
                                        <div>
                                            <span className="tw:text-2xl tw:font-bold tw:text-[#0d6b5f]">{book.price}</span>
                                            {book.oldPrice && (
                                                <span className="tw:text-sm tw:text-gray-400 tw:line-through tw:ml-2">{book.oldPrice}</span>
                                            )}
                                        </div>

                                        <Button
                                            icon="pi pi-shopping-cart"
                                            rounded
                                            className="tw:bg-[#22b8a0]! tw:border-none!"
                                        />
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
