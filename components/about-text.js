class About extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <h2><span>Hi, I'm Jennifer! I’m a researcher, software developer, writer, and sunset chaser studying biomedical & neural engineering at the University of Waterloo.</span></h2>
    <p>
    <br>
    I’m focussed on leveraging computing, data, and interdiscplinary systems thinking to work on problems in health, biology, and justice. I’m especially excited about computational biology, neurotechnology, psychiatry, and biotech innovation.
    <br><br>
    Currently, I’m finishing up my second year and taking courses where I'm identifying cranial nerves on human cadavers by day and wiring circuits by night. I’m also organizing the sponsorships at the world’s biggest hackathon, creating a new research grant system to empower undergraduate scientists in biotech, working on acro tricks, and training for a half marathon!<br><br>
    In previous lives, I have:
    <ul>
        <li>Employed big data and transcriptomics to study brain memory</li>
        <li>Tinkered with software for the fintech industry and for non-profit organizations</li>
        <li>Researched neuromodulation technologies</li>
        <li>Organized dozens of community initiatives</li>
    </ul>
    <p>
    Find out more about my experiences here and what I’m learning about here. I can also be found on Twitter and LinkedIn. I always feel at home meeting people who are curious, daring, and infectiously driven. If this sounds like you or someone you’re striving to be, reach out and let’s chat!   
    </p>
    </p>
    
  
      `;
  }
}

customElements.define("about-component", About);
