"use client";

import Image from "next/image";
import { useRef } from "react";

const TestimonialsCard = () => {
  return (
    <div className="flex  flex-col bg-white h-[90vh] py-10 px-3 rounded-lg ">
      <p className="text-3xl mb-3 font-semibold">Lorem Ipsum?</p>
      <div
        className="h-full md:w-[30vw] w-[90vw] relative flex flex-col justify-end"
        style={{
          backgroundImage: "url(/student.png)",
          backgroundSize: "cover",
        }}
      >
        <div className="z-10">
          <p className="text-3xl mb-3 font-semibold">Lorem Ipsum?</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            mattis velit nulla. In hac habitasse platea dictumst. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div
          className="absolute inset-0 bg-gradient-to-t from-white to-transparent  via-white/80"
          style={{
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>
    </div>
  );
};

export default function Testimonials() {
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const handleScrollRight = () => {
    if (testimonialsRef.current) {
      testimonialsRef.current.scrollTo({
        left:
          testimonialsRef.current.scrollLeft +
          testimonialsRef.current.clientWidth +
          8,
        behavior: "smooth",
      });
    }
  };

  const handleScrollLeft = () => {
    if (testimonialsRef.current) {
      testimonialsRef.current.scrollTo({
        left:
          testimonialsRef.current.scrollLeft -
          testimonialsRef.current.clientWidth -
          8,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="testimonials" className="min-h-[100vh] my-5">
      <div className="relative w-full min-h-[100vh] overflow-hidden ">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/pricing3.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-tr from-white to-transparent"
          style={{ backgroundSize: "100%", backgroundRepeat: "no-repeat" }}
        />

        <div
          className="absolute inset-0 bg-gradient-to-r from-white to-transparent  via-white/100"
          style={{ backgroundSize: "100%", backgroundRepeat: "no-repeat" }}
        />
        <div className=" relative flex md:flex-row flex-col text-black align-middle items-center justify-center md:mx-9 md:my-6 ">
          <div className="mx-24">
            <p className="text-5xl font-semibold mb-5">
              Lorem Ipsum dolor sit consectetur
            </p>

            <p className="text-xl leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              mattis velit nulla. In hac habitasse platea dictumst. Fusce non
              venenatis velit. Proin luctus malesuada mauris vitae mattis.
              Pellentesque iaculis elit lorem, et varius ipsum dictum. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis
              velit nulla. In hac habitasse platea dictumst. Fusce non venenatis
              velit. Proin luctus malesuada mauris vitae mattis. Pellentesque
              iaculis elit lorem, et varius ipsum dictum.
            </p>
          </div>
          <div className=" relative mx-6  md:w-1/3 ">
            <div
              ref={testimonialsRef}
              className=" flex flex-row overflow-x-scroll md:min-w-[32vw] gap-5"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <TestimonialsCard key={12} />
              <TestimonialsCard key={13} />
              <TestimonialsCard key={14} />
            </div>
            <button
              className="hidden md:flex items-center justify-center  absolute -right-14 top-1/2 bg-white rounded-full w-12 h-12 "
              onClick={handleScrollRight}
            >
              <Image src={"/Vector.png"} width={10} height={10} alt="right" />
            </button>
            <button
              className="hidden md:flex items-center justify-center absolute -left-12 top-1/2 bg-white rounded-full w-12 h-12"
              onClick={handleScrollLeft}
            >
              <Image
                className="rotate-180"
                src={"/Vector.png"}
                width={10}
                height={10}
                alt="left"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
