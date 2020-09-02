import React from 'react';

import './column.sass';

function ColumnItem(props) { return ( <li>{props.value}</li>); }

function Column(props) {
  const { news, dataType } = props;

  let data = null;
  if (news && news.length !== 0) { data = news.map(item => <ColumnItem key={item.id} value={item[dataType]} />); }

  return ( <ul>{data}</ul> );
}

export default Column;
