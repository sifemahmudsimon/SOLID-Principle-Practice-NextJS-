"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

type ResponsiveImageProps = Omit<ImageProps, "src" | "fill"> & {
    src: string;
    alt: string;
    fallbackSrc?: string;
    className?: string;
    rounded?: boolean;
    border?: boolean;
    blurPlaceholder?: boolean; // optional blur placeholder
};

/**
 * Fully responsive Image that fills its parent container
 *
 * @example
 * <div className="w-full aspect-[16/9] relative">
 *   <ResponsiveImage src="/hero.jpg" alt="Hero image" fallbackSrc="/fallback.png" rounded />
 * </div>
 */
export default function ResponsiveImage({
                                            src,
                                            alt,
                                            fallbackSrc,
                                            className = "",
                                            rounded = false,
                                            border = false,
                                            blurPlaceholder = true,
                                            ...props
                                        }: ResponsiveImageProps) {
    const [imgSrc, setImgSrc] = useState(src);

    return (
        <Image
            {...props}
            src={imgSrc}
            alt={alt}
            fill // makes the image fill its parent
            className={`${className} ${rounded ? "rounded-lg" : ""} ${
                border ? "border border-gray-300" : ""
            } object-cover`}
            onError={() => fallbackSrc && setImgSrc(fallbackSrc)}
            placeholder={blurPlaceholder ? "blur" : "empty"}
            blurDataURL={blurPlaceholder ? "/blur-placeholder.png" : undefined}
            loading="lazy"
        />
    );
}
