import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Briefcase, Heart, User, Settings, CreditCard, Search } from 'lucide-react';

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('search');

    const tabs = [
        { id: 'search', label: 'Search Jobs', icon: Search },
        { id: 'saved', label: 'Saved Jobs', icon: Heart },
        { id: 'applied', label: 'Applied Jobs', icon: Briefcase },
        { id: 'profile', label: 'Profile', icon: User },
        { id: 'settings', label: 'Settings', icon: Settings },
        { id: 'billing', label: 'Billing', icon: CreditCard },
    ];

    return (
        <div>
            <Navbar />

            <div className="min-h-screen bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="grid md:grid-cols-4 gap-8">
                        {/* Sidebar */}
                        <div className="md:col-span-1">
                            <div className="card">
                                <nav className="space-y-2">
                                    {tabs.map((tab) => (
                                        <button
                                            key={tab.id}
                                            onClick={() => setActiveTab(tab.id)}
                                            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition ${activeTab === tab.id
                                                    ? 'bg-primary-yellow text-primary-dark font-semibold'
                                                    : 'text-gray-700 hover:bg-gray-100'
                                                }`}
                                        >
                                            <tab.icon size={20} />
                                            <span>{tab.label}</span>
                                        </button>
                                    ))}
                                </nav>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="md:col-span-3">
                            {activeTab === 'search' && (
                                <div>
                                    <h2 className="text-2xl font-bold text-primary-dark mb-6">Search Jobs</h2>
                                    <div className="card">
                                        <p className="text-gray-600 mb-4">
                                            Use the search bar at the top to find your next opportunity!
                                        </p>
                                        <a
                                            href="/jobs"
                                            className="inline-block btn-primary"
                                        >
                                            Start Job Search
                                        </a>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'saved' && (
                                <div>
                                    <h2 className="text-2xl font-bold text-primary-dark mb-6">Saved Jobs</h2>
                                    <div className="card">
                                        <div className="text-center py-12">
                                            <Heart size={48} className="mx-auto text-gray-300 mb-4" />
                                            <p className="text-gray-600">No saved jobs yet</p>
                                            <p className="text-sm text-gray-500 mt-2">
                                                Start browsing and save jobs you're interested in
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'applied' && (
                                <div>
                                    <h2 className="text-2xl font-bold text-primary-dark mb-6">Applied Jobs</h2>
                                    <div className="card">
                                        <div className="text-center py-12">
                                            <Briefcase size={48} className="mx-auto text-gray-300 mb-4" />
                                            <p className="text-gray-600">No applications yet</p>
                                            <p className="text-sm text-gray-500 mt-2">
                                                Your job applications will appear here
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'profile' && (
                                <div>
                                    <h2 className="text-2xl font-bold text-primary-dark mb-6">Profile</h2>
                                    <div className="card">
                                        <form className="space-y-6">
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                                        First Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder="John"
                                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-yellow"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                                        Last Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder="Doe"
                                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-yellow"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Email
                                                </label>
                                                <input
                                                    type="email"
                                                    placeholder="john@example.com"
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-yellow"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Phone
                                                </label>
                                                <input
                                                    type="tel"
                                                    placeholder="+1 (555) 000-0000"
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-yellow"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Current Visa Status
                                                </label>
                                                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-yellow">
                                                    <option>Select visa status</option>
                                                    <option>H-1B</option>
                                                    <option>OPT/CPT</option>
                                                    <option>Green Card</option>
                                                    <option>TN</option>
                                                    <option>E-3</option>
                                                    <option>J-1</option>
                                                </select>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Location
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="City, State"
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-yellow"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Resume
                                                </label>
                                                <input
                                                    type="file"
                                                    accept=".pdf,.doc,.docx"
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-yellow"
                                                />
                                            </div>

                                            <button type="submit" className="btn-primary">
                                                Save Profile
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'settings' && (
                                <div>
                                    <h2 className="text-2xl font-bold text-primary-dark mb-6">Settings</h2>
                                    <div className="card">
                                        <div className="space-y-6">
                                            <div>
                                                <h3 className="font-semibold text-gray-900 mb-4">Email Preferences</h3>
                                                <div className="space-y-3">
                                                    <label className="flex items-center">
                                                        <input type="checkbox" className="mr-3" defaultChecked />
                                                        <span className="text-gray-700">Job alerts (daily)</span>
                                                    </label>
                                                    <label className="flex items-center">
                                                        <input type="checkbox" className="mr-3" defaultChecked />
                                                        <span className="text-gray-700">New job recommendations</span>
                                                    </label>
                                                    <label className="flex items-center">
                                                        <input type="checkbox" className="mr-3" />
                                                        <span className="text-gray-700">Newsletter and updates</span>
                                                    </label>
                                                </div>
                                            </div>

                                            <div className="border-t pt-6">
                                                <h3 className="font-semibold text-gray-900 mb-4">Account Actions</h3>
                                                <button className="text-red-600 hover:text-red-700 font-semibold">
                                                    Delete Account
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'billing' && (
                                <div>
                                    <h2 className="text-2xl font-bold text-primary-dark mb-6">Billing</h2>
                                    <div className="space-y-6">
                                        {/* Current Plan */}
                                        <div className="card">
                                            <h3 className="font-semibold text-gray-900 mb-4">Current Plan</h3>
                                            <div className="flex justify-between items-center mb-4">
                                                <div>
                                                    <p className="text-2xl font-bold text-primary-dark">$30 / month</p>
                                                    <p className="text-gray-600">Pro Plan</p>
                                                </div>
                                                <span className="px-3 py-1 bg-accent-green text-white rounded-full text-sm font-medium">
                                                    Active
                                                </span>
                                            </div>
                                            <p className="text-sm text-gray-600 mb-4">
                                                Next billing date: January 15, 2025
                                            </p>
                                            <button className="text-red-600 hover:text-red-700 font-semibold">
                                                Cancel Subscription
                                            </button>
                                        </div>

                                        {/* Payment Method */}
                                        <div className="card">
                                            <h3 className="font-semibold text-gray-900 mb-4">Payment Method</h3>
                                            <div className="flex items-center space-x-4 mb-4">
                                                <div className="w-12 h-8 bg-gray-200 rounded flex items-center justify-center">
                                                    💳
                                                </div>
                                                <div>
                                                    <p className="font-medium">•••• •••• •••• 4242</p>
                                                    <p className="text-sm text-gray-600">Expires 12/25</p>
                                                </div>
                                            </div>
                                            <button className="text-accent-blue hover:underline font-semibold">
                                                Update Payment Method
                                            </button>
                                        </div>

                                        {/* Invoice History */}
                                        <div className="card">
                                            <h3 className="font-semibold text-gray-900 mb-4">Invoice History</h3>
                                            <div className="space-y-3">
                                                {[
                                                    { date: 'Dec 15, 2024', amount: '$30.00', status: 'Paid' },
                                                    { date: 'Nov 15, 2024', amount: '$30.00', status: 'Paid' },
                                                    { date: 'Oct 15, 2024', amount: '$0.00', status: 'Trial' },
                                                ].map((invoice, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="flex justify-between items-center py-3 border-b last:border-b-0"
                                                    >
                                                        <div>
                                                            <p className="font-medium">{invoice.date}</p>
                                                            <p className="text-sm text-gray-600">{invoice.status}</p>
                                                        </div>
                                                        <div className="text-right">
                                                            <p className="font-semibold">{invoice.amount}</p>
                                                            <a href="#" className="text-sm text-accent-blue hover:underline">
                                                                Download
                                                            </a>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Dashboard;
