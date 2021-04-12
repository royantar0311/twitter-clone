import * as yup from 'yup';

const email = yup.string().email().min(8).max(254).trim().lowercase().required();

const firstName = yup.string().min(1).max(254).trim().required();

const lastName = yup.string().min(1).max(254).trim().required();

const password = yup.string().min(6).max(72, 'utf8')
	// .matches(/^(?=.*?[\p{Lu}])(?=.*?[\p{Ll}]) .*$/u,'password must contain one uppercase letter, one lowercase letter, and one digit')
	.required();

const username = yup.string().required().min(6, 'Username must be at least 6 characters')

export const signUpSchema = yup.object().shape({
	email,
	firstName,
	lastName,
	username,
	password,
})

export const loginSchema = yup.object().shape({
	email,
	password
})