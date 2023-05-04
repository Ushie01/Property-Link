type Props = {
  children: React.ReactNode;
};

const HeaderContainer = ({ children }: Props) => (
  <div className="p-7 lg:block  lg:bg-black lg:p-8 lg:text-white">
    {children}
  </div>
);

export default HeaderContainer;