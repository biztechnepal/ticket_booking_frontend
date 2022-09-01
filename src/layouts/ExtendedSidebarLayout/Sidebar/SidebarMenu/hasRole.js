// import { Navigate } from 'react-router';
// import Status403 from 'src/content/pages/Status/Status403';

export const hasRole = (roles) => {
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('role')) {
      return roles.includes(localStorage.getItem('role'));
    }
  }

  return false;
};

// export const hasRights = (roles, Component) => {
//   if (localStorage.Role) {
//     if (roles.includes(localStorage.Role)) {
//       return <Component />;
//     }

//     return <Status403 />;
//   }
//   return <Navigate to="/logout" />;
// };
