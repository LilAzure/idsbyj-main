import React from 'react';
import { useLocation } from 'react-router-dom';

const Location = () => {
	const location = useLocation();
	const styleOptions = location.pathname === '/' ? '' : 'hidden';

	return (
		<React.Fragment>
			<section className={`${styleOptions} bg-primary md:mt-4 md-custom-container`}>
				<span id='contact' className='block relative -top-20' />
				<div className='py-12 flex flex-col items-center space-y-12 md:space-y-0 md:flex-row md:justify-evenly md:items-start'>
					<div>
						<h2 className='text-lg text-center font-display mb-4 font-bold md:text-2xl md:text-left'>
							Hours of Operation
						</h2>
						<div className='flex flex-col'>
							<div className='flex justify-between'>
								<p>Mon-Fri</p>
								<p className='text-right ml-2'>10:00am-5:00pm</p>
							</div>
							<div className='flex justify-between'>
								<p>Saturday</p>
								<p className='text-right ml-2'>10:00am-5:00pm</p>
							</div>
							<div className='flex justify-between'>
								<p>Sunday</p>
								<p className='text-right ml-2'>10:00am-5:00pm</p>
							</div>
						</div>
					</div>
					<div className='md:ml-4'>
						<h2 className='md:text-2xl text-lg font-display mb-4 font-bold text-center md:text-left'>
							Find Us
						</h2>
						<address className='text-center md:text-left'>
							320 Washington St, <br />
							Norwell, MA 02061 <br />
							(617) 380-8556
						</address>
					</div>
				</div>
			</section>
			<iframe
				src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2957.4619200327593!2d-70.8642533!3d42.1618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e49e2c0a51cf33%3A0x2a88d43fef94a189!2s320%20Washington%20St%2C%20Norwell%2C%20MA%2002061!5e0!3m2!1sen!2sus!4v1655708530695!5m2!1sen!2sus'
				allowFullScreen={false}
				loading='lazy'
				className={`${styleOptions} md-custom-container w-full h-128`}
				title='Google Maps Directions'
			/>
		</React.Fragment>
	);
};

export default Location;
