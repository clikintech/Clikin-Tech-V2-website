function ProductProps({ src, name }) {
  return (
    <>
      <a href="#" class="block">
        <img
          alt="Signage"
          src={src}
          class=" w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
        />

        <div class="mt-2 sm:flex sm:items-center sm:justify-center sm:gap-4">
          <strong class="font-medium">{name}</strong>

          {/* <span class="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500">
            New
          </span> */}

          {/* <p class="mt-0.5 opacity-50 sm:mt-0">Branding / Signage</p> */}
        </div>
      </a>
    </>
  );
}

export default ProductProps;
