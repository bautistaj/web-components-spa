class BtajCard extends HTMLElement {
  constructor(){
    super();
    this.root = this.attachShadow({ mode: 'open' });
    this.observer;
  }

  set observer(pObserver){
    this.observer = pObserver;
  }
  
  set character({id,image, name, species}){
    const style = document.createElement('style');
    const template = document.createElement('template');
    template.innerHTML=`
    <div class="card">
        <figure>
          <img id="character" src=${image} alt=${name}>
        </figure>
        <div class="description">
          <p>${name} (${species})</p>
          <a href='#/${id}'>Detail</a>
        </div>
    </div>`;

    style.textContent=`
      figure, p,h1 {
        padding: 0;
        margin: 0;
      }
      .card{
        border-radius: 10px;
        background-color: #292e3a;
        color: #ffffff;
        padding: 10px;
        width: 304px;
      }

      .card:hover{
        background-color: #444a56;
      }
  
      .card figure{
        margin-bottom: 10px;
      }
  
      .card .description {
        background-color: #171c28;
        border-radius: 10px;
        display: flex;
        padding: 10px;
        justify-content: space-between;
        align-items: center;
      }

      a {
        color: #FFFFFF;
        text-decoration: none;
        background-color: red;
        padding: 10px;
        border-radius: 5px;
      }
      `;
    this.root.append(template.content.cloneNode(true));
    this.root.appendChild(style);
  }

  connectedCallback() {

  }

  disconnectedCallback(){
    
  }
}

customElements.define('btaj-card', BtajCard);