import bgSidebarMobile from '../../images/bg-sidebar-mobile.svg';
import { cn } from '../../lib/utils';

const STEP_LABELS = {
	1: 'Your info',
	2: 'Select plan',
	3: 'Add-ons',
	4: 'Summary',
};

export default function StepSidebar({ currentStep, onCurrentStep }) {
	return (
		<aside className='relative bg-red-500'>
			<img src={bgSidebarMobile} alt='' aria-hidden='true' className='w-full' />
			<nav aria-label='Form steps' className='absolute top-8 left-1/2 -translate-x-1/2 min-w-max flex items-center gap-4'>
				{[1, 2, 3, 4].map((step) => (
					<button
						className={cn(
							'rounded-full border size-8 text-neutral-white hover:bg-primary-blue-200 hover:text-primary-blue-950 font-medium cursor-pointer hover:border-primary-blue-300',
							currentStep === step
								? 'bg-primary-blue-200 text-primary-blue-950 border-primary-blue-200'
								: 'bg-transparent border-neutral-white',
						)}
						type='button'
						key={step}
						onClick={() => onCurrentStep(step)}
						aria-label={`Step ${step}: ${STEP_LABELS[step]}`}
						aria-current={currentStep === step ? 'step' : undefined}
					>
						{step}
					</button>
				))}
			</nav>
		</aside>
	);
}
