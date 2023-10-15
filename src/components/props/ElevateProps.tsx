
import React from 'react';

interface ElevateProps {
  heading: string;
  para: string;
  src: string;
}
const ElevateProps: React.FC<ElevateProps> = (props) => {

  const { heading, para, src } = props;

  return (
    <>
      <a
        className=" w-450px rounded-xl border border-gray-800 p-16 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10 hover:bg-white hover:border-gray-800 bg-nebula"
        href="/services/digital-campaigns"
      >
        <div className="pb-4">
          <img src={src} alt="" className="h-10 w-10 " />
        </div>
        <h2 className="py-3 text-2xl font-bold text-blacky">{heading}</h2>

        <p className="pt-1 text- leading-7 text-blacky">{para}</p>
        <div className="pt-6">
          <img
            src="/images/Arrow.svg"
            alt=""
            className="h-10 w-10  text-pink-500"
          />
        </div>
      </a>
    </>
  );
}

export default ElevateProps;
