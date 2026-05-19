import { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';
import { PhotoService } from '../../service/PhotoService';
import { Rating } from 'primereact/rating';
import assets from '../../assets/assets';
import { Button } from 'primereact/button';
const ProductDetails = () => {
    const [images, setImages] = useState(null);
    const [value, setValue] = useState(4);
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

    useEffect(() => {
        PhotoService.getImages().then(data => setImages(data));
    }, [])

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%' }} />
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} />
    }

    return (
        <>
            <div className="product-card tw:flex tw:flex-col tw:md:flex-row tw:px-4 tw:py-8 tw:bg-[#f5fbf7]  ">
                <div className='tw:flex tw:justify-center tw:px-4 tw:py-8 tw:bg-[#f1f3f3] tw:relative tw:rounded-3xl tw:h-auto tw:md:w-[60%] tw:lg:w-[70%]'>
                    <Galleria className='tw:rounded-2xl! tw:overflow-hidden' value={images} responsiveOptions={responsiveOptions} numVisible={5} style={{ maxWidth: '640px' }}
                        item={itemTemplate} thumbnail={thumbnailTemplate}
                        pt={{
                            thumbnailContainer: { style: { background: 'transparent' } },
                            previousThumbnailButton:{style:{background:"rgba(0,0,0,0.9)"}},
                            nextThumbnailButton: { style: { background: "rgba(0,0,0,0.9)" } },
                             thumbnailItemContent: {
                                style: {
                                    border: "3px solid white",
                                     borderRadius: "10px",
                                    overflow:"hidden"
                                }
                            }
                        }} />
                    <p className='tw:absolute tw:top-5 tw:left-5 tw:bg-[#fc9d41] tw:text-white tw:py-2 tw:px-4 tw:rounded-3xl tw:font-jakarta tw:font-normal tw:text-sm tw:leading-6'>Bestseller</p>
                </div>
                <div className='tw:px-4 tw:py-8 tw:flex tw:flex-col tw:gap-4 tw:md:w-[40%] tw:lg:w-[30%]'>
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
                    <p className='tw:font-lexend tw:font-bold tw:text-3xl tw:leading-8'>Little Stars English Workbook</p>
                    <p className='tw:font-jakarta tw:font-normal tw:text-sm tw:text-[#6D7A76] tw:leading-7'>By Sarah Johnson | Published by Bright Kids</p>
                    <div className='tw:flex tw:gap-2 tw:items-baseline'>
                        <p className='tw:font-jakarta tw:font-bold tw:text-2xl tw:leading-10 tw:text-[#006B5C] '>₹299</p>
                        <p className='tw:font-jakarta tw:font-normal tw:text-base tw:leading-7 tw:text-[#6D7A76]'><s>₹399</s></p>
                        <p className='tw:font-jakarta tw:font-normal tw:text-sm tw:leading-10 tw:bg-[#cdece5] tw:text-[#003D34] tw:px-2 tw:rounded-xl '>25% OFF</p>
                    </div>
                    <div className='tw:flex tw:flex-wrap tw:justify-between tw:lg:justify-evenly tw:gap-2 tw:border-t-2 tw:border-b-2 tw:border-[#BCCAC5] tw:py-6'>
                        <div className='tw:flex tw:gap-4 tw:items-center tw:lg:w-[45%]'>
                            <img className='tw:h-5 tw:w-5  tw:object-contain' src={assets.pAge} alt="product age" />
                            <div>
                                <p className='tw:font-jakarta tw:font-medium tw:text-xs tw:leading-3.5 tw:text-[#6D7A76]'>AgeGroup</p>
                                <p className='tw:font-jakarta tw:font-normal tw:text-sm  tw:leading-6 '>Pre-K (3-5 Years)</p>
                            </div>
                        </div>
                        <div className='tw:flex tw:gap-4 tw:items-center tw:lg:w-[45%]'>
                            <img className='tw:h-5 tw:w-5  tw:object-contain' src={assets.pPages} alt="product age" />
                            <div>
                                <p className='tw:font-jakarta tw:font-medium tw:text-xs tw:leading-3.5 tw:text-[#6D7A76]'>Pages</p>
                                <p className='tw:font-jakarta tw:font-normal tw:text-sm tw:leading-6 '>72 Full-Color Pages</p>
                            </div>
                        </div>
                        <div className='tw:flex tw:gap-4 tw:items-center tw:lg:w-[45%]'>
                            <img className='tw:h-5 tw:w-5  tw:object-contain' src={assets.pSubject} alt="product age" />
                            <div>
                                <p className='tw:font-jakarta tw:font-medium tw:text-xs tw:leading-3.5 tw:text-[#6D7A76]'>Subject</p>
                                <p className='tw:font-jakarta tw:font-normal tw:text-sm tw:leading-6 '>English Foundation</p>
                            </div>
                        </div>
                        <div className='tw:flex tw:gap-4 tw:items-center tw:lg:w-[45%]'>
                            <img className='tw:h-5 tw:w-5 tw:object-contain ' src={assets.pbar} alt="product age" />
                            <div>
                                <p className='tw:font-jakarta tw:font-medium tw:text-xs tw:leading-3.5 tw:text-[#6D7A76]'>ISBN</p>
                                <p className='tw:font-jakarta tw:font-normal tw:text-sm tw:leading-6 '>978-3-16-148410-0</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='tw:flex tw:items-center tw:gap-2 tw:px-2'>
                            <Button className='tw:flex tw:gap-2 tw:items-center tw:justify-center tw:bg-[#006b5c]! tw:border-none! tw:px-4! tw:py-2! tw:rounded-xl! tw:focus:shadow-none! tw:w-full!'>
                                <i className='pi pi-shopping-cart tw:text-white tw:block'></i>
                                <span className='tw:text-white tw:font-jakarta tw:font-normal tw:text-base tw:leading-6 tw:items-center'>Add to Cart</span>
                            </Button>
                            <i className='pi pi-heart tw:border tw:p-3 tw:rounded-xl tw:border-[#bccac5] tw:text-[#8b918f] '></i>
                        </div>
                        <div className='tw:p-2'>
                            <Button className='tw:flex tw:gap-2 tw:items-center tw:bg-[#fc9d41]! tw:border-none! tw:px-4! tw:py-2! tw:rounded-xl! tw:focus:shadow-none!  tw:w-full tw:shrink tw:justify-center'>
                                <span className='tw:text-white tw:font-jakarta tw:font-normal tw:text-base tw:leading-6 tw:items-center'>Buy Now</span>
                            </Button>
                        </div>
                        <div className='tw:flex tw:flex-col tw:bg-[#e9efec] tw:rounded-2xl tw:p-4 tw:gap-3'>
                            <div className='tw:flex tw:gap-2 tw:items-center'>
                                <i className='pi pi-truck tw:text-[#006b5c] '></i>
                                <p className='tw:font-jakarta tw:font-medium tw:text-xs tw:leading-3.5'>Free delivery on orders above ₹999</p>
                            </div>
                            <div className='tw:flex tw:gap-2 tw:items-center'>
                                <i className='pi pi-shield tw:text-[#006b5c] '></i>
                                <p className='tw:font-jakarta tw:font-medium tw:text-xs tw:leading-3.5'>100% Authentic Learning Material</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails
