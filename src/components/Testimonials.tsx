import React from 'react';
import { TestimonialCard } from './testimonials/TestimonialCard';
import { TestimonialForm } from './testimonials/TestimonialForm';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Product Manager at TechCorp',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
    content: 'Working with this developer was an absolute pleasure. Their attention to detail and technical expertise helped us deliver our project ahead of schedule.',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CTO at StartupX',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150',
    content: 'Exceptional problem-solving skills and a great communicator. Delivered high-quality code and went above and beyond our expectations.',
    rating: 5
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Lead Developer at InnovateLabs',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150',
    content: 'A talented developer who brings both technical excellence and creative solutions to every project. Always reliable and professional.',
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">Client Testimonials</h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-semibold text-center mb-8">Share Your Experience</h3>
          <TestimonialForm />
        </div>
      </div>
    </section>
  );
}