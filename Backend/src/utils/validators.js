/**
 * Validates an email address format.
 * @param {string} email
 * @returns {boolean}
 */
export const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
};

/**
 * Validates a password (minimum 8 characters, at least one letter and one number).
 * @param {string} password
 * @returns {boolean}
 */
export const validatePassword = (password) => {
    const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return re.test(password);
};

/**
 * Checks if a string is empty or not provided
 * @param {string} str
 * @returns {boolean}
 */
export const isEmpty = (str) => {
    return !str || str.trim().length === 0;
};
