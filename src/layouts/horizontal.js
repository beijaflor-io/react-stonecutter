
export default function(items, props) {
  const rows = [];

  function buildRow(columns) {
    const row = [];
    for (let i = 0; i < columns; i++) {
      row.push({
        filled: false
      });
    }
    return row;
  }

  function checkRowCapacity(shift) {
    return rows.findIndex(row => {
      let counter = 0;
      for (let cell of row) {
        if (cell.filled) {
          counter++;
        }
        if (counter >= shift) {
          return true;
        }
      }
    });

    // for (let row of rows) {
    //   let counter = 0;
    //   for (let cell of row) {
    //     if (cell.filled) {
    //       counter++;
    //     }
    //
    //   }
    // }
  }

  function fillRow(rowNumber, shift) {
    let counter = 0;
    rows[rowNumber].forEach(row => {
      if (counter < shift && !row.filled) {
        row.filled = true;
        counter++;
      }
    });
  }

  const { columnWidth, itemHeight = 150, columns,
    gutterWidth, gutterHeight } = props;
  debugger;
  let index = 0;

  // build the first row
  rows.push(buildRow(columns));

  const positions = items.map((itemProps) => {
    const ratio = itemProps.dataRatio || 1;
    const offset = index + ratio;
    let column;
    let row;
    if (offset % columns === 0 || index % columns < offset % columns) {
      column = index % columns;
      // row = Math.floor(index / columns);
    } else {
      column = 0; // index % columns;
      // row = Math.floor(index / columns) + 1;
    }
    row = checkRowCapacity(ratio);
    // const row = Math.floor(index / columns);

    const gutter = column === 0 ? 0 : (ratio === 1 ? column : ratio + 1) * gutterWidth;
    const x = column * columnWidth + gutter;
    const y = row * itemHeight + row * gutterHeight;
    index = offset;
    fillRow(row, ratio);

    return [x, y];
  });

  const gridWidth = columns * columnWidth + ((columns - 1) * gutterWidth);
  const gridHeight = Math.ceil(items.length / columns) *
    (itemHeight + gutterHeight) - gutterHeight;

  return { positions, gridWidth, gridHeight };
}
