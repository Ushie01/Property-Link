interface ButtonOneProps {
    width: string,
    text: string
}

const ButtonOne = ({ width, text }: ButtonOneProps) => {
  return (
    <button className={'bg-picollo-50 p-2 text-xs text-white shadow-2xl w-' + width + ' rounded-md'}>
      {text}
    </button>
  );
};

export default ButtonOne;
