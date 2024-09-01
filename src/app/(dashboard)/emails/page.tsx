"use client"

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { AlertCircle, Send, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ComposePage: React.FC = () => {
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    if (!to || !subject || !message) {
      setError('Please fill in all fields.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(to)) {
      setError('Please enter a valid email address.');
      return;
    }

    const data = { to, subject, message };

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (result.success) {
        setSuccess(true);
        setTo('');
        setSubject('');
        setMessage('');
      } else {
        setError(result.error || 'An unexpected error occurred.');
      }
    } catch (error) {
      setError('Error sending email.');
      console.error('Error sending email:', error);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg">
      <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-lg">
        <CardTitle className="text-2xl">Compose Email</CardTitle>
        <CardDescription className="text-blue-100">Reach out to your client</CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="to" className="block text-sm font-medium text-gray-700">To</label>
            <input 
              id="to" 
              type="email" 
              placeholder="client@example.com" 
              value={to} 
              onChange={(e) => setTo(e.target.value)}
              className="transition-all duration-200 focus:ring-2 focus:ring-blue-500 w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
            <input 
              id="subject" 
              type="text" 
              placeholder="Email subject" 
              value={subject} 
              onChange={(e) => setSubject(e.target.value)}
              className="transition-all duration-200 focus:ring-2 focus:ring-blue-500 w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea 
              id="message" 
              placeholder="Type your message here." 
              value={message} 
              onChange={(e) => setMessage(e.target.value)}
              className="min-h-[200px] transition-all duration-200 focus:ring-2 focus:ring-blue-500 w-full border border-gray-300 rounded-md p-2"
              required
            />
            <div className="text-sm text-gray-500 text-right">
              {message.length} / 1000 characters
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col items-stretch space-y-4 bg-gray-50 rounded-b-lg p-6">
        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center p-4 bg-red-100 text-red-800 border border-red-300 rounded-md shadow-sm">
                <AlertCircle className="h-4 w-4 mr-2" />
                <span>{error}</span>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="ml-auto" 
                  onClick={() => setError('')}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          )}
          {success && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center p-4 bg-green-100 text-green-800 border border-green-300 rounded-md shadow-sm">
                <span>Your email has been sent successfully!</span>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="ml-auto text-green-800" 
                  onClick={() => setSuccess(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <Button 
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 text-lg py-6"
          onClick={handleSubmit}
        >
          <Send className="mr-2 h-5 w-5" /> Send Email
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ComposePage;
