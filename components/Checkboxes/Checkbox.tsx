const Checkbox = (props: {label: string}) => {
    const {label} = props
    return(
        <div className='w-full gap-x-2 flex items-center'>
            <input className='w-5 h-5 ease-soft text-base rounded-1.4 checked:bg-gradient-to-tl checked:after:bg-secondary checked:from-gray-900 checked:to-slate-800' type="checkbox"/>
            <label className='text-xs font-medium'>{label}</label>
        </div>
    )
}


export default Checkbox