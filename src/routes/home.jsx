import Homepage from 'views/Home/Homepage';
import Login from 'views/Home/Login';
import Signup from 'views/Home/Signup';

const homeRoutes = [
    { path: "/homepage", name: "Homepage", icon: "pe-7s-graph1", component: Homepage },
    { path: "/login", name: "Login", icon: "pe-7s-note2", component: Login },
    { path: "/signup", name: "Signup", icon: "pe-7s-users", component: Signup },
    { redirect: true, path: "/", to: "/homepage", name: "Homepage" },

    
];


export default homeRoutes;
