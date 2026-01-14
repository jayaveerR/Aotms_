
// Validation and Input Restriction Utilities

// Regex patterns for validation (strict)
const PATTERNS = {
    // Name: letters and spaces only. No numbers or symbols.
    NAME_VALIDATION: /^[a-zA-Z\s]+$/,
    // Phone: Strictly 10 digits
    PHONE_VALIDATION: /^\d{10}$/,
    // Email: Standard email validation
    EMAIL_VALIDATION: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
};

export const sanitizeInput = {
    // Allow only letters and spaces
    // Usage: onChange={(e) => setName(sanitizeInput.name(e.target.value))}
    name: (value: string) => {
        // If empty, return empty
        if (!value) return value;
        // Allow valid characters only (Letters and Spaces)
        return value.replace(/[^a-zA-Z\s]/g, '');
    },

    // Allow ONLY digits, max 10
    phone: (value: string) => {
        if (!value) return value;
        // Remove ALL non-digit characters
        const digitsOnly = value.replace(/[^0-9]/g, '');
        // Limit to 10 digits
        return digitsOnly.slice(0, 10);
    },

    // Prevent spaces and strict special chars in email input
    email: (value: string) => {
        if (!value) return value;
        // Remove spaces and characters that are definitely not in an email
        // We allow typically valid email chars, but block things like quotes, slashes, brackets, etc. unless standard
        // Simplest is to block spaces and common malicious chars
        return value.replace(/[^a-zA-Z0-9._%+-@]/g, '');
    },

    // General text - just block <> tags to discourage XSS entry attempts
    // Useful for messages, textareas
    text: (value: string) => {
        if (!value) return value;
        // simple XSS prevention: remove < and >
        return value.replace(/[<>]/g, '');
    }
};

export const validate = {
    isEmail: (email: string) => PATTERNS.EMAIL_VALIDATION.test(email),
    isPhone: (phone: string) => PATTERNS.PHONE_VALIDATION.test(phone),
    isName: (name: string) => PATTERNS.NAME_VALIDATION.test(name),
    isNotEmpty: (str: string) => str && str.trim().length > 0,

    // Password validation: At least 8 chars, 1 uppercase, 1 lowercase, 1 number, 1 special
    isStrongPassword: (password: string) => {
        const requirements = {
            length: password.length >= 8,
            uppercase: /[A-Z]/.test(password),
            lowercase: /[a-z]/.test(password),
            number: /\d/.test(password),
            special: /[@$!%*?&]/.test(password)
        };
        return Object.values(requirements).every(Boolean);
    }
};
