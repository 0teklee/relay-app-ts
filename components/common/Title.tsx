const Title = ({ text, subTitle }: { text: string; subTitle?: boolean }) => {
  if (subTitle) {
    return <h2 className="mb-4 text-3xl font-bold">{text}</h2>;
  }
  return <h1 className="mb-6 text-5xl font-bold">{text}</h1>;
};

export default Title;
