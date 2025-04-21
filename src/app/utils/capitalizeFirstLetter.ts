/**
 * Capitalizes the first letter of a given string and converts the rest of the string to lowercase.
 *
 * @param str - The input string to be transformed.
 * @returns A new string with the first letter capitalized and the rest in lowercase.
 */
const capitalizeFirstLetter = (str: string) => {
    return str?.charAt(0).toUpperCase() + str?.slice(1).toLowerCase();
};

export default capitalizeFirstLetter;