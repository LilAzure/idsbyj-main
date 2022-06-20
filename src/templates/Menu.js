import React from 'react';
import { menuData } from '../assets/menuData';
import serviceImage from "../assets/service-image.jpg";

const Menu = () => {
	return (
		<section className='mx-auto max-w-prose flex flex-col mt-8 mb-24 px-4'>
			<img className="mb-8" alt="Service Image" src={serviceImage} />
			<article className='space-y-2'>
				<h2 className='font-display text-3xl text-center my-4 font-bold'>Current Promotions</h2>
				{menuData.promotions.map((item, index) => {
					return (
						<div className='flex justify-center' key={index}>
							<p>{item.name}</p>
						</div>
					);
				})}
			</article>
			<article className='space-y-2'>
				<h2 className='font-display text-3xl text-center my-4 font-bold'>Lash Services</h2>
				{menuData.lashServices.map((item, index) => {
					return (
						<div className='flex justify-between' key={index}>
							<p>{item.name}</p>
							<p>{item.price}</p>
						</div>
					);
				})}
			</article>
			<article className='space-y-2'>
				<h2 className='font-display text-3xl text-center my-4 font-bold'>Wax Services</h2>
				{menuData.waxServices.map((item, index) => {
					return (
						<div className='flex justify-between' key={index}>
							<p>{item.name}</p>
							<p>{item.price}</p>
						</div>
					);
				})}
			</article>
			<article className='space-y-2'>
				<h2 className='font-display text-3xl text-center my-4 font-bold'>Brow Services</h2>
				{menuData.browServices.map((item, index) => {
					return (
						<div className='flex justify-between' key={index}>
							<p>{item.name}</p>
							<p>{item.price}</p>
						</div>
					);
				})}
			</article>
		</section>
	);
};

export default Menu;
