import Link from 'next/link';

type Props = {
  items: string[];
  column: Boolean;
  href: string;
};

const NextLink = ({ items, column, href }: Props) => {
  return (
    <div
      className={`flex ${
        column ? `flex-col space-y-3` : `flex-row space-x-4 text-xs`
      }`}
    >
      {items.map((itemLink, index): any => (
        <Link
          className="translate-y-2 raleway-normal text-moon-16 hover:text-picollo-50 hover:duration-300"
          href={href}
          key={index}
        >
          {itemLink}
        </Link>
      ))}
    </div>
  );
};

export default NextLink;
