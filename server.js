const express = require("express");

const app = express();

const cors = require('cors');

app.use(cors());

app.use(express.json());
let fetch = require("cross-fetch");

app.use(express.static("public"));

require("./app/routes/asset.routes")(app);

app.post("/sendCorsRequest/", async (request, response)=>{ // TEST API CALL TO SEE IF SERVER IS UP
  console.log("Server received a request at ", request.url);

  let resp = await fetch(request.body.url);
  resp = await resp.text();
  console.log(resp);

  response.json(resp);
});

// const MongoClient = require('mongodb').MongoClient;

// let mongodb_connection_string = "mongodb://localhost:27017/hrms";

// const {v4 : uuidv4} = require('uuid');

// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// // Connecting MongoDB with Mongoose
// mongoose.connect("mongodb://localhost:27017/hrms").then(() => {
//       console.log('Mongoose connected successfully ')
//     },
//     error => {
//       console.log('Could not connect Mongoose to database : ' + error)
//     }
// )

// let categorySchema = new Schema({
//   category_name: {type:String, required:true},
//   types:{type:{}, required:true} // contains names of types and arrays of subtypes but not validating all that since it's pretty obvious looking at the POST example
// });

// let historySchema = new Schema({
//   fromDate: {type: Date, required:true},
//   toDate: {type: Date, required:true},
//   ownerId: {type:String, required:true},
//   location: {type:String, required:true},
//   department: {type:String, required:true},
//   division: {type:String, required:true}
// });

// let assetSchema = new Schema({
//   tenantId: String,
//   companyId: String,
//   assetId: String,
//   category: String,
//   type: String,
//   subType: String,
//   currentOwnerId: String,
//   currentDepartment: String,
//   currentDivision: String,
//   currentLocation: String,
//   currentState: String,
//   history: [], // this field is validated using the historySchema defined above. this field is supposed to contain an array of objects, one object for each history.
//   isLeased: Boolean,
//   isOwned : Boolean,
  
//   lease: {leaseStartDate: Date, leaseEndDate: Date, lessorDetails: [String], leaseCost: String, refreshDate: Date},
//   value: {purchaseValue: String, currentValue: String, purchaseOrderId: String, purchaseDetails: [String], purchasedBy: String, purchaseDate: Date},
//   warranty: {hasWarranty:Boolean, warrantyStartDate: Date, warrantyEndDate: Date, warrantyPlanName: String, warrantyDocument: String},
//   details: {manufacturer: String, modelName: String, modelNumber: String, serialNumber: String, processor: String, memory: String, storage: String, operatingSystem: String},
//   licenses: {type:[String], required:false},
//   shipping: {type:[String], required:false},
//   comments: {type:[String], required:false},
//   approval: {type:String, required:false},
// });

// // FOR UPDATING CATEGORY/TYPE/SUBTYPE, FOR NOW USE A COMBINATION OF GET, DELETE, PUT/POST CATEGORY/TYPE/SUBTYPE :(


// function MakeAllFieldsRequiredByDefault(schema) { // THIS FUNCTION TAKES INTO ACCOUNT IF SCHEMA ALREADY HAS A REQUIRED:FALSE FIELD!
//   for (let i in schema.paths) {
//     let attribute = schema.paths[i];

//     if (attribute.isRequired === undefined) {
//       attribute.required(true);
//     }
//     else if (attribute.isRequired === false){
//       console.log("THIS WAS SET TO FALSE BY DEFAULT!")
//     }
//     else{
//       console.log("Looks like this field was already set to be true");
//     }
//   }
// }

// MakeAllFieldsRequiredByDefault(assetSchema); // calling the function to make all fields in the assetSchema required if they are not set already to false by default.

// console.log(assetSchema.obj);

// const Asset = mongoose.model("Asset", assetSchema);
// const History = mongoose.model("History", historySchema);
// const Category = mongoose.model("Category", categorySchema);

// MongoClient.connect(mongodb_connection_string, {useUnifiedTopology: true }).then((client)=>{

//   console.log("ssuresh connected to the hrms database!");
//   const db = client.db("hrms");
//   const assets_collection = db.collection('ssuresh_assets_collection');
//   const categories_collection = db.collection('ssuresh_categories_collection');


//   app.get("/get_asset_by_assetId", (request, response)=>{
//     console.log("Server received a request at ", request.url);

//     assets_collection.find({"assetId":request.body.assetId}).toArray().then((resp)=>{
//       // console.log(resp);
//       response.send(resp[0]);
//     }).catch(error => {
//       console.error(error);
//       response.send(error);
//     });

//   });


//   app.put("/update_asset", (request, response)=>{
//     // ISSUES WITH THIS CALL:
//     // 1. NEED TO ADD A WAY TO CHECK IF THE NEW VALUE MATCHES THE TYPE REQUIRED BY THE SCHEMA.
//     // 2. For now, to update fields that are to be populated with arrays, for eg., history is an array of history objects,
//       // use the '/get_asset_by_assetId' API call to get the histories of the asset and then modify the histories and pass the modified array of histories through this API call.
//     // 3. SINCE FOR LOOPS IN JS ARE SYNCHRONOUS, THE FOR LOOP IN THIS CALL FINISHES RUNNING BEFORE THE ASYNC PART OF THE CODE (SUCH AS THE DB INTERACTION PART) FINISHES RUNNING.
//       // FOR THIS REASON, I USED A 2 second TIMEOUT AS A **TEMPORARY** SOLUTION TO MAKE SURE THE ASYNC PART FINISHES RUNNING BEFORE SENDING THE RESPONSE.

//     console.log("Server received a request at ", request.url);

//     let assetId = request.body["assetId"];

//     let toUpdateArray = request.body["toUpdate"];

//     let success_logs = [];
//     let error_logs = [];

//     function update_asset(){

//       return new Promise((resolve, reject) =>{
//         console.log("update_array length:", toUpdateArray.length);
//         for (let i = 0; i < toUpdateArray.length; i++){
//           assets_collection.find({"assetId":assetId}).toArray().then((resp)=>{

//             let key = Object.keys(toUpdateArray[i])[0]; // SINCE WE KNOW ONLY ONE KEY-VALUE PAIR PER OBJECT (ELEMENT OF THE ARRAY ) IN THE ARRAY

//             let to_update = { $set : { [key]: toUpdateArray[i][key]}}

//             assets_collection.updateOne({"assetId":assetId}, to_update).then((resp)=>{
//               console.log("Inside the loop here!");
//               success_logs.push(resp);
//               console.log("sl:",success_logs);
//             }).catch(error => {
//               console.error(error);
//               error_logs.push("This Error is as following: " + error.name + error.message + error.stack);
//               console.log("el:", error_logs);
//             });
//           }).catch(error => {
//             console.error(error);
//             error_logs.push("This Error is as following: " + error.name + error.message + error.stack);
//             console.log("el:", error_logs);
//           });

//         } // END OF FOR LOOP

//         // THE THIRD ISSUE AS DESCRIBED ABOVE IS ADDRESSED HERE:
//         setTimeout(() => {

//           console.log('Loop completed.')
//           resolve();
//         }, 2000)

//       }); // END OF PROMISE
//     }

//     async function finalCall (){
//       console.log("Before promise call.");

//       await update_asset();
//       console.log("Promise resolved!");

//       let ret_array = success_logs.concat(error_logs);
//       response.send(ret_array);

//     }

//     finalCall(); // CALLS THE FUNCTION THAT RESPONDS TO THE API CALL

//   });



//   app.post("/asset", (request, response)=>{

//     // checking for the array input type fields in the schema here manually cuz mongoose array validation is flaky.

//     let purchaseDetailsArray = request.body.value.purchaseDetails; // this is a required field

//     // the three fields below are NOT required. If they are undefined, ignore them.
//     let licensesArray = request.body.licenses;
//     let shippingArray = request.body.shipping;
//     let commentsArray = request.body.comments;

//     if (purchaseDetailsArray === undefined){
//       console.error("Please add the Purchase Details array to the asset inside the 'value' object!");
//       response.send({message:"Please add the Purchase Details array to the asset inside the 'value' object!"});
//       return ;
//     }
//     else {
//       if (purchaseDetailsArray.length < 1){
//         console.error("The 'purchaseDetails' array must contain at least one element!");
//         response.send({message:"The 'purchaseDetails' array must contain at least one element!"});
//         return ;
//       }
//     }

//     if (!Array.isArray(purchaseDetailsArray)){
//       console.error("The 'purchaseDetails' field has to be an array of strings!");
//       response.send({message:"The 'purchaseDetails' field has to be an array of strings!"});
//       return ;
//     }

//     if (licensesArray !== undefined){
//       if (!Array.isArray(licensesArray)){
//         console.error("The 'licenses' field has to be an array of strings!");
//         response.send({message:"The 'licenses' field has to be an array of strings!"});
//         return ;
//       }
//     }

//     if (shippingArray !== undefined){
//       if (!Array.isArray(shippingArray)){
//         console.error("The 'shipping' field has to be an array of strings!");
//         response.send({message:"The 'shipping' field has to be an array of strings!"});
//         return ;
//       }
//     }

//     if (commentsArray !== undefined){
//       if (!Array.isArray(commentsArray)){
//         console.error("The 'comments' field has to be an array of strings!");
//         response.send({message:"The 'comments' field has to be an array of strings!"});
//         return ;
//       }
//     }

//     let history_flag = false;
//     console.log("Server received a request at ", request.url);

//     let histories_array = request.body.history;

//     if (histories_array === undefined){
//       console.error("Please add the Histories array to the asset!");
//       response.send({message:"Please add the Histories array to the asset!"});
//       return ;
//     }
//     else if(histories_array.length < 1){
//       console.error("The histories array must contain at least one element!");
//       response.send({message:"The histories array must contain at least one element!"});
//       return ;
//     }

//     request.body["assetId"] = uuidv4(); // creating and adding a UUID to the asset details as the assetId

//     let cur_asset = new Asset(request.body);

//     console.log("cur_asset: ", cur_asset);

//     async function verify_histories(){
//       for (let i = 0; i < histories_array.length; i++) {
//         let cur_history = new History(histories_array[i]);
//         cur_history.validate(function (err) {
//           if (err) {
//             history_flag = true;
//             console.log("History", i, "failed validation!");
//             console.error(err);
//           } else {
//             console.log("History", i, "passed validation!");
//           }
//         });
//       }
//     }

//     verify_histories().then(()=>{
//       if (history_flag){
//         console.log("One or more histories are invalid! Please check the console logs.")
//         response.send({message:"One or more histories are invalid! Please check the console logs."})
//         return ;
//       }
//       cur_asset.validate(function (err){
//         if (err){
//           console.log(err);
//           response.send(err);
//         }else{
//           console.log('Passed validation!')
//           assets_collection.insertOne(request.body).then((result)=>{
//             console.log(result);
//             response.send(result);
//           }).catch((error)=>{
//             console.error(error);
//             response.send(error);
//           });
//         }
//       });
//     });

//   });

//   app.delete("/delete_subtype", (request, response)=>{
//     console.log("Server received a request at ", request.url);

//     let category_name = request.body["category_name"];
//     let type_name = request.body["type_name"];

//     categories_collection.find({"category_name":category_name}).toArray().then((resp)=>{
//       console.log(resp);

//       let cur_types = resp[0]["types"];

//       let temp_arr = cur_types[type_name];

//       temp_arr = temp_arr.filter(item => item !== request.body["subtype"])

//       console.log(temp_arr);

//       cur_types[type_name] = temp_arr;

//       let to_update = { $set : {types : cur_types}}

//       categories_collection.updateOne({"category_name":category_name}, to_update).then((resp)=>{
//         console.log(resp);
//         response.send(resp);
//       }).catch(error => {
//         console.error(error);
//         response.send(error);
//       });
//     }).catch(error => {
//       console.error(error);
//       response.send(error);
//     });

//   });

//   app.delete("/delete_type", (request, response)=>{
//     console.log("Server received a request at ", request.url);

//     let category_name = request.body["category_name"];

//     categories_collection.find({"category_name":category_name}).toArray().then((resp)=>{
//       console.log(resp);
//       let cur_types = resp[0]["types"];
//       delete cur_types[request.body["type_name"]];

//       let to_update = { $set : {types : cur_types}}
//       categories_collection.updateOne({"category_name":category_name}, to_update).then((resp)=>{
//         console.log(resp);
//         response.send(resp);
//       }).catch(error => {
//         console.error(error);
//         response.send(error);
//       });
//     }).catch(error => {
//       console.error(error);
//       response.send(error);
//     });

//   });

//   app.delete("/delete_category", (request, response)=>{
//       console.log("Server received a request at ", request.url);

//       categories_collection.deleteOne({"category_name" : request.body["category_name"]}).then((result)=>{
//         console.log(result);
//         response.send(result);
//       }).catch(error => {
//         console.error(error);
//         response.send(error);
//       })
//   });


//   app.put("/add_subtype", (request, response)=>{
//     console.log("Server received a request at ", request.url);

//     let category_name = request.body["category_name"];
//     let type_name = request.body["type_name"];

//     console.log(category_name);
//     console.log(type_name);

//     categories_collection.find({"category_name":category_name}).toArray().then((resp)=>{
//       console.log(resp);

//       let cur_types = resp[0]["types"];

//       cur_types[type_name].push(request.body["new_subtype"]);

//       let to_update = { $set : {types : cur_types}}

//       categories_collection.updateOne({"category_name":category_name}, to_update).then((resp)=>{
//         console.log(resp);
//         response.send(resp);
//       }).catch(error => {
//         console.error(error);
//         response.send(error);
//       });
//     }).catch(error => {
//       console.error(error);
//       response.send(error);
//     });

//   });


//   app.put("/add_type", (request, response)=>{
//     console.log("Server received a request at ", request.url);

//     let category_name = request.body["category_name"];
//     console.log(category_name)
//     categories_collection.find({"category_name":category_name}).toArray().then((resp)=>{
//       console.log(resp);
//       let cur_types = resp[0]["types"];
//       cur_types[request.body["new_type"]] = request.body["subtypes"]

//       let to_update = { $set : {types : cur_types}}
//       categories_collection.updateOne({"category_name":category_name}, to_update).then((resp)=>{
//         console.log(resp);
//         response.send(resp);
//       }).catch(error => {
//         console.error(error);
//         response.send(error);
//       });
//     }).catch(error => {
//       console.error(error);
//       response.send(error);
//     });

//   });


//   app.get("/get_types", (request, response)=>{
//     console.log("Server received a request at ", request.url);

//     categories_collection.find({"category_name":request.body["category_name"]}).toArray().then((resp)=>{
//       let resp_arr = [];
//       for (let i in resp){
//         console.log(resp[i])
//         for (let j in resp[i]["types"]){
//           resp_arr.push({[j]:resp[i]["types"][j]});
//         }
//       }
//       response.send(resp_arr);
//     }).catch(error => {
//       console.error(error);
//       response.send(error);
//     });

//   });


//   app.get("/get_categories", (request, response)=>{
//     console.log("Server received a request at ", request.url);

//     categories_collection.find().toArray().then((resp)=>{
//       let resp_arr = [];
//       for (let i in resp){
//         console.log(resp[i])
//         resp_arr.push(resp[i]["category_name"]);
//       }
//       response.send(resp_arr);
//     }).catch(error => {
//       console.error(error);
//       response.send(error);
//     });

//   });


//   app.post("/post_category", (request, response)=>{
//     console.log("Server received a request at ", request.url);

//     let cur_category = new Category(request.body);
//     cur_category.validate(function (err) {
//       if (err) {
//         console.error(err);
//         response.send(err);
//       } else {
//         console.log("Category passed validation!");
//         categories_collection.insertOne(request.body).then((result)=>{
//           console.log(result);
//           response.send(result);
//         }).catch((error)=>{
//           console.error(error);
//           response.send(error);
//         });
//       }
//     });

//   });


//   app.get("/get_all_assets", (request, response)=>{
//     console.log("Server received a request at ", request.url);

//     assets_collection.find().toArray().then((resp)=>{
//       console.log(resp);
//       response.send(resp);
//     }).catch(error => {
//       console.error(error);
//       response.send(error);
//     });

//   });

// }).catch((error)=>{ // CATCH BLOCK FOR MONGO CONNECTION
//   console.error(error);
// });


app.get("/api_test", (request, response)=>{ // TEST API CALL TO SEE IF SERVER IS UP
  console.log("Server received a request at ", request.url);
  response.send({"message": "message received"});
});

app.post("/api_test_post", (request, response)=>{ // TEST API CALL TO SEE IF SERVER IS UP
  console.log("Server received a request at ", request.url);
  response.send({"message": `Body item was: ${request.body.item}`});
});

app.get("/", (request, response)=>{
  // console.log("Server is now sending the landing page as the response.");
  response.sendFile(__dirname + "/public/landingpage.html");
});

const listener = app.listen(3000, () => {
  console.log("The static server is listening on port " + listener.address().port);
});