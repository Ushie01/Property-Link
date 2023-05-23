import {
	FieldValues,
	Path,
	useForm as useReactHookForm,
	UseFormRegisterReturn,
	ValidationMode,
} from "react-hook-form";

type Args<T> = {
	validationMode?: keyof ValidationMode;
};

const useForm = <T extends FieldValues>({ validationMode }: Args<T> = {}) => {
	const {
		control,
		register,
		setError,
		clearErrors,
		watch,
		handleSubmit,
		getValues,
		trigger,
		formState,
		setValue,
	} = useReactHookForm<T>({
		mode: validationMode ?? "onChange",
		reValidateMode: "onChange",
		shouldUnregister: false,
		shouldFocusError: true,
		context: undefined,
		resolver: undefined,
	});
	const requiredMessage = "Unfurtunately, this field can't be empty";
	return {
		formState,
		control,
		errors: formState?.errors,
		trigger,
		register,
		watch,
		setError,
		clearErrors,
		setValue,
		handleSubmit,
		getValues,
		required: (field: Path<T>, isRequired = true) => {
			const handlers = register(field, {
				required: { value: isRequired, message: requiredMessage },
			});
			const onChange: UseFormRegisterReturn["onChange"] = async (event) => {
				clearErrors("global" as Path<T>);
				handlers.onChange(event);
			};
			return { ...handlers, onChange, "data-testid": field };
		},
		optional: (field: Path<T>) => ({
			...register(field),
			"data-testid": field,
		}),
	};
};

export default useForm;
