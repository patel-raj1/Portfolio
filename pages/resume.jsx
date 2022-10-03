const ResumePage = () => {
    return (
      <>
        <iframe width="100%" height="100%" src="https://drive.google.com/file/d/1w2dccUQZaX36Q2aJSK6mgrr6S8mOHWDg/preview" allow="autoplay"></iframe>
      </>
    );
  };
  
  export async function getStaticProps() {
    return {
      props: { title: "Resume" },
    };
  }
  
export default ResumePage;