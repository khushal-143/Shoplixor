import { Button } from "primereact/button";
import assets from "../../assets/assets";
const FlashSale = () => {
    const currentTime = [
        { value: "08", label: "HRS" },
        { value: "42", label: "MIN" },
        { value: "15", label: "SEC" },
    ]
    return (
        <div className="tw:w-full tw:bg-[#1f3148] tw:py-14 tw:px-6 tw:md:px-16">

            <div className="tw:max-w-7xl tw:mx-auto tw:flex tw:flex-wrap tw:justify-around tw:gap-16 tw:items-center">

                {/* LEFT CONTENT */}
                <div>

                    {/* Badge */}
                    <span className="tw:inline-block tw:bg-[#e1261c] tw:text-white tw:text-xs tw:font-medium tw:px-4 tw:py-2 tw:rounded-full">
                        Limited Opportunity
                    </span>

                    {/* Heading */}
                    <h2 className="tw:text-white tw:text-4xl tw:mb:text-5xl tw:md:text-6xl tw:font-bold tw:leading-tight tw:mt-6 tw:mb:mt-8">
                        Midnight Drops
                        <br />
                        <span className="tw:text-[#9bc7ff]">
                            Up to 40% Off
                        </span>
                    </h2>

                    {/* Description */}
                    <p className="tw:text-[#c7d1dd] tw:text-base tw:mb:text-lg tw:leading-8 tw:max-w-xl tw:mt-5 tw:mb:mt-8">
                        Our most exclusive tech and style releases are currently
                        available at limited-time pricing. These pieces will not
                        return once sold out.
                    </p>

                    {/* Timer */}
                    <div className="tw:flex tw:gap-4 tw:mt-6 tw:mb:mt-10">

                        {currentTime.map((item, index) => (
                            <div
                                key={index}
                                className="tw:w-20 tw:h-20 tw:bg-[#33465e] tw:rounded-2xl tw:flex tw:flex-col tw:items-center tw:justify-center"
                            >
                                <h3 className="tw:text-white tw:text-3xl tw:font-bold">
                                    {item.value}
                                </h3>

                                <p className="tw:text-[#a8b4c3] tw:text-xs tw:tracking-[1px] tw:mt-1">
                                    {item.label}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Button */}
                    <Button label="Shop the Flash Sale" className="tw:mt-8! tw:mb:mt-12! tw:bg-white! tw:hover:bg-[#f2f2f2]! tw:text-[#1f3148]! tw:px-10! tw:py-4! tw:rounded-full! tw:font-medium! tw:transition-all! tw:duration-300! tw:border-0! tw:focus:shadow-none!"/>
                    
                </div>

                {/* RIGHT IMAGE */}
                <div className="tw:flex tw:justify-center lg:tw:justify-end">

                    <div className="tw:relative tw:rotate-[4deg]">

                        {/* Main Product Image */}
                        <div className="tw:bg-[#d9dee7] tw:p-3 tw:rounded-[22px] tw:shadow-2xl">

                            <img
                                src={assets.salePic}
                                alt="Sneaker"
                                className="tw:w-full tw:max-w-107.5 tw:h-auto tw:rounded-[18px] tw:object-cover"
                            />
                        </div>

                        {/* Price Card */}
                        <div className="tw:absolute tw:bottom-5 tw:left-5 tw:bg-white/95 tw:backdrop-blur-md tw:px-5 tw:py-4 tw:rounded-2xl tw:shadow-lg">

                            <p className="tw:text-[#64748b] tw:text-xs tw:uppercase tw:tracking-[1px]">
                                Starting At
                            </p>

                            <h4 className="tw:text-[#2b77c0] tw:text-xl tw:mb:text-2xl tw:font-bold tw:mt-1">
                                $299.00
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlashSale;