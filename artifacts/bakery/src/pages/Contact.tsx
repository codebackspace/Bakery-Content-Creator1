import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { ContactForm } from '../types';

const Contact: React.FC = () => {
  const [form, setForm] = useState<ContactForm>({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section
        className="relative py-28 bg-center bg-cover"
        style={{ backgroundImage: 'url(https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg)' }}
      >
        <div className="absolute inset-0 bg-black/55"></div>
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-3">Contact Us</h1>
          <p className="text-amber-200 text-lg max-w-xl mx-auto">
            Have a question, a custom order, or just want to say hi? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-amber-900 mb-6">Find Us</h2>

              <div className="space-y-5 mb-8">
                {[
                  { Icon: MapPin, label: 'Address', value: '42 Baker Street, Dhaka 1200, Bangladesh' },
                  { Icon: Phone, label: 'Phone', value: '+880 1700-000000' },
                  { Icon: Mail, label: 'Email', value: 'hello@sweetcrumbs.com' },
                  { Icon: Clock, label: 'Hours', value: 'Mon–Sat: 7 AM – 8 PM  |  Sun: 8 AM – 6 PM' },
                ].map(({ Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm">
                    <div className="p-2 bg-amber-100 rounded-lg">
                      <Icon className="h-5 w-5 text-amber-700" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-amber-600 uppercase tracking-wider mb-0.5">{label}</p>
                      <p className="text-gray-700">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-xl overflow-hidden shadow-md h-56 bg-gray-200">
                <img
                  src="https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg"
                  alt="Bakery storefront"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-2xl shadow-md p-8">
              <h2 className="text-2xl font-serif font-bold text-amber-900 mb-6">Send a Message</h2>

              {submitted ? (
                <div className="text-center py-10">
                  <div className="text-5xl mb-4">🥐</div>
                  <h3 className="text-xl font-semibold text-amber-900 mb-2">Thank you!</h3>
                  <p className="text-gray-500">We've received your message and will get back to you within 24 hours.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-amber-700 underline text-sm"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <Input
                    label="Your Name"
                    id="name"
                    name="name"
                    value={form.name}
                    placeholder="Rahim Uddin"
                    onChange={handleChange}
                    required
                  />
                  <Input
                    label="Email Address"
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    placeholder="rahim@example.com"
                    onChange={handleChange}
                    required
                  />
                  <Input
                    label="Message"
                    id="message"
                    name="message"
                    as="textarea"
                    value={form.message}
                    placeholder="Tell us about your custom order or question..."
                    onChange={handleChange}
                    rows={5}
                    required
                  />
                  <Button type="submit" variant="primary" fullWidth size="lg">
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
