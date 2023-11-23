import { calender, fb, icon, location, person1, person2, person3, person4, thec, twitter, wordpress, youTube } from "../images";

// NAVIGATION
export const NAV_LINKS = [
   { href: '/', key: 'home', label: 'Home' },
   { href: '/', key: 'how_hilink_work', label: 'How Hilink Work?' },
   { href: '/', key: 'services', label: 'Services' },
   { href: '/', key: 'pricing ', label: 'Pricing ' },
   { href: '/', key: 'contact_us', label: 'Contact Us' },
 ];
 
 // CAMP SECTION
 export const PEOPLE_URL = [
    person1,
    person2,
    person3,
    person4,
   
 ];
 
 // FEATURES SECTION
 export const FEATURES = [
   {
     title: 'Real maps can be offline',
     icon: icon,
     variant: 'green',
     description:
       'We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location',
   },
   {
     title: 'Set an adventure schedule',
     icon: calender,
     variant: 'green',
     description:
       "Schedule an adventure with friends. On holidays, there are many interesting offers from Hilink. That way, there's no more discussion",
   },
   {
     title: 'Technology using augment reality',
     icon: thec,
     variant: 'green',
     description:
       'Technology uses augmented reality as a guide to your hiking trail in the forest to the top of the mountain. Already supported by the latest technology without an internet connection',
   },
   {
     title: 'Many new locations every month',
     icon: location,
     variant: 'orange',
     description:
       'Lots of new locations every month, because we have a worldwide community of climbers who share their best experiences with climbing',
   },
 ];
 
 // FOOTER SECTION
 export const FOOTER_LINKS = [
   {
     title: 'Learn More',
     links: [
       'About Hilink',
       'Press Releases',
       'Environment',
       'Jobs',
       'Privacy Policy',
       'Contact Us',
     ],
   },
   {
     title: 'Our Community',
     links: ['Climbing xixixi', 'Hiking hilink', 'Hilink kinthill'],
   },
 ];
 
 export const FOOTER_CONTACT_INFO = {
   title: 'Contact Us',
   links: [
     { label: 'Admin Officer', value: '123-456-7890' },
     { label: 'Email Officer', value: 'hilink@akinthil.com' },
   ],
 };
 
 export const SOCIALS = {
   title: 'Social',
   links: [
     fb,
     twitter,
     wordpress,
     youTube,
   ],
 };