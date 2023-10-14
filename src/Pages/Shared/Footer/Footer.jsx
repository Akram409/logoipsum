import { Link } from "react-router-dom";
import logo from "/public/footer.png";
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineWhatsApp } from 'react-icons/ai';
const Footer = () => {
  return (
    <div
      className="gradient-footer"
      style={{
        background:
          "var(--gradient-footer, linear-gradient(96deg, #0076CE -7.82%, #9400D3 143.96%))",
      }}
    >
      <footer className="footer p-10 text-white">
        <aside>
          <div>
            <Link to="/">
              <img src={logo} alt="" className="w-36 h-16" />
            </Link>
          </div>
          <p>
            Indias first platform dedicated to <br /> simplifying partner search
          </p>
        </aside>
        <nav>
          <header className="footer-title">COMPANY</header>
          <Link className="link link-hover">About</Link>
          <Link className="link link-hover">Pricing</Link>
          <Link className="link link-hover">Careers</Link>
        </nav>
        <nav>
          <header className="footer-title">SOLUTIONS</header>
          <Link className="link link-hover">Search</Link>
          <Link className="link link-hover">Connect</Link>
          <Link className="link link-hover">Research</Link>
          <Link className="link link-hover">Academy</Link>
        </nav>
        <nav>
          <header className="footer-title">RESOURCES</header>
          <Link className="link link-hover">Blogs</Link>
          <Link className="link link-hover">Forms</Link>
        </nav>
        <nav>
          <header className="footer-title">SUPPORT</header>
          <Link className="link link-hover">Help</Link>
          <Link className="link link-hover">Contact Us</Link>
        </nav>
        <nav>
          <header className="footer-title">LEGAL</header>
          <Link className="link link-hover">Privacy</Link>
          <Link className="link link-hover">Terms</Link>
          <Link className="link link-hover">Accessibility</Link>
        </nav>
      </footer>
      <div className="border mx-10 mb-8"></div>
        <div className="mx-10 text-white flex justify-between mb-11">
          <div>
            <p>
              Sambhaji Nagar, No2, St. Antony Road, Chembur, Mumbai - 400071,
              Maharashtra
            </p>
          </div>
          <div className="flex item-center gap-6">
            <AiOutlineFacebook size="1.5em"/>
            <AiOutlineInstagram size="1.5em"/>
            <AiOutlineLinkedin size="1.5em"/>
            <AiOutlineWhatsApp size="1.5em"/>
          </div>
        </div>
      <footer className="footer footer-center p-5 bg-black text-white">
        <aside>
          <p className="text-xs font-normal text-white">
            Registered trademark of India Private Limited © 2023 loerumipsum
            Inc. All Rights Reserved
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
