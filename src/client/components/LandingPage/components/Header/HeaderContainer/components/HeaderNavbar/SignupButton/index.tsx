import { Button } from "@heathmont/moon-core-tw";
import useAuthStepsContext from "@/client/components/Auth/context/useAuthStepsContext";

type Props = {
	title: string;
	className?: string;
};
const SignUpButton = ({ title, className }: Props) => {
	const { handleOpenModal } = useAuthStepsContext();
	return (
		<div className='rounded-10'>
			<Button onClick={handleOpenModal} className={className}>
				<p className='raleway-bold text-base'>{title}</p>
			</Button>
		</div>
	);
};

export default SignUpButton;
