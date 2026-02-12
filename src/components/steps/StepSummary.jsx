export default function StepSummary({ data, onCurrentStep, headingRef }) {
	const billingLabel = data.billing === 'monthly' ? 'per month' : 'per year';
	const billingShort = data.billing === 'monthly' ? 'mo' : 'yr';

	const planPrice = data.plan?.price?.[data.billing] ?? 0;

	const addonsTotal = data.addons.reduce(
		(total, addon) => total + addon.price[data.billing],
		0,
	);

	const total = planPrice + addonsTotal;

	return (
		<div className='px-4 pt-7 pb-5'>
			<div className='bg-neutral-white rounded-lg px-6 py-7 shadow-lg relative -translate-y-25 max-w-sm mx-auto'>
				<h2
					ref={headingRef}
					tabIndex={-1}
					className='text-2xl font-bold text-primary-blue-950 outline-none'
				>
					Finishing up
				</h2>
				<p className='text-neutral-grey-500 mt-2 mb-6'>
					Double-check everything looks OK before confirming.
				</p>
				<div className='space-y-6'>
					<div className='bg-neutral-blue-50 rounded-lg p-4'>
						<dl>
							<div className='flex items-center justify-between'>
								<div>
									<dt className='font-medium text-sm text-primary-blue-950 capitalize leading-tight'>
										{data.plan?.name ?? 'No plan selected'} ({data.billing})
									</dt>
									<dd>
										<button
											type='button'
											onClick={() => onCurrentStep(2)}
											className='text-sm underline decoration-2 text-neutral-grey-500 hover:text-primary-purple-600'
										>
											Change
										</button>
									</dd>
								</div>

								<dd className='font-bold text-sm text-primary-blue-950'>
									${planPrice}/{billingShort}
								</dd>
							</div>

							{data.addons.length > 0 && (
								<div className='h-px bg-neutral-purple-200 my-3'></div>
							)}

							{data.addons.map((addon) => (
								<div
									key={addon.slug}
									className='flex items-center justify-between text-sm mt-2'
								>
									<dt className='text-neutral-grey-500'>
										{addon.name}
									</dt>
									<dd className='text-primary-blue-950'>
										+${addon.price[data.billing]}/
										{billingShort}
									</dd>
								</div>
							))}
						</dl>

						{data.addons.length > 0 && (
							<div className='mt-3 pt-2'>
								<button
									type='button'
									onClick={() => onCurrentStep(3)}
									className='text-xs underline decoration-2 text-neutral-grey-500 hover:text-primary-purple-600'
								>
									Change add-ons
								</button>
							</div>
						)}
					</div>

					<div className='flex items-center justify-between px-4'>
						<p className='text-sm text-neutral-grey-500'>
							Total ({billingLabel})
						</p>
						<p className='font-bold text-primary-purple-600'>
							${total}/{billingShort}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
