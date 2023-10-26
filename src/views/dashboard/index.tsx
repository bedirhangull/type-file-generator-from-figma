import { useContext } from "react";
import { Router } from "../../store/context";

const Dashboard = () => {

    const { path, setPath } = useContext(Router);
    
    return (
        <div className="h-full w-full">
            <h1 className="text-3xl">Dashboard page: {path}</h1>
        </div>
    )
}

export default Dashboard;
