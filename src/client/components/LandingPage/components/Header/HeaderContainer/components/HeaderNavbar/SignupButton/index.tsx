import { Button } from "@heathmont/moon-core-tw";
import React from "react";
import useHeader from "../useHeader";
import SignUpModal from "@/client/components/Auth/components/SignUp/SignUpModal";
import useRegister from "@/client/components/Auth/components/SignUp/hooks/useRegister";

type Props = {
	title: string;
	className?: string;
};
const SignUpButton = ({ title, className }: Props) => {
	const { handleOpenModal, isOpen } = useHeader();

	return (
		<>
			<SignUpModal isOpen={isOpen} handleOpenModal={handleOpenModal}>
				<div className='rounded-10'>
					<Button onClick={handleOpenModal} className={className}>
						<p className='raleway-bold text-base'>{title}</p>
					</Button>
				</div>
			</SignUpModal>
		</>
	);
};

export default SignUpButton;
