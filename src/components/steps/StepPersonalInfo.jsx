export default function StepPersonalInfo({ data, onChange, errors, headingRef }) {
	return (
		<div className='px-4 pt-7 pb-5'>
			<div className='bg-neutral-white rounded-lg px-6 py-7 shadow-lg relative -translate-y-25 max-w-sm mx-auto'>
				<h2
					ref={headingRef}
					tabIndex={-1}
					className='text-2xl font-bold text-primary-blue-950 outline-none'
				>
					Personal info
				</h2>
				<p className='text-neutral-grey-500 mt-2 mb-6'>
					Please provide your name, email address, and phone number.
				</p>
				<fieldset className='flex flex-col gap-4'>
					<legend className='sr-only'>Personal information</legend>
					<div className='flex flex-col'>
						<div className='flex items-center justify-between'>
							<label
								htmlFor='name'
								className='text-xs text-primary-blue-950'
							>
								Name
							</label>
							{errors?.name && (
								<span
									id='name-error'
									role='alert'
									className='text-primary-red-500 text-xs font-bold'
								>
									{errors.name}
								</span>
							)}
						</div>
						<input
							value={data.name}
							onChange={(e) => onChange('name', e.target.value)}
							type='text'
							id='name'
							name='name'
							placeholder='e.g. Stephen King'
							required
							aria-required='true'
							aria-invalid={!!errors?.name}
							aria-describedby={errors?.name ? 'name-error' : undefined}
							className='px-4 py-2 rounded border border-neutral-grey-500 placeholder:text-sm placeholder:tracking-wide'
						/>
					</div>
					<div className='flex flex-col'>
						<div className='flex items-center justify-between'>
							<label
								htmlFor='email-address'
								className='text-xs text-primary-blue-950'
							>
								Email Address
							</label>
							{errors?.email && (
								<span
									id='email-error'
									role='alert'
									className='text-primary-red-500 text-xs font-bold'
								>
									{errors.email}
								</span>
							)}
						</div>
						<input
							value={data.email}
							onChange={(e) => onChange('email', e.target.value)}
							type='email'
							id='email-address'
							name='email'
							placeholder='e.g. stephenking@lorem.com'
							required
							aria-required='true'
							aria-invalid={!!errors?.email}
							aria-describedby={errors?.email ? 'email-error' : undefined}
							className='px-4 py-2 rounded border border-neutral-grey-500 placeholder:text-sm placeholder:tracking-wide'
						/>
					</div>
					<div className='flex flex-col'>
						<div className='flex items-center justify-between'>
							<label
								htmlFor='phone-number'
								className='text-xs text-primary-blue-950'
							>
								Phone Number
							</label>
							{errors?.phone && (
								<span
									id='phone-error'
									role='alert'
									className='text-primary-red-500 text-xs font-bold'
								>
									{errors.phone}
								</span>
							)}
						</div>
						<input
							value={data.phone}
							onChange={(e) => onChange('phone', e.target.value)}
							type='tel'
							id='phone-number'
							name='phone'
							placeholder='e.g. +1 234 567 890'
							required
							aria-required='true'
							aria-invalid={!!errors?.phone}
							aria-describedby={errors?.phone ? 'phone-error' : undefined}
							className='px-4 py-2 rounded border border-neutral-grey-500 placeholder:text-sm placeholder:tracking-wide'
						/>
					</div>
				</fieldset>
			</div>
		</div>
	);
}
