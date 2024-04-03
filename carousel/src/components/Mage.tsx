import React from 'react';

// Define an interface for the props
interface MageProps {
 src: string;
 alt: string;
}

// Use the interface to annotate the props parameter in your component function
const Mage: React.FC<MageProps> = ({ src, alt }) => {
 return <img src={src} alt={alt} className='max-h-svh w-96 rounded-lg'/>;
};

export default Mage;
