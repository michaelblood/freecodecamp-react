import React, { PropTypes } from 'react';
import marked from 'marked';

const Markdowned = ({ toBe }) => {
  return (
    <div
      className="col-md-6 col-xs-12 formatted"
      dangerouslySetInnerHTML={{__html: marked(toBe)}}
    />
  );
};

Markdowned.propTypes = {
  unformatted: PropTypes.string,
};

export default Markdowned;
