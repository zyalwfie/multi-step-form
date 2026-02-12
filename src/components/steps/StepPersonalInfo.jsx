import { cn } from "../../lib/utils";

export default function StepPersonalInfo({
	data,
	onChange,
	errors,
	headingRef,
}) {
	return (
		<div className='px-4 pt-7 pb-5 lg:px-20'>
			<div className='bg-neutral-white rounded-lg px-6 py-7 lg:px-8 lg:pt-3 shadow-lg lg:shadow-none lg:max-w-max relative -translate-y-25 max-w-sm mx-auto lg:translate-y-0'>
				<h2
					ref={headingRef}
					tabIndex={-1}
					className='text-2xl lg:text-3xl font-bold text-primary-blue-950 outline-none'
				>
					Personal info
				</h2>
				<p className='text-neutral-grey-500 mt-2 mb-6 lg:mb-9'>
					Please provide your name, email address, and phone number.
				</p>
				<fieldset className='flex flex-col gap-4 lg:gap-8'>
					<legend className='sr-only'>Personal information</legend>
					<div className='flex flex-col lg:gap-1'>
						<div className='flex items-center justify-between'>
							<label
								htmlFor='name'
								className='text-xs lg:text-sm text-primary-blue-950'
							>
								Name
							</label>
							{errors?.name && (
								<span
									id='name-error'
									role='alert'
									className='text-primary-red-500 text-xs font-medium'
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
							aria-describedby={
								errors?.name ? 'name-error' : undefined
							}
							className={cn(
								'px-4 py-2 lg:py-3 lg:rounded-lg transition hover:border-primary-purple-600 rounded border placeholder:text-sm lg:placeholder:text-base placeholder:tracking-wide',
								errors?.phone ? 'border-primary-red-500' : 'border-neutral-grey-500'
							)}
						/>
					</div>
					<div className='flex flex-col lg:gap-1'>
						<div className='flex items-center justify-between'>
							<label
								htmlFor='email-address'
								className='text-xs lg:text-sm text-primary-blue-950'
							>
								Email Address
							</label>
							{errors?.email && (
								<span
									id='email-error'
									role='alert'
									className='text-primary-red-500 text-xs font-medium'
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
							aria-describedby={
								errors?.email ? 'email-error' : undefined
							}
							className={cn(
								'px-4 py-2 lg:py-3 lg:rounded-lg transition hover:border-primary-purple-600 rounded border placeholder:text-sm lg:placeholder:text-base placeholder:tracking-wide',
								errors?.phone ? 'border-primary-red-500' : 'border-neutral-grey-500'
							)}
						/>
					</div>
					<div className='flex flex-col lg:gap-1'>
						<div className='flex items-center justify-between'>
							<label
								htmlFor='phone-number'
								className='text-xs lg:text-sm text-primary-blue-950'
							>
								Phone Number
							</label>
							{errors?.phone && (
								<span
									id='phone-error'
									role='alert'
									className='text-primary-red-500 text-xs font-medium'
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
							aria-describedby={
								errors?.phone ? 'phone-error' : undefined
							}
							className={cn(
								'px-4 py-2 lg:py-3 lg:rounded-lg transition hover:border-primary-purple-600 rounded border placeholder:text-sm lg:placeholder:text-base placeholder:tracking-wide',
								errors?.phone ? 'border-primary-red-500' : 'border-neutral-grey-500'
							)}
						/>
					</div>
				</fieldset>
			</div>
		</div>
	);
}
