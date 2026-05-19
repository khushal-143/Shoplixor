import { Button } from 'primereact/button';
import assets from '../../assets/assets'
import { Ripple } from 'primereact/ripple'

const HeroSection = () => {
  return (
    <div className="tw:relative tw:w-full tw:h-screen tw:overflow-hidden tw:bg-[#f5f7fa]">

      {/* Background Image */}
      <img
        src={assets.heroBg}
        alt="Smart Watch"
        className="tw:absolute tw:inset-0 tw:w-full tw:h-full tw:object-cover"
      />

      {/* Gradient Overlay */}
      <div className="tw:absolute tw:inset-0 tw:bg-linear-to-r tw:from-white/95 tw:via-white/60 tw:to-transparent"></div>

      {/* Content */}
      <div className="tw:relative tw:z-10 tw:flex tw:items-center tw:h-full tw:px-6 tw:md:px-16">

        <div className="tw:max-w-xl">

          {/* Small Heading */}
          <p className="tw:text-[#2b77c0] tw:tracking-[3px] tw:text-xs md:tw:text-sm tw:font-semibold tw:mb-4">
            NEXT-GEN ESSENTIALS
          </p>

          {/* Main Heading */}
          <h1 className="tw:text-2xl tw:mb:text-4xl tw:md:text-6xl tw:font-bold tw:leading-tight tw:text-[#0f172a]">
            The Future of
            <br />
            <span className="tw:text-[#2b77c0]">
              Style is Here
            </span>
          </h1>

          {/* Description */}
          <p className="tw:mt-6 tw:md:text-gray-600 tw:text-sm tw:md:text-lg tw:leading-8 tw:max-w-lg">
            Discover a curated collection where high-end technology
            meets artisanal design. Redefining digital luxury for
            the modern aesthetic enthusiast.
          </p>

          {/* Buttons */}
          <div className="tw:flex tw:flex-wrap tw:gap-4 tw:mt-10">
            <Button className='tw:bg-[#2b77c0]! tw:hover:bg-[#1f5fa0]! tw:px-8! tw:py-4! tw:rounded-full! tw:border-0! tw:focus:shadow-none!' >
              <span className='tw:font-medium'>Shop Collection</span>
            </Button>

            <Button className='tw:bg-white/80! tw:backdropbackdrop-blur-md! tw:hover:bg-white! tw:px-8! tw:py-4! tw:rounded-full! tw:border-0! tw:focus:shadow-none!'>
              <span className='tw:text-gray-800'>View Lookbook</span>
              <Ripple
                pt={{
                  root: { style: { background: 'rgba(0, 96, 159, 0.9)' } }
                }}
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;