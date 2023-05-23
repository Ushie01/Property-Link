import * as emailValidator from "email-validator";

export function phoneValidator(phone: string) {
	const matchRegex =
		/((^23490)([23589]))|((^23470)([1-9]))|((^23480)([2-9]))|((^23481)([0-9]))(\d{7})/;
	if (!matchRegex.test(phone)) {
		return false;
	}
	return true;
}

export const validatEmail = (email: string) => {
	return emailValidator.validate(email);
};
