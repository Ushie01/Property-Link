import WelcomeStep from "./components/Authenticate/CompletedStep";
import EmailOrPhone from "./components/Authenticate/EmailOrPhone";
import OtpStep from "./components/Authenticate/OTPStep";
import { AuthStepEnum } from "./context/StepsEnum";
import useAuthStepsContext from "./context/useAuthStepsContext";

const AuthenticateSteps = () => {
	const { steps } = useAuthStepsContext();

	if (steps === AuthStepEnum.emailOrPhone) {
		return <EmailOrPhone />;
	}
	if (steps === AuthStepEnum.otp) {
		return <OtpStep />;
	}
	if (steps === AuthStepEnum.finish) {
		return <WelcomeStep />;
	}
	return null;
};
export default AuthenticateSteps;
