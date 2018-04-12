import Dashboard from 'views/Dashboard/Dashboard';
import Projects from 'views/Projects/Projects';
import Groups from 'views/Groups/Groups';
import Messages from 'views/Messages/Messages';
import Notifications from 'views/Notifications/Notifications';
import LabelMe from 'views/LabelMe/LabelMe'
import Account from 'views/Account/Account';
import LogOut from 'views/LogOut/LogOut';

const appRoutes = [
    { path: "/dashboard", name: "Dashboard", icon: "pe-7s-graph1", component: Dashboard },
    { path: "/projects", name: "Projects", icon: "pe-7s-note2", component: Projects },
    { path: "/groups", name: "Groups", icon: "pe-7s-users", component: Groups },
    { path: "/messages", name: "Messages", icon: "pe-7s-comment", component: Messages },
    { path: "/notifications", name: "Notifications", icon: "pe-7s-bell", component: Notifications },
    { path: "/labelme", name: "LabelMe", icon: "pe-7s-pen", component: LabelMe },
    { path: "/account", name: "Account", icon: "pe-7s-user", component: Account },
    { path: "/logout", name: "Log Out", icon: "pe-7s-left-arrow", component: LogOut },
    { redirect: true, path: "/", to: "/dashboard", name: "Dashboard" },
    
];


export default appRoutes;
