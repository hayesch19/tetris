import React from 'react';
import {StyledCell} from './styles/StyledCell'
import {Tetrominos} from '../tetrominos'

const Cell = ({ type }) => {
  return (
   <StyledCell type={'L'} color={Tetrominos['L'].color}/>
  );
}

export default Cell;
