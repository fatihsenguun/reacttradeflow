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
            className="p-3 bg-slate-800 h-13 w-full rounded-lg active-purple-800 text-slate-200 border border-slate-700
                    placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-300 transition-all duration-200"
        />
    )
}



