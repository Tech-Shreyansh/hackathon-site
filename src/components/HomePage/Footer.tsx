import siLogo from '../../assets/siLogo.svg'
import akgLogo from '../../assets/akgLogo.png';
import insta from '../../assets/insta.svg'

function Footer(){

return (
    <>
   <div className="flex flex-col bg-black w-full py-12 px-6 justify-around items-center xs1:flex-row md:px-12">
    <div className='flex xs1:w-1/5 flex-col items-center'>
        <img src={siLogo} className="w-[40px] mb-3"></img>
        <p className='text-sm font-semibold text-white sm:text-base md:text-xl'>SDC-SI</p>
        <p className='text-white text-sm text-center sm:text-base'>Software Incubator is a distinguished research and development center of AKGEC.</p>
        </div>
        <div className='flex xs1:w-1/5 flex-col items-center gap-2'>
            <div className='flex gap-2 text-white items-center justify-center text-lg font-medium'>
                <p>Connect with us </p>
                <a href="https://www.instagram.com/software.incubator/" target='_blank'><img src={insta}></img></a>
            </div>
        <a href="https://silive.in/" target='_blank' className='inline-block w-full'><div className="border-2 w-5/6 text-center mx-auto border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] py-3 mb-6  text-white mt-4 text-xs xs1:mb-0 sm:text-sm ">Learn More about SI</div></a>
        </div>
        <div className='flex xs1:w-1/5 flex-col items-center'>
            <img src={akgLogo} className="w-[40px] mb-3"></img>
        <p className='text-sm font-semibold text-white sm:text-base md:text-xl'>AKGEC</p>
        <p className='text-white text-sm text-center sm:text-base'>AKGEC is a College situated in ghaziabad which offers B.Tech and M.Tech courses. </p>
        </div>
    </div> 
    </>
)
}
export default Footer;