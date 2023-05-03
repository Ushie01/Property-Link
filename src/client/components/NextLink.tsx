import Link from 'next/link';

type itemLinkPros = {
    items: string[],
    column: Boolean,
    distance: string
}

const NextLink = ({items, column, distance}: itemLinkPros) => {
    return (
        <div className={`flex ${column ? `flex-col space-y-${distance}` : `flex-row space-x-4`}`}>
            {
                items.map((itemLink, index): any => (
                    <Link href='#' key={index}>{itemLink}</Link>
                ))
            }
        </div>
    )
}

export default NextLink;