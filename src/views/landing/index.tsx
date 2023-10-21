import { useContext } from "react";
import { Router } from "../../store/context";

const Landing = () => {

    const { path, setPath } = useContext(Router);
    
    return (
        <div onClick={() => setPath('dashboard')} className="h-12 w-12 bg-red-400  flex flex-col justify-start items-center">
            <h1>Landing page: {path}</h1>
        </div>
    )
}

export default Landing;
