function Content({ heading, para }) {
  return (
    <>
      <a
        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="/services/digital-campaigns"
      >
        <img
          src="/images/Icons.svg"
          alt=""
          className="h-10 w-10 text-pink-500"
        />
        <h2 className="mt-4 pb-2 text-xl font-bold text-white">{heading}</h2>

        <p className="mt-1 text-sm leading-7 pb-2 text-gray-300">{para}</p>
        <img
          src="/images/Arrow.svg"
          alt=""
          className="h-10 w-10 text-pink-500"
        />
      </a>
    </>
  );
}

export default Content;
