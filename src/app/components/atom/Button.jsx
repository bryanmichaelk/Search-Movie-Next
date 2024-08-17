export default function Button(props) {
  const { onClick = () => {}, name = "", children, className } = props;
  return (
    <button
      name={name}
      onClick={onClick}
      className={` font-bold py-2 px-4 rounded-lg text-md md:text-lg ${className}`}
    >
      {children}
    </button>
  );
}
