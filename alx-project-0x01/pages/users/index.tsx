import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Users: React.FC = () =>{
    return(
        <div>
            <Header/>
            <main className="container mx-auto p-4">
                <h1 className="text-4xl font-bold mb-6">Users</h1>
                <div className="space-y-6">
                    <div className="border rounded-lg p-4">
                        <h2 className="text-xl font-semibold">J.Doe</h2>
                        <p className="text-gray-600">j.doe@exemple.com</p>
                    </div>
                    <div className="border rounded-lg p-4">
                        <h2 className="text-xl font-semibold">J.manu</h2>
                        <p className="text-gray-600">j.manu@example.com</p>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>             
    );
};
export default Users;    
// creating users     