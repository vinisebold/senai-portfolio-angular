import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-footer",
  template: `
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <h3>Contato</h3>
            <ul class="contact-list">
              <li>
                <a
                  href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=vinicius.sebold05@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Email: vinicius.sebold05&#64;gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/vinisebold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub: github.com/vinisebold
                </a>
              </li>
            </ul>
          </div>
          <div class="col-md-4">
            <h3>Links</h3>
            <ul class="footer-links">
              <li><a routerLink="/">Início</a></li>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#projetos">Projetos</a></li>
            </ul>
          </div>
          <div class="col-md-4">
            <h3>Instituição</h3>
            <p>Senai Blumenau<br />Técnico em Desenvolvimento de Sistemas</p>
          </div>
        </div>
        <div class="copy">
          <p>&copy; 2025 Vinicius Sebold. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  `,
  imports: [RouterLink],
  standalone: true,
  styleUrl: "./footer.scss",
})
export class Footer {}
