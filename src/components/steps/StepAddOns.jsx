export default function StepAddOns({ data, onChange }) {
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
					<div className='flex flex-col'>
						<label
							htmlFor='name'
							className='text-xs text-primary-blue-950'
						>
							Name
						</label>
						<input
							value={data.name}
							onChange={(e) => onChange('name', e.target.value)}
							type='text'
							id='name'
							name='name'
							placeholder='e.g. Stephen King'
							className='px-4 py-2 rounded border border-neutral-grey-500 placeholder:text-sm placeholder:tracking-wide'
						/>
					</div>
					<div className='flex flex-col'>
						<label
							htmlFor='email-address'
							className='text-xs text-primary-blue-950'
						>
							Email Address
						</label>
						<input
							value={data.email}
							onChange={(e) => onChange('email', e.target.value)}
							type='email'
							id='email-address'
							name='email'
							placeholder='e.g. stephenking@lorem.com'
							className='px-4 py-2 rounded border border-neutral-grey-500 placeholder:text-sm placeholder:tracking-wide'
						/>
					</div>
					<div className='flex flex-col'>
						<label
							htmlFor='phone-number'
							className='text-xs text-primary-blue-950'
						>
							Phone Number
						</label>
						<input
							value={data.phone}
							onChange={(e) => onChange('phone', e.target.value)}
							type='number'
							id='phone-number'
							name='phone'
							placeholder='e.g. +1 234 567 890'
							className='px-4 py-2 rounded border border-neutral-grey-500 placeholder:text-sm placeholder:tracking-wide'
						/>
					</div>
				</form>
			</div>
		</div>
	);
}
