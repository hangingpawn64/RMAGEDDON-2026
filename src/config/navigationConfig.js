/**
 * Navigation Configuration
 * All routes and their configurations for the Rmageddon2K26 event
 */

export const NAVIGATION_ROUTES = [
  {
    path: '/',
    label: 'HOME',
    name: 'home',
    component: 'HomePage',
  },
  {
    path: '/events',
    label: 'EVENTS',
    name: 'events',
    component: 'Robowar',
  },
  {
    path: '/accommodation',
    label: 'ACCOMMODATION',
    name: 'accommodation',
    component: 'Accommodation',
  },
  {
    path: '/contact',
    label: 'CONTACT',
    name: 'contact',
    component: 'ContactUs',
  },
];

/**
 * Get navigation links for navbar
 * @returns {Array} Array of route objects
 */
export const getNavLinks = () => {
  return NAVIGATION_ROUTES;
};

/**
 * Get route by path
 * @param {string} path - Route path
 * @returns {Object} Route configuration
 */
export const getRouteByPath = (path) => {
  return NAVIGATION_ROUTES.find((route) => route.path === path);
};

/**
 * Get route by name
 * @param {string} name - Route name
 * @returns {Object} Route configuration
 */
export const getRouteByName = (name) => {
  return NAVIGATION_ROUTES.find((route) => route.name === name);
};
