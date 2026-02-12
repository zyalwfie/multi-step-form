import { Check } from 'lucide-react';
import { cn } from '../../lib/utils';

export default function StepAddOns({ data, onChange, headingRef }) {
	const addOns = [
		{
			slug: 'online-service',
			name: 'Online service',
			shortDesc: 'Access to multiplayer games',
			price: {
				monthly: 1,
				yearly: 10,
			},
		},
		{
			slug: 'large-storage',
			name: 'Large storage',
			shortDesc: 'Extra 1TB of cloud save',
			price: {
				monthly: 2,
				yearly: 20,
			},
		},
		{
			slug: 'customizable-profile',
			name: 'Customizable profile',
			shortDesc: 'Custom theme on your profile',
			price: {
				monthly: 2,
				yearly: 20,
			},
		},
	];

	function toggleAddon(addon) {
		const exists = data.addons.some((item) => item.slug === addon.slug);

		if (exists) {
			onChange(
				'addons',
				data.addons.filter((item) => item.slug !== addon.slug),
			);
		} else {
			onChange('addons', [...data.addons, addon]);
		}
	}

	return (
		<div className='px-4 pt-7 pb-5'>
			<div className='bg-neutral-white rounded-lg px-6 pt-7 pb-2 shadow-lg relative -translate-y-25 max-w-sm mx-auto'>
				<h2
					ref={headingRef}
					tabIndex={-1}
					className='text-2xl font-bold text-primary-blue-950 outline-none'
				>
					Pick add-ons
				</h2>
				<p className='text-neutral-grey-500 mt-2 mb-6'>
					Add-ons help enhance your gaming experience.
				</p>
				<fieldset className='flex flex-col gap-4 mb-6'>
					<legend className='sr-only'>Choose add-ons</legend>
					{addOns.map((addon) => {
						const isChecked = data.addons.some(
							(item) => item.slug === addon.slug,
						);

						return (
							<div key={addon.slug}>
								<input
									type='checkbox'
									id={addon.slug}
									className='peer sr-only'
									checked={isChecked}
									onChange={() => toggleAddon(addon)}
								/>

								<label
									htmlFor={addon.slug}
									className={cn(
										'flex items-center gap-4 px-4 py-3 border rounded-lg hover:border-primary-purple-600',
										isChecked
											? 'border-primary-purple-600 bg-neutral-blue-100'
											: 'border-neutral-grey-500',
									)}
								>
									<div
										className={cn(
											'size-5 rounded border border-neutral-grey-500 flex items-center justify-center',
											isChecked
												? 'bg-primary-purple-600 border-primary-purple-600'
												: '',
										)}
										aria-hidden='true'
									>
										<Check
											className='size-3 text-neutral-white'
											strokeWidth={3}
										/>
									</div>
									<div>
										<h3 className='text-primary-blue-950 leading-tight text-sm font-medium'>
											{addon.name}
										</h3>
										<p className='text-xs text-neutral-grey-500'>
											{addon.shortDesc}
										</p>
									</div>
									<span className='ml-auto text-primary-purple-600 text-xs'>
										{data.billing === 'monthly'
											? `+$${addon.price.monthly}/mo`
											: `+$${addon.price.yearly}/yr`}
									</span>
								</label>
							</div>
						);
					})}
				</fieldset>
			</div>
		</div>
	);
}
