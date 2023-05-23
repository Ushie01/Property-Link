import { AuthCode } from "@heathmont/moon-core-tw";
import React from "react";
import useRegister from "../hooks/useRegister";

const OtpStep = () => {
	const { handleCodeSubmit } = useRegister();
	return (
		<form>
			<div className='mb-20 flex flex-col items-center justify-center'>
				<p className='helvetica-normal text-left text-4xl'>Check your email</p>
				<p className='raleway-light text-md text-left'>
					We sent an authentication code to :
				</p>
			</div>
			<div>
				<AuthCode
					className='[&>div>div>div>div>input]:px-0 [&>div>div]:rounded-8 [&>div>div]:border-2 [&>div>div]:border-slate-300'
					onlyDigits
					onSubmit={handleCodeSubmit}
				/>
			</div>
		</form>
	);
};

export default OtpStep;
