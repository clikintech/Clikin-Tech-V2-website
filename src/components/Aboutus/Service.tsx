import Img from "../props/Img";
function Service() {
  return (
    <>
      <section className=" text-black bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div className=" mx-auto max-w-lg text-center flex flex-col justify-center items-center">
            <p className="pb-5 text-xl">Our Tools and Tech Stack</p>

            <h2 className="text-3xl font-bold sm:text-3xl w-700px">
              Explore our toolset and stay informed.
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"></div>
        </div>

        <div>
          <ul className="pb-20 flex justify-center gap-100px md:gap-8 lg:gap-150px shadow-xl transition hover:border-black-500/10 hover:shadow-black-500/10">
            <Img />
          </ul>
        </div>
      </section>
    </>
  );
}

export default Service;
