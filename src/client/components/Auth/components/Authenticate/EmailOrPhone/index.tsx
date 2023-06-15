import { Button, Form } from "@heathmont/moon-core-tw";
import React from "react";
import useRegister from "../hooks/useRegister";
import FormInput from "../../FormInputs/InputField";

const EmailOrPhone = () => {
	const { onSubmit, onChange, errors } = useRegister();
	return (
		<div className='px-10'>
			<p className='helvetica-normal text-left text-4xl'>Login or sign up</p>
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
	);
};

export default EmailOrPhone;
