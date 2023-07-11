import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Kaushal Patel is an avid full stack web developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="raj patel, raj, patel, web developer portfolio, raj web developer,   raj developer, raj patel portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Raj Patel's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to use."
      />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Kaushal Patel',
};
