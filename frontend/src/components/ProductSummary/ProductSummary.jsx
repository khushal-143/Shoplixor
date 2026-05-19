import assets from "../../assets/assets"
import { Rating } from "primereact/rating";
import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button'
import { Ripple } from 'primereact/ripple'
const ProductSummary = () => {
    return (
        <>
            <div className="tw:flex tw:flex-col tw:md:flex-row tw:p-4 tw:bg-[#f5fbf7] tw:gap-4">
                <div className="tw:md:w-[70%]">
                    <div className="tw:p-4">
                        <h1 className="tw:font-lexend tw:font-semibold tw:text-2xl tw:leading-10">Summary</h1>
                        <p className="tw:font-jakarta tw:font-normal tw:text-sm tw:md:text-base tw:leading-7 tw:text-[#3D4946] ">The "Little Stars English Workbook" is meticulously designed to ignite the joy of learning in
                            toddlers and preschoolers. Combining playful illustrations with pedagogical rigor, this
                            workbook guides your child through the fundamental building blocks of the English language.
                            From fine-motor skill preparation with tracing lines to phonics-based letter recognition, each
                            page is a step toward confident literacy.</p>
                    </div>
                    <div className="tw:flex tw:flex-col tw:gap-2 ">
                        <h1 className="tw:font-lexend tw:font-semibold tw:text-2xl tw:leading-10 tw:pl-4">What's Inside</h1>
                        <div className="tw:flex tw:flex-wrap tw:gap-4 tw:justify-evenly">
                            <div className="tw:flex tw:flex-col tw:gap-1 tw:p-4 tw:bg-white tw:rounded-xl tw:border tw:border-[#dde4e2] tw:max-w-96" >
                                <img className="tw:max-w-11 tw:max-h-11" src={assets.SumPen} alt="pen image" />
                                <h2 className="tw:font-lexend tw:font-semibold tw:text-xl tw:leading-8">Alphabet Tracing</h2>
                                <p className="tw:font-jakarta tw:font-normal tw:text-base tw:leading-6 tw:text-[#3D4946] " >Guided paths for uppercase and lowercase
                                    letters to build muscle memory.</p>
                            </div>
                            <div className="tw:flex tw:flex-col tw:gap-1 tw:p-4 tw:bg-white tw:rounded-xl tw:border tw:border-[#dde4e2] tw:max-w-96" >
                                <img className="tw:max-w-11 tw:max-h-11" src={assets.SumA} alt="A letter image" />
                                <h2 className="tw:font-lexend tw:font-semibold tw:text-xl tw:leading-8">Phonics Practice</h2>
                                <p className="tw:font-jakarta tw:font-normal tw:text-base tw:leading-6 tw:text-[#3D4946] " >Vibrant image-word associations to
                                    develop sound-letter correspondence.</p>
                            </div>
                            <div className="tw:flex tw:flex-col tw:gap-1 tw:p-4 tw:bg-white tw:rounded-xl tw:border tw:border-[#dde4e2] tw:max-w-96" >
                                <img className="tw:max-w-11 tw:max-h-11" src={assets.SumColor} alt="color image" />
                                <h2 className="tw:font-lexend tw:font-semibold tw:text-xl tw:leading-8">Creative Coloring</h2>
                                <p className="tw:font-jakarta tw:font-normal tw:text-base tw:leading-6 tw:text-[#3D4946] " >Interactive coloring breaks that reinforce
                                    lesson vocabulary and fun.</p>
                            </div>
                            <div className="tw:flex tw:flex-col tw:gap-1 tw:p-4 tw:bg-white tw:rounded-xl tw:border tw:border-[#dde4e2] tw:max-w-96" >
                                <img className="tw:max-w-11 tw:max-h-11" src={assets.SumCheck} alt="check image" />
                                <h2 className="tw:font-lexend tw:font-semibold tw:text-xl tw:leading-8">Sticker Rewards</h2>
                                <p className="tw:font-jakarta tw:font-normal tw:text-base tw:leading-6 tw:text-[#3D4946] " >Over 100 colorful stickers to motivate
                                    progress and celebrate milestones.</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="tw:md:w-[30%]">
                    <div className="tw:flex tw:flex-col tw:gap-6 tw:p-4 tw:bg-white tw:rounded-2xl ">
                        <h2 className="tw:font-lexend tw:font-semibold tw:text-xl tw:leading-8">User Reviews</h2>
                        <div className="tw:flex tw:gap-4">
                            <h1 className="tw:font-jakarta tw:font-bold tw:text-4xl tw:leading-10">
                                4.9
                            </h1>
                            <div className="tw:flex tw:flex-col tw:gap-1">
                                <Rating value={5} cancel={false} readOnly
                                    pt={{
                                        onIcon: {
                                            style: {
                                                color: "#fc9d41"
                                            }
                                        }
                                    }} />
                                <p className="tw:font-jakarta tw:font-medium tw:text-xs tw:leading-3.5 tw:text-[#6D7A76] ">Global Rating</p>
                            </div>
                        </div>
                        <div className="tw:flex tw:gap-4 tw:justify-evenly tw:flex-wrap">
                            <div className="tw:flex tw:flex-col tw:flex-wrap tw:max-w-55 tw:md:max-w-full">
                                <div className="tw:flex tw:items-center tw:justify-between">
                                    <div className="tw:flex tw:gap-2 tw:items-center">
                                        <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" className="mr-2" size="large" shape="circle" />
                                        <p className="tw:font-jakarta tw:font-normal tw:text-sm tw:leading-5">Anita R.</p>
                                    </div>
                                    <p className="tw:font-jakarta tw:font-bold tw:text-[10px] tw:leading-4 tw:px-2 tw:py-1 tw:rounded-2xl tw:text-[#15803D] tw:bg-[#dcfce7] ">VERIFIED</p>
                                </div>
                                <p className="tw:font-jakarta tw:text-sm tw:leading-5 tw:text-[#3D4946] tw:p-2">"My daughter loves the illustrations! The paper
                                    quality is exceptional for water-based
                                    markers."</p>
                            </div>
                            <div className="tw:flex tw:flex-col tw:flex-wrap tw:max-w-55 tw:md:max-w-full">
                                <div className="tw:flex tw:items-center tw:justify-between">
                                    <div className="tw:flex tw:gap-2 tw:items-center">
                                        <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" className="mr-2" size="large" shape="circle" />
                                        <p className="tw:font-jakarta tw:font-normal tw:text-sm tw:leading-5">Anita R.</p>
                                    </div>
                                    <p className="tw:font-jakarta tw:font-bold tw:text-[10px] tw:leading-4 tw:px-2 tw:py-1 tw:rounded-2xl tw:text-[#15803D] tw:bg-[#dcfce7] ">VERIFIED</p>
                                </div>
                                <p className="tw:font-jakarta tw:text-sm tw:leading-5 tw:text-[#3D4946] tw:p-2">"My daughter loves the illustrations! The paper
                                    quality is exceptional for water-based
                                    markers."</p>
                            </div>
                        </div>
                        <div className="tw:flex tw:justify-center tw:p-4">

                        <Button className='tw:flex tw:justify-center! tw:bg-white! tw:border-[#6d7a76]! tw:rounded-2xl! tw:w-full! tw:focus:shadow-none!'>
                            <span className="tw:font-jakarta tw:font-normal tw:text-base tw:leading-6 tw:text-[#6D7A76] ">Read All Reviews </span>
                                <Ripple
                                    pt={{
                                        root: { style: { background: 'rgba(43, 177, 155, 0.7)' } }
                                    }}
                                />
                        </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductSummary
