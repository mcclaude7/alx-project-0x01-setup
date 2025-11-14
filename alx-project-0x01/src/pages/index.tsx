import React from "react";
import Header from '@/components/layout/Header';
import Footer from "@/components/layout/Footer";
const Home: React.FC = () => {
  return(
    <div>
      <Header />
      <div className="flex justify-center items-center h-screen">
         <h1 className="text-7xl font-thin">Welcome Page</h1>
      </div>
      <Footer />
    </div>
  );
};

export default Home;