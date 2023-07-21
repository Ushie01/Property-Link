import { useContext } from "react";
import AuthStepsContext from "./AuthStepsContext";

const useAuthStepsContext = () => {
	const AuthStepContext = useContext(AuthStepsContext);
	if (AuthStepContext === undefined) {
		throw new Error("useAuthStep must be used within a AuthStepProvider");
	}

	return AuthStepContext;
};
export default useAuthStepsContext;
