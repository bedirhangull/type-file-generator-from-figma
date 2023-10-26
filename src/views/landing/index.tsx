import { useContext, useEffect } from "react";
import { Router } from "../../store/context";

const Landing = () => {

    const { path, setPath } = useContext(Router);

    useEffect(() => {
        setTimeout(() => {
            setPath('dashboard')
        }, 2000);
    },[])
    
    return (
        <div className="h-full w-full flex items-center justify-center bg-slate-900 text-white">
            {/* logo here */}
            <h1 className="text-3xl font-bold text-white">Typetor</h1>
        </div>
    )
}

export default Landing;
