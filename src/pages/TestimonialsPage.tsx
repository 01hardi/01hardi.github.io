import React from 'react';
import { TestimonialsList } from '../components/testimonials/TestimonialsList';
import { TestimonialForm } from '../components/testimonials/TestimonialForm';

export function TestimonialsPage() {
  return (
    <div className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold text-center mb-16">Client Testimonials</h1>
        <TestimonialsList />
        <div className="mt-20 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-center mb-8">Share Your Experience</h2>
          <TestimonialForm />
        </div>
      </div>
    </div>
  );
}