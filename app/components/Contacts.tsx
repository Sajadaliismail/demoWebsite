import Link from "next/link";

export default function Contacts() {
  return (
    <section
      id="contacts"
      className="bg-[#00293a] h-[100vh] text-white py-12 md:py-24"
    >
      <div className="flex flex-col">
        <div className="flex flex-row gap-12 justify-start md:ml-40 ">
          <span className="text-2xl">Quick Links</span>
          <Link className="text-xl" href={"#home"}>
            Home
          </Link>
          <Link className="text-xl" href={"#About-us"}>
            About Us
          </Link>
          <Link className="text-xl" href={"#pricing"}>
            Pricing
          </Link>
          <Link className="text-xl" href={"#portfolios"}>
            Portfolios
          </Link>
          <Link className="text-xl" href={"#insights"}>
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
          <div className="flex flex-col text-center align-middle items-center justify-center gap-5 mx-auto">
            <p>Contact Us</p>
            <p>Lorem Ipsum, Iso lorem,Iso Lorem Posum</p>
            <p>+91 00000 00000</p>
            <p>info@demo.com</p>
            <p>Follow us on</p>
          </div>
        </div>
      </div>
    </section>
  );
}
