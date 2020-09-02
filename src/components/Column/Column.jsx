import React from 'react';

import './column.sass';

function ColumnItem(props) { return ( <li className="item">{props.value}</li>); }

function Column(props) {
  const { title, news, dataType, sort } = props;

  let data = null;
  if (news && news.length !== 0) { data = news.map(item => <ColumnItem key={item.id} value={item[dataType]} />); }

  const onTitleClick = event => { sort(); }

  return (
    <>
      <h6 className="title" onClick={onTitleClick}>{title}</h6>
      <ul className="column-list">{data}</ul>
    </>
  );
}

export default Column;
