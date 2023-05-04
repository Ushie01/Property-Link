import NextLink from '@/client/components/NextLink';
import { FOOTER } from '@/utils/footerData';

const FooterItems = () => (
  <div className="mt-20 grid grid-cols-2 items-start text-lg md:justify-start lg:flex lg:flex-row lg:justify-center w-[100%]">
    <div className="mt-5 flex flex-row items-start lg:w-2/4 w-full">
      {FOOTER.map((item, idx) => (
        <>
        <div className="flex items-start flex-col justify-between lg:w-[100%] w-full">
          <p className="raleway-bold text-center text-picollo-50">{item.title}</p>
          <NextLink items={item.content} key={idx} column={true} href="#" />
        </div>
        </>
      ))}
    </div>
  </div>
);

export default FooterItems;
