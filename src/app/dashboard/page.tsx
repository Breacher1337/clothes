"use client";
import React, { useEffect, useState } from "react";
import { useAuthContext } from "@/context/AuthContext";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import Image from "next/image";
import Topnav from "../components/topnav";
import { firestore } from "@/lib/firebase";

const DashboardPage = () => {
  const { user, loading } = useAuthContext();
  const [userData, setUserData] = useState<any>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState("");

  useEffect(() => {
    if (user) {
      const fetchUserData = async () => {
        const userRef = doc(firestore, "users", user.uid);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          setUserData(userSnap.data());
        }
      };
      fetchUserData();
    }
  }, [user]);

  const handleNameChange = async () => {
    if (user && newName) {
      const userRef = doc(firestore, "users", user.uid);
      await updateDoc(userRef, { displayName: newName });
      setUserData((prevData) => ({ ...prevData, displayName: newName }));
      setIsEditing(false);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <Topnav />
      <div className="flex border-black border-t-2 min-h-[91vh]">
        {/* Left Side: Dashboard Content */}
        <div className="w-1/2 bg-white p-8">
          <h1 className="text-4xl font-bold mb-4">
            Welcome back{user?.displayName ? `, ${user.displayName}` : "!"}
            <button
              onClick={() => setIsEditing(true)}
              className="ml-4 text-sm text-blue-500 underline"
            >
              Edit
            </button>
          </h1>
          {isEditing && (
            <div className="mb-4">
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="border p-2 rounded"
                placeholder="Enter new name"
              />
              <button
                onClick={handleNameChange}
                className="ml-2 p-2 bg-blue-500 text-white rounded"
              >
                Save
              </button>
            </div>
          )}
          <p className="text-lg mb-10">
            This is your dashboard where you can view your profile, update settings, and check recent activity.
          </p>
          <div className="space-y-6">
            <div className="p-4 border rounded-md">
              <h2 className="text-2xl font-semibold">Your Profile</h2>
              <p>Manage your personal information and preferences.</p>
              {user ? (
                <div>
                  <p>
                    <strong>Email:</strong> {user.email}
                  </p>
                  <p>
                    <strong>Name:</strong> {user.displayName || "Not set"}
                  </p>
                  {userData ? (
                    <div>
                      <p>
                        <strong>Style Preference:</strong>{" "}
                        {userData.stylePreference || "Not set"}
                      </p>
                      <p>
                        <strong>Wardrobe Count:</strong>{" "}
                        {userData.wardrobeCount || "0"}
                      </p>
                    </div>
                  ) : (
                    <p>Loading additional user details...</p>
                  )}
                </div>
              ) : (
                <p>No user logged in.</p>
              )}
            </div>
            <div className="p-4 border rounded-md">
              <h2 className="text-2xl font-semibold">Settings</h2>
              <p>Update account settings and security details.</p>
            </div>
            <div className="p-4 border rounded-md">
              <h2 className="text-2xl font-semibold">Recent Activity</h2>
              <p>See your latest interactions and notifications.</p>
            </div>
          </div>
        </div>

        {/* Right Side: Visual Section */}
        <div className="relative flex justify-center items-center w-1/2 bg-[#942D24]">
          <div className="relative">
            <Image
              src={"/Dashboard/Showcase.png"}
              alt="Dashboard Showcase"
              width={300}
              height={300}
              objectFit="contain"
            />
          </div>
          {/* Decorative Elements */}
          <Image
            src={"/Home/tlbr.png"}
            alt="Star Top Left"
            width={150}
            height={150}
            className="absolute top-2 left-20"
          />
          <Image
            src={"/Home/tr.png"}
            alt="Star Top Right"
            width={100}
            height={100}
            className="absolute top-9 right-32"
          />
          <Image
            src={"/Home/bl.png"}
            alt="Star Bottom Left"
            width={80}
            height={80}
            className="absolute bottom-9 left-32"
          />
          <Image
            src={"/Home/tlbr.png"}
            alt="Star Bottom Right"
            width={150}
            height={150}
            className="absolute bottom-2 right-20"
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
