const AboutPage = () => {
  return (
    <>
      <h3>A Little Bit About Me</h3>
      <br />
      <p>Web designer from Gujarat, India. I have rich experience in website design and building, also I am good at Django and WordPress. I love to talk with you about the idea of our unique project.</p>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
