import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}