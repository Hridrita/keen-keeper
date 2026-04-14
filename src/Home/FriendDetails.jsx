import React from "react";
import { useLoaderData, useParams } from "react-router";
import {
  FiPhone,
  FiMessageSquare,
  FiVideo,
  FiTrash2,
  FiArchive,
  FiClock,
} from "react-icons/fi"; // Icons use korle sundor lagbe

const FriendDetails = () => {
  const { id } = useParams();
  const friends = useLoaderData();
  const expextedFriend = friends.find((friend) => friend.fid == id);

  if (!expextedFriend) return <div>Loading...</div>;

  const {
    name,
    picture,
    email,
    days_since_contact,
    status,
    tags,
    bio,
    goal,
    next_due_date,
  } = expextedFriend;

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-3 space-y-4">
          <div className="bg-white p-6 rounded-2xl shadow-sm text-center border border-gray-100">
            <img
              src={picture}
              alt={name}
              className="w-24 h-24 rounded-full mx-auto object-cover mb-4 ring-4 ring-gray-50"
            />
            <h2 className="text-xl font-bold text-gray-800">{name}</h2>
            <div className="flex justify-center my-2">
              <span
                className={`px-3 py-1 rounded-full text-xs font-bold text-white 
                    ${status === "Overdue" ? "bg-red-500" : status === "Almost Due" ? "bg-orange-400" : "bg-emerald-600"}`}
              >
                {status}
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-2 mt-2">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-green-100 text-green-700 text-[10px] px-2 py-0.5 rounded font-bold uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="italic text-gray-500 text-sm mt-4">"{bio}"</p>
            <p className="text-xs text-gray-400 mt-2">Preferred: {email}</p>
          </div>

          <div className="space-y-2">
            <button className="w-full flex items-center justify-center gap-2 bg-white py-3 rounded-xl shadow-sm border border-gray-50 text-gray-700 hover:bg-gray-50 transition font-medium">
              <FiClock /> Snooze 2 Weeks
            </button>
            <button className="w-full flex items-center justify-center gap-2 bg-white py-3 rounded-xl shadow-sm border border-gray-50 text-gray-700 hover:bg-gray-50 transition font-medium">
              <FiArchive /> Archive
            </button>
            <button className="w-full flex items-center justify-center gap-2 bg-white py-3 rounded-xl shadow-sm border border-gray-50 text-red-500 hover:bg-red-50 transition font-medium">
              <FiTrash2 /> Delete
            </button>
          </div>
        </div>

        <div className="md:col-span-9 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
              <h3 className="text-3xl font-bold text-gray-800">
                {days_since_contact}
              </h3>
              <p className="text-gray-400 text-sm">Days Since Contact</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
              <h3 className="text-3xl font-bold text-gray-800">{goal}</h3>
              <p className="text-gray-400 text-sm">Goal (Days)</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
              <h3 className="text-3xl font-bold text-gray-800">
                {next_due_date}
              </h3>
              <p className="text-gray-400 text-sm">Next Due</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-bold text-gray-700">Relationship Goal</h4>
              <button className="text-xs bg-gray-100 px-3 py-1 rounded text-gray-600 font-bold hover:bg-gray-200">
                Edit
              </button>
            </div>
            <p className="text-gray-600">
              Connect every{" "}
              <span className="font-bold text-black">{goal} days</span>
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center gap-2 cursor-pointer hover:bg-gray-50 transition">
              <FiPhone className="text-2xl text-gray-600" />
              <span className="text-sm font-medium">Call</span>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center gap-2 cursor-pointer hover:bg-gray-50 transition">
              <FiMessageSquare className="text-2xl text-gray-600" />
              <span className="text-sm font-medium">Text</span>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center gap-2 cursor-pointer hover:bg-gray-50 transition">
              <FiVideo className="text-2xl text-gray-600" />
              <span className="text-sm font-medium">Video</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-50 flex justify-between items-center">
              <h4 className="font-bold text-gray-700">Recent Interactions</h4>
              <button className="text-xs text-gray-400 flex items-center gap-1">
                <FiClock /> Full History
              </button>
            </div>
            
            <div className="divide-y divide-gray-50">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="p-4 flex justify-between items-center hover:bg-gray-50 transition"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-gray-100 p-2 rounded-lg">
                      <FiMessageSquare className="text-gray-600" />
                    </div>
                    <div>
                      <p className="font-bold text-sm text-gray-800">Text</p>
                      <p className="text-xs text-gray-400">
                        Asked for career advice
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400">Jan 20, 2026</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
