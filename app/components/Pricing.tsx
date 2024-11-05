interface PricingCardProps {
  imageSrc: string;
  title: string;
  description: string;
  heightMd: string;
}

function PricingCard({
  imageSrc,
  title,
  description,
  heightMd,
}: PricingCardProps) {
  return (
    <div
      className={`break-inside-avoid flex flex-col justify-end w-full rounded-md p-8 mb-6 text-white h-96  ${
        heightMd === "80"
          ? "md:h-80"
          : heightMd === "72"
          ? "md:h-72"
          : heightMd === "56"
          ? "md:h-56"
          : "md:h-96"
      }`}
      style={{
        backgroundImage: `url('${imageSrc}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h3 className="text-2xl font-medium mb-2">{title}</h3>
      <p className="text-lg font-light">{description}</p>
    </div>
  );
}

export default function Pricing() {
  const pricingCards = [
    {
      imageSrc: "/pricing1.png",
      title: " Consectetur adipiscing elit",
      heightMd: "80",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donecmattis velit nulla. In hac habitasse platea dictumst.",
    },
    {
      imageSrc: "/pricing4.png",
      title: " Consectetur adipiscing elit",
      heightMd: "72",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donecmattis velit nulla. In hac habitasse platea dictumst.",
    },
    {
      imageSrc: "/pricing3.png",
      title: " Consectetur adipiscing elit",
      heightMd: "56",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donecmattis velit nulla. In hac habitasse platea dictumst.",
    },
    {
      imageSrc: "/pricing2.png",
      title: " Consectetur adipiscing elit",
      heightMd: "96",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donecmattis velit nulla. In hac habitasse platea dictumst.",
    },
  ];

  return (
    <section
      id="pricing"
      className="bg-gray-100 py-16 md:py-24 md:h-[160vh] align-middle items-center "
    >
      <div className="container mx-auto px-4 my-auto">
        <h2 className="text-4xl md:text-6xl  text-gray-900 mb-8 md:mb-12 md:max-w-5xl">
          Lorem ipsum dolor sit amet, consectetur
        </h2>
        <div className="md:columns-2 gap-6">
          {pricingCards.map((card, index) => (
            <PricingCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
// export default function Pricing() {
//   return (
//     <section
//       id="pricing "
//       className="md:h-[140vh] bg-gray-100 w-full text-white "
//     >
//       <p className="text-5xl md:w-[50%] text-black ">
//         Lorem ipsum dolor sit amet, consectetur{" "}
//       </p>
//       <div className="md:columns-2 columns-1 gap-6  p-5">
//         <div
//           className="flex flex-col justify-end w-full h-96 md:h-80 rounded-md p-8 my-6"
//           style={{
//             backgroundImage: "url('/pricing1.png')",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             backgroundRepeat: "no-repeat",
//           }}
//         >
//           <p className="text-2xl font-medium mb-5">
//             Consectetur adipiscing elit
//           </p>
//           <p className="text-lg font-light">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
//             mattis velit nulla. In hac habitasse platea dictumst.
//           </p>
//         </div>

//         <div
//           className="flex flex-col justify-end w-full h-9 md:h-72 break-inside-avoid rounded-md p-8 my-6"
//           style={{
//             backgroundImage: "url('/pricing4.png')",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             backgroundRepeat: "no-repeat",
//           }}
//         >
//           <p className="text-2xl font-medium mb-5">
//             Consectetur adipiscing elit
//           </p>
//           <p className="text-lg font-light">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
//             mattis velit nulla. In hac habitasse platea dictumst.
//           </p>
//         </div>

//         <div
//           className="flex flex-col justify-end w-full h-60 rounded-md break-inside-avoid p-8 my-6"
//           style={{
//             backgroundImage: "url('/pricing3.png')",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             backgroundRepeat: "no-repeat",
//           }}
//         >
//           <p className="text-2xl font-medium mb-5">
//             Consectetur adipiscing elit
//           </p>
//           <p className="text-lg font-light">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
//             mattis velit nulla. In hac habitasse platea dictumst.
//           </p>
//         </div>

//         <div
//           className="flex flex-col justify-end w-full h-96 md:h-92 rounded-md p-8 my-6"
//           style={{
//             backgroundImage: "url('/pricing2.png')",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             backgroundRepeat: "no-repeat",
//           }}
//         >
//           <p className="text-2xl font-medium mb-5">
//             Consectetur adipiscing elit
//           </p>
//           <p className="text-lg font-light">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
//             mattis velit nulla. In hac habitasse platea dictumst.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }
