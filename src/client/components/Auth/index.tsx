import AuthenticateSteps from "./Authenticate";
import AuthModal from "./components/Modal";
import useAuthStepsContext from "./context/useAuthStepsContext";

const Authenticate = () => {
	const { handleOpenModal } = useAuthStepsContext();
	return (
		<AuthModal handleOpenModal={handleOpenModal}>
			<AuthenticateSteps />
		</AuthModal>
	);
};
export default Authenticate;
