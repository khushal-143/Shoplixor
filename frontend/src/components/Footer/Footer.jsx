import { Button } from 'primereact/button'
import { Ripple } from 'primereact/ripple'
const Footer = () => {
    return (
        <>
            <div className="tw:flex tw:flex-col tw:md:flex-row tw:py-8 tw:md:py-16 tw:px-8 tw:bg-[#f8fafc] tw:gap-8 tw:border-t tw:border-b tw:border-[#e2e8f0] tw:justify-between tw:md:items-center">
                <div className='tw:flex tw:flex-col tw:gap-4 tw:md:max-w-[20%] '>
                    <p className='tw:font-geist tw:font-bold tw:text-lg tw:md:text-xl tw:lg:text-2xl tw:leading-7 tw:text-[#00609f] '>Shoplixor</p>
                    <p className='tw:font-lexend tw:font-normal tw:text-sm tw:md:text-base tw:leading-5 tw:text-[#64748B]'>Redefining digital luxury with a
                        curated focus on technology, style,
                        and artisanal craftsmanship.</p>
                    <div className='tw:flex tw:gap-4'>
                        <Button className='tw:rounded-full! tw:p-3! tw:bg-white! tw:border-[#e2e8f0]! tw:focus:shadow-none!'>
                            <i className='pi pi-globe tw:text-[#00609f]'> </i>
                            <Ripple
                                pt={{
                                    root: { style: { background: 'rgba(0, 96, 159, 0.9)' } }
                                }}
                            />
                        </Button>
                        <Button className='tw:rounded-full! tw:p-3! tw:bg-white! tw:border-[#e2e8f0]! tw:focus:shadow-none!'>
                            <i className='pi pi-share-alt tw:text-[#00609f]'> </i>
                            <Ripple
                                pt={{
                                    root: { style: { background: 'rgba(0, 96, 159, 0.9)' } }
                                }}
                            />
                        </Button>
                    </div>
                </div>
                <div className='tw:flex tw:flex-col tw:gap-4'>
                    <p className='tw:font-jakarta tw:font-medium tw:text-sm tw:lg:text-base tw:leading-4 tw:tracking-[1px] tw:text-[#171D1B] '>
                        COLLECTIONS
                    </p>
                    <ul className='tw:flex tw:flex-col tw:gap-4'>
                        <li className='tw:font-lexend tw:font-normal tw:text-base tw:lg:text-lg tw:leading-5 tw:text-[#64748B]'>
                            Tech Essentials
                        </li>
                        <li className='tw:font-lexend tw:font-normal tw:text-base tw:lg:text-lg tw:leading-5 tw:text-[#64748B]'>
                            Designer Wear
                        </li>
                        <li className='tw:font-lexend tw:font-normal tw:text-base tw:lg:text-lg tw:leading-5 tw:text-[#64748B]'>
                            Limited Series
                        </li>
                        <li className='tw:font-lexend tw:font-normal tw:text-base tw:lg:text-lg tw:leading-5 tw:text-[#64748B]'>
                            New Season
                        </li>
                    </ul>
                </div>
                <div className='tw:flex tw:flex-col tw:gap-4'>
                    <p className='tw:font-jakarta tw:font-medium tw:text-sm tw:lg:text-base tw:leading-4 tw:tracking-[1px] tw:text-[#171D1B] '>
                        CLIENT SERVICE
                    </p>
                    <ul className='tw:flex tw:flex-col tw:gap-4'>
                        <li className='tw:font-lexend tw:font-normal tw:text-base tw:lg:text-lg tw:leading-5 tw:text-[#64748B]'>
                            Shipping
                        </li>
                        <li className='tw:font-lexend tw:font-normal tw:text-base tw:lg:text-lg tw:leading-5 tw:text-[#64748B]'>
                            Returns
                        </li>
                        <li className='tw:font-lexend tw:font-normal tw:text-base tw:lg:text-lg tw:leading-5 tw:text-[#64748B]'>
                            Order Tracking
                        </li>
                        <li className='tw:font-lexend tw:font-normal tw:text-base tw:lg:text-lg tw:leading-5 tw:text-[#64748B]'>
                            FAQs
                        </li>
                    </ul>
                </div>
                <div className='tw:flex tw:flex-col tw:gap-4'>
                    <p className='tw:font-jakarta tw:font-medium tw:text-sm tw:lg:text-base tw:leading-4 tw:tracking-[1px] tw:text-[#171D1B] '>
                        ABOUT
                    </p>
                    <ul className='tw:flex tw:flex-col tw:gap-4'>
                        <li className='tw:font-lexend tw:font-normal tw:text-base tw:lg:text-lg tw:leading-5 tw:text-[#64748B]'>
                            Sustainability
                        </li>
                        <li className='tw:font-lexend tw:font-normal tw:text-base tw:lg:text-lg tw:leading-5 tw:text-[#64748B]'>
                            Terms of Service
                        </li>
                        <li className='tw:font-lexend tw:font-normal tw:text-base tw:lg:text-lg tw:leading-5 tw:text-[#64748B]'>
                            Privacy
                        </li>
                        <li className='tw:font-lexend tw:font-normal tw:text-base tw:lg:text-lg tw:leading-5 tw:text-[#64748B]'>
                            Careers
                        </li>
                    </ul>
                </div>
                
            </div>
        </>
    )
}

export default Footer
