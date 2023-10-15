// import Content from "../content/Content";
import ProductProps from "./ProductProps";
function Product() {
  return (
    <>
      <section className=" text-black bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div className="pb-8 mx-auto max-w-lg text-center flex flex-col justify-center items-center">
            <p className="pb-3 text-xl">Our Portfolio</p>

            <h2 className="text-3xl font-bold sm:text-3xl w-700px">
              Discover our varied portfolio showcasing{" "}
              <span className="text-yellow">
                web, mobile, design, and strategy.
              </span>
           
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ProductProps
              src={"/images/Digital Marketing.png"}
              name={"Digital Marketing"}
            />
            <ProductProps src={"/images/Frame 28.png"} name={"SAAS App"} />
            <ProductProps
              src={"/images/Frame 1000003728.png"}
              name={"Elysium Resort"}
            />
            <ProductProps
              src={"/images/Frame 1000003728 (1).png"}
              name={"Job SAAS App"}
            />
            <ProductProps
              src={"/images/Frame 1000003728 (2).png"}
              name={"Portfolio"}
            />
            <ProductProps
              src={
                "https://images.unsplash.com/photo-1588515724527-074a7a56616c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
              }
              name={"Developer Space"}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Product;
