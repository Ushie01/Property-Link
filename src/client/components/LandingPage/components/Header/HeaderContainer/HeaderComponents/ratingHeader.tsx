import data from '../../../../../../../utils/headerData.json'


const Rating = () => {

    return (
        <>
            <div className='flex flex-row items-start justify-center space-x-12'>
                {
                    data.data.map((value, index): any => (
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