/**
 * Created by kong90 on 16-5-28.
 */
var csv =require('csv');

csv()

.from('"1","2","3","4"\n"a","b","c","d"')

.to(console.log)