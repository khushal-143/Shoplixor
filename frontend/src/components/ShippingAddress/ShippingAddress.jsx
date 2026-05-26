import { InputText } from "primereact/inputtext";
import { useState} from 'react';
import { Dropdown } from 'primereact/dropdown';
const ShippingAddress = () => {
    const [selectedCity, setSelectedCity] = useState(null);
    const states = [
        { name: 'Andhra Pradesh', code: 'AP' },
        { name: 'Arunachal Pradesh', code: 'AR' },
        { name: 'Assam', code: 'AS' },
        { name: 'Bihar', code: 'BR' },
        { name: 'Chhattisgarh', code: 'CG' },
        { name: 'Goa', code: 'GA' },
        { name: 'Gujarat', code: 'GJ' },
        { name: 'Haryana', code: 'HR' },
        { name: 'Himachal Pradesh', code: 'HP' },
        { name: 'Jharkhand', code: 'JH' },
        { name: 'Karnataka', code: 'KA' },
        { name: 'Kerala', code: 'KL' },
        { name: 'Madhya Pradesh', code: 'MP' },
        { name: 'Maharashtra', code: 'MH' },
        { name: 'Manipur', code: 'MN' },
        { name: 'Meghalaya', code: 'ML' },
        { name: 'Mizoram', code: 'MZ' },
        { name: 'Nagaland', code: 'NL' },
        { name: 'Odisha', code: 'OD' },
        { name: 'Punjab', code: 'PB' },
        { name: 'Rajasthan', code: 'RJ' },
        { name: 'Sikkim', code: 'SK' },
        { name: 'Tamil Nadu', code: 'TN' },
        { name: 'Telangana', code: 'TS' },
        { name: 'Tripura', code: 'TR' },
        { name: 'Uttar Pradesh', code: 'UP' },
        { name: 'Uttarakhand', code: 'UK' },
        { name: 'West Bengal', code: 'WB' }
    ];
  return (
    <>
          <div className="tw:max-w-4xl tw:mx-auto tw:bg-white tw:rounded-[20px] tw:p-6 tw:md:p-12 tw:border tw:border-[#eef2f7]">

              {/* Heading */}
              <h2 className="tw:text-2xl tw:mb:text-4xl tw:font-bold tw:text-[#0f172a]">
                  Shipping Address
              </h2>

              {/* Form */}
              <form className="tw:mt-5 tw:mb:mt-10 tw:space-y-6">

                  {/* First & Last Name */}
                  <div className="tw:flex tw:flex-col tw:mb:flex-row tw:gap-5">

                      <InputText
                          type="text"
                          placeholder="Full Name"
                          className="tw:flex-1 tw:w-full tw:bg-[#f4f7fc] tw:px-5 tw:py-4 tw:rounded-xl tw:outline-none tw:border tw:border-transparent tw:text-[#0f172a] tw:placeholder:text-[#94a3b8]"
                      />

                      <InputText
                          type="number"
                          placeholder="Phone"
                          className="tw:flex-1 tw:w-full tw:bg-[#f4f7fc] tw:px-5 tw:py-4 tw:rounded-xl tw:outline-none tw:border tw:border-transparent  tw:text-[#0f172a] tw:placeholder:text-[#94a3b8]"
                      />
                  </div>

                  {/* Street Address */}
                  <InputText
                      type="text"
                      placeholder="Street Address"
                      className="tw:flex-1 tw:w-full tw:bg-[#f4f7fc] tw:px-5 tw:py-4 tw:rounded-xl tw:outline-none tw:border tw:border-transparent tw:text-[#0f172a] tw:placeholder:text-[#94a3b8]"
                  />

                  {/* City State ZIP */}
                  <div className="tw:flex tw:flex-1 tw:flex-col tw:lg:flex-row tw:lg:flex-wrap tw:gap-5">

                      <div className="tw:flex tw:flex-1 tw:flex-col tw:mb:flex-row tw:gap-5 ">
                          {/* City */}
                          <InputText
                              type="text"
                              placeholder="City"
                              className=" tw:w-full tw:min-w-43 tw:bg-[#f4f7fc] tw:px-5 tw:py-4 tw:rounded-xl tw:outline-none tw:border tw:border-transparent  tw:text-[#0f172a] tw:placeholder:text-[#94a3b8]"
                          />

                          {/* State */}

                          <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={states} optionLabel="name"
                              placeholder="State" className="tw:flex-1 w-full tw:bg-[#f4f7fc] tw:px-5 tw:py-4 tw:rounded-xl "
                              pt={{
                                  item: {
                                      className: "tw:py-2 tw:px-4"
                                  }
                              }}
                          />
                      </div>


                      {/* ZIP */}
                      <InputText
                          type="text"
                          placeholder="ZIP Code"
                          className="tw:flex-1 tw:w-full tw:bg-[#f4f7fc] tw:px-5 tw:py-4 tw:rounded-xl tw:outline-none tw:border tw:border-transparent  tw:text-[#0f172a] tw:placeholder:text-[#94a3b8]"
                      />
                  </div>
              </form>
          </div>
    </>
  )
}

export default ShippingAddress
