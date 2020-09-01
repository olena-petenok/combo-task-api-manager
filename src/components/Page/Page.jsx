import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Table from '../Table/Table';

import { DOCUMENT_TITLE } from '../../constants/strings.js';
// import {  } from '../../utils/helper.js';

function Page() {
  useEffect(() => { document.title = DOCUMENT_TITLE; });

  return (
    <>
      <Table />
    </>
  );
}

// Page.propTypes = {  };
// Page.defaultProps = {  };

export default Page;
