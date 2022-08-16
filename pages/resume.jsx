const ResumePage = () => {
    return (
      <>
        <iframe width="100%" height="100%" src="https://mrkaushal.com/wp-content/uploads/2022/08/Resume.pdf"></iframe>
      </>
    );
  };
  
  export async function getStaticProps() {
    return {
      props: { title: "Resume" },
    };
  }
  
export default ResumePage;