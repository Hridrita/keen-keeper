import React, { use } from 'react';
import AllCard from './AllCard';

const friendsPromise = fetch("/friendsData.json")
.then((res) => res.json());


const AllFriends = () => {
    const friends = use(friendsPromise);
    console.log(friends);
    
    return (
        <div className='container mx-auto'>
            <h2 className="font-semibold text-xl mb-4">Your Friends</h2>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                {
                    friends.map(friend => <AllCard key={friend.id} friend={friend}></AllCard>)
                }
            </div>
        </div>
    );
};

export default AllFriends;