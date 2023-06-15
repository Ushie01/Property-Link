import { FC, useContext, useState } from "react";
import { AuthStepEnum } from "./StepsEnum";
import AuthStepsContext from "./AuthStepsContext";

type Props = {
	children: React.ReactNode;
};

const AuthStepsProvider = ({ children }: Props) => {
	const [steps, setSteps] = useState(AuthStepEnum.emailOrPhone);
	const [isEmail, _] = useState(false);
	const [id, setAuthenticateId] = useState<number | undefined>(); // [id, setId
	const [isOpen, setIsOpen] = useState(false);
	const AuthStepContext = useContext(AuthStepsContext);
	if (AuthStepContext === undefined) {
		throw new Error("useAuthStep must be used within a AuthStepProvider");
	}

	return (
		<AuthStepsContext.Provider
			value={{
				steps,
				setSteps,
				isEmail,
				isOpen,
				handleOpenModal: () => setIsOpen(!isOpen),
				id,
				setAuthenticateId,
			}}
		>
			{children}
		</AuthStepsContext.Provider>
	);
};
export default AuthStepsProvider;
