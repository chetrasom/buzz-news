import { nanoid } from "nanoid";

import notFoundImg from '../assets/Image_not_available.png';
import bannerAds from '../assets/banner2.jpg';
import app1 from '../assets/fnappstore.png';
import app2 from '../assets/fngoogleplay.png';

export const notFoundImage = notFoundImg;
export const bannerA1 = bannerAds;
export const appStore = app1;
export const googlePlay = app2;

export const menu = [
    { id: nanoid(), name: 'home', url: '/', category: 'projects' },
    { id: nanoid(), name: 'business', url: '/business', category: 'businessCategory' },
    { id: nanoid(), name: 'entertainment', url: '/entertainment', category: 'entertainmentCategory' },
    { id: nanoid(), name: 'sports', url: '/sports', category: 'sportsCategory' },
    { id: nanoid(), name: 'technology', url: '/technology', category: 'technologyCategory' },
    { id: nanoid(), name: 'science', url: '/science', category: 'scienceCategory' },
    { id: nanoid(), name: 'health', url: '/health', category: 'healthCategory' },
];

export const tags = [
    { id: nanoid(), name: 'general', url: '/', category: 'projects' },
    { id: nanoid(), name: 'business', url: '/business', category: 'businessCategory' },
    { id: nanoid(), name: 'entertainment', url: '/entertainment', category: 'entertainmentCategory' },
    { id: nanoid(), name: 'sports', url: '/sports', category: 'sportsCategory' },
    { id: nanoid(), name: 'technology', url: '/technology', category: 'technologyCategory' },
    { id: nanoid(), name: 'science', url: '/science', category: 'scienceCategory' },
    { id: nanoid(), name: 'health', url: '/health', category: 'healthCategory' },
    // { id: nanoid(), name: 'business', url: '/business' },
    // { id: nanoid(), name: 'entertainment', url: '/entertainment' },
    // { id: nanoid(), name: 'general', url: '/' },
    // { id: nanoid(), name: 'health', url: '/health' },
    // { id: nanoid(), name: 'science', url: '/science' },
    // { id: nanoid(), name: 'sports', url: '/sports' },
    // { id: nanoid(), name: 'technology', url: '/technology' },
];

// Debug can not exports in local data
// export const socials = [
//     { id: nanoid(), icon: <FaFacebook />, url: '/' },
//     { id: nanoid(), icon: <FaYoutube />, url: '/' },
//     { id: nanoid(), icon: <FaTelegram />, url: '/' },
//     { id: nanoid(), icon: <FaTiktok />, url: '/' },
//     { id: nanoid(), icon: <FaTwitter />, url: '/' },
// ];