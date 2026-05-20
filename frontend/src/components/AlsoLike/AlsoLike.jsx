import assets from '../../assets/assets'
const AlsoLike = () => {
    const productsData = [
        {
            title: "Neural Ring X1",
            img: assets.relatedP1,
            price: "₹299",
        },
        {
            title: "Sonic Aura Headphones",
            img: assets.relatedP2,
            price: "₹2299",
        },
        {
            title: "Vector Slim Wallet",
            img: assets.relatedP3,
            price: "₹399",
        },
        {
            title: "Collector's Case",
            img: assets.relatedP4,
            price: "₹450",
        },
    ];
    return (
        <>
            <div className="tw:px-4 tw:py-8 tw:bg-[#f5fbf7] ">
                <div className="tw:flex tw:flex-col tw:mb:flex-row tw:gap-2 tw:justify-between tw:md:px-4">
                    <div>
                        <p className="tw:font-jakarta tw:font-normal tw:text-sm  tw:leading-6 tw:text-[#00609F] ">CURATED SELECTION</p>
                        <h1 className="tw:font-geist tw:font-semibold tw:text-lg tw:md:text-2xl">Related Masterpieces</h1>
                    </div>
                    <div className="tw:flex tw:items-center tw:gap-1 tw:cursor-pointer">
                        <p className="tw:font-jakarta tw:font-normal tw:text-sm tw:md:text-base tw:leading-6 tw:text-[#00609f] ">View Catalog</p>
                        <i className="pi pi-arrow-right tw:text-[#00609f]"></i>
                    </div>
                </div>
                <div className='tw:flex tw:flex-wrap tw:justify-evenly'>
                    {
                        productsData.map((item, index) => (
                            <div
                                key={index}
                                className='tw:flex tw:flex-col tw:gap-2 tw:p-4 tw:max-w-70 tw:cursor-pointer'>
                                <div className='tw:rounded-2xl tw:overflow-hidden'>
                                    <img className='tw:object-cover' src={item.img} alt="item image" />
                                </div>
                                <div className='tw:pl-1'>
                                    <p className='tw:font-geist tw:font-normal tw:text-base tw:leading-6 tw:text-[#0B1C30] '>{item.title}</p>
                                    <p className='tw:font-geist tw:font-medium tw:text-sm tw:leading-6 tw:text-[#00609F]'>{item.price}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default AlsoLike
