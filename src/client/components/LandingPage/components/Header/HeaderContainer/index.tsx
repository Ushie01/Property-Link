import HeaderContainer from "./HeaderContainer";
import HeaderNavbar from "./HeaderComponents/HeaderNavbar/HeaderNavbar";
import HeaderItems from "./HeaderItems";
import HeaderFoot from "./HeaderItems/headerItem2";

const Header = () => {
    return (
        <HeaderContainer>
                <HeaderNavbar />
                <HeaderItems />
                <HeaderFoot />
        </HeaderContainer>
    )
}

export default Header;
