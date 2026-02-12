import arcade from '../../images/icon-arcade.svg';
import advanced from '../../images/icon-advanced.svg';
import pro from '../../images/icon-pro.svg';
import { cn } from '../../lib/utils';

export default function StepPlan({ data, onChange, errors, headingRef }) {
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

	const billingLabel = data.billing === 'monthly' ? 'month' : 'year';

	return (
		<div className='px-4 pt-7 pb-5 lg:px-28 lg:pt-10'>
			<div className='bg-neutral-white rounded-lg px-6 py-7 lg:p-0 shadow-lg lg:shadow-none lg:max-w-max relative -translate-y-25 max-w-sm mx-auto lg:translate-y-0'>
				<h2
					ref={headingRef}
					tabIndex={-1}
					className='text-2xl lg:text-3xl font-bold text-primary-blue-950 outline-none'
				>
					Select your plan
				</h2>
				<p className='text-neutral-grey-500 mt-2 mb-6 lg:mb-9'>
					You have the option of monthly or yearly billing.
				</p>
				<fieldset className='flex flex-col gap-4 mb-6'>
					<legend className='sr-only'>Choose a plan</legend>

					{errors?.plan && (
						<p
							className='text-primary-red-500 text-xs font-bold'
							role='alert'
						>
							{errors.plan}
						</p>
					)}

					<div className='flex flex-col lg:flex-row gap-4'>
						{plans.map((plan) => (
							<div key={plan.name} className='w-full'>
								<input
									type='radio'
									name='plan'
									id={plan.name}
									className='peer sr-only'
									checked={data.plan?.name === plan.name}
									onChange={() => onChange('plan', plan)}
									aria-label={`${plan.name}, $${plan.price[data.billing]} per ${billingLabel}`}
								/>
								<label
									htmlFor={plan.name}
									className={cn(
										'flex lg:flex-col lg:items-start lg:py-3 lg:px-3 lg:gap-10 gap-4 border border-neutral-grey-500 rounded-lg cursor-pointer hover:border-primary-blue-950 peer-checked:border-primary-blue-950 peer-checked:bg-neutral-blue-100',
										data.billing === 'yearly'
											? 'items-start px-3 pt-3 pb-4.5'
											: 'items-center p-3',
									)}
								>
									<img
										src={plan.icon}
										alt=''
										aria-hidden='true'
									/>
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
												2 months free
											</p>
										)}
									</div>
								</label>
							</div>
						))}
					</div>
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

					<button
						type='button'
						role='switch'
						aria-checked={data.billing === 'yearly'}
						aria-label='Billing period'
						onClick={() =>
							onChange(
								'billing',
								data.billing === 'yearly'
									? 'monthly'
									: 'yearly',
							)
						}
						className='relative inline-flex items-center cursor-pointer w-9 h-5 bg-primary-blue-950 rounded-full'
					>
						<span
							className={cn(
								'absolute top-1 left-1 w-3 h-3 bg-neutral-blue-100 rounded-full transition-all',
								data.billing === 'yearly' && 'translate-x-4',
							)}
						/>
					</button>

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
