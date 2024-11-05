import { Play } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="md:h-[100vh] md:p-12 p-2">
      <div
        className="rounded-3xl flex flex-col justify-end md:p-16 p-8 text-white bg-cover md:h-[100vh] h-[70vh] "
        style={{
          backgroundImage: "url(/home.png)",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Play className="bg-white rounded-full w-12 h-12 p-2" color="black" />
        <p className="md:text-5xl text-xl mb-12">Lorem ipsum dolor sit amet.</p>
        <p className="md:text-2xl mb-2 ">Sanchez Alexis</p>
        <p className="md:text-2xl font-light">CEO & Founder of Demo</p>
      </div>
    </section>
  );
}
