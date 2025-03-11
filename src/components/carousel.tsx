'use client';

import { useCallback, useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

interface CarouselItem {
	image: string;
	title: string;
}

export default function Carousel() {
	const [currentIndex, setCurrentIndex] = useState(0);

	// Create autoplay plugin with stopOnInteraction set to true
	// This will pause autoplay when user interacts with the carousel
	const autoplayOptions = {
		delay: 5000,
		stopOnInteraction: true,
		playOnInit: true,
	};
	const autoplay = useRef(Autoplay(autoplayOptions));

	const items: CarouselItem[] = [
		{
			image: '/img/fv-banner/1.png',
			title: 'Skin Whitening Treatments',
		},
		{
			image: '/img/fv-banner/2.png',
			title: 'Facial Cleansing',
		},
		{
			image: '/img/fv-banner/3.png',
			title: 'Anti-Aging',
		},
	];

	// Initialize Embla Carousel with corrected options for better interaction
	const [emblaRef, emblaApi] = useEmblaCarousel(
		{
			loop: true,
			draggable: true,
			dragFree: false, // Changed to false for more predictable dragging
			containScroll: 'trimSnaps',
			align: 'center',
			speed: 30, // More moderate speed for better control
			slidesToScroll: 1,
		},
		[autoplay.current],
	);

	const scrollTo = useCallback(
		(index: number) => {
			if (emblaApi) {
				emblaApi.scrollTo(index);
			}
		},
		[emblaApi],
	);

	const onSelect = useCallback(() => {
		if (!emblaApi) return;
		setCurrentIndex(emblaApi.selectedScrollSnap());
	}, [emblaApi]);

	useEffect(() => {
		if (!emblaApi) return;

		// Call onSelect when the carousel is ready
		onSelect();

		// Setup event listeners
		emblaApi.on('select', onSelect);
		emblaApi.on('pointerDown', () => autoplay.current.stop()); // Stop autoplay on interaction
		emblaApi.on('pointerUp', () => autoplay.current.play()); // Resume autoplay after interaction

		// Add a reInit event to handle window resizing
		const handleResize = () => emblaApi.reInit();
		window.addEventListener('resize', handleResize);

		// Cleanup
		return () => {
			emblaApi.off('select', onSelect);
			emblaApi.off('pointerDown', () => autoplay.current.stop());
			emblaApi.off('pointerUp', () => autoplay.current.play());
			window.removeEventListener('resize', handleResize);
		};
	}, [emblaApi, onSelect]);

	return (
		<div className="relative w-full h-[100dvh] overflow-hidden bg-gray-50">
			<div
				className="h-full cursor-grab active:cursor-grabbing"
				ref={emblaRef}
			>
				<div className="flex h-full touch-pan-y">
					{items.map((item, index) => (
						<div
							key={index}
							className="relative flex-[0_0_100%] h-full min-w-0"
						>
							<Image
								src={item.image || '/placeholder.svg'}
								alt={item.title}
								fill
								priority={index === 0}
								className="object-cover"
							/>
							<div className="absolute inset-0 flex flex-col justify-end p-12 lg:p-16 lg:p-24">
								<div className="mb-16">
									<h1 className="hidden lg:block max-w-[50vw] text-white drop-shadow-lg">
										{item.title}
									</h1>
									<h2 className="text-white drop-shadow-lg block lg:hidden">
										{item.title}
									</h2>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Navigation Dots - Improved for better interaction */}
			<div className="absolute bottom-12 left-12 lg:left-16 lg:left-24 flex space-x-3 z-20">
				{items.map((_, index) => (
					<button
						key={index}
						type="button" // Explicitly set button type
						onClick={() => scrollTo(index)}
						className={`w-12 h-1 rounded-sm transition-all duration-300 hover:opacity-100 ${
							index === currentIndex
								? 'bg-white'
								: 'bg-white/30 hover:bg-white/50'
						}`}
						style={{ cursor: 'pointer' }} // Ensure the cursor shows pointer
						aria-label={`Go to slide ${index + 1}`}
						aria-current={index === currentIndex ? 'true' : 'false'}
					/>
				))}
			</div>
		</div>
	);
}
