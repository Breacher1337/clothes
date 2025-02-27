/**
 * Generates a URL-friendly slug from a given string.
 * @param {string} text - The text to convert.
 * @returns {string} The generated slug.
 */
const generateSlug = (text) => {
	return text
	  .toString()
	  .toLowerCase()
	  .trim()
	  .replace(/\s+/g, '-')      // Replace spaces with hyphens
	  .replace(/[^\w\-]+/g, '')  // Remove all non-word characters
	  .replace(/\-\-+/g, '-');   // Replace multiple hyphens with a single hyphen
  };
  
  export default generateSlug;
  