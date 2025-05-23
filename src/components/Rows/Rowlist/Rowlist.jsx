import React from 'react'
import Row from '../Row/Row'

const Rowlist = () => {
  return (
    <div>
      <Row
        title="NETFLIX ORIGINAL"
        url={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row
        title="Trending now"
        url={requests.fetchTrending}
        isLargeRow={true}
      />
    </div>
  );
}

export default Rowlist
