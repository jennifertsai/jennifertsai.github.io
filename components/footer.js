class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
		<footer class="page-footer">
			<div class="socials container">
				<!-- Social buttons -->
                <ul class="list-unstyled list-inline text-center">
                    <li class="list-inline-item">
                        <a href="https://twitter.com/jennifertsai_" target="_blank" class="mx-1">
                        <i class="fa fa-twitter"> </i>
                    </a>
                    </li>
                    <li class="list-inline-item">
                        <a href="https://www.linkedin.com/in/jennifertsaii/" target="_blank" class="mx-1">
                        <i class="fa fa-linkedin"> </i>
                    </a>
                    </li>
                    <li class="list-inline-item">
                        <a href="mailto:jennifer.tsai11@gmail.com"  target="_blank" class=" mx-1">
                        <i class="fa fa-envelope"> </i>
                        </a>
                    </li>
				</ul>
			</div>		
			<!-- Copyright -->
			<div class="footer-copyright text-center py-3">made with 🍵 by jennifer tsai © 2022
        </footer>
      `;
  }
}

customElements.define("footer-component", Footer);
