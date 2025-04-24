import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import React, { useEffect, useRef, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';

const HomeSectionCarousel = ({data, sectionName}) => {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(1);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const items = data.slice(0,10).map((item, index) => (
    <HomeSectionCard key={index} product={item} />
  ));

  // Auto detect itemsPerSlide
  useEffect(() => {
    const updateItemsPerSlide = () => {
      const width = window.innerWidth;
      if (width >= 1024) setItemsPerSlide(5.5);
      else if (width >= 720) setItemsPerSlide(3);
      else setItemsPerSlide(1);
    };

    updateItemsPerSlide(); // run once on mount
    window.addEventListener('resize', updateItemsPerSlide);
    return () => window.removeEventListener('resize', updateItemsPerSlide);
  }, []);

  const handleSlideChanged = ({ item }) => {
    setActiveIndex(item);
  };

  return (
    <div className='border'>
        <h2 className='text-2xl font-extrabold text-gray-800 py-5'>{sectionName}</h2>
      <div className='relative p-5'>
        <AliceCarousel
          items={items}
          disableButtonsControls
          disableDotsControls
          responsive={responsive}
          ref={carouselRef}
          onSlideChanged={handleSlideChanged}
        />

        {/* Left Arrow */}
        {activeIndex !== 0 && (
          <button
            onClick={() => carouselRef.current?.slidePrev()}
            className='absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 z-50 bg-white p-2 rounded-full shadow'
            aria-label='previous'
          >
            <KeyboardArrowLeftIcon sx={{ color: 'black' }} />
          </button>
        )}

        {/* Right Arrow */}
        {activeIndex < items.length - Math.floor(itemsPerSlide) && (
          <button
            onClick={() => carouselRef.current?.slideNext()}
            className='absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 z-50 bg-white p-2 rounded-full shadow'
            aria-label='next'
          >
            <KeyboardArrowRightIcon sx={{ color: 'black' }} />
          </button>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
