function Nav(){
return (
    <>
<div className="relative flex w-full overflow-x-hidden bg-indigo-700 py-4 justify-center px-4 border-b-4 border-black">
<ul className="flex text-xs text-white font-medium xs:text-base sm:text-xl md:text-2xl lg:text-3xl">
<li className="px-3 cursor-pointer hover:text-indigo-300">ABOUT</li>
<li className="px-3 cursor-pointer hover:text-indigo-300">TIMELINE</li>
<li className="px-3 cursor-pointer hover:text-indigo-300">PROBLEM STATEMENTS</li>
<li className="px-3 cursor-pointer hover:text-indigo-300">CONTACT</li>
</ul>
</div>
    </>
)
}

export default Nav;