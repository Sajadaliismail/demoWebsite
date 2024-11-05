export default function HeroSection() {
  return (
    <div
      className="flex  flex-col align-bottom justify-end py-28 text-white"
      style={{
        background: "url('/image 274.png')",
        width: "100%",
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="md:w-[80vw] w-full  md:px-16 px-2">
        <p className="text-6xl mb-6">Lorem ipsum dolor sit amet</p>
        <p className="text-xl leading-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis
          velit nulla. In hac habitasse platea dictumst. Fusce non venenatis
          velit. Proin luctus malesuada mauris vitae mattis. Pellentesque
          iaculis elit lorem, et varius ipsum dictum. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac
          habitasse platea dictumst.
        </p>
      </div>
    </div>
  );
}
