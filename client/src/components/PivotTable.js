import React from 'react';
import PivotTableUI from 'react-pivottable/PivotTableUI';
import 'react-pivottable/pivottable.css';

function PivotTable({ data }) {
  return (
    <PivotTableUI
      data={data}
      onChange={s => setPivotState(s)}
      {...pivotState}
    />
  );
}

export default PivotTable;
