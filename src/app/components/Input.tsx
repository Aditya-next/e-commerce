import { ChevronDown } from 'lucide-react';

export default function Input(props: any) {
    return (
        <div className="w-full text-left border border-[#E6E6E6] py-[16px] px-[24px] rounded-[16px] relative overflow-hidden">
            <label htmlFor="email">Email</label>
            <div className="w-full relative">
            <input type="text text-[20px]"
                className="w-full"
                placeholder={props.placeholder}
                name={props.name}
                id={props.id}
                onChange={props.onChange}
                value={props.value}
                onBlur={props.onBlur}
            />
                        <div className="absolute top-[0%] right-3"><ChevronDown /></div>

            </div>
            { props.error ? <div className="absolute right-0 top-0 bg-[#FD5646] text-[10px] font-[700] text-white capitalize py-[2px] pl-[8px] pr-[16px] rounded-tl-[4px] rounded-bl-[4px]">{props.error}</div>: ''}
            
        </div>
    )
}