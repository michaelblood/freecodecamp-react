import React, { PropTypes } from 'react';

const OriginalText = ({ value, onChange }) => {
  return (
    <div className="col-md-6 col-xs-12">
      <textarea value={value} onChange={(e) => onChange(e)} rows="20" className="form-control"></textarea>
    </div>
  );
};

OriginalText.propTypes = {
  
};

export default OriginalText;
