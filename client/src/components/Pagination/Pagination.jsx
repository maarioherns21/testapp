









const Pagination = ({ totalMovies, moviesPerPage, setCurrentPage }) => {

  const pages = [];
  for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
    pages.push(i);
  }



  return (
    <div>
      {pages.map((page, index) => (
        <div key={index}>
          <button onClick={() => setCurrentPage(page)}>{page} </button>
        </div>
      ))}
    </div>
  );
};

export default Pagination