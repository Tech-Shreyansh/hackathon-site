import sideImg from '../../assets/sideImg.jpg'

function Intro(){
return (
    <>
    <div className="flex flex-col px-10 pt-8 md:flex-row justify-between md2:px-12">
    <div className='text-lg font-medium md:mt-12 md2:text-xl lg2:text-2xl pr-12 lgr:text-3xl'>
    WinterHacks, a two-day event organized by SDC-SI at AKGEC,Ghaziabad, brings together 2nd and 3rd-year college students to collaborate on building projects and solutions addressing common issues within their college community.
    <button className="my-12 text-white flex cursor-pointer items-center rounded-md border-2 border-black bg-indigo-400 px-10 py-3 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none">Register</button>
    </div>
   <div className='flex align-middle justify-center -mt-6'><img src={sideImg} className='w-10/12 mid:w-11/12'></img></div>
    </div>
    </>
)
}
export default Intro;