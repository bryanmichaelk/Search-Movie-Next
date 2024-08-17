export default function Input(props) {
    const { onChange = () => {}, placeholder = "", value} = props;
    return (
        <input
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        name="search"
        className="border-2 border-blue-300 p-2 rounded-lg focus:outline-none focus:border-blue-400 focus:border-2 w-[100px] sm:w-[300px]"
        />
    );
}