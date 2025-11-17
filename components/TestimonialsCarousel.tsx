import React, { useState, useRef, useEffect, useCallback } from 'react';
import { CAROUSEL_TESTIMONIALS } from '../constants';

const TestimonialsCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalSlides = CAROUSEL_TESTIMONIALS.length;
    
    const [content, setContent] = useState(CAROUSEL_TESTIMONIALS[0]);
    const [isFading, setIsFading] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const carouselRef = useRef<HTMLDivElement>(null);
    const touchStartX = useRef<number | null>(null);

    const nextSlide = useCallback(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % totalSlides);
    }, [totalSlides]);

    const prevSlide = useCallback(() => {
        setCurrentIndex(prevIndex => (prevIndex - 1 + totalSlides) % totalSlides);
    }, [totalSlides]);

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.targetTouches[0].clientX;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (touchStartX.current === null) {
            return;
        }

        const touchEndX = e.changedTouches[0].clientX;
        const swipeDistance = touchEndX - touchStartX.current;
        const minSwipeDistance = 50;

        if (swipeDistance < -minSwipeDistance) {
            nextSlide();
        } else if (swipeDistance > minSwipeDistance) {
            prevSlide();
        }

        touchStartX.current = null;
    };
    
    // Effect to update content and apply fade effect when currentIndex changes
    useEffect(() => {
        setIsFading(true);
        const timer = setTimeout(() => {
            setContent(CAROUSEL_TESTIMONIALS[currentIndex]);
            setIsFading(false);
        }, 300);

        return () => clearTimeout(timer);
    }, [currentIndex]);
    
    // Effect to physically scroll the carousel to the active item
    useEffect(() => {
        if (carouselRef.current) {
            const activeItem = carouselRef.current.children[currentIndex] as HTMLElement;
            if (activeItem) {
                const carouselWidth = carouselRef.current.offsetWidth;
                const itemWidth = activeItem.offsetWidth;
                const scrollLeft = activeItem.offsetLeft - (carouselWidth / 2) + (itemWidth / 2);
                carouselRef.current.scrollTo({ left: scrollLeft, behavior: 'smooth' });
            }
        }
    }, [currentIndex]);
    
    // Refined effect for auto-scrolling
    useEffect(() => {
        // Do not auto-scroll if the user is hovering over the component
        if (isHovered) {
            return;
        }

        // Set up the interval to advance to the next slide every 4 seconds
        const autoScrollInterval = setInterval(nextSlide, 4000);

        // Clean up the interval when the component unmounts or dependencies change
        return () => clearInterval(autoScrollInterval);
    }, [isHovered, nextSlide]);


    return (
        <section 
            className="py-20 overflow-hidden bg-white"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 xl:gap-24">
                    {/* Left side: Image Carousel */}
                    <div className="w-full lg:w-7/12 relative">
                        <div className="flex items-center gap-2 text-xl font-semibold text-gray-500 mb-8">
                            <span className="text-gray-800">{String(currentIndex + 1).padStart(2, '0')}</span>
                            <span>/</span>
                            <span>{String(totalSlides).padStart(2, '0')}</span>
                        </div>
                         <div ref={carouselRef} className="flex items-center gap-4 sm:gap-6 overflow-x-auto pb-4 scrollbar-hide h-80 sm:h-96 xl:h-[450px] -ml-4 pl-4 [mask-image:_linear_gradient(to_right,transparent_0,_black_24px,_black_calc(100%-24px),transparent_100%)]">
                            {CAROUSEL_TESTIMONIALS.map((testimonial, index) => (
                                <div 
                                    key={index}
                                    className={`flex-shrink-0 cursor-pointer transition-all duration-500 ease-in-out rounded-2xl overflow-hidden shadow-lg transform-gpu ${currentIndex === index ? 'w-56 h-80 sm:w-64 sm:h-96 xl:w-72 xl:h-[450px]' : 'w-32 h-56 sm:w-40 sm:h-64 xl:w-48 xl:h-80 opacity-50 hover:opacity-75'}`}
                                    onClick={() => setCurrentIndex(index)}
                                >
                                    <img 
                                        src={testimonial.image} 
                                        alt={testimonial.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right side: Content */}
                    <div className="w-full lg:w-5/12 mt-8 lg:mt-0">
                         <div className={`transition-opacity duration-300 min-h-[250px] sm:min-h-[280px] xl:min-h-[320px] flex flex-col justify-center ${isFading ? 'opacity-0' : 'opacity-100'}`}>
                            <h3 className="text-xl md:text-2xl xl:text-3xl font-bold text-blue-900">{content.name}</h3>
                            <h4 className="text-md xl:text-lg font-semibold text-gray-400 mb-6">{content.designation}</h4>
                            <p className="text-gray-600 text-base xl:text-lg leading-relaxed">
                                {content.quote}
                            </p>
                         </div>
                        <div className="flex items-center gap-4 mt-8">
                            <button onClick={prevSlide} className="w-12 h-12 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center" aria-label="Previous testimonial">
                                <i className="fas fa-chevron-left"></i>
                            </button>
                            <button onClick={nextSlide} className="w-12 h-12 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center" aria-label="Next testimonial">
                                <i className="fas fa-chevron-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsCarousel;