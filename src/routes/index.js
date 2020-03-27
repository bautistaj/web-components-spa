import { Home } from '../components/BtajHome';
import { Detail } from '../components/BtajDetail';
import { NotFound } from '../components/BtajNotFound';

import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

const routes = {
  '/': Home,
  '/:id': Detail,
};

const router = async () => {
  let hash = getHash();

  let route = await resolveRoutes(hash);
  
  let render = routes[route] ? routes[route] : NotFound;
  const content = null || document.getElementById('content');
  content.innerHTML = '';
  render();
};

export default router;