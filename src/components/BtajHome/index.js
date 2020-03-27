import '../BtajHome/BtajHome';
import { getData } from '../../utils/getData';
let nextUrl;

async function getCharacters(url) {
  try {
    const json = await getData(url);
    const content = null || document.getElementById('content');
    const home = document.createElement('btaj-home');
    content.appendChild(home);
    
    nextUrl = json.info.next;
    
    json.results.forEach(character => {
      home.character = character;
    });

  } catch (error) {
    alert(error);
  }
}

export const Home = async () => {
  await getCharacters();
}