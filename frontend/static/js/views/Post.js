import AbstractView from "./AbstractView.js";

class Post extends AbstractView {
  constructor() {
    super();
    this.setTitle("Posts");
  }

  async getHtml() {
    const htmlContent = `
      <div>
        <h1>Todos os Posts</h1>
        <p>
          Nunc vitae accumsan tortor. Mauris cursus cursus nibh at finibus.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Ut at pharetra velit. Aenean ac purus diam.
          Etiam ac congue est. Sed nec magna urna. Mauris aliquet eget libero
          nec hendrerit. Cras sed pellentesque ante.
        </p>
        <p><a href="/posts" data-link>Visualizar posts recentes</a>.</p>
      </div>
    `;
    return htmlContent;
  }
}

export default Post;
