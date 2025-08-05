export default function Input(props: any) {
    return (
        <div className="w-full">
            <input type="text"
                className="border-b-1 border-black px-2 py-1 w-full"
                placeholder={props.placeholder}
                name={props.name}
                id={props.id}
                onChange={props.onChange}
                value={props.value}
                onBlur={props.onBlur}
            />
        </div>
    )
}