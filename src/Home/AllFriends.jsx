import React, { use } from 'react';

const friendsPromise = fetch("/friendsData.json")
.then((res) => res.json());


const AllFriends = () => {
    const friends = use(friendsPromise);
    console.log(friends);
    
    return (
        <div>
            
        </div>
    );
};

export default AllFriends;