interface IRC {
  rowNumber: number;
  colNumber: number;
}

const alphabeticPosition = [
  '',
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

export const cellToRowColumn = (cellName: string) => {
  const rowNumber = +cellName.match(/\d+/g)![0];

  const [firstLetter, secondLetter, thirdLetter] = cellName.match(/([A-Z])/g)!;

  const firstExist = +alphabeticPosition.indexOf(firstLetter);

  const secondExist =
    secondLetter &&
    +26 * alphabeticPosition.indexOf(firstLetter) +
      alphabeticPosition.indexOf(secondLetter);

  const thirdExist =
    thirdLetter &&
    +(
      26 * 26 * alphabeticPosition.indexOf(firstLetter) +
      26 * alphabeticPosition.indexOf(secondLetter) +
      alphabeticPosition.indexOf(thirdLetter)
    );

  const columnNumber = thirdExist || secondExist || firstExist;

  return { rowNumber, columnNumber };
};

export const rcToCell = function (rc: IRC) {
  let { rowNumber, colNumber } = rc;
  let base = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  let remainder,
    columnLetter = '';
  do {
    remainder = colNumber % 26;
    columnLetter = base[(remainder || 26) - 1] + columnLetter;
    colNumber = Math.floor(colNumber / 26);
  } while (colNumber > 0);
  return `${columnLetter}${rowNumber}`;
};

export const luckysheetOptions = {
  showtoolbar: false,
  showinfobar: false,
  userInfo: false,
  showsheetbarConfig: {
    add: false,
    menu: false
  },
  enableAddRow: false,
  cellRightClickConfig: {
    copy: false,
    copyAs: false,
    paste: false,
    insertRow: false,
    insertColumn: false,
    deleteRow: false,
    deleteColumn: false,
    deleteCell: false,
    hideRow: false,
    hideColumn: false,
    rowHeight: false,
    columnWidth: false,
    clear: false,
    matrix: false,
    sort: false,
    filter: false,
    chart: false,
    image: false,
    link: false
  },
  sheetRightClickConfig: {
    delete: false,
    copy: false,
    rename: false,
    color: false,
    hide: false,
    move: false
  },
  allowEdit: false
};
