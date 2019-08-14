/**
 *
 * Asynchronously loads the component for UserSession
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
