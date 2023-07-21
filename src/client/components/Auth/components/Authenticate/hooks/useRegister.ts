import { phoneValidator, validatEmail } from "./helpers/validators";
import type { FieldValues } from "../FieldValues";
import { useForm } from "react-hook-form";
import { useAuthenticateMutaionMutation } from "../graphql/RegisterMutaiongenerated";
import { TypeUser } from "@/gql/graphql";
import useAuthStepsContext from "../../../context/useAuthStepsContext";
import { AuthStepEnum } from "../../../context/StepsEnum";
import { useVerifyOtpMutation } from "../graphql/VerifyOtpgenerated";
import { useState } from "react";

const useRegister = () => {
	const { setError, control, getValues, setValue, formState, clearErrors } =
		useForm<FieldValues>({});

	const [authenticate] = useAuthenticateMutaionMutation();
	const { setSteps, setAuthenticateId, id } = useAuthStepsContext();
	const [verifyOtp] = useVerifyOtpMutation();
	return {
		setError,
		onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
			clearErrors();
			setValue("emailOrPhone", event?.target?.value);
		},
		onSubmit: async () => {
			const values = getValues();
			const isPhone = phoneValidator(values.emailOrPhone ?? "");
			const isEmail = validatEmail(values.emailOrPhone ?? "");

			if (isEmail || isPhone) {
				const res = await authenticate({
					variables: {
						emailOrPhone: values.emailOrPhone ?? "",
						userType: "AGENT" as TypeUser,
					},
				});
				if (res.data?.Authenticate) {
					const id = res.data?.Authenticate?.id;
					setSteps(AuthStepEnum.otp);
					setAuthenticateId(Number(id));
				}
				if (res.errors) {
					setError("emailOrPhone", { message: res?.errors?.at(0)?.message });
				}
			}
			setError("emailOrPhone", { message: "Invalid email or phone number" });
		},
		handleCodeSubmit: async (code: string) => {
			const data = await verifyOtp({
				variables: {
					id: Number(id),
					otp: code,
				},
			});
			if (data.errors) {
				setError("otp", { message: data?.errors?.at(0)?.message });
			}
			if (data.data?.verifyOTP?.token) {
				sessionStorage.setItem("token", data.data?.verifyOTP?.token);
				setSteps(AuthStepEnum.finish);
			}
		},
		control,
		errors: formState.errors,
		getValues,
	};
};

export default useRegister;
