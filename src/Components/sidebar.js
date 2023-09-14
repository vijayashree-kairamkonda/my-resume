import "../App.css";
import "../Components/sidebar.css";
import linkedInIcon from "../assets/icons/bi_linkedin.svg";
import envelopIcon from "../assets/icons/EnvelopeSimpleOpen.svg";
import locationIcon from "../assets/icons/MapPin.svg";
import phoneIcon from "../assets/icons/Phone.svg";

export const Sidebar = () => {
  const contactList = [
    {
      label: phoneIcon,
      value: "9949916301",
    },
    {
      label: envelopIcon,
      value: "vijayashree369@gmail.com",
    },
    {
      label: locationIcon,
      value: "Hyderabad",
    },
    {
      label: linkedInIcon,
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
              <img src={item.label} alt="label" />
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
