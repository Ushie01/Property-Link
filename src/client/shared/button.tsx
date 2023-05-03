type ButtonProps ={
    width: string,
    text: string
}

const Button = ({ width, text }: ButtonProps) => {
  return (
    <button className={`bg-picollo-50 p-2 text-xs text-white shadow-2xl w-24 rounded-md`}>
      {text}
    </button>
  );
};

export default Button;
