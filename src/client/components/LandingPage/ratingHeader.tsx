const Rating = () => {
    const clientValues = [
        {
            "value": "9K+",
            "text": "Happy Client"
        },
        {
            "value": "13K+",
            "text": "Awards"
        },
        {
            "value": "26K+",
            "text": "Listed Properties"
        }
    ]
    return (
        <>
            <div className='flex flex-row items-start justify-center space-x-12'>
                {
                    clientValues.map((value, index): any => (
                        <>
                            <div key={index} className='flex flex-col items-start justify-start'>
                                <p className='text-3xl font-bold text-picollo-50'>{value.value}</p>
                                <p className='text-white text-lg font-light mt-4'>{value.text}</p>
                            </div>
                        </>
                    ))
                }
            </div>
        </>
    )
}

export default Rating