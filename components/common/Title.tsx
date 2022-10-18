const Title = ({
  text,
  subTitle,
  author,
}: {
  text: string;
  subTitle?: boolean;
  author?: boolean;
}) => {
  if (author) {
    return <h3 className="mb-12 text-2xl font-bold">{text}</h3>;
  }

  if (subTitle) {
    return <h2 className="mb-4 text-3xl font-bold">{text}</h2>;
  }
  return <h1 className="mb-6 text-5xl font-bold">{text}</h1>;
};

export default Title;
