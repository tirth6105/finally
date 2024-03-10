import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Privateroute = ({children}) => {
    
  let data=useSelector((store)=>store.user)

  console.log(data);
  return data.islogin ? children : <Navigate to={"/Signup"} />
}

export default Privateroute