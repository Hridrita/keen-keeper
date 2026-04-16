import React, { useContext } from "react";
import { friendContext } from "../Context/FriendContext";
import { FiPhone, FiMessageSquare, FiVideo } from "react-icons/fi";

const Timeline = () => {
  const { timeline } = useContext(friendContext);
  console.log(timeline);

  const icons = {
    Call: <FiPhone className="text-pink-500" />,
    Text: <FiMessageSquare className="text-purple-400" />,
    Video: <FiVideo className="text-gray-600" />,
  };

  return (
    <div className="container mx-auto mt-20 max-w-7xl">
      <h2 className="text-2xl font-bold">Timeline</h2>
      {timeline.map((friend, ind) => (
        <div className="flex gap-6 items-center bg-base-100 shadow-sm  m-3 p-5 rounded-xl" key={ind}>
          <div>
            {icons[friend.type]}
            </div>

          <div>
            <p>
              <span>{friend.type}</span> with {friend.name}
            </p>
            <p className="text-sm text-gray-400">{friend.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
