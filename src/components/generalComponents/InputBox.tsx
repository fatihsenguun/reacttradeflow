import React from 'react'

interface InputBoxProps {
    type: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;

}


export function InputBox({type,value,onChange}:InputBoxProps) {
    return (
        <input
            type={type}
            value={value}
            onChange={onChange}
            className="p-3 bg-white/12  h-13 w-full rounded-lg backdrop-blur-md  hover:bg-white/15
            focus:bg-white/20
                    placeholder:text-slate-500 transition-all duration-200 focus:outline-none"
        />
    )
}



