import siLogo from '../../assets/siLogo.svg'
import akgLogo from '../../assets/akgLogo.png';
import insta from '../../assets/insta.svg'

function Footer(){

return (
    <>
   <div className="flex gap-12 flex-col bg-black w-full justify-end py-12 px-6 items-center sm:flex-row sm:justify-around sm:px-6 md:px-12">
    <div className='flex gap-4 w-3/4 xs:w-2/3 items-center sm:w-[30%] sm:flex-col sm:gap-0 md:w-1/4 lg:w-1/5'>
        <img src={siLogo} className="w-[100px] mb-3 sm:w-[40px]"></img>
        <div>
        <p className='text-sm font-semibold text-white sm:text-base md:text-xl'>SDC-SI</p>
        <p className='text-white text-sm text-center sm:text-sm md:text-base'>Software Incubator is a distinguished research and development center of AKGEC.</p>
        </div>
        </div>
        <div className='flex items-center w-3/4 xs:w-2/3 flex-col sm:w-[30%] md:w-1/4 lg:w-1/5 md:gap-2'>
            <div className='flex gap-2 text-white items-center justify-center text-lg font-medium'>
                <p className='text-base md:text-lg'>Connect with us </p>
                <a href="https://www.instagram.com/software.incubator/" target='_blank'><img src={insta}></img></a>
            </div>
        <a href="https://silive.in/" target='_blank' className='inline-block w-full'><div className="border-2 w-5/6 text-center mx-auto border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] py-3 mb-6  text-white mt-4 text-xs xs1:mb-0 sm:text-sm ">Learn More about SI</div></a>
        </div>
        <div className='flex gap-4 items-center w-3/4 xs:w-2/3 sm:w-[30%] sm:flex-col sm:gap-0 md:w-1/4 lg:w-1/5'>
            <img src={akgLogo} className="w-[80px] mb-3 sm:w-[40px]"></img>
            <div>
        <p className='text-sm font-semibold text-white sm:text-base md:text-xl'>AKGEC</p>
        <p className='text-white text-sm text-center sm:text-sm md:text-base'>AKGEC is a College situated in ghaziabad which offers B.Tech and M.Tech courses. </p>
        </div>
        </div>
    </div> 
    </>
)
}
export default Footer;