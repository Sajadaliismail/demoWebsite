import Image from "next/image";

interface InsightsCardProps {
  imageUrl: string;
  date: string;
  content: string;
}
const InsightsCard = ({ imageUrl, date, content }: InsightsCardProps) => {
  return (
    <div
      className=" text-white flex flex-col justify-end text-wrap md:w-[28vw] w-[90vw] md:p-12 rounded-2xl ml-5"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "70vh",
      }}
    >
      <p className="font-light mb-5"> {date}</p>
      <p className="font-medium text-2xl text-wrap mb-5">{content}</p>
      <p className="mb-3">Read More</p>
    </div>
  );
};

export default function Insights() {
  return (
    <section id="insights" className="min-h-[100vh]">
      <div className="flex flex-col py-16 h-full">
        <div className="flex flex-row justify-center gap-16 md:justify-between mx-14 h-full mb-5">
          <h3 className="text-2xl md:text-5xl font-light text-nowrap">
            Latest Insights
          </h3>
          <div className="flex flex-row-reverse gap-2">
            <button
              className="flex items-center justify-center    bg-slate-200 rounded-full w-12 h-12 "
              //   onClick={handleScrollRight}
            >
              <Image src={"/Vector.png"} width={10} height={10} alt="right" />
            </button>
            <button
              className="flex items-center justify-center    bg-slate-200 rounded-full w-12 h-12"
              //   onClick={handleScrollLeft}
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
        <div className="flex flex-row justify-between mx-auto gap-8 md:max-w-[90vw] md:max-h-[100vh] overflow-x-scroll ">
          <InsightsCard
            imageUrl="/insights1.png"
            key={"insights1"}
            date="21 March 2023"
            content="dictumst. Fusce non venenatis velit. Proin luctus malesuada mauris vitae mattis"
          />

          <InsightsCard
            imageUrl="/insights2.png"
            key={"insights2"}
            date="21 March 2023"
            content="dictumst. Fusce non venenatis velit. Proin luctus malesuada mauris vitae mattis"
          />
          <InsightsCard
            imageUrl="/insights3.png"
            key={"insights3"}
            date="21 March 2023"
            content="dictumst. Fusce non venenatis velit. Proin luctus malesuada mauris vitae mattis"
          />
        </div>
      </div>
    </section>
  );
}
