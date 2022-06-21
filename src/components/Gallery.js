import GalleryTile from '../menus/GalleryTile';

import tile1 from '../assets/gallery/tile1.png';
import tile2 from '../assets/gallery/tile2.png';
import tile3 from '../assets/gallery/tile3.png';
import tile4 from '../assets/gallery/tile4.png';
import tile5 from '../assets/gallery/tile5.png';
import tile6 from '../assets/gallery/tile6.png';
import tile7 from '../assets/gallery/tile7.png';
import tile8 from '../assets/gallery/tile8.png';

const Gallery = () => {
	return (
		<section className='container max-w-screen-lg mx-auto px-4 md:px-0 grid grid-cols-12 gap-4 my-4'>
			<GalleryTile tile={tile1} options='' />
			<GalleryTile tile={tile2} options='' />
			<GalleryTile tile={tile3} options='' />
			<GalleryTile tile={tile4} options='' />
			<GalleryTile tile={tile5} options='' />
			<GalleryTile tile={tile6} options='' />
			<GalleryTile tile={tile7} options='md:block hidden' />
			<GalleryTile tile={tile8} options='md:block hidden' />
		</section>
	);
};

export default Gallery;
