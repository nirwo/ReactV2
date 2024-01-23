exports.convertRowsToData = (rows) => {
  // Assuming the first row contains headers
  const headers = rows.shift();
  return rows.map((row) => {
    let rowData = {};
    row.forEach((cell, index) => {
      rowData[headers[index]] = cell;
    });
    return rowData;
  });
};