"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var flysh_1 = require("flysh");
/**
 * Target file is test.html
 *
 * The file contains a table with 3 columns and 4 rows (including header)
 */
var IM = new flysh_1.InputMessage('.', '/test.html');
/**
 * Define the filter selector and fields to be extracted
 */
IM.addFilterSelector("table tr td")
    .addField('site', 'td', '')
    .addField('youtube', 'td', '')
    .addField('apps', 'td', '');
console.log(flysh_1.IOMessageMapper.toJSON(IM));
/**
 * Create the Flysh instance and run the process
 */
var flyshInstance = new flysh_1.Flysh(IM);
/**
 * Run the instance and print the results
 */
flyshInstance.run().then(function (results) {
    console.log('Pages/Total of Records [' + results.numberOfPages + ', '
        + results.numberOfRecords + ']'
        + "\n" + 'Integrity Check ' + ': '
        + results.integrityCheck);
    results.pageRecordList.forEach(function (e) { console.log(e); });
    console.log("\n### End of process ###\n");
});
