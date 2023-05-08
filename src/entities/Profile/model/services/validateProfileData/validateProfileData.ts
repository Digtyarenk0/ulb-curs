import { Profile, ValidateProfileError } from '../../types/profile';

export const validateProfileData = (data?: Profile) => {
  if (!data) {
    return [ValidateProfileError.NO_DATA];
  }
  const { first, lastname, age, country } = data;
  const errors: ValidateProfileError[] = [];
  if (!first || !lastname) {
    errors.push(ValidateProfileError.INCORRECT_USER_DATA);
  }
  if (!age || !Number.isInteger(age)) {
    errors.push(ValidateProfileError.INCORRECT_AGE);
  }
  if (!country) {
    errors.push(ValidateProfileError.INCORRECT_COUNTRY);
  }

  return errors;
};
