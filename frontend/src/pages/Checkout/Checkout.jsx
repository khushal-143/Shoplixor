import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import OrderSummary from "../../components/OrderSummary/OrderSummary"
import { useState, useRef } from 'react';
import { Steps } from 'primereact/steps';
import { Toast } from 'primereact/toast';

import PaymentMethod from "../../components/PaymentMethod/PaymentMethod";
import ShippingAddress from "../../components/ShippingAddress/ShippingAddress";
const Checkout = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const toast = useRef(null);
    
    const items = [
        {
            label: 'Shipping',
            command: (event) => {
                toast.current.show({ severity: 'info', summary: 'First Step', detail: event.item.label });
            }
        },
        {
            label: 'Payment',
            command: (event) => {
                toast.current.show({ severity: 'info', summary: 'Second Step', detail: event.item.label });
            }
        },
        {
            label: 'Review',
            command: (event) => {
                toast.current.show({ severity: 'info', summary: 'Last Step', detail: event.item.label });
            }
        }
    ];

    return (
        <>
            <Navbar />
            <div className="tw:w-full tw:bg-[#f5f7fa] tw:py-8">
                <div className="card tw:bg-[#f5f7fa] ">
                    <Toast ref={toast} className="tw:p-8!"
                        position="bottom-center"
                        pt={{
                            content: {
                                style: {
                                    padding: '10px',
                                    gap: "10px",
                                    alignItems: "center"
                                }
                            }
                        }} />
                    <Steps
                        model={items}
                        activeIndex={activeIndex}
                        onSelect={(e) => setActiveIndex(e.index)}
                        readOnly={false}
                    />
                </div>
                <div className="tw:flex tw:flex-col tw:xl:flex-row tw:items-start  tw:px-6 tw:md:px-12 tw:py-16  tw:gap-12">
                    <div className="tw:w-full tw:bg-[#f5f7fa]  tw:md:px-12 tw:xl:w-[65%]">
                        {
                            activeIndex === 0 ? <ShippingAddress /> : <PaymentMethod/>
                        }
                    </div>
                    <OrderSummary />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Checkout
