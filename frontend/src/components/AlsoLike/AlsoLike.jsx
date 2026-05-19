import assets from '../../assets/assets'
const AlsoLike = () => {
  return (
    <>
          <div className="tw:px-4 tw:py-8 tw:bg-[#f5fbf7] ">
              <div className="tw:flex tw:flex-col tw:mb:flex-row tw:gap-2 tw:justify-between tw:md:px-4">
                  <div>
                      <h1 className="tw:font-lexend tw:font-semibold tw:text-lg tw:md:text-xl">You Might Also Like</h1>
                      <p className="tw:font-jakarta tw:font-normal tw:text-sm tw:md:text-base tw:leading-6 tw:text-[#6D7A76] ">Complete the Learning set for your little one</p>
                  </div>
                  <div className="tw:flex tw:items-center tw:gap-1 tw:cursor-pointer">
                      <p className="tw:font-jakarta tw:font-normal tw:text-sm tw:md:text-base tw:leading-6 tw:text-[#006B5C] ">View Catalog</p>
                      <i className="pi pi-arrow-right tw:text-[#006B5C]"></i>
                  </div>
              </div>
              <div className='tw:flex tw:flex-wrap tw:justify-evenly'>
                  <div className='tw:flex tw:flex-col tw:gap-2 tw:p-4 tw:max-w-70 tw:cursor-pointer'>
                      <div className='tw:rounded-2xl tw:overflow-hidden'>
                          <img className='tw:object-cover' src={assets.item1} alt="item image" />
                      </div>
                      <div className='tw:pl-1'>
                          <p className='tw:font-jakarta tw:font-normal tw:text-base tw:leading-6'>Number & Logic Fun</p>
                          <p className='tw:font-jakarta tw:font-medium tw:text-xs tw:leading-3.5 tw:text-[#6D7A76]'>Ages 3-5 | ₹249</p>
                      </div>
                  </div>
                  <div className='tw:flex tw:flex-col tw:gap-2 tw:p-4 tw:max-w-70 tw:cursor-pointer'>
                      <div className='tw:rounded-2xl tw:overflow-hidden'>
                          <img className='tw:object-cover' src={assets.item2} alt="item image" />
                      </div>
                      <div className='tw:pl-1'>
                          <p className='tw:font-jakarta tw:font-normal tw:text-base tw:leading-6'>Animal Kingdom Explorer</p>
                          <p className='tw:font-jakarta tw:font-medium tw:text-xs tw:leading-3.5 tw:text-[#6D7A76]'>Ages 4-6 | ₹315</p>
                      </div>
                  </div>
                  <div className='tw:flex tw:flex-col tw:gap-2 tw:p-4 tw:max-w-70 tw:cursor-pointer'>
                      <div className='tw:rounded-2xl tw:overflow-hidden'>
                          <img className='tw:object-cover' src={assets.item3} alt="item image" />
                      </div>
                      <div className='tw:pl-1'>
                          <p className='tw:font-jakarta tw:font-normal tw:text-base tw:leading-6'>First Science Experiments</p>
                          <p className='tw:font-jakarta tw:font-medium tw:text-xs tw:leading-3.5 tw:text-[#6D7A76]'>Ages 5+ | ₹450</p>
                      </div>
                  </div>
                  <div className='tw:flex tw:flex-col tw:gap-2 tw:p-4 tw:max-w-70 tw:cursor-pointer'>
                      <div className='tw:rounded-2xl tw:overflow-hidden'>
                          <img className='tw:object-cover' src={assets.item4} alt="item image" />
                      </div>
                      <div className='tw:pl-1'>
                          <p className='tw:font-jakarta tw:font-normal tw:text-base tw:leading-6'>Colors & Shapes World</p>
                          <p className='tw:font-jakarta tw:font-medium tw:text-xs tw:leading-3.5 tw:text-[#6D7A76]'>Ages 2-4 | ₹119</p>
                      </div>
                  </div>
              </div>
      </div>
    </>
  )
}

export default AlsoLike
