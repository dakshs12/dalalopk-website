"use client";

import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const object = Object.fromEntries(formData.entries());
    
    // Your exact Web3Forms Access Key
    object.access_key = "cb054157-6b46-4476-84f1-a35cdb3eb905";
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      const result = await response.json();
      
      if (result.success) {
        setStatus("Message Sent Successfully! We will contact you soon.");
        form.reset(); // Clears the form
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Network blocked the confirmation, but your message likely sent. Please check your email or call us.");
    }
  };

  return (
    <main className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* LEFT: Contact Information */}
          <div className="bg-primary p-10 text-white">
            <h1 className="text-3xl font-bold mb-6" style={{ fontFamily: "var(--font-playfair)" }}>Get in Touch</h1>
            <p className="mb-8 text-blue-100 font-light" style={{ fontFamily: "var(--font-poppins)" }}>
              We are always ready to discuss market rates, quality requirements, and new partnerships.
            </p>

            <div className="space-y-6" style={{ fontFamily: "var(--font-poppins)" }}>
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-[#25d366] mt-1" />
                <div>
                  <h3 className="font-bold text-[#25d366]">Office Address</h3>
                  <p className="text-sm leading-relaxed">
                    E-19, Raj Plaza, 23 Sanyogitaganj,<br />
                    Chhawni, Indore (M.P)-452001, India
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-[#25d366] mt-1" />
                <div>
                  <h3 className="font-bold text-[#25d366]">Phone</h3>
                  <p className="font-medium">Vivek Khandelwal: +91 9425082577</p>
                  <p className="font-medium">Vedant Khandelwal: +91 8817022797</p>
                  <p className="text-sm opacity-80 mt-1">Office: +91 (0731)4966659</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-[#25d366] mt-1" />
                <div>
                  <h3 className="font-bold text-[#25d366]">Email</h3>
                  <p>vivekomkhandelwal@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Active Inquiry Form */}
          <div className="p-10" style={{ fontFamily: "var(--font-poppins)" }}>
            <h2 className="text-2xl font-bold text-primary mb-6">Send a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Your Name</label>
                <input type="text" name="name" required className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#25d366] outline-none bg-gray-50" placeholder="Enter your name" />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Phone Number</label>
                <input type="tel" name="phone" required className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#25d366] outline-none bg-gray-50" placeholder="+91..." />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Requirement</label>
                <textarea name="message" required rows={4} className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#25d366] outline-none bg-gray-50" placeholder="I am interested in buying/selling..." />
              </div>
              
              <button type="submit" className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-[#25d366] transition shadow-md">
                {status ? status : "Send Inquiry"}
              </button>
            </form>

          </div>
        </div>
      </div>
    </main>
  );
}