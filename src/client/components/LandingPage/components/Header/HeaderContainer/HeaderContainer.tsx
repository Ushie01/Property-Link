type Props = {
  children: React.ReactNode;
};

const HeaderContainer = ({ children }: Props) => (
  <div className="p-7 lg:block  lg:bg-black lg:p-8 lg:text-white">
    <div className="hidden lg:block p-7 pl-20 pr-20 bg-black">
    {children}
    </div>
  </div>
);

export default HeaderContainer;
