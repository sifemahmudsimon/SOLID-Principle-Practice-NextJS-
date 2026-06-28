"use client";

import {
    useState,
    useEffect,
    useRef,
    Children,
    ReactNode,
} from "react";

type CarouselProps = {
    children: ReactNode;
    autoPlay?: boolean;
    interval?: number;
};


/**
 * @param children
 * @param autoPlay
 * @param interval
 * @constructor
 *
 * @example
 * import Image from "next/image";
 *
 * <Carousel>
 *   <Image src="/1.jpg" alt="" fill className="object-cover" />
 *   <Image src="/2.jpg" alt="" fill className="object-cover" />
 *   <Image src="/3.jpg" alt="" fill className="object-cover" />
 * </Carousel>
 *
 * <Carousel>
 *   <div className="bg-red-500 h-full flex items-center justify-center">
 *     Slide 1
 *   </div>
 *   <div className="bg-blue-500 h-full flex items-center justify-center">
 *     Slide 2
 *   </div>
 * </Carousel>
 */
export default function Carousel({
                                     children,
                                     autoPlay = true,
                                     interval = 3000,
                                 }: CarouselProps) {
    const slides = Children.toArray(children);
    const total = slides.length;

    const [current, setCurrent] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const touchStartX = useRef<number | null>(null);

    const nextSlide = () => {
        if (total === 0) return;
        setCurrent((prev) => (prev + 1) % total);
    };

    const prevSlide = () =>
        setCurrent((prev) => (prev - 1 + total) % total);

    // Auto Play
    useEffect(() => {
        if (!autoPlay || isHovered || total === 0) return;

        const timer = setInterval(nextSlide, interval);
        return () => clearInterval(timer);
    }, [current, isHovered, autoPlay, interval]);

    if (!total) return null;

    // Swipe
    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (touchStartX.current === null) return;

        const diff = touchStartX.current - e.changedTouches[0].clientX;

        if (diff > 50) nextSlide();
        if (diff < -50) prevSlide();

        touchStartX.current = null;
    };

    return (
        <div
            className="relative w-full max-w-xl mx-auto"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            {/* Slides */}
            <div className="relative w-full h-72 overflow-hidden rounded">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-700 ${
                            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
                        }`}
                    >
                        {slide}
                    </div>
                ))}
            </div>

            {/* Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 px-3 py-1 rounded-full shadow"
            >
                ◀
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 px-3 py-1 rounded-full shadow"
            >
                ▶
            </button>

            {/* Dots */}
            <div className="flex justify-center mt-4 space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-3 h-3 rounded-full ${
                            index === current ? "bg-blue-500" : "bg-gray-300"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}
