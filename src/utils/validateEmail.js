/**
 * Validates an email address.
 * @param {string} email - The email to validate.
 * @returns {boolean} True if valid, false otherwise.
 */
const validateEmail = (email) => {
	const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return re.test(email);
  };
  
  export default validateEmail;
  