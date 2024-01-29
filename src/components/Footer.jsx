import { useContext } from "react";
import userContext from "../utils/userContext";

function Footer() {

  const {user} = useContext(userContext);

  return (

    <div className= " text-center bg-[#0A0C0B] text-[#E4AE74] h-15 rounded-t-lg">
    <h5>This webside is created by: <span className="font-bold text-white">{user.name}</span> </h5>
    <h5>Contact us at <span className="font-bold text-white">{user.email}</span> for any support</h5>
    </div>
    
    
  )
}

export default Footer;