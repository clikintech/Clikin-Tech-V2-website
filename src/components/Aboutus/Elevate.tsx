import ElevateProps from "../props/ElevateProps";

function Elevate() {
  return (
    <>
      <section className="pb-20 max-w-screen-4xl overflow-hidden sm:grid sm:grid-cols-2 sm:items-center lg:items-center lg:mt--50px bg-slate-50 ">
        <div className=" md:p-12 lg:px-16 lg:py-24">
          <div className=" ml-60px  w-500px text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-2xl font-extrabold text-slate-800 text-left md:text-4xl leading-10 pb-3">
              Elevate Your Business with Clikin Tech.
            </h1>

            <p className=" text-blacky md:mt-4 md:block text-xl text-left pb-3">
              We deliver high quality products on time to makeyour business
              profitable.
            </p>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  ">
          <ElevateProps
            src={"/images/Vector (1).png"}
            heading={"Unlock Exceptional ROI"}
            para={
              "Discover innovative solutions that yield remarkable returns on investment, transforming your business outcomes."
            }
          />
          <ElevateProps
            src={"/images/Vector (2).png"}
            heading={"Drive Strategy for Promotion"}
            para={
              " Elevate your business through analytical strategies, propelling growth and fostering lasting success."
            }
          />
        </div>
      </section>
    </>
  );
}
export default Elevate;
