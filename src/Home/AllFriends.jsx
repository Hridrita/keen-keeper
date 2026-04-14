import React, { use } from 'react';

const friendsPromise = fetch("/friendsData.json")
.then((res) => res.json());


const AllFriends = () => {
    const friends = use(friendsPromise);
    console.log(friends);
    
    return (
        <div className='container mx-auto'>
            <h2 className="font-semibold text-xl">Your Friends</h2>
        </div>
    );
};

export default AllFriends;