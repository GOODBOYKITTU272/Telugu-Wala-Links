import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Check, Star } from 'lucide-react';

const Signup = () => {
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleEmailSubmit = (e) => {
        e.preventDefault();
        setStep(2);
    };

    const handleCheckout = () => {
        // Here you would redirect to Stripe checkout
        alert('Redirecting to secure checkout...');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black opacity-30"></div>

            <div className="relative card max-w-2xl w-full">
                {/* Logo */}
                <div className="text-center mb-8">
                    <Link to="/" className="inline-flex items-center space-x-2">
                        <div className="w-12 h-12 bg-primary-yellow rounded-lg flex items-center justify-center">
                            <span className="text-primary-dark font-bold text-2xl">TW</span>
                        </div>
                        <span className="font-bold text-xl text-primary-dark">Telugu Wala Links</span>
                    </Link>
                </div>

                {step === 1 ? (
                    // Step 1: Email Capture
                    <div>
                        <h1 className="text-3xl font-bold text-primary-dark mb-4 text-center">
                            Get Access to 500,000+ Jobs
                        </h1>
                        <p className="text-gray-600 text-center mb-8">
                            Start your 30-day free trial today
                        </p>

                        <form onSubmit={handleEmailSubmit} className="space-y-6">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-yellow text-lg"
                            />

                            <button type="submit" className="w-full btn-primary text-lg">
                                Continue
                            </button>
                        </form>

                        <div className="mt-6 text-center">
                            <p className="text-gray-600">
                                Already have an account?{' '}
                                <Link to="/login" className="text-accent-blue font-semibold hover:underline">
                                    Log in
                                </Link>
                            </p>
                        </div>
                    </div>
                ) : (
                    // Step 2: Pre-Checkout
                    <div>
                        <h1 className="text-3xl font-bold text-primary-dark mb-4 text-center">
                            Ready to see all 500,000+ open roles?
                        </h1>

                        <div className="bg-gray-50 rounded-lg p-6 mb-6">
                            <p className="text-center text-xl font-semibold text-primary-dark mb-4">
                                30-day free trial, then $30USD/month
                            </p>

                            <div className="space-y-3">
                                {[
                                    '500,000+ verified open roles',
                                    'H-1B, OPT/CPT, TN, E-3, J-1 & Green Cards',
                                    'Constantly updated with new jobs',
                                    'Salary & company info for every role',
                                    'Verified email of a real company contact',
                                    'Cancel anytime',
                                ].map((feature, index) => (
                                    <div key={index} className="flex items-center space-x-3">
                                        <Check className="w-5 h-5 text-accent-green flex-shrink-0" />
                                        <span className="text-gray-700">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Testimonial */}
                        <div className="border-l-4 border-primary-yellow bg-gray-50 p-4 mb-6">
                            <div className="flex mb-2">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-primary-yellow fill-current" />
                                ))}
                            </div>
                            <p className="text-gray-700 italic text-sm mb-2">
                                "This platform helped me land my dream job at Microsoft! Highly recommended!"
                            </p>
                            <p className="text-sm font-semibold text-gray-800">- Rajesh K., Software Engineer</p>
                        </div>

                        <button
                            onClick={handleCheckout}
                            className="w-full btn-primary text-lg mb-4"
                        >
                            Checkout
                        </button>

                        <p className="text-center text-sm text-gray-500">
                            Email: {email}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Signup;
