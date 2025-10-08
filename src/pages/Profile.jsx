import { useState } from "react";
import DashboardLayout from "../components/DashboardLayout";

export default function ProfilePage() {
  const [name, setName] = useState("Sepo Nicole Nalungwe");
  const [location, setLocation] = useState("Lusaka, Zambia");
  const [bio, setBio] = useState(
    "Aspiring Front-End Developer passionate about creativity, clean design, and meaningful tech."
  );
  const [profilePic, setProfilePic] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSave = () => {
    alert("Profile updated successfully!");
  };

  return (
    <DashboardLayout>
      <div className="flex justify-center items-center py-10">
        <div className="w-full max-w-2xl p-6 rounded-2xl shadow-md bg-white/60 backdrop-blur-md">
          <h1 className="text-3xl font-semibold text-center mb-6 text-gray-800">
            My Profile
          </h1>

          <div className="flex flex-col items-center gap-4">
            <div className="relative w-32 h-32">
              {preview ? (
                <img
                  src={preview}
                  alt="Profile Preview"
                  className="w-full h-full object-cover rounded-full border-4 border-rose-200 shadow-md"
                />
              ) : (
                <div className="w-full h-full rounded-full bg-rose-100 flex items-center justify-center text-gray-500 text-sm border-2 border-dashed border-gray-300">
                  No Image
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
            </div>

            <div className="w-full flex flex-col gap-4 mt-4">
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-300 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Location
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-300 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Bio</label>
                <textarea
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  rows="3"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-300 focus:outline-none resize-none"
                />
              </div>

              <button
                onClick={handleSave}
                className="bg-rose-400 hover:bg-rose-500 text-white font-semibold py-2 mt-4 rounded-xl transition-all shadow-sm"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
