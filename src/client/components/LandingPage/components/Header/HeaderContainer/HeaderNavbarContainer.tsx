type Props = { children: React.ReactNode; };

const HeaderNavbarContainer = ({ children }: Props) => {
    <div className="hidden lg:block p-7 pl-20 pr-20 bg-black">
        {children}
    </div>
}

export default HeaderNavbarContainer;