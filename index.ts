import { Flysh, IOMessageMapper, InputMessage, PageRecords } from "flysh";

/**
 * Target file is test.html
 * 
 * The file contains a table with 3 columns and 4 rows (including header)
 */
let IM = new InputMessage('.','/test.html');

/**
 * Define the filter selector and fields to be extracted
 */
IM.addFilterSelector("table tr td")
    .addField('site','td','')
    .addField('youtube','td','')
    .addField('apps','td','');

console.log(IOMessageMapper.toJSON(IM));

/**
 * Create the Flysh instance and run the process
 */
let flyshInstance = new Flysh(IM);

/**
 * Run the instance and print the results
 */
flyshInstance.run().then((results) => {
    console.log('Pages/Total of Records [' + results.numberOfPages + ', ' 
                                                                       + results.numberOfRecords + ']' 
                                                                       + "\n" + 'Integrity Check ' + ': ' 
                                                                       + results.integrityCheck);
                                results.pageRecordList.forEach((e: PageRecords)=> {console.log(e);});
                                console.log("\n### End of process ###\n");
});