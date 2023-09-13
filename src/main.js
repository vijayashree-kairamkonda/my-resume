
export const Main = () => {
  const workExperience = [
    "Coordinate with the web development team to design user interfaces for client websites using HTML, JavaScript, and AngularJS",
    "Design, develop, and code web applications for customer accounts, which includes debugging issues, diagnosing root causes, and identifying solutions",
    "Create responsive designs for mobile applications, built wireframes, and developed prototypes for web development projects",
  ];

  const skills = [
    "HTML5",
    "CSS3",
    "JAVASCRIPT",
    "REACT",
    "GRAPHQL",
    "TYPESCRIPT",
    "JEST",
    "REDUX TOOLKIT",
  ];

  const projects = [
    {
      name: "Be Gorgeous",
      title: "An ecommerce Application.",
      description:
        "An e-commerce app with login, signup, product listing, sorting filters, wish list, cart management features.",
      liveURL: "https://begorgeous.netlify.app",
      githubURL: "https://github.com/vijayashree-kairamkonda/BeGorgeous",
    },
    {
      name: "Vivid",
      title: "A social media application",
      description:
        "A Social media app with login, signup, news feed, create post,bookmark, comment, edit comment/post, sort posts,update profile features.",
      liveURL: "https://vividsocial.netlify.app/",
      githubURL: "https://github.com/vijayashree-kairamkonda/BeGorgeous",
    },
  ];

  return (
    <main>
      <section>
        <h3>Professional Experience</h3>
        <heading>Front-end developer</heading> -
        <span className="duration"> September - Present</span>
        <div>DHAN AI, Hyderabad</div>
        <ul>
          {workExperience.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h3>My Projects</h3>
        {projects.map((project) => {
          return (
            <>
              <h4>
                {project.name}-{project.title}
              </h4>
              <ul>
                <li>{project.description}</li>
                <li>Liveurl : {project.liveURL}</li>
                <li>Github Code : {project.githubURL}</li>
              </ul>
            </>
          );
        })}
      </section>

      <section>
        <h3>EDUCATION</h3>
        <heading>Masters of business administration </heading>-
        <span className="duration"> September - 2022</span>
        <div>Badruka College for PG Center, Hyderabad</div>
      </section>

      <section>
        <h3>SKILLS</h3>

        <ul>
          {skills.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </section>
    </main>
  );
};
