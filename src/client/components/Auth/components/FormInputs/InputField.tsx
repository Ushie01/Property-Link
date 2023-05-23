/* eslint-disable react/display-name */
import { Input, InputProps, Label } from "@heathmont/moon-core-tw";

type Props = InputProps & {
	label?: string;
};
const FormInput = (props: Props) => {
	return (
		<div className=' mt-5'>
			<Label
				htmlFor={props.name}
				size={props.size ?? "sm"}
				className='helvetica-normal'
			>
				{props.label}
			</Label>
			<Input {...props} />
		</div>
	);
};

export default FormInput;
