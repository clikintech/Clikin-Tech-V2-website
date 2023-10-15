import Button from "./Button";

function Banner() {
  return (
    <>
      <section className=" max-w-screen-4xl overflow-hidden sm:grid sm:grid-cols-2 sm:items-center lg:mt--50px ">
        <div className="p-50px md:p-12 lg:px-16 lg:py-24">
          <div>
            <img src="/images/memphics_010 copy 1.png" alt="" className="" />
          </div>
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-2xl font-extrabold text-white text-left md:text-4xl leading-10 pb-3">
              We Help <span className="text-yellow">Businesses </span>To Be{" "}
              <span className="text-yellow">Digitally Visible!</span>
            </h1>

            <p className=" text-white md:mt-4 md:block text-xl text-left pb-3">
              Empowering your digital success is our priority. As a trusted
              global software agency, we elevate brands worldwide. Scale your
              business digitally with our innovative solutions.
            </p>

            <div className="mt-4 md:mt-8 flex m-auto items-center justify-start gap-4">
              <Button name={"Get In Touch"} />
              <Button name={"Our Portfolio"} />
            </div>
            <div className="ml-500px mt--60px w-full ">
              <img src="/images/memphics_011 copy 1.png" alt="" />
            </div>
          </div>
        </div>

        <img
          alt="Violin"
          src="/images/Frame 16.png"
          className="w-850px ml-100px object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
        />
      </section>
    </>
  );
}

export default Banner;
