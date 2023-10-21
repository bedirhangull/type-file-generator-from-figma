import { useContext } from "react";
import { Router } from "../../store/context";

const Dashboard = () => {

    const { path, setPath } = useContext(Router);
    
    return (
        <div className="h-12 w-12 bg-red-400  flex flex-col justify-start items-center">
            <h1>Dashboard page: {path}</h1>
        </div>
    )
}

export default Dashboard;
