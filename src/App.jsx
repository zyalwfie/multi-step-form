import { useState } from 'react';
import StepSidebar from './components/sidebar/StepSidebar';
import Navigation from './components/navigation/Navigation';
import StepAddOns from './components/steps/StepAddOns';
import StepPersonalInfo from './components/steps/StepPersonalInfo';
import StepPlan from './components/steps/StepPlan';
import StepSummary from './components/steps/StepSummary';

export default function App() {
	const [currentStep, setCurrentStep] = useState(2);
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		plan: null,
		billing: 'monthly',
		addons: [],
	});

	const onCurrentStep = (step) => {
		setCurrentStep(step);
	};

	const nextStep = () => {
		if (currentStep < 4) {
			setCurrentStep((prev) => prev + 1);
		}
	};

	const prevStep = () => {
		if (currentStep > 1) {
			setCurrentStep((prev) => prev - 1);
		}
	};

	function renderStep() {
		switch (currentStep) {
			case 1:
				return (
					<StepPersonalInfo
						data={formData}
						onChange={(field, value) =>
							setFormData((prev) => ({
								...prev,
								[field]: value,
							}))
						}
					/>
				);

			case 2:
				return (
					<StepPlan
						data={formData}
						onChange={(field, value) =>
							setFormData((prev) => ({
								...prev,
								[field]: value,
							}))
						}
					/>
				);

			case 3:
				return <StepAddOns />;

			case 4:
				return <StepSummary />;

			default:
				return null;
		}
	}

	return (
		<section className='bg-neutral-blue-100 grid grid-cols-1'>
			<StepSidebar
				currentStep={currentStep}
				onCurrentStep={onCurrentStep}
			/>
			{renderStep()}
			<Navigation
				currentStep={currentStep}
				onBack={prevStep}
				onNext={nextStep}
			/>
		</section>
	);
}
