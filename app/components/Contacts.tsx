import {
  Facebook,
  Instagram,
  Linkedin,
  TwitterIcon,
  Youtube,
} from "lucide-react";
import Link from "next/link";

export default function Contacts() {
  return (
    <section
      id="contacts"
      className="bg-[#00293a] h-[100vh] text-white py-12 md:py-24"
    >
      <div className="flex flex-col">
        <div className="flex flex-row flex-wrap gap-12 justify-start md:ml-40 ">
          <span className="text-2xl">Quick Links</span>
          <Link className="md:text-xl" href={"#home"}>
            Home
          </Link>
          <Link className="md:text-xl" href={"#About-us"}>
            About Us
          </Link>
          <Link className="md:text-xl" href={"#pricing"}>
            Pricing
          </Link>
          <Link className="md:text-xl" href={"#portfolios"}>
            Portfolios
          </Link>
          <Link className="md:text-xl" href={"#insights"}>
            Insights
          </Link>
        </div>
        <hr className="border-slate-700 my-5" />
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col text-center align-middle items-center justify-center gap-5 mx-auto">
            <span className="bg-[#083140] w-[300px] h-24 p-6">
              Lorem ipsum dolor sit amet
            </span>
            <span className="bg-[#083140] w-[300px] h-24 p-6">
              Lorem ipsum dolor sit amet
            </span>
            <span className="bg-[#083140] w-[300px] h-24 p-6">
              Lorem ipsum dolor sit amet
            </span>
          </div>
          <div className="flex flex-col text-center align-middle items-center justify-center gap-5 mx-auto">
            <span className="bg-[#083140] w-[300px] h-24 p-6">Lorem</span>
            <span className="bg-[#083140] w-[300px] h-24 p-6">Ipsum</span>
            <span className="bg-[#083140] w-[300px] h-24 p-6">Consectetur</span>
            <span className="bg-[#083140] w-[300px] h-24 p-6">Efficcitur</span>
          </div>
          <div className="flex flex-col text-center align-middle items-start justify-center gap-5 mx-auto">
            <p className="text-2xl">Contact Us</p>
            <p className="text-wrap">Lorem Ipsum, Iso lorem,Iso Lorem Posum</p>
            <p>+91 00000 00000</p>
            <p>info@demo.com</p>
            <p>Follow us on</p>
            <div className="flex flex-row gap-5">
              <Facebook className="bg-[#083140] p-2 rounded-md" size={40} />
              <TwitterIcon className="bg-[#083140] p-2 rounded-md" size={40} />
              <Linkedin className="bg-[#083140] p-2 rounded-md" size={40} />
              <Youtube className="bg-[#083140] p-2 rounded-md" size={40} />
              <Instagram className="bg-[#083140] p-2 rounded-md" size={40} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
