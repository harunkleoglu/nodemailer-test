'use client'
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    subject: '',
    text: '',
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Send Email</h1>
      <form
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
        onSubmit={async (e) => {
          e.preventDefault();
          const response = await fetch('/api/send-mail', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
          const data = await response.json();
          console.log(data);
        }}
      >
        <div className="mb-4">
          <input
            type="text"
            placeholder="Subject"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Text"
            value={formData.text}
            onChange={(e) => setFormData({ ...formData, text: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Send Email
        </button>
      </form>
    </div>
  );
}
