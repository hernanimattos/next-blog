import * as React from 'react';
import PostCard from '../components/PostCard';

const MainContainer: React.FC = ({ children }) => {
    return (
        <div className=" my-12 mx-auto px-4">
            <div className="flex flex-wrap -mx-1 lg:-mx-4">
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
            </div>
        </div>
    );
};

export default MainContainer;
