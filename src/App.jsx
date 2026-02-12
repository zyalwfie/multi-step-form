import { useState, useRef, useEffect } from 'react';
import StepSidebar from './components/sidebar/StepSidebar';
import Navigation from './components/navigation/Navigation';
import StepAddOns from './components/steps/StepAddOns';
import StepPersonalInfo from './components/steps/StepPersonalInfo';
import StepPlan from './components/steps/StepPlan';
import StepSummary from './components/steps/StepSummary';
import SubsSuccess from './components/steps/SubsSuccess';
import { validateStep } from './lib/validation';

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
		<section className='min-h-svh flex items-center justify-center bg-neutral-blue-100'>
			<div className='bg-neutral-white grid grid-cols-1 lg:grid-cols-[auto_auto] shadow-lg lg:p-4 lg:rounded-xl'>
				<StepSidebar
					currentStep={currentStep}
					onCurrentStep={onCurrentStep}
				/>
				{isSubmitted ? (
					<SubsSuccess headingRef={headingRef} />
				) : (
					<form onSubmit={handleSubmit} noValidate className='lg:flex lg:flex-col lg:justify-between'>
						{renderStep()}
						<Navigation currentStep={currentStep} onBack={prevStep} />
					</form>
				)}
			</div>
		</section>
	);
}
