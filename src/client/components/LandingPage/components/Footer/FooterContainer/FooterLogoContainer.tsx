type Props = {
  children: React.ReactNode;
};
const FooterLogoContainer = ({ children }: Props) => (
  <div className="flex flex-row items-center justify-between">{children}</div>
);
export default FooterLogoContainer;
