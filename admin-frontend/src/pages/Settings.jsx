import React, { useState } from "react";

export default function Settings() {
  const [siteTitle, setSiteTitle] = useState("NutriFit Admin");
  const [email, setEmail] = useState("admin@nutrifit.com");

  const handleSave = () => {
    alert("Settings saved successfully!");
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Admin Settings</h2>
      <div className="bg-white shadow rounded-lg p-6 max-w-lg">
        <div className="mb-4">
          <label className="block font-semibold mb-2">Site Title</label>
          <input
            type="text"
            value={siteTitle}
            onChange={(e) => setSiteTitle(e.target.value)}
            className="w-full border rounded-md p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-2">Admin Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-md p-2"
          />
        </div>
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Save Settings
        </button>
      </div>
    </div>
  );
}
