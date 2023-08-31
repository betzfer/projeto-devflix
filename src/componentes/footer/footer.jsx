import SocialLinks from "../socialLinks/socialLinks";
import "./footer.module.css";
import "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js";

const Footer = ({ children, link }) => {
  return (
    <footer>
      <p>
        Feito com <ion-icon name="heart" /> por{" "}
        <a href={link} target="#" rel="noopener noreferrer">
          {children}
        </a>
        </p>
        <SocialLinks icon={"logo-github"} href={link} />
      
    </footer>
  );
};

export default Footer;