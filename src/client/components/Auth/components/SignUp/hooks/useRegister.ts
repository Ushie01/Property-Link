import { phoneValidator, validatEmail } from "./helpers/validators";
import type { FieldValues } from "../FieldValues";
import { useForm } from "react-hook-form";

const useRegister = () => {
	const {
		setError,
		control,
		getValues,
		setValue,
		formState,
		clearErrors,
		getFieldState,
	} = useForm<FieldValues>({});

	return {
		setError,
		prevState: getFieldState(),
		onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
			clearErrors();
			setValue("emailOrPhone", event?.target?.value);
		},
		onSubmit: () => {
			const values = getValues();
			const isPhone = phoneValidator(values.emailOrPhone ?? "");
			const isEmail = validatEmail(values.emailOrPhone ?? "");

			if (isEmail || isPhone) {
				// Sign in/up with email
			}
			setError("emailOrPhone", { message: "Invalid email or phone number" });
		},
		control,
		errors: formState.errors,
		getFieldState,
	};
};

export default useRegister;
