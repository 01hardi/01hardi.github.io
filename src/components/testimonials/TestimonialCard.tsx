import React from 'react';
import { Star } from 'lucide-react';
import { TestimonialData } from './types';

type TestimonialCardProps = Omit<TestimonialData, 'id'>;

export function TestimonialCard({ name, role, image, content, rating }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="flex items-center mb-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
      
      <div className="flex mb-4">
        {[...Array(rating)].map((_, index) => (
          <Star
            key={index}
            className="w-5 h-5 text-yellow-400 fill-current"
          />
        ))}
      </div>
      
      <p className="text-gray-700 italic">{content}</p>
    </div>
  );
}