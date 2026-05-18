import { Button } from "primereact/button";
import assets from "../../assets/assets"

const categories = [
    {
        title: "Footwear",
        image: `${assets.footW}`,
    },
    {
        title: "Accessories",
        image: `${assets.accessories}`,
    },
    {
        title: "Audio Gear",
        image: `${assets.audioGear}`,
    },
    {
        title: "Smart Home",
        image: `${assets.smartHome}`,
    },
    {
        title: "Lifestyle",
        image: `${assets.lifestyle}`,
    },
    {
        title: "Wellness",
        image: `${assets.wellness}`,
    },
];

const Categories = () => {
    return (
        <div className="tw:w-full tw:bg-[#f5f7fa] tw:py-16 tw:px-6 md:tw:px-16">

            {/* Top Heading */}
            <div className="tw:flex tw:items-center tw:justify-between  tw:mb-12">

                <div>
                    <h2 className="tw:text-xl tw:mb:text-3xl tw:font-bold tw:text-[#0f172a]">
                        Categories
                    </h2>

                    <p className="tw:text-gray-500 tw:mt-2 tw:text-xs tw:mb:text-sm md:tw:text-base">
                        Explore the most desired collections this season.
                    </p>
                </div>

                <Button className="tw:flex! tw:items-center! tw:gap-2! tw:bg-transparent! tw:text-[#2b77c0]! tw:font-medium! tw:hover:gap-3! tw:transition-all! tw:duration-300! tw:border-0! tw:focus:shadow-none!">
                    <span className="tw:text-sm tw:mb:text-base ">Browse All</span>
                    <i className="pi pi-arrow-right"></i>
                </Button>
            </div>

            {/* Categories */}
            <div className="tw:flex tw:flex-wrap tw:justify-around tw:gap-8">

                {categories.map((item, index) => (
                    <div
                        key={index}
                        className="tw:flex tw:flex-col tw:items-center tw:group tw:cursor-pointer"
                    >

                        {/* Circle Image */}
                        <div className="tw:w-25 tw:h-25 tw:mb:w-36 tw:mb:h-36 tw:rounded-full tw:overflow-hidden tw:bg-white tw:shadow-md tw:group-hover:scale-115 tw:transition-all tw:duration-300">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="tw:w-full tw:h-full tw:object-cover"
                            />
                        </div>

                        {/* Title */}
                        <p className="tw:mt-5 tw:text-sm tw:font-medium tw:text-[#0f172a]">
                            {item.title}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;
