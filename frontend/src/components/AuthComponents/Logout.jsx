// from installed packages 
import axios from 'axios';
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';

// from custom files 
import MyContext from '../../context/MyContext';
import baseUrl from '../../utils/baseUrl'


// logout components 
function Logout() {
    const myState = useContext(MyContext)
    const navigate = useNavigate();

   const logout = async () => {
    try {
        const api = await axios.get(`${baseUrl}/user/logout`, {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
        });
        myState.setToast(true);
        myState.setToastMessage(api.data?.message || "Logout Successfully");
    } catch (error) {
        myState.setToast(true);
        myState.setToastMessage("Logout failed. Please try again.");
    } finally {
        myState.setIsAuthenticated(false);
        setTimeout(() => navigate('/'), 100);
    }
}

    // logout button 
    return (
        <>
            <button
                onClick={logout}
                className="mb-4 px-6 py-2 flex gap-3 items-center bg-cyan-500 text-lg font-semibold rounded-full duration-100"
            >
                <span className='text-black'>Logout</span>
            </button>
        </>
    )
}

export default Logout