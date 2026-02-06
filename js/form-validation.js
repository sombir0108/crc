/**
 * CRC Chambers of Law - Form Validation
 * Handles contact form validation and submission
 */

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        initFormValidation();
    }
});

/**
 * Initialize Form Validation
 */
function initFormValidation() {
    const form = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');
    const consentCheckbox = document.getElementById('consent');
    const privacyCheckbox = document.getElementById('privacy');

    // Real-time validation on blur
    if (nameInput) {
        nameInput.addEventListener('blur', function() {
            validateName();
        });
    }

    if (emailInput) {
        emailInput.addEventListener('blur', function() {
            validateEmail();
        });
    }

    if (phoneInput) {
        phoneInput.addEventListener('blur', function() {
            validatePhone();
        });
    }

    if (subjectInput) {
        subjectInput.addEventListener('blur', function() {
            validateSubject();
        });
    }

    if (messageInput) {
        messageInput.addEventListener('blur', function() {
            validateMessage();
        });
    }

    // Form submission handler
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmit();
        });
    }

    // Reset form handler
    form.addEventListener('reset', function() {
        clearAllErrors();
        hideMessages();
    });
}

/**
 * Validate Name Field
 */
function validateName() {
    const nameInput = document.getElementById('name');
    const errorElement = document.getElementById('name-error');
    const name = nameInput.value.trim();

    if (name === '') {
        showError(errorElement, 'Name is required');
        return false;
    }

    if (name.length < 2) {
        showError(errorElement, 'Name must be at least 2 characters');
        return false;
    }

    if (!/^[a-zA-Z\s]+$/.test(name)) {
        showError(errorElement, 'Name should only contain letters');
        return false;
    }

    clearError(errorElement);
    return true;
}

/**
 * Validate Email Field
 */
function validateEmail() {
    const emailInput = document.getElementById('email');
    const errorElement = document.getElementById('email-error');
    const email = emailInput.value.trim();

    if (email === '') {
        showError(errorElement, 'Email is required');
        return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showError(errorElement, 'Please enter a valid email address');
        return false;
    }

    clearError(errorElement);
    return true;
}

/**
 * Validate Phone Field (Optional)
 */
function validatePhone() {
    const phoneInput = document.getElementById('phone');
    const errorElement = document.getElementById('phone-error');
    const phone = phoneInput.value.trim();

    // Phone is optional, so empty is valid
    if (phone === '') {
        clearError(errorElement);
        return true;
    }

    // If provided, validate format
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    if (!phoneRegex.test(phone)) {
        showError(errorElement, 'Please enter a valid phone number');
        return false;
    }

    if (phone.replace(/\D/g, '').length < 10) {
        showError(errorElement, 'Phone number must be at least 10 digits');
        return false;
    }

    clearError(errorElement);
    return true;
}

/**
 * Validate Subject Field
 */
function validateSubject() {
    const subjectInput = document.getElementById('subject');
    const errorElement = document.getElementById('subject-error');
    const subject = subjectInput.value.trim();

    if (subject === '') {
        showError(errorElement, 'Subject is required');
        return false;
    }

    if (subject.length < 3) {
        showError(errorElement, 'Subject must be at least 3 characters');
        return false;
    }

    clearError(errorElement);
    return true;
}

/**
 * Validate Message Field
 */
function validateMessage() {
    const messageInput = document.getElementById('message');
    const errorElement = document.getElementById('message-error');
    const message = messageInput.value.trim();

    if (message === '') {
        showError(errorElement, 'Message is required');
        return false;
    }

    if (message.length < 10) {
        showError(errorElement, 'Message must be at least 10 characters');
        return false;
    }

    clearError(errorElement);
    return true;
}

/**
 * Validate Consent Checkbox
 */
function validateConsent() {
    const consentCheckbox = document.getElementById('consent');
    const errorElement = document.getElementById('consent-error');

    if (!consentCheckbox.checked) {
        showError(errorElement, 'You must acknowledge the disclaimer');
        return false;
    }

    clearError(errorElement);
    return true;
}

/**
 * Validate Privacy Checkbox
 */
function validatePrivacy() {
    const privacyCheckbox = document.getElementById('privacy');
    const errorElement = document.getElementById('privacy-error');

    if (!privacyCheckbox.checked) {
        showError(errorElement, 'You must agree to the privacy policy');
        return false;
    }

    clearError(errorElement);
    return true;
}

/**
 * Show Error Message
 */
function showError(element, message) {
    if (element) {
        element.textContent = message;
        element.style.display = 'block';
        element.previousElementSibling.style.borderColor = '#dc3545';
    }
}

/**
 * Clear Error Message
 */
function clearError(element) {
    if (element) {
        element.textContent = '';
        element.style.display = 'none';
        if (element.previousElementSibling) {
            element.previousElementSibling.style.borderColor = '#e0e0e0';
        }
    }
}

/**
 * Clear All Errors
 */
function clearAllErrors() {
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(element => {
        clearError(element);
    });

    const inputs = document.querySelectorAll('.form-group input, .form-group select, .form-group textarea');
    inputs.forEach(input => {
        input.style.borderColor = '#e0e0e0';
    });
}

/**
 * Hide Success/Error Messages
 */
function hideMessages() {
    const successMessage = document.getElementById('form-success');
    const errorMessage = document.getElementById('form-error');

    if (successMessage) successMessage.style.display = 'none';
    if (errorMessage) errorMessage.style.display = 'none';
}

/**
 * Show Success Message
 */
function showSuccessMessage() {
    const successMessage = document.getElementById('form-success');
    const errorMessage = document.getElementById('form-error');

    if (successMessage) {
        successMessage.style.display = 'block';
        window.scrollTo({
            top: successMessage.offsetTop - 100,
            behavior: 'smooth'
        });
    }

    if (errorMessage) {
        errorMessage.style.display = 'none';
    }
}

/**
 * Show Error Message
 */
function showErrorMessage() {
    const successMessage = document.getElementById('form-success');
    const errorMessage = document.getElementById('form-error');

    if (errorMessage) {
        errorMessage.style.display = 'block';
        window.scrollTo({
            top: errorMessage.offsetTop - 100,
            behavior: 'smooth'
        });
    }

    if (successMessage) {
        successMessage.style.display = 'none';
    }
}

/**
 * Handle Form Submission
 */
function handleFormSubmit() {
    hideMessages();
    clearAllErrors();

    // Validate all fields
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPhoneValid = validatePhone();
    const isSubjectValid = validateSubject();
    const isMessageValid = validateMessage();
    const isConsentValid = validateConsent();
    const isPrivacyValid = validatePrivacy();

    // Check if all validations passed
    if (isNameValid && isEmailValid && isPhoneValid && isSubjectValid &&
        isMessageValid && isConsentValid && isPrivacyValid) {

        // Collect form data
        const formData = {
            name: document.getElementById('name').value.trim(),
            email: document.getElementById('email').value.trim(),
            phone: document.getElementById('phone').value.trim(),
            subject: document.getElementById('subject').value.trim(),
            practiceArea: document.getElementById('practice-area').value,
            message: document.getElementById('message').value.trim(),
            timestamp: new Date().toISOString()
        };

        // In a real application, you would send this data to a server
        // For now, we'll simulate a successful submission
        submitForm(formData);
    } else {
        // Scroll to first error
        const firstError = document.querySelector('.error-message[style*="display: block"]');
        if (firstError) {
            window.scrollTo({
                top: firstError.offsetTop - 150,
                behavior: 'smooth'
            });
        }
    }
}

/**
 * Submit Form Data
 * In production, replace this with actual API call
 */
function submitForm(formData) {
    // Show loading state
    const submitButton = document.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;

    // Simulate API call with setTimeout
    setTimeout(function() {
        // Log form data (in production, this would be sent to server)
        console.log('Form Data:', formData);

        // Simulate successful submission
        const success = true; // In production, this would come from server response

        if (success) {
            showSuccessMessage();
            document.getElementById('contact-form').reset();

            // Send confirmation to console
            console.log('Form submitted successfully!');

            // Optional: Send data via email service or API
            // Example: fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })
        } else {
            showErrorMessage();
        }

        // Reset button state
        submitButton.textContent = originalButtonText;
        submitButton.disabled = false;
    }, 1500);
}

/**
 * Character Counter for Message Field
 */
const messageInput = document.getElementById('message');
if (messageInput) {
    messageInput.addEventListener('input', function() {
        const charCount = this.value.length;
        const minChars = 10;

        if (charCount < minChars && charCount > 0) {
            const remaining = minChars - charCount;
            const errorElement = document.getElementById('message-error');
            showError(errorElement, `${remaining} more characters required`);
        } else if (charCount >= minChars) {
            const errorElement = document.getElementById('message-error');
            clearError(errorElement);
        }
    });
}

/**
 * Format Phone Number as User Types
 */
const phoneInput = document.getElementById('phone');
if (phoneInput) {
    phoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');

        // Format as: +91 XXXXX XXXXX
        if (value.length > 0) {
            if (value.length <= 2) {
                value = '+' + value;
            } else if (value.length <= 7) {
                value = '+' + value.slice(0, 2) + ' ' + value.slice(2);
            } else {
                value = '+' + value.slice(0, 2) + ' ' + value.slice(2, 7) + ' ' + value.slice(7, 12);
            }
        }

        e.target.value = value;
    });
}

/**
 * Prevent Form Submission on Enter Key (except in textarea)
 */
const formInputs = document.querySelectorAll('#contact-form input:not([type="checkbox"])');
formInputs.forEach(input => {
    input.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
        }
    });
});

/**
 * Auto-save Form Data to LocalStorage (Optional Feature)
 */
function autoSaveForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const inputs = form.querySelectorAll('input, select, textarea');

    inputs.forEach(input => {
        // Load saved value
        const savedValue = localStorage.getItem('form_' + input.id);
        if (savedValue && input.type !== 'checkbox') {
            input.value = savedValue;
        }

        // Save on input
        input.addEventListener('input', function() {
            if (input.type !== 'checkbox') {
                localStorage.setItem('form_' + input.id, input.value);
            }
        });
    });

    // Clear saved data on successful submission
    form.addEventListener('submit', function() {
        inputs.forEach(input => {
            localStorage.removeItem('form_' + input.id);
        });
    });
}

// Uncomment to enable auto-save feature
// autoSaveForm();

console.log('Form validation initialized');
