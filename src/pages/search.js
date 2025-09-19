import React from 'react';
import Layout from '@theme/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';

function SearchPage() {
  return (
    <Layout title="Search">
      <BrowserOnly fallback={<div>Loading...</div>}>
        {() => {
          const SearchBar = require('@theme/SearchBar').default;
          return (
            <div className="container margin-vert--lg">
              <h1>Search Documentation</h1>
              <SearchBar />
            </div>
          );
        }}
      </BrowserOnly>
    </Layout>
  );
}

export default SearchPage;