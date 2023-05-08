type ButtonProps ={
    text: string
}

const SecondButton = ({ text }: ButtonProps) => {
  return (
    <button className={`bg-picollo-50 p-2 text-sm text-white shadow-2xl w-40 rounded-md`}>
      {text}
    </button>
  );
};

export default SecondButton;