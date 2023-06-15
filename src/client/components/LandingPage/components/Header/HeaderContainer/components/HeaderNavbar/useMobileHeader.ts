import { useState } from "react";

const useMobileHeader = () => {
	const [toggle, setToggle] = useState(false);

	const handleToggle = () => {
		setToggle(!toggle);
	};

	return { toggle, handleToggle, setToggle };
};

export default useMobileHeader;
