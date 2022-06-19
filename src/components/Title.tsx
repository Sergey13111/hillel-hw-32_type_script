type TitleProps = {
  name: string;
  type?: "bold" | "normal";
};

const Title = ({ name, type="normal" }: TitleProps) => {
  return <h1 style={{ fontWeight:type }}>Car body: {name}</h1>;
};

export default Title;