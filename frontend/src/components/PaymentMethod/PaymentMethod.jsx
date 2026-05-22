import { useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
const PaymentMethod = () => {
    const [selectedMethod, setSelectedMethod] = useState("card");
  return (
    <>
          <div className="tw:w-full tw:bg-[#f5f7fa]  tw:px-6 md:tw:px-12">

              <div className="tw:max-w-5xl tw:mx-auto">

                  {/* Heading */}
                  <h2 className="tw:text-2xl tw:xs:text-5xl tw:font-bold tw:text-[#0f172a] tw:mb-10">
                      Payment Method
                  </h2>

                  {/* Payment Tabs */}
                  <div className="tw:flex tw:flex-col tw:mb:flex-row tw:flex-wrap tw:bg-[#eef3fb] tw:rounded-2xl tw:p-2 tw:gap-2">

                      {/* Card */}
                      <Button
                          onClick={() => setSelectedMethod("card")}
                          className={`tw:flex tw:flex-1 tw:items-center tw:justify-center tw:gap-3 tw:py-5 tw:rounded-xl tw:font-medium tw:transition-all tw:focus:shadow-none
                            
                            ${selectedMethod === "card"
                                  ? "tw:bg-white tw:text-[#0070d1] tw:shadow-sm"
                                  : "tw:text-[#0f172a]"
                              }
                        `}
                      >
                          {/* <CreditCard size={18} /> */}
                          <i className="pi pi-credit-card"></i>

                          Card
                      </Button>

                      {/* UPI */}
                      <Button
                          onClick={() => setSelectedMethod("upi")}
                          className={`tw:flex tw:flex-1 tw:items-center tw:justify-center tw:gap-3 tw:py-5 tw:rounded-xl tw:font-medium tw:transition-all tw:focus:shadow-none
                            
                            ${selectedMethod === "upi"
                                  ? "tw:bg-white tw:text-[#0070d1] tw:shadow-sm"
                                  : "tw:text-[#0f172a]"
                              }
                        `}
                      >
                          <i className="pi pi-wallet"></i>
                          UPI
                      </Button>

                      {/* COD */}
                      <Button
                          onClick={() => setSelectedMethod("cod")}
                          className={`tw:flex tw:flex-1 tw:items-center tw:justify-center tw:gap-3 tw:py-5 tw:px-2 tw:rounded-xl tw:font-medium tw:transition-all tw:focus:shadow-none
                            
                            ${selectedMethod === "cod"
                                  ? "tw:bg-white tw:text-[#0070d1] tw:shadow-sm"
                                  : "tw:text-[#0f172a]"
                              }
                        `}
                      >
                          <i className="pi pi-truck"></i>
                          Cash on Delivery
                      </Button>
                  </div>

                  {/* Payment Card */}
                  <div className="tw:bg-white tw:rounded-[28px] tw:p-6 md:tw:p-8 tw:mt-8 tw:shadow-sm">

                      {selectedMethod === "card" && (
                          <div className="tw:grid tw:grid-cols-1 lg:tw:grid-cols-2 tw:gap-8">
                              {/* Form */}
                              <div className="tw:flex tw:flex-col tw:justify-center tw:space-y-6">

                                  {/* Name */}
                                  <div>
                                      <label className="tw:block tw:text-sm tw:font-medium tw:text-[#0f172a] tw:mb-3">
                                          Cardholder Name
                                      </label>

                                      <InputText
                                          type="text"
                                          placeholder="John Doe"
                                          className="tw:w-full tw:bg-[#f4f7fc] tw:px-5 tw:py-4 tw:rounded-xl tw:outline-none tw:border tw:border-transparent focus:tw:border-[#2b77c0] placeholder:tw:text-[#94a3b8]"
                                      />
                                  </div>

                                  {/* Card Number */}
                                  <div>
                                      <label className="tw:block tw:text-sm tw:font-medium tw:text-[#0f172a] tw:mb-3">
                                          Card Number
                                      </label>

                                      <div className="tw:relative tw:flex tw:items-center">

                                          <InputText
                                              type="text"
                                              placeholder="**** **** ****"
                                              className="tw:w-full tw:bg-[#f4f7fc] tw:pl-5 tw:py-4 tw:rounded-xl tw:outline-none tw:border tw:border-transparent focus:tw:border-[#2b77c0] placeholder:tw:text-[#94a3b8]"
                                          />
                                      </div>
                                  </div>

                                  {/* Expiry + CVV */}
                                  <div className="tw:grid tw:grid-cols-2 tw:gap-5">

                                      <div>
                                          <label className="tw:block tw:text-sm tw:font-medium tw:text-[#0f172a] tw:mb-3">
                                              Expiry Date
                                          </label>

                                          <InputText
                                              type="text"
                                              placeholder="MM/YY"
                                              className="tw:w-full tw:bg-[#f4f7fc] tw:pl-2 tw:mb:px-5 tw:py-4 tw:rounded-xl tw:outline-none tw:border tw:border-transparent  tw:placeholder:text-[#94a3b8]"
                                          />
                                      </div>

                                      <div>
                                          <label className="tw:block tw:text-sm tw:font-medium tw:text-[#0f172a] tw:mb-3">
                                              CVV
                                          </label>

                                          <InputText
                                              type="password"
                                              placeholder="•••"
                                              className="tw:w-full tw:bg-[#f4f7fc] tw:px-5 tw:py-4 tw:rounded-xl tw:outline-none tw:border tw:border-transparent focus:tw:border-[#2b77c0] placeholder:tw:text-[#94a3b8]"
                                          />
                                      </div>
                                  </div>
                              </div>
                          </div>
                      )}

                      {selectedMethod === "upi" && (
                          <div className="tw:py-12 tw:text-center">

                              <h3 className="tw:text-3xl tw:font-bold tw:text-[#0f172a]">
                                  Pay Using UPI
                              </h3>

                              <p className="tw:text-[#64748b] tw:mt-4">
                                  Enter your UPI ID during checkout.
                              </p>
                          </div>
                      )}

                      {selectedMethod === "cod" && (
                          <div className="tw:py-12 tw:text-center">

                              <h3 className="tw:text-3xl tw:font-bold tw:text-[#0f172a]">
                                  Cash on Delivery
                              </h3>

                              <p className="tw:text-[#64748b] tw:mt-4">
                                  Pay when your order arrives at your doorstep.
                              </p>
                          </div>
                      )}
                  </div>
              </div>
          </div>
    </>
  )
}

export default PaymentMethod
