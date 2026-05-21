import { Button } from 'primereact/button'

const OrderSummary = () => {
  return (
    <>
          <div className="tw:flex tw:justify-center tw:items-center tw:xl:w-[30%]">
              <div className="tw:flex tw:flex-col tw:items-center tw:w-full  tw:gap-6">
                  {/* Summary Card */}
                  <div className="tw:bg-white tw:rounded-[28px] tw:p-8 tw:shadow-sm">

                      <h3 className="tw:text-3xl tw:font-bold tw:text-[#0f172a]">
                          Order Summary
                      </h3>

                      {/* Pricing */}
                      <div className="tw:space-y-5 tw:mt-10">

                          <div className="tw:flex tw:justify-between tw:text-[#64748b]">
                              <span>Subtotal</span>
                              <span>$1,848.00</span>
                          </div>

                          <div className="tw:flex tw:justify-between tw:text-[#64748b]">
                              <span>Express Shipping</span>
                              <span>$25.00</span>
                          </div>

                          <div className="tw:flex tw:justify-between tw:text-[#64748b]">
                              <span>Tax Estimation</span>
                              <span>$147.84</span>
                          </div>
                      </div>

                      {/* Total */}
                      <div className="tw:flex tw:justify-between tw:items-center tw:border-t tw:border-[#e5e7eb] tw:pt-8 tw:mt-8">

                          <span className="tw:text-2xl tw:font-bold tw:text-[#0f172a]">
                              Total
                          </span>

                          <span className="tw:text-4xl tw:font-bold tw:text-[#0070d1]">
                              $2,020.84
                          </span>
                      </div>

                      {/* Checkout Button */}
                      <Button className="tw:w-full tw:flex tw:items-center tw:justify-center tw:gap-3 tw:bg-[#2b77c0] tw:hover:bg-[#1f5fa0] tw:text-white tw:text-xl tw:font-semibold tw:py-6 tw:rounded-2xl tw:mt-10 tw:transition-all tw:focus:shadow-none">
                          <i className="pi pi-lock"></i>
                          <span>Secure Checkout</span>
                      </Button>

                      {/* Features */}
                      <div className="tw:space-y-4 tw:mt-8">

                          <div className="tw:flex tw:items-center tw:gap-3 tw:text-[#64748b] tw:text-sm">
                              <i className="pi pi-verified tw:text-[#2b77c0]"></i>
                              30-Day Aesthetic Guarantee
                          </div>

                          <div className="tw:flex tw:items-center tw:gap-3 tw:text-[#64748b] tw:text-sm">
                              <i className="pi pi-shield tw:text-[#2b77c0]"></i>
                              Encrypted End-to-End Payments
                          </div>
                      </div>
                  </div>

                  {/* Rewards Card */}
                  <div className="tw:bg-[#dceafe] tw:rounded-3xl tw:p-6 tw:flex tw:items-center tw:gap-5">

                      <div className="tw:w-14 tw:h-14 tw:bg-[#2b77c0] tw:rounded-full tw:flex tw:items-center tw:justify-center">
                          <i className="pi pi-gift tw:text-white tw:font-bold tw:text-xl"></i>
                      </div>

                      <div>
                          <h4 className="tw:text-[#0f172a] tw:font-bold">
                              Aether Rewards
                          </h4>

                          <p className="tw:text-[#2b77c0] tw:text-sm tw:mt-1">
                              Earn 2,020 points on this order
                          </p>
                      </div>
                  </div>
              </div>
          </div>
    </>
  )
}

export default OrderSummary
