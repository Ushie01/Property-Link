import { Modal, IconButton, mergeClassnames } from "@heathmont/moon-core-tw";
import useAuthStepsContext from "../../context/useAuthStepsContext";
import {
	GenericClose,
	ControlsChevronLeftSmall,
} from "@heathmont/moon-icons-tw";
import { AuthStepEnum } from "../../context/StepsEnum";

type Props = {
	handleOpenModal: () => void;
	children?: React.ReactNode;
};
const AuthModal = ({ handleOpenModal, children }: Props) => {
	const { isOpen, steps, setSteps } = useAuthStepsContext();
	const isOtpStep = steps === AuthStepEnum.otp;
	const handleBack = () => setSteps(AuthStepEnum.emailOrPhone);
	return (
		<div>
			<Modal open={isOpen} onClose={handleOpenModal}>
				<Modal.Backdrop className='backdrop-blur-sm' />
				<Modal.Panel className='bg-slate-200 py-10'>
					<div
						className={mergeClassnames(
							"flex items-center justify-end",
							isOtpStep && "justify-between",
						)}
					>
						{isOtpStep && (
							<div className='flex flex-row items-center justify-center'>
								<IconButton
									icon={<ControlsChevronLeftSmall fontSize={26} />}
									onClick={handleBack}
								/>
								<p className='underline'>Back</p>
							</div>
						)}
						<IconButton
							icon={<GenericClose fontSize={40} />}
							onClick={handleOpenModal}
						/>
					</div>
					<div>{children}</div>
				</Modal.Panel>
			</Modal>
		</div>
	);
};

export default AuthModal;
