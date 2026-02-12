export function validateStep(step, formData) {
	const errors = {};

	if (step === 1) {
		if (!formData.name.trim()) errors.name = 'This field is required';

		if (!formData.email.trim()) {
			errors.email = 'This field is required';
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			errors.email = 'Please enter a valid email';
		}

		if (!formData.phone.trim()) errors.phone = 'This field is required';
	}

	if (step === 2) {
		if (!formData.plan) errors.plan = 'Please select a plan';
	}

	return { isValid: Object.keys(errors).length === 0, errors };
}
