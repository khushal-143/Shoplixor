import { InputText } from 'primereact/inputtext'
import './Navbar.css'
import { Button } from 'primereact/button'
import { useState } from 'react'
import { Sidebar } from "primereact/sidebar"
import { Avatar } from 'primereact/avatar'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [visible, setVisible] = useState(false);
    return (
        <>
            <div className='tw:flex tw:flex-col tw:gap-2 tw:justify-between tw:xs:items-center tw:py-4 tw:px-2 tw:xs:px-8 tw:xs:flex-row'>
                <Sidebar visible={visible} onHide={() => setVisible(false)}>
                    <div className='tw:flex tw:flex-col tw:justify-between tw:h-full'>
                        <div>
                            <h2 className='tw:mb-3'>Sidebar</h2>
                            <ul className='nav-items tw:flex tw:flex-col tw:justify-between tw:items-center tw:gap-6'>
                                <Link to='/home'><li className='tw:cursor-pointer tw:relative tw:transition-all tw:duration-200 tw:font-lexend tw:font-medium tw:text-base tw:text-[#475569] tw:leading-6 '>Home</li></Link>
                                <Link to='/shop'> <li className='tw:cursor-pointer tw:relative tw:transition-all tw:duration-200 tw:font-lexend tw:font-medium tw:text-base tw:text-[#475569] tw:leading-6 '>Shop</li></Link>
                                <Link to='/gallery' ><li className='tw:cursor-pointer tw:relative tw:transition-all tw:duration-200 tw:font-lexend tw:font-medium tw:text-base tw:text-[#475569] tw:leading-6 '>About Us</li></Link>
                            </ul>
                        </div>
                        <div>
                            <hr className="tw:mb-3 tw:mx-3 tw:border-t tw:border-gray-300" />
                            <div className="tw:m-3 tw:flex tw:items-center tw:gap-2 tw:rounded-lg tw:p-3 tw:text-gray-700 tw:cursor-pointer hover:tw:bg-gray-100 tw:transition-colors tw:duration-150">
                                <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" />
                                <span className="tw:font-bold">
                                    Amy Elsner
                                </span>
                            </div>
                        </div>
                    </div>
                </Sidebar>
                <div className='tw:flex tw:justify-between! tw:px-5'>
                    <p className='tw:text-[#00609F] tw:font-bold tw:text-2xl tw:font-lexend tw:leading-8 tw:tracking-tight'>Shoplixor</p>
                    <Button className=' tw:xs:hidden! tw:bg-[#00609F]! tw:border-none! tw:p-2! tw:focus:shadow-none! tw:rounded-xl tw:text-white' icon="pi pi-bars" onClick={() => setVisible(true)} />
                </div>
                <div>
                    <ul className='nav-items tw:hidden tw:lg:flex tw:justify-between tw:gap-6'>
                        <Link to='/home'><li className='tw:cursor-pointer tw:relative tw:transition-all tw:duration-200 tw:font-lexend tw:font-medium tw:text-base tw:text-[#475569] tw:leading-6 '>Home</li></Link>
                        <Link to='/shop'><li className='tw:cursor-pointer tw:relative tw:transition-all tw:duration-200 tw:font-lexend tw:font-medium tw:text-base tw:text-[#475569] tw:leading-6 '>Shop</li></Link>
                        <Link to='/gallery' ><li className='tw:cursor-pointer tw:relative tw:transition-all tw:duration-200 tw:font-lexend tw:font-medium tw:text-base tw:text-[#475569] tw:leading-6 '>About Us</li></Link>
                    </ul>
                </div>
                <div className='tw:flex tw:items-center tw:gap-4 tw:justify-around '>
                    <div className="tw:flex tw:items-center tw:gap-2 tw:px-4! tw:bg-[#eff4ff] tw:rounded-3xl">
                        <InputText keyfilter="int" placeholder="Search Product" className='tw:bg-[#eff4ff]! tw:border-none! tw:focus:shadow-none! tw:p-2! tw:w-full!' />
                        <i className='pi pi-search tw:text-[#94A3B8] '></i>
                    </div>
                    <i className='pi pi-heart nav-icon tw:relative tw:cursor-pointer tw:text-[#404751] tw:block'></i>
                    <Link to="/cart" className="tw:inline-block tw:z-50 tw:relative">
                        <i className="pi pi-shopping-cart nav-icon tw:text-[#404751] tw:cursor-pointer"></i>
                    </Link>
                    <Link to='/profile' className="tw:inline-block tw:z-50 tw:relative">
                        <i className='pi pi-user nav-icon tw:relative tw:cursor-pointer  tw:text-[#404751] tw:block'></i>
                    </Link>
                </div>
                <Button className='tw:hidden! tw:xs:block! tw:lg:hidden! tw:bg-[#00609F]! tw:border-none! tw:p-2! tw:focus:shadow-none! tw:rounded-xl tw:text-white' icon="pi pi-bars" onClick={() => setVisible(true)} />
            </div>
        </>
    )
}

export default Navbar
