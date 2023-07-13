const ResumePage = () => {
    return (
      <>
        <iframe width="100%" height="100%" src="https://drive.google.com/file/d/1W721w6h5woewctaYpmmDu6tTeZ64xQTM/preview" allow="autoplay"></iframe>
      </>
    );
  };
  
  export async function getStaticProps() {
    return {
      props: { title: "Resume" },
    };
  }
  
export default ResumePage;
