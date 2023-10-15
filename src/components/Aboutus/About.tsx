import Button from "../Button";
import Section from "../props/Section";
import Elevate from "./Elevate";
import Service from "./Service";

function About() {
  return (
    <>
      <section className=" max-w-screen-4xl overflow-hidden sm:grid sm:grid-cols-2 sm:items-center lg:mt--50px bg-slate-50 ">
        <div className="p-50px md:p-12 lg:px-16 lg:py-24">
          <div className=" ml-60px  w-600px text-center ltr:sm:text-left rtl:sm:text-right">
            <p className="pb-8 text-xl flex justify-start items-start text-blacky">
              About Us
            </p>
            <h1 className="text-2xl font-extrabold text-slate-800 text-left md:text-4xl leading-10 pb-3">
              <span className="text-yellow">Clikin Tech</span> fuels business
              growth, fostering trust and{" "}
              <span className="text-yellow">credibility.</span>
            </h1>

            <p className=" text-blacky md:mt-4 md:block text-xl text-left pb-3">
              Elevate your business with Clikin Tech. Our expertise fuels growth
              while fostering trust and credibility, driving you towards
              success.
            </p>

            <div className="mt-4 md:mt-8 flex m-auto items-center justify-start ">
              <div className="flex items-center justify-center gap-4">
                <Button name={"Book A Demo"} />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-2  ">
          <Section
            heading={"Our Story"}
            src={"/images/Icons.png"}
            para={
              "From traditional to digital, Clikin Tech empowers businesses with impactful strategies. Elevate website traffic, sales, and income. Tailoring local solutions to your goals, we stay current with the latest advancements."
            }
          />

          <Section
            heading={"Our Mission"}
            src={"/images/Icons (1).svg"}
            para={
              "Our mission is to be trusted partners for impactful digital solutions, unleashing creativity and data-driven strategies. We turn dreams into reality, driven by success, unity, and unwavering commitment."
            }
          />
        </div>
      </section>
      <Elevate />
      <Service />
    </>
  );
}

export default About;
