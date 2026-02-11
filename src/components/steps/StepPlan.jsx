import arcade from '../../images/icon-arcade.svg';
import advanced from '../../images/icon-advanced.svg';
import pro from '../../images/icon-pro.svg';

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
				<form className='flex flex-col gap-4'>
					{plans.map((plan) => (
						<div key={plan.name}>
							<input
								type='radio'
								name='plan'
								id={plan.name}
								className='hidden peer'
								value={plan.name}
								onChange={() => onChange('plan', plan)}
								checked={data.plan?.name === plan.name}
							/>
							<label
								htmlFor={plan.name}
								className='flex items-center gap-4 p-4 border border-neutral-grey-500 rounded-lg peer-checked:border-primary-blue-950 peer-checked:bg-neutral-blue-100 cursor-pointer hover:border-primary-blue-950'
							>
								<img src={plan.icon} alt='' aria-hidden />
								<div className='flex flex-col'>
									<p className='capitalize font-medium text-primary-blue-950'>
										{plan.name}
									</p>
									<p className='text-neutral-grey-500'>{`$${plan.price.monthly}/mo`}</p>
								</div>
							</label>
						</div>
					))}
				</form>
			</div>
		</div>
	);
}
