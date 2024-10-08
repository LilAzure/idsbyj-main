import React from 'react';
import aboutImg from '../assets/about.jpg';

const About = () => {
	return (
		<section className='bg-gray-50 md-custom-container'>
			<span id='about' className='block relative -top-28' />
			<div className='container max-w-screen-lg mx-auto py-12 px-8 flex flex-col justify-center items-center md:flex-row md:my-4'>
				<img
					className='object-fit shadow-md mb-8 md:mr-8'
					src={aboutImg}
					alt='aboutimg'
					loading='lazy'
				/>
				<div className='md:w-1/2 py-8 flex flex-col justify-center items-center'>
					<h1 className='font-display text-3xl md:text-4xl mb-2 font-bold'>About Us</h1>
					<p className='text-center'>
						iDesigns Studio by J is dedicated to giving you the best
						beauty service for your lash, brow, and waxing needs.
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
