const BookmarksPage = () => {
  return (
    <>
      <iframe width="100%" height="100%" src="https://bm.kaushalpatel.info"></iframe>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "Bookmarks" },
  };
}

export default BookmarksPage;