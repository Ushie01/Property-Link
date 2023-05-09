type Props = {
    text: String
}

export const InfoSectionTitle = ({ text }: Props) => {
    return (
        <div className="flex flex-row items-start justify-start">
            <div className="h-1 w-16 mt-5 bg-picollo-50" />
            <p className="text-3xl font-bold ml-6">{text}</p>
        </div>
    )
}
