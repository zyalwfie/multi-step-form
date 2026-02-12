import { useState, useRef, useEffect } from 'react';
import StepSidebar from './components/sidebar/StepSidebar';
import Navigation from './components/navigation/Navigation';
import StepAddOns from './components/steps/StepAddOns';
import StepPersonalInfo from './components/steps/StepPersonalInfo';
import StepPlan from './components/steps/StepPlan';
import StepSummary from './components/steps/StepSummary';
import SubsSuccess from './components/steps/SubsSuccess';
import { validateStep } from './lib/validation';

const STEP_TITLES = {
	1: 'Your info',
	2: 'Select plan',
	3: 'Add-ons',
	4: 'Summary',
};

export default function App() {
	const [currentStep, setCurrentStep] = useState(1);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [errors, setErrors] = useState({});
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		plan: null,
		billing: 'monthly',
		addons: [],
	});

	const headingRef = useRef(null);

	useEffect(() => {
		if (headingRef.current) {
			headingRef.current.focus();
		}
	}, [currentStep, isSubmitted]);

	const handleChange = (field, value) => {
		setFormData((prev) => ({ ...prev, [field]: value }));
		setErrors((prev) => {
			const next = { ...prev };
			delete next[field];
			return next;
		});
	};

	const onCurrentStep = (step) => {
		if (step > currentStep) {
			const { isValid, errors: validationErrors } = validateStep(
				currentStep,
				formData,
			);
			if (!isValid) {
				setErrors(validationErrors);
				return;
			}
			setErrors({});
		}
		setCurrentStep(step);
	};

	const nextStep = () => {
		const { isValid, errors: validationErrors } = validateStep(
			currentStep,
			formData,
		);
		if (!isValid) {
			setErrors(validationErrors);
			return;
		}
		setErrors({});

		if (currentStep < 4) {
			setCurrentStep((prev) => prev + 1);
		} else {
			setIsSubmitted(true);
		}
	};

	const prevStep = () => {
		if (currentStep > 1) {
			setCurrentStep((prev) => prev - 1);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		nextStep();
	};

	function renderStep() {
		switch (currentStep) {
			case 1:
				return (
					<StepPersonalInfo
						data={formData}
						onChange={handleChange}
						errors={errors}
						headingRef={headingRef}
					/>
				);

			case 2:
				return (
					<StepPlan
						data={formData}
						onChange={handleChange}
						errors={errors}
						headingRef={headingRef}
					/>
				);

			case 3:
				return (
					<StepAddOns
						data={formData}
						onChange={handleChange}
						headingRef={headingRef}
					/>
				);

			case 4:
				return (
					<StepSummary
						data={formData}
						onCurrentStep={onCurrentStep}
						headingRef={headingRef}
					/>
				);

			default:
				return null;
		}
	}

	return (
		<div className='bg-neutral-blue-100 grid grid-cols-1 min-h-svh'>
			<h1 className='sr-only'>Subscription Setup</h1>

			<div aria-live='polite' aria-atomic='true' className='sr-only'>
				{!isSubmitted
					? `Step ${currentStep} of 4: ${STEP_TITLES[currentStep]}`
					: 'Subscription confirmed successfully'}
			</div>

			{Object.keys(errors).length > 0 && (
				<div aria-live='assertive' aria-atomic='true' className='sr-only'>
					{`Errors: ${Object.values(errors).join('. ')}`}
				</div>
			)}

			<StepSidebar
				currentStep={currentStep}
				onCurrentStep={onCurrentStep}
			/>

			{isSubmitted ? (
				<SubsSuccess headingRef={headingRef} />
			) : (
				<form onSubmit={handleSubmit} noValidate>
					{renderStep()}
					<Navigation
						currentStep={currentStep}
						onBack={prevStep}
					/>
				</form>
			)}
		</div>
	);
}
