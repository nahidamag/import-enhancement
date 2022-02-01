import React, { useEffect, CSSProperties, useContext } from 'react';
import { SpreadsheetContext } from '../../../../context/SpreadsheetContext';
import { ISpreadSheetRenderOutputData } from '../../../../interfaces/ISpreadsheetContext';
import { luckysheetOptions, rcToCell } from '../../../../utils/spreadsheet';

interface IProps {
  data: any; 
}

const luckyCss: CSSProperties = {
  height: '70vh',
  width: '75vw'
};

const SpreadsheetRender: React.FC<IProps> = props => {
  const { assignSelectedCellInfo } = useContext(SpreadsheetContext);
  const luckysheet = (window as any).luckysheet;

  const { data } = props;
  useEffect(() => {
    if (luckysheet) {
      luckysheet.create({
        container: 'luckysheet',
        data: data.sheets,
        ...luckysheetOptions
      });
    }
  }, [data.sheets, luckysheet]);

  const handleClick = () => {
    /* eslint-disable @typescript-eslint/no-unused-vars */
    const { row, column } = luckysheet.getRange()[0];
    // selection of a range will only count the first selected cell.
    const [rowStart, rowEnd] = row;
    const [colStart, colEnd] = column;

    const cell = rcToCell({
      rowNumber: rowStart + 1,
      colNumber: colStart + 1
    });
    const cellInfo: ISpreadSheetRenderOutputData = {
      RowNumber: rowStart + 1,
      ColNumber: colStart + 1,
      CellLocation: cell
    };
    assignSelectedCellInfo(cellInfo);
  };

  return <div id="luckysheet" onClick={handleClick} style={luckyCss}></div>;
};

export default SpreadsheetRender;
