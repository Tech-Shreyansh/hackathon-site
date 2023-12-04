function Nav() {

    const navItems = [
        {
            section: "ABOUT",
            link: "#about"
        },
        {
            section: "TIMELINE",
            link: "#timeline"
        },
        {
            section: "PROBLEM STATEMENTS",
            link: "#ps"
        },
        {
            section: "FAQs",
            link: "#faqs"
        },
        {
            section: "REGISTER",
            link: ""
        }
    ]
    return (
        <>
            <div className="relative flex w-full overflow-x-hidden bg-purple-700 py-4 justify-center px-4 border-b-4 border-black">
                <ul className="flex text-white font-semibold sm:text-base md:text-lg lg:text-xl">
                    {navItems.map((item)=><a href={item.link}><li className="px-3 cursor-pointer hover:text-indigo-300">{item.section}</li></a>)}
                    {/* <li className="px-3 cursor-pointer hover:text-indigo-300">TIMELINE</li>
                    <li className="px-3 cursor-pointer hover:text-indigo-300">PROBLEM STATEMENTS</li>
                    <li className="px-3 cursor-pointer hover:text-indigo-300">CONTACT</li> */}
                </ul>
            </div>
        </>
    )
}

export default Nav;