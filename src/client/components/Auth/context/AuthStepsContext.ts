import { Dispatch, SetStateAction, createContext } from "react";
import { AuthStepEnum } from "./StepsEnum";

type Props = {
	steps: string;
	isEmail: boolean;
	setSteps: Dispatch<SetStateAction<AuthStepEnum>>;
	isOpen: boolean;
	handleOpenModal: () => void;
	id: number | undefined;
	setAuthenticateId: Dispatch<SetStateAction<number | undefined>>;
};

const AuthStepsContext = createContext<Props>({
	steps: AuthStepEnum.emailOrPhone,
	isEmail: false,
	setSteps: (_) => null,
	isOpen: false,
	handleOpenModal: () => null,
	id: undefined,
	setAuthenticateId: (_) => null,
});
export default AuthStepsContext;
