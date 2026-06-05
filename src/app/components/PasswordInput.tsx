import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

type passwordInputType = {
    type : string,
    id : string,
    name : string,
    onChange : React.ChangeEventHandler<HTMLInputElement>,
    value : string,
    onBlur : React.FocusEventHandler<HTMLInputElement>
    placeholder?: string,
    show : React.ChangeEventHandler<HTMLInputElement>;
}

export default function PasswordInput({type, id, name, onChange, value, onBlur, placeholder, show}:passwordInputType) {
    return (
        <div className="w-full relative border-b-1">
            <input
                type={type}
                className="border-0 border-black px-2 py-1 w-full"
                placeholder={placeholder}
                name={name}
                id={id}
                onChange={onChange}
                value={value}
                onBlur={onBlur}
            />
            <div onClick={()=>show} className='absolute right-1 top-1'> {type === 'text' ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}</div>
        </div>
    )
}