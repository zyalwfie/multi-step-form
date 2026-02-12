import { cn } from '../../lib/utils';

export default function Navigation({ currentStep, onBack }) {
	return (
		<nav
			aria-label='Form navigation'
			className={cn(
				'flex items-center bg-neutral-white p-4 lg:px-20',
				currentStep > 1 ? 'justify-between' : 'justify-end',
			)}
		>
			{currentStep > 1 && (
				<button
					type='button'
					className='text-sm text-neutral-grey-500 cursor-pointer hover:text-primary-blue-950 transition'
					onClick={onBack}
				>
					Go Back
				</button>
			)}
			<button
				type='submit'
				className={cn(
					'px-4 py-2.5 rounded text-sm font-medium lg:text-base lg:px-6 lg:py-3 lg:rounded-lg transition cursor-pointer',
					currentStep === 4
						? 'bg-primary-purple-600 text-neutral-purple-200'
						: 'bg-primary-blue-950 text-neutral-blue-100 hover:bg-primary-blue-300 hover:text-primary-blue-950',
				)}
			>
				{currentStep === 4 ? 'Confirm' : 'Next Step'}
			</button>
		</nav>
	);
}
