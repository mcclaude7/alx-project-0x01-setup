
import { useState } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import UserCard from "../../components/common/UserCard";
import UserModal from "../../components/common/UserModal";
import { UserProps, UserData } from "../../interfaces";


interface UsersPageProps {
    posts: UserProps[];
}

const Users = ({posts}: UsersPageProps)=>{
    const [users, setUsers] = useState(posts);
    const [isModalOpen, setModalOpen] = useState(false);

    const handleAddUser = (newUser: UserData) => {
        setUsers([...users, newUser]);
        setModalOpen(false);
    };
    return( 
        <div>
            <Header />
            <main>
                <div  className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {posts.map((user) =>(
                    <UserCard key={user.id}{...user}/>
                    ))}

                </div>



                <div className="flex justify-between items-center mx-auto px-36 mb-6">
                    <h1 className="text-3xl font-semibold">Users</h1>
                    <button onClick={() => setModalOpen(true)}
                     className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    > Add User </button>
                </div>

                <div  className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {users.map((user) => (
                         <UserCard key={user.id} {...user} />
                         ))}
                </div>
                <UserModal
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
                onSubmit={handleAddUser}/>
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
      posts,
    },
  };
}
export default Users;    
