import { useState } from "react";

const useHeader = () => {
	const [toggle, setToggle] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => {
		setToggle(!toggle);
	};

	const handleOpenModal = () => {
		setIsOpen(!isOpen);
	};

	return {
		toggle,
		handleToggle,
		setToggle,
		isOpen,
		handleOpenModal,
		setIsOpen,
	};
};

export default useHeader;
