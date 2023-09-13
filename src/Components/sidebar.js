export const Sidebar = () => {
  const contactList = [
    {
      label: "phone",
      value: "9949916301",
    },
    {
      label: "mail",
      value: "vijayashree369@gmail.com",
    },
    {
      label: "location",
      value: "Hyderabad",
    },
    {
      label: "linkedin",
      value: "website",
    },
  ];

  return (
    <aside className="side-bar">
      <section>
        <h1>Vijayashree K</h1>
        <h4>Frontend developer</h4>
      </section>

      <section>
        <h3>CONTACT</h3>
        {contactList.map((item) => {
          return (
            <section className="contact-list">
              <div>{item.label}</div>
              <div>{item.value}</div>
            </section>
          );
        })}
      </section>

      <section>
        <h3>SUMMARY</h3>
        <summary>
          A Front-End Developer with entry-level experience specializing in web
          development, user interface design, HTML, and ReactJS. Adapt at
          identifying opportunities to enhance front-end design and improve the
          user experience.
        </summary>
      </section>
    </aside>
  );
};
