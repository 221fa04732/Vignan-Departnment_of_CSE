import React from 'react';
import Slider from 'react-slick';
import { FaStar } from 'react-icons/fa';

const reviews = [
  {
    name: 'Mrityunjay Kumar',
    description: 'Student',
    review: 'The course curriculum is of a global standard, and it help me to compete with students from other prestigious universities.',
    rating: 3,
    profilePic: 'profile1.png',
  },
  {
    name: 'Siva Rama Krishna',
    description: 'Parent',
    review: 'The curriculum has greatly enhanced my child intellectual aptitude, and the focus on technical skills has prepared them well for the IT industry.',
    rating: 2,
    profilePic: 'profile3.png',
  },
  {
    name: 'Vamsi Krishna',
    description: 'Student',
    review: 'Vignan helped me to make myself a better person in both personal life and professional life. I got placed with two companies, one is TCS digital, and another one is EPAM system with 12 LPA.',
    rating: 3,
    profilePic: 'profile4.png',
  },
  {
    name: 'Anurag Kumar Ojha',
    description: 'Student',
    review: 'Vignan helped me to make myself a better person in both personal life and professional life. I got placed with two companies, one is TCS digital, and another one is EPAM system with 12 LPA.',
    rating: 2,
    profilePic: 'profile2.png',
  },
  {
    name: 'L. Brahma Reddy',
    description: 'Parent',
    review: 'The course curriculum is of a global standard, and it ensures my child competency is on par with students from other prestigious universities.',
    rating: 3,
    profilePic: 'profile5.png',
  },
];

export default function Reviews()
{
  const settings = {
    infinite: true, 
    speed: 500, 
    slidesToShow: 3, 
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 3000, 
    arrows: true, 
    dots: true,
    rtl: false, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, 
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1, 
        },
      },
    ],
  };

  return (
    <div className="reviews-container pb-8 px-8 bg-gray-100">
      <h2 className="text-5xl font-bold font-grotesk text-center mb-8">What People Say About Us</h2>
      <Slider {...settings}>
        {reviews.map((review, index) => (
            <div className='p-8'>
            <div
            key={index}
            className="review-card p-4 bg-white border border-blue-400 rounded-lg flex flex-col items-center transition-transform duration-300 transform group hover:scale-105 h-height2 m-2">
            <img
              src={review.profilePic}
              alt={`${review.name}'s profile`}
              className="w-24 h-24 rounded-full mb-4 object-cover"/>
            <p className="text-xl font-semibold">{review.name}</p>
            <p className="text-md text-gray-500">{review.description}</p>
            <p className="text-md italic text-gray-600 mt-4">{review.review}</p>
            <div className="star-rating mt-4">
              {[...Array(3)].map((_, starIndex) => (
                <FaStar
                  key={starIndex}
                  color={starIndex < review.rating ? 'gold' : 'gray'}
                  className="inline-block"/>
              ))}
            </div>
          </div>
            </div>
        ))}
      </Slider>
    </div>
  );
};
