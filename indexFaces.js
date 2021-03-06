var AWS = require('aws-sdk');

// Load credentials and set region from JSON file
AWS.config.loadFromPath('./config.json');

var rekognition = new AWS.Rekognition({apiVersion: '2016-06-27'});

 var params = {
  CollectionId: "Criminals", 
  DetectionAttributes: [
  ], 
  ExternalImageId: "swati", 
  Image: {
   S3Object: {
    Bucket: "mastekinnoations3learning", 
    Name: "single/swati.jpg"
   }
  }
 };

 rekognition.indexFaces(params, function(err, data) {
   if (err) console.log(err, err.stack); // an error occurred
   else     console.log(JSON.stringify(data));           // successful response
   /*
   data = {
    CollectionArn: "aws:rekognition:us-west-2:123456789012:collection/myphotos", 
    StatusCode: 200
   }
   */
 });
