import GuestGreeting from "./GuestGreeting";
import UserGreeting from "./UserGreeting";

function Greeting(props) {
    
    const isLoggedIn = props.isLoggedIn;

    if (isLoggedIn) {  // true
      return <UserGreeting />;
    }
    return <GuestGreeting />;
   
  }

  export default Greeting
