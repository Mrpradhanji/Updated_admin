"use client";

import React, { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { apiPost } from "@/helpers/axiosRequest";
import toast from "react-hot-toast";

interface FormData {
  username: string;
  email: string;
  contact: string;
  usertype: "normal" | "super";
  isLable: boolean;
  lable: string;
}

const LabelRegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    contact: "",
    usertype: "super", // default value
    isLable: true,
    lable: "",
  });

  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "radio" && name === "usertype") {
      const isNormal = value === "normal";
      setFormData({
        ...formData,
        usertype: value as "normal" | "super",
        isLable: !isNormal,
        lable: isNormal ? "SwaLay Digital" : "",
      });
    } else if (type === "checkbox") {
      const { checked } = e.target as HTMLInputElement;
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    toast.loading("Creating account");
    // Validation
    if (!formData.username.trim()) {
      toast.error("Username is required");
      return;
    }

    if (!formData.email.trim()) {
      toast.error("Email is required");
      return;
    }

    if (!formData.contact.trim()) {
      toast.error("Contact is required");
      return;
    }
    if (formData.usertype === 'super' && !formData.lable.trim()) {
      toast.error("Record Label Name is required");
      return;
    }
    
    if (formData.usertype === 'normal') {
      setFormData({
        ...formData,
        lable: 'SwaLay Digital', 
      });
    }
    

    console.log("formData");
    console.log(formData);

    try {
      const response = await apiPost("/api/labels/addLabel", formData);
      if (response.success) {
        toast.success("Label registered successfully!");
        router.push("/labels");
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      console.error("Error registering label:", error);
      toast.error("Failed to register label. Please try again.");
    }

  };

  return (
    <div
      className="w-full h-full p-6 bg-white rounded-sm"
      style={{ minHeight: "90vh" }}
    >
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Labels</BreadcrumbPage>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Register</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <h1 className="text-3xl font-bold mb-4 mt-5 text-blue-600">
        Register label
      </h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label className="block text-sm font-medium mb-2 text-gray-700">
            Username:
          </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="form-control"
            placeholder="Write username"
            required
          />
        </div>
        <div className="mb-2">
          <label className="block text-sm font-medium mb-2 text-gray-700">
            Email:
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            required
            placeholder="Write Email"
          />
        </div>

        <div className="mb-2">
          <label className="block text-sm font-medium mb-2 text-gray-700">
            Contact:
          </label>
          <input
            type="number"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            className="form-control"
            required
            placeholder="Write Contact Number"
          />
        </div>

        <div className="mb-2">
          <label className="block text-sm font-medium mb-2 text-gray-700">
            User Type:
          </label>
          <div className="flex items-center space-x-4">
            <label className="inline-flex items-center me-5 cursor-pointer">
              <input
                type="radio"
                name="usertype"
                value="normal"
                checked={formData.usertype === "normal"}
                onChange={handleChange}
                className="form-radio text-blue-600"
              />
              <span className="ml-2 text-gray-700">Normal</span>
            </label>
            <label className="inline-flex items-center ms-5 cursor-pointer">
              <input
                type="radio"
                name="usertype"
                value="super"
                checked={formData.usertype === "super"}
                onChange={handleChange}
                className="form-radio text-blue-600"
              />
              <span className="ml-2 text-gray-700">Super</span>
            </label>
          </div>
        </div>

        <div className="mb-2">
          <label className="block text-sm font-medium mb-2 text-gray-700">
            Record Label Name:
          </label>
          <input
            type="text"
            name="lable"
            value={formData.lable}
            onChange={handleChange}
            disabled={!formData.isLable}
            className="form-control"
            placeholder="Write record label name"
          />
        </div>
        <button
          type="submit"
          className="mt-5 px-3 py-2 bg-blue-500 rounded text-white"
        >
          Register Label
        </button>
      </form>
    </div>
  );
};

export default LabelRegistrationForm;
