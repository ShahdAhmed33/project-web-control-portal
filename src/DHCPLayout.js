// DHCPLayout.js
import { Outlet } from 'react-router-dom';
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