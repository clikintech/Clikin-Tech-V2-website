interface ProductProps {
  src: string;
  name: string;
}

const ProductProps: React.FC<ProductProps> = (props) => {

  const { src, name } = props;
  
  return (
    <>
      <a href="#" className="block">
        <img
          alt="Signage"
          src={src}
          className=" w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
        />

        <div className="mt-2 sm:flex sm:items-center sm:justify-center sm:gap-4">
          <strong className="font-medium">{name}</strong>
        </div>
      </a>
    </>
  );
}


export default ProductProps;
