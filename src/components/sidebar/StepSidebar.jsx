import bgSidebarMobile from '../../images/bg-sidebar-mobile.svg';
import bgSidebarDesktop from '../../images/bg-sidebar-desktop.svg';
import { cn } from '../../lib/utils';

const STEP_LABELS = {
	1: 'Your info',
	2: 'Select plan',
	3: 'Add-ons',
	4: 'Summary',
};

export default function StepSidebar({ currentStep, onCurrentStep }) {
	return (
		<aside className='relative'>
			<img
				src={bgSidebarMobile}
				alt=''
				aria-hidden='true'
				className='w-full lg:hidden'
			/>
			<img
				src={bgSidebarDesktop}
				alt=''
				aria-hidden='true'
				className='hidden lg:block'
			/>
			<nav
				aria-label='Form steps'
				className='absolute top-8 left-1/2 -translate-x-1/2 min-w-max flex items-center gap-4 lg:flex lg:flex-col lg:items-start lg:left-6 lg:translate-x-0'
			>
				{[1, 2, 3, 4].map((step) => (
					<div className='lg:flex lg:items-center gap-4' key={step}>
						<button
							className={cn(
								'rounded-full border size-8 text-neutral-white hover:bg-primary-blue-200 hover:text-primary-blue-950 font-medium cursor-pointer hover:border-primary-blue-300',
								currentStep === step
									? 'bg-primary-blue-200 text-primary-blue-950 border-primary-blue-200'
									: 'bg-transparent border-neutral-white',
							)}
							type='button'
							onClick={() => onCurrentStep(step)}
							aria-label={`Step ${step}: ${STEP_LABELS[step]}`}
							aria-current={currentStep === step ? 'step' : undefined}
						>
							{step}
						</button>
						<div className='hidden lg:block'>
							<span className='text-sm text-neutral-grey-500'>STEP {step}</span>
							<p className='uppercase text-neutral-purple-200 font-bold tracking-wider text-sm leading-6'>{STEP_LABELS[step]}</p>
						</div>
					</div>
				))}
			</nav>
		</aside>
	);
}
