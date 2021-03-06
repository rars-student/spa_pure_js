import AbstractView from "./AbstractView.js";

class Dashboard extends AbstractView {
  constructor() {
    super();
    this.setTitle("Painel de Controle");
  }

  async getHtml() {
    const htmlContent = `
      <div>
        <h1>Bem Vindo, Amigo</h1>
        <p>
          Fugiat voluptate et nisi Lorem cillum anim sit do eiusmod occaecat
          irure do. Reprehenderit anim fugiat sint exercitation consequat. Sit
          anim laborum sit amet Lorem adipisicing ullamco duis. Anim in do magna
          ea pariatur et.
        </p>
        <p><a href="/posts" data-link>Visualizar posts recentes</a>.</p>
      </div>
    `;
    return htmlContent;
  }
}

export default Dashboard;
