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
        content="kaushal patel, kaushal, patel, web developer portfolio, kaushal web developer, kaushal developer, kaushal patel portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Kaushal Patel's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to use."
      />
      <script src='./clarity.js'></script>
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Kaushal Patel',
};
