import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import logo from "../assets/logo.png"
function Footer() {
  return (
    <section className="h-full  flex flex-col"  >
      <div className="text-white" style={{ backgroundColor: "#000000" }}>
      <div className="flex mt-14 px-28">
        <div className="w-1/2">
          <img src={logo} alt="logo" className="w-64 h-64" />
         
          <div className="flex space-x-4">
            <FacebookIcon fontSize="small" sx={{ color: "#1877f2" }} />
            <YouTubeIcon fontSize="small" sx={{ color: "#ff0000" }} />
            <InstagramIcon fontSize="small" sx={{ color: "#e4405f" }} />
            <LinkedInIcon fontSize="small" sx={{ color: "#0077b5" }} />
            <TwitterIcon fontSize="small" sx={{ color: "#1da1f2" }} />
            <PinterestIcon fontSize="small" sx={{ color: "#bd081c" }} />
          </div>
        </div>
        <div className="w-1/4 ml-14">
          <ul className="text-lg">
            <li className="mb-2 font-bold">Elix</li>
            <li>About</li>
            <li>Careers</li>
            <li>Blogs</li>
            <li>Affiliates</li>
          </ul>
        </div>
        <div className="w-1/4">
          <ul className="text-lg">
            <li className="mb-2 font-bold">Support</li>
            <li>Product Help</li>
            <li>Raise an Issue</li>
            <li>Advertise with us</li>
            <li>Affiliates</li>
          </ul>
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
