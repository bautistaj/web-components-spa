class BtajDetail extends HTMLElement {
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
          <figure>
            <img id="character" src=${image} alt=${name}>
          </figure>
          <div class="description">
            <h2>Name: ${name}</h2>
            <p>Episodes: ${episode.length}</p>
            <p>Status: ${status}</p>
            <p>Species: ${species}</p>
            <p>Gender: ${gender}</p>
            <p>Origin: ${origin.name}</p>
            <p>Last Location: ${location.name}</p>
          </div>
      </div>
    </div>
    `;

    style.textContent=`
      figure, p,h1 {
        padding: 0;
        margin: 0;
      }

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
  
      .card .description {
        background-color: #171c28;
        border-radius: 10px;
        padding: 10px;
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

customElements.define('btaj-detail', BtajDetail);