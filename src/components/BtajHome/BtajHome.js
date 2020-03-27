import '../BtajCard/BtajCard';
import { getData } from '../../utils/getData';

class BtajHome extends HTMLElement {
  constructor(){
    super();
    this.root = this.attachShadow({ mode: 'open' });
    this.observer;
    this.footer;
    this.nextUrl;
    this.homeElement;
  }

  async connectedCallback() {
    const style = document.createElement('style');
    style.textContent=`
      btaj-home {
        display: grid;
        grid-template-columns: repeat(auto-fill, 320px);
      }
    `;
    this.append(style);
    await this.getDateCharacters();  
    this.footer = document.getElementById('footer');  
    this.observer = new IntersectionObserver(this.handleIntersection.bind(this),
    {rootMargin: "0px 0px 100% 0px"});
    this.observer.observe(this.footer);
  }

  async getDateCharacters (url){
    const characters =  await getData(url);
    this.nextUrl = characters.info.next;
    
    characters.results.forEach(character => {
      this.appendCharacter(character);
    });
  }

  appendCharacter (character) {
    const card = document.createElement('btaj-card');
      card.character = character;
      this.root.appendChild(card);
  }

  disconnectedCallback(){
    this.observer.unobserve(this.footer, () => 
    { console.log('Not more');})
  }

  handleIntersection() {
    if(this.nextUrl){
      this.getDateCharacters(this.nextUrl);
    }
  }
}

customElements.define('btaj-home', BtajHome);