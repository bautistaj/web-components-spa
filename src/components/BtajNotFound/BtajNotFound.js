class BtajNotFound extends HTMLElement {
  constructor(){
    super();
    this.root = this.attachShadow({ mode: 'open' });
    this.id;
  }
  
  set character({id,image, name, status, episode, species, gender, origin, location}){
    this.id = id;
    const style = document.createElement('style');
    const template = document.createElement('template');
    template.innerHTML=`
    <div class="content">
      <div class="card">
          <h1>404: Not Found</h1>
      </div>
    </div>
    `;

    style.textContent=`
      .content{
        display: flex;
        justify-content: center;
      }
      .card{
        border-radius: 10px;
        background-color: #292e3a;
        color: #ffffff;
        padding: 10px;
        width: 300px;
      }

      .card:hover{
        background-color: #444a56;
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

customElements.define('btaj-notfound', BtajNotFound);