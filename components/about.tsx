type AboutProps = {
  title: string;
  description: string;
};

export default function About({ title, description }: AboutProps) {
  return (
    <section>
      <h2>{title}</h2>
      <p>{description}</p>
    </section>
  );
}