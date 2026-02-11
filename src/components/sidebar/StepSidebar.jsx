import bgSidebarMobile from '../../images/bg-sidebar-mobile.svg';
import { cn } from '../../lib/utils';

export default function StepSidebar({ currentStep, onCurrentStep }) {
	return (
		<aside className='relative bg-red-500'>
			<img src={bgSidebarMobile} alt='' aria-hidden className='w-full' />
			<div className='absolute top-8 left-1/2 -translate-x-1/2 min-w-max flex items-center gap-4'>
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
					>
						{step}
					</button>
				))}
			</div>
		</aside>
	);
}
