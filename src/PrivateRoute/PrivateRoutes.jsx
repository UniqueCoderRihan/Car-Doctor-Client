import { useContext } from "react";
import { AuthContex } from "../Providers/AuthProvider";

const PrivateRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContex);

    if(loading){
        return <p>Loading.................</p>
    }

    if(user?.email){
        return children;
    }
    return (
        <div>
            
        </div>
    );
};

export default PrivateRoutes;