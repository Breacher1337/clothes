/**
 * Formats a date into a human-readable string.
 * @param {Date|string|number} date - The date to format.
 * @param {string} [locale='en-US'] - The locale for formatting.
 * @param {Object} [options] - Intl.DateTimeFormat options.
 * @returns {string} The formatted date.
 */
const formatDate = (date, locale = 'en-US', options) => {
	const dt = new Date(date);
	// Default options: e.g., "January 1, 2025"
	const defaultOptions = { year: 'numeric', month: 'long', day: 'numeric' };
	return dt.toLocaleDateString(locale, options || defaultOptions);
  };
  
  export default formatDate;
  