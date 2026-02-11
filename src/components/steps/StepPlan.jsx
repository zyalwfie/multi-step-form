import arcade from '../../images/icon-arcade.svg';
import advanced from '../../images/icon-advanced.svg';
import pro from '../../images/icon-pro.svg';
import { cn } from '../../lib/utils';

export default function StepPlan({ data, onChange }) {
	const plans = [
		{
			icon: arcade,
			name: 'arcade',
			price: {
				monthly: 9,
				yearly: 90,
			},
		},
		{
			icon: advanced,
			name: 'advanced',
			price: {
				monthly: 12,
				yearly: 120,
			},
		},
		{
			icon: pro,
			name: 'pro',
			price: {
				monthly: 15,
				yearly: 150,
			},
		},
	];

	return (
		<div className='px-4 pt-7 pb-5'>
			<div className='bg-neutral-white rounded-lg px-6 py-7 shadow-lg relative -translate-y-25 max-w-sm mx-auto'>
				<h1 className='text-2xl font-bold text-primary-blue-950'>
					Select your plan
				</h1>
				<p className='text-neutral-grey-500 mt-2 mb-6'>
					You have the option of monthly or yearly billing.
				</p>
				<fieldset className='flex flex-col gap-4 mb-6'>
					<legend className='sr-only'>Choose a plan</legend>

					{plans.map((plan) => (
						<div key={plan.name}>
							<input
								type='radio'
								name='plan'
								id={plan.name}
								className='peer sr-only'
								checked={data.plan?.name === plan.name}
								onChange={() => onChange('plan', plan)}
							/>

							<label
								htmlFor={plan.name}
								className={cn(
									'flex items-center gap-4 border border-neutral-grey-500 rounded-lg cursor-pointer hover:border-primary-blue-950 peer-checked:border-primary-blue-950 peer-checked:bg-neutral-blue-100',
									data.billing === 'yearly'
										? 'items-start px-3 pt-3 pb-4.5'
										: 'items-center p-3',
								)}
							>
								<img src={plan.icon} alt='' aria-hidden />
								<div>
									<p className='capitalize font-medium text-primary-blue-950'>
										{plan.name}
									</p>
									<p className='text-neutral-grey-500 mb-1 text-sm'>
										{data.billing === 'monthly'
											? `$${plan.price.monthly}/mo`
											: `$${plan.price.yearly}/yr`}
									</p>
									{data.billing === 'yearly' && (
										<p className='text-xs text-primary-blue-950'>
											2 month free
										</p>
									)}
								</div>
							</label>
						</div>
					))}
				</fieldset>
				<div className='flex items-center justify-center gap-6 rounded-lg bg-neutral-blue-100 py-4'>
					<span
						className={`text-sm font-medium ${
							data.billing === 'monthly'
								? 'text-primary-blue-950'
								: 'text-neutral-grey-500'
						}`}
					>
						Monthly
					</span>

					<label className='relative inline-flex items-center cursor-pointer'>
						<input
							type='checkbox'
							className='sr-only peer'
							checked={data.billing === 'yearly'}
							onChange={(e) =>
								onChange(
									'billing',
									e.target.checked ? 'yearly' : 'monthly',
								)
							}
						/>
						<div
							className="w-9 h-5 bg-primary-blue-950 rounded-full
                 after:content-['']
                 after:absolute after:top-1 after:left-1
                 after:w-3 after:h-3
                 after:bg-neutral-blue-100
                 after:rounded-full
                 after:transition-all
                 peer-checked:after:translate-x-4"
						/>
						<span className='sr-only'>Toggle yearly billing</span>
					</label>

					<span
						className={`text-sm font-medium ${
							data.billing === 'yearly'
								? 'text-primary-blue-950'
								: 'text-neutral-grey-500'
						}`}
					>
						Yearly
					</span>
				</div>
			</div>
		</div>
	);
}
