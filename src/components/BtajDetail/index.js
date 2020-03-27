import getHash from '../../utils/getHash';
import { getCharacterDetail } from '../../utils/getData';
import './BtajDetail';


const getDetail = async () => {  
  const id = getHash();
  const json = await getCharacterDetail(id);  
  const content = null || document.getElementById('content');
  content.innerHTML = '';

  const el = document.createElement('btaj-detail');
  el.character = json;
  content.appendChild(el);
}

export const Detail = async () => {
  await getDetail();
}