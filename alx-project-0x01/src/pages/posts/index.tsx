import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PostCard from "@/components/common/PostCard";

const Posts: React.FC = () =>{
    return(
        <div>
            {/* <Header/> */}
            <main className="container mx-auto p-4">
                <h1 className="text-4xl font-bold mb-6">Posts</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <PostCard 
                    title="Post 1"
                    content="This is the content 1"
                    author="Claude"
                    />
                    <PostCard 
                    title="Post 2"
                    content="This is the content 2"
                    author="Manu"
                    />
                    <PostCard
                    title="Post 3"
                    content="This is the content 3"
                    author="Jonas"
                    />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Posts;