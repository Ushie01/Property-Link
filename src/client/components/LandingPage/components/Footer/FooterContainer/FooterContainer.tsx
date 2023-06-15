type Props = {
  children: React.ReactNode;
};
const FooterContainer = ({ children }: Props) => (
  <div className="p-7 lg:block lg:bg-black lg:p-16 lg:text-white">
    {children}
  </div>
);

export default FooterContainer;
