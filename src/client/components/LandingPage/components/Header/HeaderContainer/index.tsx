import HeaderContainer from "./HeaderContainer";
import HeaderNavbarContainer from "./HeaderContainer";
import HeaderNavbar from "./HeaderComponents/HeaderNavbar/HeaderNavbar";
import HeaderItems from "./HeaderItems";
import HeaderFoot from "./HeaderItems/headerItem2";

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderNavbarContainer>
                <HeaderNavbar />
                <HeaderItems />
                <HeaderFoot />
            </HeaderNavbarContainer>
        </HeaderContainer>
    )
}

export default Header;