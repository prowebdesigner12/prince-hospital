

import React from 'react';
import type { NavLink, Award, Testimonial, Facility, FaqItem, TabbableListItem, AboutStat, HeroStat, Benefit, InfoCard, HowItWorksStep, Department, Service, SuperSpecialty, CarouselTestimonial } from './types';

export const NAV_LINKS: NavLink[] = [
  { name: 'About Us', href: '/about' },
  { name: 'Contact Us', href: '/contact' },
];

export const TABBED_SERVICES_247: TabbableListItem[] = [
    { name: '24×7 Emergency', href: '#', icon: <i className="fas fa-star-of-life"></i> },
    { name: '24×7 ICU', href: '#', icon: <i className="fas fa-bed-pulse"></i> },
    { name: '24×7 Lab', href: '#', icon: <i className="fas fa-vial"></i> },
    { name: '24×7 Pharmacy', href: '#', icon: <i className="fas fa-pills"></i> },
    { name: '24×7 Ambulance', href: '#', icon: <i className="fas fa-ambulance"></i> },
];

export const ADVANCED_TECHNOLOGY: TabbableListItem[] = [
    { name: 'Linac Machine for Radiation Therapy', href: '#', icon: <i className="fas fa-radiation"></i> },
    { name: 'MRI', href: '#', icon: <i className="fas fa-magnet"></i> },
    { name: 'CT Scan', href: '#', icon: <i className="fas fa-x-ray"></i> },
    { name: 'Digital X-Ray System', href: '#', icon: <i className="fas fa-film"></i> },
    { name: 'PET-CT Scan Machine', href: '#', icon: <i className="fas fa-atom"></i> },
    { name: 'Dialysis Machines', href: '#', icon: <i className="fas fa-tint"></i> },
    { name: 'Advanced Ultrasound Machines', href: '#', icon: <i className="fas fa-wave-square"></i> },
];


export const AWARDS: Award[] = [
    { image: 'https://via.placeholder.com/150x80.png?text=FICCI', title: 'FICCI Healthcare Excellence' },
    { image: 'https://via.placeholder.com/150x80.png?text=NABH', title: 'NABH Accreditation' },
    { image: 'https://via.placeholder.com/150x80.png?text=AHPI', title: 'AHPI Award' },
    { image: 'https://via.placeholder.com/150x80.png?text=Health-Plus', title: 'Healthcare Achievers' },
];

export const TESTIMONIALS: Testimonial[] = [
    {
        quote: "The care and professionalism at Prince Hospital were outstanding. The doctors and staff made me feel comfortable and well-cared-for throughout my treatment.",
        name: 'Rohan Sharma',
        location: 'New Delhi'
    },
    {
        quote: "I am incredibly grateful for the world-class treatment I received. The facilities are top-notch, and the medical team is truly dedicated to patient well-being.",
        name: 'Priya Patel',
        location: 'Mumbai'
    },
     {
        quote: "Booking an appointment and consulting with a specialist was seamless. The entire process was efficient and patient-friendly. Highly recommended!",
        name: 'Amit Kumar',
        location: 'Gurgaon'
    }
];

export const ABOUT_STATS: AboutStat[] = [
    { value: '700', label: 'Bedded Hospital' },
    { value: '100', label: 'ICU Beds' },
];

export const FACILITIES: Facility[] = [
    {
        icon: <i className="fas fa-procedures text-3xl text-blue-500"></i>,
        name: '9 Advanced OTs',
    },
    {
        icon: <i className="fas fa-bed text-3xl text-blue-500"></i>,
        name: 'Critical Care Units (100 ICU Beds)',
    },
    {
        icon: <i className="fas fa-baby-carriage text-3xl text-blue-500"></i>,
        name: 'Labour & Delivery Rooms',
    },
    {
        icon: <i className="fas fa-heart-pulse text-3xl text-blue-500"></i>,
        name: 'State-of-the-Art Cath Lab',
    },
    {
        icon: <i className="fas fa-x-ray text-3xl text-blue-500"></i>,
        name: 'Radiology Services',
    },
    {
        icon: <i className="fas fa-stethoscope text-3xl text-blue-500"></i>,
        name: 'Non-Invasive Cardiology',
    },
    {
        icon: <i className="fas fa-pump-medical text-3xl text-blue-500"></i>,
        name: 'Dialysis Services',
    },
    {
        icon: <i className="fas fa-briefcase-medical text-3xl text-blue-500"></i>,
        name: 'Emergency & Trauma Centre (50 beds)',
    },
    {
        icon: <i className="fas fa-microscope text-3xl text-blue-500"></i>,
        name: 'Laboratory Services',
    }
];

export const FAQ_DATA: FaqItem[] = [
    {
        question: 'Where is Prince Hospital?',
        answer: 'Prince Hospital is located on Jaipur-Sikar Road, Bajor, Gokulpura Bypass, Sikar.'
    },
    {
        question: 'Does Prince Hospital Accept Ayushman Card and Other Government Health Cards or insurance?',
        answer: 'Yes, the Ayushman Card is accepted in Prince Hospital. Moreover, RGHS, ECHS, etc, insurances are also acceptable here.'
    },
    {
        question: 'Are Third-Party Health Insurances accepted in Prince Hospital?',
        answer: 'Yes, Prince Hospital accept various companies\' health insurance.'
    },
    {
        question: 'Is Prince Hospital a Multispeciality Hospital?',
        answer: 'Yes, Prince Hospital is a multispecialty and super-speciality hospital with more than 30 departments.'
    },
    {
        question: 'How can I book an appointment at Prince Hospital?',
        answer: 'You can schedule an appointment by calling 7230032108 or booking online at www.princehospital.in.'
    }
];

export const HERO_STATS: HeroStat[] = [
    { value: '250+', label: 'Specialized Doctors' },
    { value: '24/7', label: 'Emergency Service' },
    { value: '700', label: 'Bedded Hospital' },
    { value: '100', label: 'ICU Beds' },
];

export const BENEFITS: Benefit[] = [
    {
        icon: <i className="fas fa-heart-pulse text-4xl"></i>,
        title: 'Compassionate Care',
        description: 'Our team prioritizes compassionate and personalized care, ensuring that every patient feels valued and heard.',
        href: '#',
    },
    {
        icon: <i className="fas fa-user-md text-4xl"></i>,
        title: 'Experienced Professionals',
        description: 'With years of experience and expertise, our medical professionals are dedicated to delivering the highest standard of care.',
        href: '#',
    },
    {
        icon: <i className="fas fa-users text-4xl"></i>,
        title: 'Patient-Centered Approach',
        description: 'Your health and well-being are our top priorities, and we are to partnering with you on your healthcare journey.',
        href: '#',
    },
    {
        icon: <i className="fas fa-robot text-4xl"></i>,
        title: 'Advanced Technology',
        description: 'We utilize cutting-edge technology and medical advancements to provide accurate diagnoses and effective treatments.',
        href: '#',
    }
];

export const INFO_CARDS: InfoCard[] = [
    {
        icon: <i className="fas fa-user-doctor text-sky-500 text-2xl"></i>,
        title: 'Explore Departments',
        bgColor: 'bg-sky-700',
        textColor: 'text-white',
    },
    {
        icon: <i className="fas fa-briefcase-medical text-blue-600 text-2xl"></i>,
        title: 'Emergency Care',
        description: 'Fast, reliable treatment when you need it most.',
        bgColor: 'bg-blue-700',
        textColor: 'text-white',
    },
    {
        icon: <i className="fas fa-history text-blue-600 text-2xl"></i>,
        title: '24/7 Full Support',
        description: 'Always here for appointments and emergencies.',
        bgColor: 'bg-slate-100',
        textColor: 'text-gray-800',
    }
];

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
    {
        step: 1,
        title: 'Schedule An Appointment',
        description: 'Begin your journey to better health by scheduling a consultation with Prince Hospital. You can easily book your appointment by calling our friendly reception team or using our convenient online booking system. We offer flexible appointment times to accommodate your schedule, including evening and appointments for your convenience.',
        image: 'https://images.unsplash.com/photo-sLabRVYuY2w?auto=format&fit=crop&w=1000&q=80?q=80&w=1974&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        step: 2,
        title: 'Consultation',
        description: 'During your consultation, you will meet with one of our experienced healthcare professionals who will take the time to listen to your concerns, review your medical history, and conduct a thorough examination to understand your health needs.',
        image: 'https://images.unsplash.com/photo-sLabRVYuY2w?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        step: 3,
        title: 'Personalized Treatment',
        description: 'Based on your consultation and any necessary diagnostic tests, we will develop a personalized treatment plan tailored to your specific needs and goals. We believe in collaborative care and will involve you in every decision.',
        image: 'https://images.unsplash.com/photo-t__SZ4OHEOE?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        step: 4,
        title: 'Ongoing Care',
        description: 'Our commitment to your health doesn’t end after your initial treatment. We provide ongoing care and support to help you maintain your well-being and prevent future health issues, ensuring a long and healthy life.',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
];

export const DEPARTMENTS: Department[] = [
  {
    icon: <i className="fas fa-gavel text-3xl text-blue-500"></i>,
    title: 'Forensic Medicine',
    description: 'Legal and medical investigation of death and injury, providing evidence for legal proceedings.',
  },
  {
    icon: <i className="fas fa-vial text-3xl text-blue-500"></i>,
    title: 'Pathology',
    description: 'Diagnosis of diseases through laboratory testing, tissue examination, and microscopic evaluation.',
  },
  {
    icon: <i className="fas fa-spa text-3xl text-blue-500"></i>,
    title: 'Dermatology',
    description: 'Treatment of skin, hair, nail diseases, infections, allergies, and cosmetic issues.',
  },
  {
    icon: <i className="fas fa-brain text-3xl text-blue-500"></i>,
    title: 'Psychiatry',
    description: 'Management of mental illnesses, depression, anxiety, behavioral disorders, and emotional disturbances.',
  },
  {
    icon: <i className="fas fa-lungs text-3xl text-blue-500"></i>,
    title: 'Respiratory Medicine',
    description: 'Care for asthma, COPD, tuberculosis, pneumonia, and complex lung-related conditions.',
  },
  {
    icon: <i className="fas fa-bone text-3xl text-blue-500"></i>,
    title: 'Orthopedics',
    description: 'Treatment of bone, joint, muscle injuries, fractures, arthritis, and spinal problems.',
  },
  {
    icon: <i className="fas fa-x-ray text-3xl text-blue-500"></i>,
    title: 'Radio-Diagnosis',
    description: 'Disease detection using X-rays, CT, MRI, ultrasound, and imaging technologies.',
  },
  {
    icon: <i className="fas fa-radiation text-3xl text-blue-500"></i>,
    title: 'Radiation Oncology',
    description: 'Cancer treatment using targeted radiation therapies for tumour control and cure.',
  },
  {
    icon: <i className="fas fa-atom text-3xl text-blue-500"></i>,
    title: 'Nuclear Medicine',
    description: 'Diagnosis and treatment using radioactive tracers, PET scans, and therapies.',
  },
  {
    icon: <i className="fas fa-mask-ventilator text-3xl text-blue-500"></i>,
    title: 'Anesthesiology',
    description: 'Safe anaesthesia administration, pain management, critical care, and perioperative patient monitoring.',
  },
  {
    icon: <i className="fas fa-ear-listen text-3xl text-blue-500"></i>,
    title: 'ENT',
    description: 'Treatment of ear, nose, throat infections, hearing issues, allergies, and voice disorders.',
  },
  {
    icon: <i className="fas fa-eye text-3xl text-blue-500"></i>,
    title: 'Ophthalmology',
    description: 'Eye disease treatment, cataract surgery, vision correction, glaucoma, and retinal care.',
  },
  {
    icon: <i className="fas fa-users text-3xl text-blue-500"></i>,
    title: 'Community Medicine',
    description: 'Improving public health through prevention, health education, screenings, and community programs.',
  },
  {
    icon: <i className="fas fa-microscope text-3xl text-blue-500"></i>,
    title: 'Microbiology',
    description: 'Study and diagnosis of infections caused by bacteria, viruses, fungi, and parasites.',
  },
  {
    icon: <i className="fas fa-pills text-3xl text-blue-500"></i>,
    title: 'Pharmacology',
    description: 'Research and understanding of drug actions, effects, interactions, and safe therapeutics.',
  },
  {
    icon: <i className="fas fa-person-chalkboard text-3xl text-blue-500"></i>,
    title: 'Anatomy',
    description: 'Study of human body structures, organs, tissues, and their functional relationships.',
  },
  {
    icon: <i className="fas fa-stethoscope text-3xl text-blue-500"></i>,
    title: 'General Medicine',
    description: 'Comprehensive adult care for chronic diseases, infections, lifestyle issues, and diagnostics.',
  },
  {
    icon: <i className="fas fa-baby text-3xl text-blue-500"></i>,
    title: 'Pediatrics',
    description: 'Medical care for infants, children, and adolescents, including growth, infections, and vaccinations.',
  },
  {
    icon: <i className="fas fa-person-pregnant text-3xl text-blue-500"></i>,
    title: 'Obstetrics & Gynaecology',
    description: 'Care for pregnancy, childbirth, women’s reproductive health, fertility, and gynaecological conditions.',
  },
  {
    icon: <i className="fas fa-wheelchair text-3xl text-blue-500"></i>,
    title: 'Physical Medicine & Rehabilitation',
    description: 'Restoration of mobility, function, pain relief, disability management, and rehabilitation therapy.',
  },
  {
    icon: <i className="fas fa-comment-dots text-3xl text-blue-500"></i>,
    title: 'Psychology',
    description: 'Assessment of behaviour, emotions, cognition, therapy for stress, anxiety, and disorders.',
  },
  {
    icon: <i className="fas fa-flask-vial text-3xl text-blue-500"></i>,
    title: 'Biochemistry',
    description: 'Laboratory analysis of blood, enzymes, hormones, and metabolism supports accurate disease diagnosis.',
  },
];


export const SERVICES: Service[] = [
  {
    image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'X-Ray',
    title: 'Digital X-Ray',
    href: '#',
  },
  {
    image: 'https://images.pexels.com/photos/668300/pexels-photo-668300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Dental',
    title: 'Dental Fixing',
    href: '#',
  },
  {
    image: 'https://images.pexels.com/photos/3957987/pexels-photo-3957987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Surgery',
    title: 'Human Brain Surgery',
    href: '#',
  },
  {
    image: 'https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Vaccine',
    title: 'Pediatric Dentistry',
    href: '#',
  },
  {
    image: 'https://images.pexels.com/photos/5407054/pexels-photo-5407054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Cardiology',
    title: 'Heart Monitoring',
    href: '#',
  },
  {
    image: 'https://images.pexels.com/photos/4021779/pexels-photo-4021779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Diagnostics',
    title: 'Advanced Lab Tests',
    href: '#',
  }
];

export const SUPER_SPECIALTIES: SuperSpecialty[] = [
  { name: 'Cardiology', image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ce87d?q=80&w=1470&auto=format&fit=crop' },
  { name: 'Medical Oncology', image: 'https://images.unsplash.com/photo-1629230539750-928905a54502?q=80&w=1470&auto=format&fit=crop' },
  { name: 'Endocrinology', image: 'https://images.unsplash.com/photo-1622209042854-38668143f324?q=80&w=1470&auto=format&fit=crop' },
  { name: 'Neurosurgery', image: 'https://images.unsplash.com/photo-1618939304344-8832a81cf17a?q=80&w=1470&auto=format&fit=crop' },
  { name: 'Urology', image: 'https://plus.unsplash.com/premium_photo-1679937333133-34a858348958?q=80&w=1470&auto=format&fit=crop' },
  { name: 'Surgical Oncology', image: 'https://images.unsplash.com/photo-1550831107-1553da8c8464?q=80&w=1337&auto=format&fit=crop' },
  { name: 'Gastro Surgery', image: 'https://images.unsplash.com/photo-1631217871292-2680453a989f?q=80&w=1470&auto=format&fit=crop' },
  { name: 'Trauma Surgery', image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=1470&auto=format&fit=crop' },
  { name: 'Reproductive Medicine', image: 'https://images.unsplash.com/photo-1576091160550-2173dba9996a?q=80&w=1470&auto=format&fit=crop' },
  { name: 'Pediatric Surgery', image: 'https://images.unsplash.com/photo-1580281657683-4f907e5f3f54?q=80&w=1471&auto=format&fit=crop' },
  { name: 'Plastic & Reconstructive Surgery', image: 'https://images.unsplash.com/photo-1618247474758-c89b52a8a4f3?q=80&w=1470&auto=format&fit=crop' },
  { name: 'Gastroenterology', image: 'https://images.unsplash.com/photo-1618398188241-e2838a75a74d?q=80&w=1470&auto=format&fit=crop' },
  { name: 'Neonatology', image: 'https://images.unsplash.com/photo-1604467041594-5a7a53c37a43?q=80&w=1470&auto=format&fit=crop' },
  { name: 'Nephrology', image: 'https://images.unsplash.com/photo-1584985223007-3c526950a90a?q=80&w=1470&auto=format&fit=crop' },
  { name: 'Emergency Medicine', image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=1470&auto=format&fit=crop' },
  { name: 'Peripheral & Vascular Surgery', image: 'https://plus.unsplash.com/premium_photo-1661775001460-152f5581c7f0?q=80&w=1470&auto=format&fit=crop' }
];

export const CAROUSEL_TESTIMONIALS: CarouselTestimonial[] = [
    {
        image: 'https://i.ibb.co/689Wd0M/carousel-1.png',
        name: 'Aaliya Reeza',
        designation: 'Heart Patient',
        quote: '“The care I received was exceptional. The doctors were knowledgeable and compassionate, making a difficult time much easier. I felt supported every step of the way.”'
    },
    {
        image: 'https://i.ibb.co/z4y54s7/carousel-2.png',
        name: 'Jennifer J. Bordner',
        designation: 'Dental Patient',
        quote: '“A fantastic experience from start to finish. The facilities are modern and clean, and the staff is incredibly friendly and professional. Highly recommended for any dental work.”'
    },
    {
        image: 'https://i.ibb.co/R9jBpxB/carousel-3.png',
        name: 'Rhonda R. Tatum',
        designation: 'Cardio Patient',
        quote: '“I am so grateful for the expert care provided by the cardiology team. They used the latest technology and explained everything clearly, putting my mind at ease.”'
    },
    {
        image: 'https://i.ibb.co/R0xXvYd/carousel-4.png',
        name: 'Edna C. Sadler',
        designation: 'Neurology Patient',
        quote: '“The neurology department is top-notch. They were thorough in their diagnosis and created a personalized treatment plan that has significantly improved my quality of life.”'
    },
    {
        image: 'https://i.ibb.co/KqwJc4M/carousel-5.png',
        name: 'Whitney P. Cruse',
        designation: 'Orthopedy Patient',
        quote: '“My knee replacement surgery was a great success. The physical therapy team was amazing, helping me get back on my feet faster than I ever expected. Thank you!”'
    },
    {
        image: 'https://i.ibb.co/k3t2Hhb/carousel-6.png',
        name: 'Amber D. Ma',
        designation: 'Surgically Patient',
        quote: '“The surgical team was outstanding. Their skill and precision were evident, and the post-operative care was excellent. I felt safe and well-cared for throughout.”'
    },
    {
        image: 'https://i.ibb.co/QPF1T3w/carousel-7.png',
        name: 'Eva H. Magee',
        designation: 'Cardiology Patient',
        quote: '“Another positive experience with the cardiology department. Their consistent excellence and patient-focused approach are why I trust them with my heart health.”'
    }
];