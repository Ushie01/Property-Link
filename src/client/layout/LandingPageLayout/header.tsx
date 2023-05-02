import ButtonOne from "@/client/shared/buttonOne";

const Header = () => {
    return (
        <div className="flex flex-row items-center justify-between text-white p-8 bg-[#424141]">
            <p className="text-xl font-bold">LOGO.</p>
            <div className="flex flex-row items-center justify-center text-sm space-x-3">
                <p>Agents</p>
                <p>Properties</p>
                <p>Services</p>
                <p>Contact Us</p>
            </div>
            <ButtonOne width={'28'}/>
        </div>
    )
}

export default Header;