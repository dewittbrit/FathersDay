import { Link} from 'react-router-dom'

export default function Navigations({ name, token, role, setUser }) {

    // function logOut() {

    //     localStorage.removeItem("username");
    //     localStorage.removeItem("role");
    //     localStorage.removeItem("token");

    //     setUser({
    //         name: null,
    //         token: null,
    //         role: null
    //     });

    // };

    function handleClick(event) {

        event.preventDefault();
        window.location.reload();

    };

    return (
        <div id="navBar">

            <div>


                    <button onClick={handleClick}><Link to="/">Home (All Posts)</Link></button>
                    <button onClick={handleClick}><Link to="/signup">Sign Up For Notifications</Link></button>
                </div>


        </div>
    );}