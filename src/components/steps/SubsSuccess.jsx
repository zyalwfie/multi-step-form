import thanksIcon from '../../images/icon-thank-you.svg';

export default function SubsSuccess({ headingRef }) {
	return (
		<div className='px-4 pt-7 pb-5'>
			<div className='bg-neutral-white rounded-lg px-6 py-19 shadow-lg relative -translate-y-25 max-w-sm mx-auto'>
				<div className='flex flex-col gap-4 items-center text-center'>
					<img src={thanksIcon} alt='' aria-hidden='true' className='size-15' />
					<h2
						ref={headingRef}
						tabIndex={-1}
						className='text-primary-blue-950 font-bold text-2xl outline-none'
					>
						Thank you!
					</h2>
					<p className='text-neutral-grey-500'>
						Thanks for confirming your subscription! We hope you
						have fun using our platform. If you ever need support,
						please feel free to email us at support@loremgaming.com.
					</p>
				</div>
			</div>
		</div>
	);
}
