import React from "react";
import algoliasearch from "algoliasearch";
import {
  InstantSearch,
  SearchBox,
  Hits,
  Highlight,
  Stats,
  SortBy,
  Pagination,
} from "react-instantsearch-dom";
// import "./algolia.css";

// "latency", "56f24e4276091e774e8157fe4b8b11f6";

const searchClient = algoliasearch(
  "W8RXWQPJLP",
  "a587b3f1dd8a2a966b33cd29f66303dd"
);

function Search({ hit }) {
  console.log(hit);
  return (
    <InstantSearch searchClient={searchClient} indexName="dev_DHKH">
      <Header />
      <div className="body-content">
        <Content />
      </div>
    </InstantSearch>
  );
}
const Header = () => (
  <header className="header">
    <SearchBox
      className="search-bar"
      translations={{ placeholder: "Search for Movies" }}
    />
  </header>
);
const Hit = ({ hit }) => (
  <a href={"/"}>
    <div className="card">
      <div className="card-image">
        <div className="card-rating">{hit.kategori_menu}</div>
      </div>
      <div className="card-contents">
        <Highlight attribute="nama_kedai" hit={hit} className="nama_kedai" />
        <Highlight
          attribute="halte_stasiun"
          hit={hit}
          className="nama_stasiun"
        />
        <div className="card-rating">Rating: {hit.kontributor}</div>
        <div className="card-genre">
          {" "}
          <span>{hit.lokasi}</span> <span>{hit.kontributor}</span>{" "}
        </div>
      </div>
    </div>
  </a>
);
const Content = () => (
  <main>
    <div className="information">
      <div className="stats">
        {" "}
        <Stats />{" "}
      </div>
    </div>
    <Hits hitComponent={Hit} />
    <div>
      {" "}
      <Pagination />
    </div>
  </main>
);
export default Search;
