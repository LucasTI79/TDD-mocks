const { error } = require('./src/constants');
const File = require('./src/file');
const { rejects, deepStrictEqual } = require('assert');
;
(async () => {
  {
    const filePath = './mocks/emptyFile-invalid.csv';
    const rejection = new Error(error.FILE_LENGHT_ERROR_MESSAGE);
    const result = File.csvToJson(filePath);
    await rejects(result,rejection)
  }
  {
    const filePath = './mocks/fourItems-invalid.csv';
    const rejection = new Error(error.FILE_LENGHT_ERROR_MESSAGE);
    const result = File.csvToJson(filePath);
    await rejects(result,rejection)
  }
  {
    const filePath = './mocks/threeItems-valid.csv';
    const result = await File.csvToJson(filePath);
    const expected = [
      {
        "name": "Lucas",
        "id": 123,
        "profession": "Junior",
        "birthday": 2003
      },
      {
        "name": "Erick",
        "id": 321,
        "profession": "Javascript instructor",
        "birthday": 1996
      },
      {
        "name": "Xuxa da SIlva",
        "id": 231,
        "profession": "Javascript Specialist",
        "birthday": 1941
      }
    ]
    await deepStrictEqual(JSON.stringify(result),JSON.stringify(expected))
  }
})()