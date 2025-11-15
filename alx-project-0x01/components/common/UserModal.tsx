import React, { useState } from "react";
import { UserData, UserModalProps } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState<UserData>({
    id: Date.now(),
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: { lat: "", lng: "" },
    },
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  if (!isOpen) return null;

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-lg">
        <h2 className="text-xl font-semibold mb-4">Add New User</h2>

        <input
          className="border p-2 rounded w-full mb-3"
          placeholder="Name"
          onChange={(e) => handleChange("name", e.target.value)}
        />

        <input
          className="border p-2 rounded w-full mb-3"
          placeholder="Username"
          onChange={(e) => handleChange("username", e.target.value)}
        />

        <input
          className="border p-2 rounded w-full mb-3"
          placeholder="Email"
          onChange={(e) => handleChange("email", e.target.value)}
        />

        <input
          className="border p-2 rounded w-full mb-3"
          placeholder="Phone"
          onChange={(e) => handleChange("phone", e.target.value)}
        />

        <input
          className="border p-2 rounded w-full mb-3"
          placeholder="Website"
          onChange={(e) => handleChange("website", e.target.value)}
        />

        <div className="flex justify-end gap-4 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={() => onSubmit(formData)}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Add User
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
