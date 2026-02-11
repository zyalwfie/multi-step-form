import { cn } from '../../lib/utils';

export default function Navigation({ currentStep, onNext, onBack }) {
	return (
		<div
			className={cn(
				'flex items-center bg-neutral-white p-4',
				currentStep > 1 ? 'justify-between' : 'justify-end',
			)}
		>
			{currentStep > 1 && (
				<button
					className='text-sm text-neutral-grey-500 cursor-pointer'
					onClick={onBack}
				>
					Go Back
				</button>
			)}
			<button
				className={cn(
					'px-4 py-2.5 rounded text-sm',
					currentStep === 4
						? 'bg-primary-purple-600 text-neutral-purple-200'
						: 'bg-primary-blue-950 text-neutral-blue-100',
				)}
				onClick={onNext}
			>
				{currentStep === 4 ? 'Confirm' : 'Next Step'}
			</button>
		</div>
	);
}
