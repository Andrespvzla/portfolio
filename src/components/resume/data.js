import { IoBriefcaseOutline, IoSchoolOutline } from 'react-icons/io5';

const data = [
    {
        id: 1,
        category: 'education',
        icon: IoSchoolOutline,
        year: 'Dec 2022 - May 2023',
        title: 'Front-End Developer',
        company: 'Meta',
        desc: ['• Completed my professional certificate as a Front-End developer with Meta'],
    },
    {
        id: 2,
        category: 'education',
        icon: IoSchoolOutline,
        year: 'Sep 2013 - Mar 2020',
        title: 'Computer Engineer',
        company: 'Universidad Fermin Toro',
        desc: ['• Graduated as a Computer Engineer in Venezuela and validated my degree in United States'],
    },
    {
        id: 3,
        category: 'experience',
        icon: IoBriefcaseOutline,
        year: 'Jul 2019 - Aug 2020',
        title: 'Software Engineer',
        company: 'Universidad Fermin Toro',
        desc: [
            '• Built a new version of university website to allow students get a better understanding of university resources',

            '• Integrated a new module to receive payments from students and make an easy way to take payments online',

            '• Designed a new user interface to help students enroll in a new semester selecting the courses they wanted',
        ],
    },
    {
        id: 4,
        category: 'experience',
        icon: IoBriefcaseOutline,
        year: 'Oct 2018 - Jan 2019',
        title: 'Web Designer and Mobile Developer',
        company: 'Andain',
        desc: [
            '• Designed interfaces for a mobile app using Ionic 2 and 3',
            '• Designed three different landing pages to show company products',
            '• Built new interfaces from existing wireframes',
        ],
    },
];

export default data;
