const BookmarksPage = () => {
  return (
    <>
      {/* <iframe width="100%" height="100%" src="https://www.tabextend.com/shared/wmuvn7wjkcf82caf50"></iframe> */}
      <h1>PAGE NOT FOUND</h1>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "Bookmarks" },
  };
}

export default BookmarksPage;