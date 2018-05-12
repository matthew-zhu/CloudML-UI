import Dashboard from 'views/Dashboard/Dashboard';
import Projects from 'views/Projects/Projects';
// import Groups from 'views/Groups/Groups';
import Messages from 'views/Messages/Messages';
import LabelMe from 'views/LabelMe/LabelMe'
import Account from 'views/Account/Account';
import ProjectWorkspace from 'views/Projects/ProjectWorkspace'
import CreateProject from 'views/Projects/CreateProject'


import Homepage from 'views/Home/Homepage';

const appRoutes = [
    { path: "/dashboard", name: "Dashboard", icon: "pe-7s-graph1", component: Dashboard },
    { path: "/viewprojects", name: "Projects", icon: "pe-7s-note2", component: Projects },
    // { path: "/viewgroups", name: "Groups", icon: "pe-7s-users", component: Groups },
    { path: "/messages", name: "Messages", icon: "pe-7s-comment", component: Messages },
    { path: "/labelme", name: "LabelMe", icon: "pe-7s-pen", component: LabelMe },
    { path: "/account", name: "Account", icon: "pe-7s-user", component: Account },
    // { redirect: true, path: "/", to: "/dashboard", name: "Dashboard" },

    
];


const otherRoutes = [
    { path: "/project/:value", name: "ProjectWorkspace", component: ProjectWorkspace },
    { path: "/createproject", name: "CreateProject", component: CreateProject },
    
];

const homeRoutes = [
    { path: "/", name: "Homepage", icon: "pe-7s-graph1", component: Homepage },
    // { redirect: true, path: "/", to: "/homepage", name: "Homepage" },
]


export { appRoutes, otherRoutes, homeRoutes };
