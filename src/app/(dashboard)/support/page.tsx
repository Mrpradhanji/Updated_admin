'use client'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
// import { label } from "@/components/ui/label"
import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button";
import { useContext, useEffect, useState } from "react";
import UserContext from "@/context/userContext";
import { apiPost } from "@/helpers/axiosRequest";
import toast from "react-hot-toast";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  labelId?: string; 
}

export default function Component() {

  const context = useContext(UserContext);
  const labelId = context?.user?._id;


  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
    labelId: ""
  });

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setFormData({ ...formData, labelId });
  }, [labelId])
  


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Basic validation
    if ( !formData.name || !formData.email || !formData.subject || !formData.message ) {
      setError("All fields are required.");
      return;
    }

    
    try {

      const response = await apiPost('/api/support/addSupport', formData)
      
      if (response.success) {
        toast.success("Thank You! We will be in touch with you shortly.")
        setFormData({ name: "", email: "", subject: "", message: "" });
        setFormData({ ...formData, labelId });

      } else {
        toast.error(response.message)
        setError("Failed to send the message. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }


  };

  return (
    <div className="w-full min-h-[80dvh] p-6 bg-white rounded-sm ">
      <div className="space-y-4 mb-8">
        <h1 className="text-3xl font-bold">Support Desk</h1>
        <p className="text-muted-foreground">
          Have a question or need assistance? Fill out the form below and our
          support team will get back to you as soon as possible.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control"
                    required={true}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    required={true}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Briefly describe your issue"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-control"
                  required={true}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  placeholder="Provide more details about your request"
                  value={formData.message}
                  onChange={handleChange}
                  className="min-h-[150px] form-control"
                  required={true}
                />
              </div>
              {error && <p className="text-red-500">{error}</p>}
              <Button type="submit" className="w-full btn btn-primary">
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold">Address</h3>
              <p>
                123 Main St.
                <br />
                Anytown, CA 12345
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p>
                <a href="#">+1 (888) 888-8888</a>
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Email</h3>
              <p>
                <a href="#">support@example.com</a>
              </p>
            </div>
            <div>
              <h3 className="font-semibold">WhatsApp</h3>
              <p>
                <a href="#">support@example.com</a>
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Socials</h3>
              <p>
                <a href="#">support@example.com</a>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
