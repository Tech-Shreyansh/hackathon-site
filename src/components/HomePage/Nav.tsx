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
            <div className="relative flex w-full overflow-x-hidden bg-violet-700 py-4 justify-center px-4 border-b-4 border-black">
                <ul className="flex text-white font-semibold sm:text-base md:text-lg lg:text-xl">
                    {navItems.map((item)=><a href={item.link}><li className="px-3 cursor-pointer hover:text-violet-300">{item.section}</li></a>)}
                </ul>
            </div>
        </>
    )
}

export default Nav;