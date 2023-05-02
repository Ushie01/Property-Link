interface ButtonOneProps {
  width: string;
}

const ButtonOne = ({ width }: ButtonOneProps) => {
  return (
    <button className={'bg-picollo-50 p-2 text-xs text-white shadow-2xl w-' + width + ' rounded-md'}>
      Sign Up
    </button>
  );
};

export default ButtonOne;
