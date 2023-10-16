import {Lobster, Open_Sans} from "next/font/google";

const openSansBold = Open_Sans({
    variable: '--font-open-sans',
    weight: '800',
    subsets: ['latin'],
    display: 'auto',
});

const lobster = Lobster({
    variable: '--font-lobster',
    weight: '400',
    subsets: ['latin'],
    display: 'auto',
});

export {openSansBold, lobster};