import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { DatabaseService } from "../../services/database.service"; // Importe o novo serviço
import { AsyncPipe } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-header",
  template: `
    <header class="header" role="banner">
      <div class="header-container">
        <h1 class="logo">
          <a routerLink="/" aria-label="Página inicial do portfólio"
            >portfólio</a
          >
        </h1>

        <button
          class="nav-toggle"
          aria-label="Abrir menu de navegação"
          aria-expanded="false"
        >
          <span class="hamburger"></span>
        </button>

        <nav aria-label="Navegação principal">
          @if (materias$ | async; as materias) {
          <ul class="main-nav">
            @for (materia of materias; track materia.id) {
            <li class="nav-item">
              <a
                [routerLink]="['/', materia.id, 1]"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {{ materia.nome }}
                <svg
                  class="caret-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    fill="currentColor"
                    d="M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z"
                  ></path>
                </svg>
              </a>
              <div class="dropdown">
                <div class="textDropdown">Trimestres:</div>
                <a [routerLink]="['/', materia.id, 1]">1° Trimestre</a>
                <a [routerLink]="['/', materia.id, 2]">2° Trimestre</a>
                <a [routerLink]="['/', materia.id, 3]">3° Trimestre</a>
              </div>
            </li>
            }
          </ul>
          }
        </nav>
      </div>
    </header>
  `,
  styleUrl: "./header.scss",
  standalone: true,
  imports: [AsyncPipe, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  private readonly databaseService = inject(DatabaseService);

  // Expõe a lista de matérias para o template
  protected readonly materias$ = this.databaseService.getMaterias();
}
