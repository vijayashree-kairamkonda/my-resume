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
      link: "9949916301",
    },
    {
      label: envelopIcon,
      value: "vijayashree369@gmail.com",
      link: "mailto:vijayashree369@gmail.com",
    },
    {
      label: locationIcon,
      value: "Hyderabad",
      link: "https://www.google.com/maps/place/Hyderabad,+Telangana/@17.4126086,78.2432325,11z/data=!3m1!4b1!4m6!3m5!1s0x3bcb99daeaebd2c7:0xae93b78392bafbc2!8m2!3d17.385044!4d78.486671!16zL20vMDljNnc?entry=ttu",
    },
    {
      label: linkedInIcon,
      value: "LinkedIn",
      link: "https://www.linkedin.com/in/vijayashree-kairamkonda-7227581bb/",
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
              <a href={item.link}>{item.value}</a>
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
