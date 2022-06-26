class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      
        <nav class="navbar navbar-expand-md fixed-top">
            <!-- Logo -->
            <a class="navbar-brand" href="index.html">jt</a>
            <!-- Toggler -->
            <button class="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#main-navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <!-- Links -->
            <div class="collapse navbar-collapse" id="main-navigation">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="index.html">about</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="writing.html">writing</a>
                    </li>
                </ul>
            </div>
        </nav>
   
        `;
    }
  }
  
  customElements.define("header-component", Header);
  