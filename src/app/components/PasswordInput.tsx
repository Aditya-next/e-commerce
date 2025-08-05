import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';



export default function PasswordInput(props: any) {
    return (
        <div className="w-full relative border-b-1">
            <input
                type={props.type}
                className="border-0 border-black px-2 py-1 w-full"
                placeholder={props.placeholder}
                name={props.name}
                id={props.id}
                onChange={props.onChange}
                value={props.value}
                onBlur={props.onBlur}
            />
            <div onClick={props.show} className='absolute right-1 top-1'> {props.type === 'text' ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}</div>
        </div>
    )
}