import React, {ChangeEvent} from 'react';

const FormInput = (props: {
    placeHolder: string;
    type: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    name?: string;
    touched?: boolean;
    errorMessage?: string;
    onBlur: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
    const {type, onChange, name, placeHolder,onBlur, errorMessage,touched} = props;
    return (
<div>
    <div className="relative z-0 w-full group">
        <input
            type={type}
            onChange={onChange}
            placeholder={placeHolder}
            name={name}
            id={name}
            onBlur={onBlur}
            className="mt-3 focus:border-2 text-black block py-2.5 px-1 w-full text-sm bg-transparent border-0 border-b-2 border-secondary appearance-none dark:border-gray-600 dark:focus:border-secondary focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        />
    </div>
    {
        touched && <span className='text-red-500 text-xs'>{errorMessage}</span>
    }

</div>

    );
};

export default FormInput;
