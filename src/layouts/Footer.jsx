import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import logo1 from "../assets/logo1.png";
const clubLeads = [
  {
    name: "Harsh Gupta",
    position: "Chairperson",
    email: "harsh21bec43@iiitkottayam.ac.in",
  },
  {
    name: "Piyush",
    position: "Technical Lead",
    email: "piyush21bec23@iiitkottayam.ac.in",
  },
];
function Footer() {
  return (
    <section className="h-full  flex flex-col">
      <div className="text-white" style={{ backgroundColor: "#000000" }}>
        <div className="flex mt-14 px-28">
          <div className="w-1/2">
            <img src={logo1} alt="logo" className="w-64 h-56" />

            <div className="flex ml-4 space-x-4">
              <FacebookIcon fontSize="large" sx={{ color: "#1877f2" }} />
              <InstagramIcon fontSize="large" sx={{ color: "#e4405f" }} />
              <LinkedInIcon fontSize="large" sx={{ color: "#0077b5" }} />
              <TwitterIcon fontSize="large" sx={{ color: "#1da1f2" }} />
            </div>
          </div>
          <div className="w-1/2 flex">
          <div className="mt-5 ml-14">
            <ul className="text-lg">
              <li className="mb-2 text-2xl font-bold">Elix</li>
              <li>About </li>
              <li>People</li>
              <li>Events</li>
              <li>Blogs</li>
            </ul>
          </div>
          <div className="ml-20 mt-5">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <ul className="text-lg">
        {clubLeads.map((lead, index) => (
          <li key={index} className="mb-2">
            <strong>{lead.name}</strong>
            <div>{lead.position}</div>
            <div>Email: {lead.email}</div>
          </li>
        ))}
      </ul>
    </div>
        </div>
        </div>
        <hr className="mt-10 mx-auto  w-3/4 mb-2" />
        <div className="flex ml-40  mb-10">
          <p className="text-sm mr-2">© Elix, Inc. </p>
          <a href="#" className="text-sm mx-2">
            Help
          </a>
          <a href="#" className="text-sm mx-2">
            Privacy Terms
          </a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
