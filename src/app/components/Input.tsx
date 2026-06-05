import { ChevronDown } from 'lucide-react';

type InputFieldType = {
    type : string,
    id : string,
    name : string,
    onChange: React.ChangeEventHandler<HTMLInputElement>,
    value : string,
    onBlur  : React.FocusEventHandler<HTMLInputElement>,
    error : string | undefined,
    placeholder : string,
    className : string
}

export default function Input({type , id, name, onChange, value, onBlur, error, placeholder}:InputFieldType) {
    return (
        <div className="w-full text-left border border-[#E6E6E6] py-[16px] px-[24px] rounded-[16px] relative overflow-hidden">
            <label htmlFor="email">Email</label>
            <div className="w-full relative">
            <input type={type}
                className="className"
                placeholder={placeholder}
                name={name}
                id={id}
                onChange={onChange}
                value={value}
                onBlur={onBlur}
            />
                        <div className="absolute top-[0%] right-3"><ChevronDown /></div>
            </div>
            { error ? <div className="absolute right-0 top-0 bg-[#FD5646] text-[10px] font-[700] text-white capitalize py-[2px] pl-[8px] pr-[16px] rounded-tl-[4px] rounded-bl-[4px]">{error}</div>: ''}
            
        </div>
    )
}