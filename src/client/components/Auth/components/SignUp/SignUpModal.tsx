import { Button, Form, Hint, IconButton, Modal } from "@heathmont/moon-core-tw";
import { GenericClose } from "@heathmont/moon-icons-tw";
import React from "react";
import FormInput from "../FormInputs/InputField";
import useRegister from "./hooks/useRegister";

type Props = {
	isOpen: boolean;
	handleOpenModal: () => void;
	children?: React.ReactNode;
};
const SignUpModal = ({ isOpen, handleOpenModal, children }: Props) => {
	const { onSubmit, onChange, errors, getValues } = useRegister();
	console.log(errors);
	return (
		<div>
			<Modal open={isOpen} onClose={handleOpenModal}>
				<Modal.Backdrop className='backdrop-blur-sm' />
				<Modal.Panel className='bg-white py-10'>
					<div className='flex items-center justify-end'>
						<IconButton
							icon={<GenericClose fontSize={48} />}
							onClick={handleOpenModal}
						/>
					</div>
					<div className='px-10'>
						<p className='helvetica-normal text-left text-4xl'>
							Login or sign up
						</p>
						<p className='raleway-light text-left text-lg'>
							Let&apos;s get you started
						</p>
						<Form className='mt-10 space-y-10'>
							<Form.Item>
								<FormInput
									name='emailOrPhone'
									onChange={onChange}
									label='Email or phone'
									size='md'
									className='raleway-normal rounded-sm border-2 bg-[#fffff] px-2 text-sm'
								/>
								{errors.emailOrPhone?.message && (
									<p className='raleway-light py-2 text-left text-xs text-red-500'>
										{errors.emailOrPhone?.message}
									</p>
								)}
							</Form.Item>
							<div className='w-full'>
								<Button
									onClick={onSubmit}
									className='mt- w-full rounded-sm bg-picollo-50 text-white'
								>
									Continue
								</Button>
							</div>
						</Form>
					</div>
				</Modal.Panel>
			</Modal>
			{children}
		</div>
	);
};

export default SignUpModal;
