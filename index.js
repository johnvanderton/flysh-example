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
 * The expected output is:
 * Pages/Total of Records [1, 3]
 * Integrity Check : true
 * { site: 'Site', youtube: 'Youtube', apps: 'Apps' }
 * { site: 'Site 1', youtube: 'Youtube 1', apps: 'Apps 1' }
 * { site: 'Site 2', youtube: 'Youtube 2', apps: 'Apps 2' }
 *
 * ### End of process ###
 */
flyshInstance.run().then(function (results) {
    console.log('Pages/Total of Records [' + results.numberOfPages + ', '
        + results.numberOfRecords + ']'
        + "\n" + 'Integrity Check ' + ': '
        + results.integrityCheck);
    results.pageRecordList.forEach(function (e) { console.log(e); });
    console.log("\n### End of process ###\n");
});
