import './BtajNotFound';


const getDetail = () => {  
  const content = null || document.getElementById('content');
  const el = document.createElement('btaj-notfound');
  content.appendChild(el);
}

export const NotFound = () => {
  getDetail();
}