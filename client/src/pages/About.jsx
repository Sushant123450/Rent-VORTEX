import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import { AppContext } from "../context/AppContext";

const AboutUs = () => {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white text-center py-20">
        <h1 className="text-4xl font-extrabold">About Rent Vortex</h1>
        <p className="mt-4 text-lg">Your Trusted Partner for Reliable Car Rentals</p>
      </section>

      {/* About Section */}
      <section className="py-16 px-4">
        <div className="max-w-screen-lg mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">What is Rent Vortex?</h2>
          <p className="text-lg">
            Rent Vortex is a premium car rental service dedicated to providing customers with a seamless, flexible, and
            affordable car rental experience. Whether you're looking for a short-term rental for a weekend getaway or a long-term
            solution for your business needs, Rent Vortex offers a variety of well-maintained vehicles to suit every need.
          </p>
        </div>
      </section>

      {/* Merits Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-screen-lg mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Why Choose Rent Vortex?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Wide Range of Vehicles</h3>
              <p className="mt-2">From compact cars to luxury vehicles, we have the perfect car for your trip.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Flexible Rental Plans</h3>
              <p className="mt-2">Choose from daily, weekly, or monthly rental plans that suit your needs and budget.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Affordable Prices</h3>
              <p className="mt-2">Our competitive pricing ensures you get great value for your money without compromising on quality.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">24/7 Customer Support</h3>
              <p className="mt-2">Our dedicated customer support team is available 24/7 to assist you with any questions or concerns.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Easy Online Booking</h3>
              <p className="mt-2">Book your car rental easily through our website or mobile app, anytime, anywhere.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Free Delivery & Pickup</h3>
              <p className="mt-2">We offer free delivery and pickup services, so you don’t have to worry about getting to us.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section className="py-16 px-4">
        <div className="max-w-screen-lg mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Fleet</h2>
          <p className="text-lg mb-6">
            At Rent Vortex, we take pride in offering a diverse fleet of vehicles. Whether you're looking for an economy car,
            a family SUV, or a luxury sedan, we’ve got you covered.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src="https://via.placeholder.com/350x200?text=Economy+Car"
                alt="Economy Car"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold">Economy Cars</h3>
              <p className="mt-2 text-gray-600">Perfect for city driving and budget-friendly travel.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src="https://via.placeholder.com/350x200?text=Luxury+Car"
                alt="Luxury Car"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold">Luxury Cars</h3>
              <p className="mt-2 text-gray-600">Drive in style with our premium range of luxury vehicles.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src="https://via.placeholder.com/350x200?text=SUV"
                alt="SUV"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold">SUVs</h3>
              <p className="mt-2 text-gray-600">Ideal for families or adventure trips with extra space and comfort.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-gray-50">
  <div className="max-w-screen-lg mx-auto text-center">
    <h2 className="text-3xl font-bold mb-8">Meet Our Team</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
      {/* John Doe's Card */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <img
          src="https://via.placeholder.com/150"
          alt="Team Member"
          className="w-32 h-32 rounded-full mx-auto"
        />
        <h3 className="text-xl font-semibold mt-4">John Doe</h3>
        <p className="mt-2 text-gray-600">Founder & CEO</p>
      </div>

      {/* Sarah Miller's Card with Transition Effect */}
      <div className="bg-white p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-110">
        <img
          src="https://via.placeholder.com/150"
          alt="Team Member"
          className="w-32 h-32 rounded-full mx-auto"
        />
        <h3 className="text-xl font-semibold mt-4">Sarah Miller</h3>
        <p className="mt-2 text-gray-600">Operations Manager</p>
      </div>

      {/* David Green's Card */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <img
          src="https://via.placeholder.com/150"
          alt="Team Member"
          className="w-32 h-32 rounded-full mx-auto"
        />
        <h3 className="text-xl font-semibold mt-4">David Green</h3>
        <p className="mt-2 text-gray-600">Customer Support Specialist</p>
      </div>
    </div>
  </div>
</section>



      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center py-6">
        <p>&copy; 2024 Rent Vortex. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUs;
