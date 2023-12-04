import sideImg from '../../assets/sideImg.jpg'

function Intro() {
    return (
        <div id='intro'>
            <div className="px-20 py-12 flex flex-col md:flex-row justify-between border-b-4 border-black items-center">
                <div className='text-left text-lg font-medium text-lg md:text-xl pr-12 lg:text-2xl'>
                    WinterHacks, a two-day event organized by SDC-SI at AKGEC,Ghaziabad, brings together 2nd and 3rd-year college students to collaborate on building projects and solutions addressing common issues within their college community.
                    <button className="my-12 text-white flex cursor-pointer items-center rounded-md border-2 border-black bg-indigo-400 px-10 py-3 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none">Register</button>
                </div>
                <div className='flex align-middle justify-center -mt-6'><img src={sideImg} className='w-3/4'></img></div>
            </div>
        </div>
    )
}
export default Intro;