import Card from "./Card";

const blogData = [
  { title: "Blog Post 1", description: "Subtitle for Blog Post 1" },
  { title: "Blog Post 2", description: "Subtitle for Blog Post 2" },
  { title: "Blog Post 3", description: "Subtitle for Blog Post 3" },
  { title: "Blog Post 4", description: "Subtitle for Blog Post 4" },
  { title: "Blog Post 5", description: "Subtitle for Blog Post 5" },
  { title: "Blog Post 6", description: "Subtitle for Blog Post 6" },
];

const Main = () => (
  <main>
    <section class="blog-list">
      <h2>Recent Blogs</h2>

      <div class="blog-cards">
        {blogData.map((blogitem) => (
          <Card title={blogitem.title} paragraph={blogitem.description} />
        ))}
      </div>
    </section>
  </main>
);
export default Main;
