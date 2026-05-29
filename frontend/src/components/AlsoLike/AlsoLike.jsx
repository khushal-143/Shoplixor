import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
const AlsoLike = ({ productId }) => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {

        const fetchRelatedProducts = async () => {
            try {

                const res = await axios.get(
                    `http://localhost:5000/api/products/${productId}/related`
                );

                const shuffledProducts = [...(res.data.relatedProducts || [])]
                    .sort(() => Math.random() - 0.5);

                setProducts(
                    shuffledProducts.slice(0, 4)
                );

            } catch (error) {
                console.log(error);
            }
        };

        if (productId) {
            fetchRelatedProducts();
        }

    }, [productId]);
    return (
        <>
            <div className="tw:px-4 tw:py-8 tw:bg-[#f5fbf7] ">
                <div className="tw:flex tw:flex-col tw:gap-2 tw:justify-between tw:md:px-4">
                    <p className="tw:font-jakarta tw:font-normal tw:text-sm  tw:leading-6 tw:text-[#00609F] ">CURATED SELECTION</p>
                    <h1 className="tw:font-geist tw:font-semibold tw:text-lg tw:md:text-2xl">Related Masterpieces</h1>
                </div>
                <div className='tw:flex tw:flex-wrap tw:justify-evenly'>
                    {
                        products.map((item) => (
                            <div
                                key={item._id}
                                onClick={() => {
                                    navigate(`/product/${item._id}`);
                                    window.scrollTo({
                                        top: 0,
                                        behavior: "smooth",
                                    });
                                
                                }
                                }
                                className='tw:flex tw:flex-col tw:gap-2 tw:p-4 tw:max-w-70 tw:cursor-pointer'>
                                <div className='tw:rounded-2xl tw:overflow-hidden'>
                                    <img className='tw:object-cover' src={item.images?.[0]} alt={item.title} />
                                </div>
                                <div className='tw:pl-1'>
                                    <p className='tw:font-geist tw:font-normal tw:text-base tw:leading-6 tw:text-[#0B1C30] '>{item?.title}</p>
                                    <p className='tw:font-geist tw:font-medium tw:text-sm tw:leading-6 tw:text-[#00609F]'>₹{item?.discountPrice || item?.price}</p>
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
