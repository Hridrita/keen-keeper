import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const friendContext = createContext();

const FriendProvider = ({ children }) => {

    const [timeline, setTimeline] = useState([]);

  const handleTimelineCall = (currentfriend) =>{
    console.log(currentfriend);

    const allTypes = {
        name: currentfriend.name,
        type: "Call",
        date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
        iconType: "phone"
    }
     
    toast.success(`Call with ${currentfriend.name}`);
    setTimeline([...timeline, allTypes]);
    console.log(timeline);
  };

  const handleTimelineText = (currentfriend) =>{
    console.log(currentfriend);

    const allTypes = {
        name: currentfriend.name,
        type: "Text",
        date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
        
    }
     
    toast.success(`Text with ${currentfriend.name}`);
    setTimeline([...timeline, allTypes]);
    console.log(timeline);
  };

  const handleTimelineVideo = (currentfriend) =>{
    console.log(currentfriend);

    const allTypes = {
        name: currentfriend.name,
        type: "Video",
        date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
        iconType: "video"
    }
     
    toast.success(`Video with ${currentfriend.name}`);
    setTimeline([...timeline, allTypes]);
    console.log(timeline);
  };


    const data = {
        timeline,
        setTimeline,
        handleTimelineCall,
        handleTimelineText,
        handleTimelineVideo
    }
    return (
        <friendContext.Provider value={data}>
            {children}
        </friendContext.Provider>
    );
};

export default FriendProvider;