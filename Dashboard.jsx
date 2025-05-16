import React from "react";
import{Box, User2, Info, ArrowDownCircle, Users} from "lucide-react"


const Dashboard = () => {
  

  return (
    <div className="">
        <div className="shadow-md shadow-black bg-gray-100 p-6 ">
            <button className="px-20 py-2  text-black rounded-xl hover:bg-blue-600 transition mr-4"><Box size={24}/>PRODUCT</button>
            <button className="px-20 py-2  text-black rounded-xl hover:bg-blue-600 transition mr-4"><User2 size={24}/>SUPPLIER</button>
            <button className="px-20 py-2  text-black rounded-xl hover:bg-blue-600 transition mr-4"><Info size={25}/>ABOUT</button>
            <button className="px-20 py-2  text-black rounded-xl hover:bg-blue-600 transition mr-4"><Users size={26}/>CUSTOMER</button>
            <button className="px-20 py-2  text-black rounded-xl hover:bg-blue-600 transition mr-4"><ArrowDownCircle size={25}/>BORROW</button>
        </div>
    </div>
  );
};
 
export default Dashboard;
