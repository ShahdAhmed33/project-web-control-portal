import { Routes, Route } from 'react-router-dom';
import DHCPLayout from './DHCPLayout';
import Options from './Options';
import Scopes from './Scopes';
import Reservation from './Reservation';
import Restart from './Restart';
function App() {
    return (
        <Routes>
            <Route path="/" element={<DHCPLayout />}>
                {/* Child Routes */}
                <Route path="options" element={<Options />} />
                <Route path="scopes" element={<Scopes />} />
                <Route path="reservation" element={<Reservation />} />
                <Route path="restart" element={<Restart />} />
            </Route>
        </Routes>
    );
}
export default App;