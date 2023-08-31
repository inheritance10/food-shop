const CustomerItem = () => {
    return (
        <div className='flex flex-row w-full h-[58%] items-center justify-between'>


            <div className='rounded relative w-[45%] h-[40%] bg-secondary text-white justify-around flex-col flex p-6 gap-x-2'>
                <p>
                    Lorem lorem fjgsıgjfsıajgı gfa oıgfıxas ıfaojgıasfj gıoafjs ıfoaghafıs ghıfajsı gjaıgfaıoh g ghafıgfıao
                </p>
                <small className='text-sm'>FullName</small>
                <small className='text-xs'>Jobs</small>
                <div
                    className='absolute rounded-full w-16 h-16 right-3 bottom-3 bg-red-700 flex items-center justify-center'
                    style={{
                        backgroundImage: "url('/images/food.png')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />

            </div>

            <div className='rounded relative w-[45%] h-[40%] bg-secondary text-white justify-around flex-col flex p-6 gap-x-2'>
                <p>
                    Lorem lorem fjgsıgjfsıajgı gfa oıgfıxas ıfaojgıasfj gıoafjs ıfoaghafıs ghıfajsı gjaıgfaıoh g ghafıgfıao
                </p>
                <small className='text-sm'>FullName</small>
                <small className='text-xs'>Jobs</small>
                <div
                    className='absolute rounded-full w-16 h-16 right-3 bottom-3 bg-red-700 flex items-center justify-center'
                    style={{
                        backgroundImage: "url('/images/food.png')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
            </div>
        </div>
    )
}

export default CustomerItem