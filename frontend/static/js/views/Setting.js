import AbstractView from "./AbstractView.js";

class Setting extends AbstractView {
  constructor() {
    super();
    this.setTitle("Configurações");
  }

  async getHtml() {
    const htmlContent = `
      <div>
        <h1>Configurações</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin semper
          laoreet libero nec sagittis. Ut convallis arcu quis blandit congue.
          Mauris justo nisi, lacinia sit amet tempus et, scelerisque vel mi.
          Maecenas eu auctor enim. Quisque porttitor nisi sit amet mi dignissim
          hendrerit. Morbi tempus augue id magna luctus ornare quis egestas
          nibh. Vivamus aliquet tempor eros. Etiam volutpat id justo ut euismod.
          Fusce nec elit ac purus posuere semper. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Donec ut malesuada orci. Donec sed nunc
          et neque vulputate fringilla. Integer lectus lacus, blandit iaculis
          convallis non, congue et quam. Phasellus varius suscipit aliquet.
          Etiam nulla felis, volutpat eu augue lacinia, sollicitudin porta
          sapien.
        </p>
        <p><a href="/posts" data-link>Visualizar posts recentes</a>.</p>
      </div>
    `;
    return htmlContent;
  }
}

export default Setting;
