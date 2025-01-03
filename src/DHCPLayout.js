// DHCPLayout.js
import { Outlet } from 'react-router-dom';
import Header from './Header'; // Assuming Header is the component for the header
import DHCPNavBar from './DHCPNavBar';
function DHCPLayout() {
    return (
        <div>
            <DHCPNavBar/>
            <Outlet />
        </div>
    );
}

export default DHCPLayout;