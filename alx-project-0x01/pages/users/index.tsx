import React from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import UserCard from "../../components/common/UserCard";
import { UserProps } from "../../interfaces";

interface UsersPageProps {
    posts: UserProps[];
}

const Users = ({posts}: UsersPageProps)=>{
    return(
        <div>
            <Header />
            <main className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {posts.map((user) =>(
                    <UserCard key={user.id}{...user}/>
                ))}
            </main>
            <Footer />
        </div>
    );
};


// const Users: React.FC = () =>{
//     return(
//         <div>
//             <Header/>
//             <main className="container mx-auto p-4">
//                 <h1 className="text-4xl font-bold mb-6">Users</h1>
//                 <div className="space-y-6">
//                     <div className="border rounded-lg p-4">
//                         <h2 className="text-xl font-semibold">J.Doe</h2>
//                         <p className="text-gray-600">j.doe@exemple.com</p>
//                     </div>
//                     <div className="border rounded-lg p-4">
//                         <h2 className="text-xl font-semibold">J.manu</h2>
//                         <p className="text-gray-600">j.manu@example.com</p>
//                     </div>
//                 </div>
//             </main>
//             <Footer/>
//         </div>             
//     );
// };

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const posts = await response.json()

  return {
    props: {
      posts
    }
  }
}
export default Users;    
