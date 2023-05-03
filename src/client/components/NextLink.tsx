import Link from 'next/link';

type itemLinkPros = {
    items: string[],
    column: Boolean,
    href: string
}

const NextLink = ({items, column, href}: itemLinkPros) => {
    return (
        <div className={`flex ${column ? `flex-col space-y-3` : `flex-row text-xs space-x-4`}`}>
            {
                items.map((itemLink, index): any => (
                    <Link className="hover:text-picollo-50 hover:underline hover:duration-300 translate-y-2" href={href} key={index}>{itemLink}</Link>
                ))
            }
        </div>
    )
}

export default NextLink;