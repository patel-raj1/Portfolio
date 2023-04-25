const ResumePage = () => {
    return (
      <>
        <iframe width="100%" height="100%" src="https://drive.google.com/file/d/1-TjbOQn7hg4tSmKE0JMtHqfZGXm8UACu/preview" allow="autoplay"></iframe>
      </>
    );
  };
  
  export async function getStaticProps() {
    return {
      props: { title: "Resume" },
    };
  }
  
export default ResumePage;
