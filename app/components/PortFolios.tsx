"use client";
import { MoveLeft, MoveRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface AchievementsInterface {
  title: string;
  content: string;
  number: number;
}
const Acheivements = ({ title, content, number }: AchievementsInterface) => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const divref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      });
    });

    if (divref.current) {
      observer.observe(divref.current);
    }

    return () => {
      if (divref.current) {
        observer.unobserve(divref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const increment = Math.ceil(number / 25);

      const interval = setInterval(() => {
        setCurrentNumber((prev) => {
          if (prev + increment >= number) {
            clearInterval(interval);
            return number;
          }
          return prev + increment;
        });
      }, 50);
      return () => clearInterval(interval);
    }
  }, [number, isVisible]);
  return (
    <span
      ref={divref}
      className="flex flex-col items-center text-center h-32 w-64"
    >
      <h1 className="text-3xl md:text-6xl font-semibold">
        {currentNumber}
        {title}
      </h1>
      <p className="text-xl md:text-3xl">{content}</p>
    </span>
  );
};

interface CardsProps {
  title: string;
  caption: string;
  content: string;
}
const CardComponent = ({ caption, content, title }: CardsProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-sky-100 w-[90vw] md:w-[26vw]  hover:bg-[#002A3A] hover:text-white  px-5 py-8 rounded-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 className="text-3xl  w-[90vw] md:w-[26vw]  mb-3 font-medium">
        {title}
      </h3>
      <hr className={isHovered ? "border-white" : "border-blue-950"} />
      <h4 className="text-3xl  w-[90vw] md:w-[26vw] mb-4 md:mb-6 font-medium mt-5">
        {caption}
      </h4>
      <p className=" w-[80vw] md:w-[24vw] text-wrap font-light text-md">
        {content}
      </p>
    </div>
  );
};

export default function Portfolios() {
  const portfolioRef = useRef<HTMLDivElement>(null);

  const handleScrollRight = () => {
    if (portfolioRef.current) {
      portfolioRef.current.scrollTo({
        left: portfolioRef.current.scrollLeft + window.innerWidth,
        behavior: "smooth",
      });
    }
  };

  const handleScrollLeft = () => {
    if (portfolioRef.current) {
      portfolioRef.current.scrollTo({
        left: portfolioRef.current.scrollLeft - window.innerWidth,
        behavior: "smooth",
      });
    }
  };
  return (
    <section
      id="portfolios"
      className="md:min-h-[160vh] flex flex-col my-auto align-middle justify-between md:py-24 md:mx-28 relative"
    >
      <div className="flex flex-row gap-4 justify-evenly flex-wrap">
        <Acheivements number={8} title="Years" content="of Success" key={1} />
        <div className="border-l-2  hidden md:block border-[#002A3A] h-32 mx-4 " />

        <Acheivements number={200} title="+" content="Members" key={2} />
        <div className="border-l-2  hidden md:block border-[#002A3A] h-32 mx-4" />

        <Acheivements
          number={155}
          title="+"
          content="All Over the USA"
          key={3}
        />
        <div className="border-l-2 hidden md:block border-[#002A3A] h-32 mx-4" />

        <Acheivements
          number={200}
          title="k"
          content="Satisfied Clients"
          key={5}
        />
      </div>
      <div className="text-[#002A3A] w-[90vw] text-center mx-auto md:text-left md:mx-2 md:w-[50vw] mb-5">
        <h1 className="text-3xl md:text-5xl mb-8">Lorem Ipsum</h1>
        <p className="text-lg md:text-xl  ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis
          velit nulla. In hac habitasse platea dictumst. Fusce non venenatis
          velit. Proin luctus malesuada mauris vitae mattis. Pellentesque
          iaculis elit lorem, et varius ipsum dictum.
        </p>
      </div>
      <div
        className="flex flex-row overflow-x-scroll justify-around mx-3 gap-8 relative"
        ref={portfolioRef}
        style={{ scrollbarWidth: "none" }}
      >
        <CardComponent
          caption="Lorem ipsum dolor sit amet, consectetur"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst. Fusce non venenatis velit. Proin luctus malesuada mauris vitae mattis. Pellentesque iaculis elit lorem, et varius ipsum dictum a. Etiam congue non sem et efficitur. Donec in dolor nec tellus iaculis sagittis. Sed sit amet aliquam augue."
          title="01"
        />
        <CardComponent
          caption="Lorem ipsum dolor sit amet, consectetur"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst. Fusce non venenatis velit. Proin luctus malesuada mauris vitae mattis. Pellentesque iaculis elit lorem, et varius ipsum dictum a. Etiam congue non sem et efficitur. Donec in dolor nec tellus iaculis sagittis. Sed sit amet aliquam augue."
          title="02"
        />
        <CardComponent
          caption="Lorem ipsum dolor sit amet, consectetur"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst. Fusce non venenatis velit. Proin luctus malesuada mauris vitae mattis. Pellentesque iaculis elit lorem, et varius ipsum dictum a. Etiam congue non sem et efficitur. Donec in dolor nec tellus iaculis sagittis. Sed sit amet aliquam augue."
          title="03"
        />
        <CardComponent
          caption="Lorem ipsum dolor sit amet, consectetur"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst. Fusce non venenatis velit. Proin luctus malesuada mauris vitae mattis. Pellentesque iaculis elit lorem, et varius ipsum dictum a. Etiam congue non sem et efficitur. Donec in dolor nec tellus iaculis sagittis. Sed sit amet aliquam augue."
          title="04"
        />
        <CardComponent
          caption="Lorem ipsum dolor sit amet, consectetur"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst. Fusce non venenatis velit. Proin luctus malesuada mauris vitae mattis. Pellentesque iaculis elit lorem, et varius ipsum dictum a. Etiam congue non sem et efficitur. Donec in dolor nec tellus iaculis sagittis. Sed sit amet aliquam augue."
          title="05"
        />
      </div>
      <button
        onClick={handleScrollLeft}
        className="hidden md:block absolute -left-8 top-[73%]"
      >
        <MoveLeft />
      </button>
      <button
        onClick={handleScrollRight}
        className="hidden md:block absolute -right-8 top-[73%]"
      >
        <MoveRight />
      </button>
    </section>
  );
}
