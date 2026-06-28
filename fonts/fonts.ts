
import { Barlow, Roboto } from 'next/font/google';

/**
 * Use Case
 * className={barlow.className + ' text-4xl font-bold
 */
export const barlow = Barlow({
    subsets: ['latin'],
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    display: 'swap',
});

/**
 * Use Case
 * className={robotoz.className + ' text-4xl font-bold
 */
export const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
    display: 'swap',
});
