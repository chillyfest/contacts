import { useRoutes, Outlet } from 'react-router-dom';
import Home from './Pages/Home.js';
import Contacts from './Pages/Contacts.js';
import NewContact from './NewContact.js';
import Profile from './Pages/Profile.js';
import NoMatch from './Pages/NoMatch.js';


function App() {
    const routes = useRoutes([
        {
            path: '/',
            element: <Home />
        },
        {
            path: 'contacts',
            children: [
                {
                    path: '',
                    element: <Contacts />
                },{
                    path: 'new',
                    element: <NewContact />
                },
                {
                    path: ':id',
                    element: <Profile />
                }
            ]
        },
        {
            path: '*',
            element: <NoMatch />
        }
    ]);

    return routes;
}

export default App;