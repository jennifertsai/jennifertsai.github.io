class About extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <h2><span>Hi, I'm Jennifer! I’m a brain researcher, writer, and sunset chaser studying biomedical & neural engineering at the University of Waterloo.</span></h2>
    <p>
    <br>
    I’m focussed on leveraging computing, data, and cutting-edge experimental technologies to answer neuroscience's biggest questions, from memory, emotion, to aging.
    <br><br>
    Currently, I’m finishing up my third year and taking courses spanning control systems, health economics, and medical device regulation. I'm also directing Nucleate Dojo - a training ground for future biotech leaders.<br><br>
    In previous lives, I have:
    <ul>
        <li>Lived in Switzerland and joined a lab to investigate the neurons responsible for restoring walking after paralysis</li>
        <li>Spearheaded and launched a life sciences research grant program for undergrads</li>
        <li>Trained for an ran a half marathon</li>
        <li>Built computational models to optimize mRNA therapeutics for cancer</li>
        <li>Employed big data and transcriptomics to study short-term brain memory</li>
        <li>Organized the world's largest hackathon</li>
        <li>Tinkered with software for the fintech industry and for non-profit organizations</li>
        <li>Researched neuromodulation technologies for restoring motor and cognitive function</li>
    </ul>
    <p>
    Find out more about my experiences here and what I’m learning about here. I can also be found on Twitter and LinkedIn. I always feel at home meeting people who are curious, daring, and infectiously driven. If this sounds like you or someone you’re striving to be, reach out and let’s chat!   
    </p>
    </p>
    
  
      `;
  }
}

customElements.define("about-component", About);
