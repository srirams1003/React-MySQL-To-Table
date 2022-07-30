let assetBtn = document.getElementById("sampleAssetCreateBtn");
assetBtn.addEventListener("click", createFullAsset);

let categoryBtn = document.getElementById("sampleCategoryCreateBtn");
categoryBtn.addEventListener("click", createFullCategory);


let getAssetBtn = document.getElementById("getAsset");
getAssetBtn.addEventListener("click", getAsset);

async function getAsset(){
  let response = await fetch("/api/asset/2");
  response = await response.json();
  console.log("Response:", response);
}


async function createFullCategory(){

  let errorArray = [];

  let categoryData = {"categoryName": "Physical Assets"};

  let categoryParams = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(categoryData)
  }

  let response = await fetch("/api/createCategory", categoryParams);
  response = await response.json();
  console.log("Category Response:", response);

  if (response.code){
    errorArray.push(response);
  }

  // ---

  let category_id = response.id;

  let typeData = {"typeName": "Infrastructure", "category_id": category_id};

  let typeParams = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(typeData)
  }

  response = await fetch("/api/createType", typeParams);
  response = await response.json();
  console.log("Type Response:", response);

  if (response.code){
    errorArray.push(response);
  }

  // ---

  let type_id = response.id;

  let subTypeData = {"subTypeName": "Breakfast bars", "category_id": category_id, "type_id": type_id};

  let subTypeParams = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(subTypeData)
  }

  response = await fetch("/api/createSubType", subTypeParams);
  response = await response.json();
  console.log("SubType Response:", response);

  if (response.code){
    errorArray.push(response);
  }

  // DOUBLE

  subTypeData.subTypeName = "Lounges";

  subTypeParams.body = JSON.stringify(subTypeData);

  response = await fetch("/api/createSubType", subTypeParams);
  response = await response.json();
  console.log("SubType Response:", response);

  if (response.code){
    errorArray.push(response);
  }

  if (errorArray.length > 0){
    console.log("Error Array:", errorArray);
  }
  else{
    console.log("All Good!");
  }

}

async function createFullAsset(){

  let errorArray = [];

  let assetData = {
    "companyId": "1234",
    "category_id": 1,
    "type_id": 1,
    "sub_type_id": 1,
    "currentOwnerId": "123",
    "currentDepartmentId": "12345",
    "currentDivisionId": "2345",
    "currentLocationId": "345",
    "currentState": "Active",
    "isLeased": true,
    "isOwned": false,
    "approval": "671231"
  }

  let assetParams = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(assetData)
  }
  
  let response = await fetch("/api/createAsset", assetParams);
  response = await response.json();
  console.log("Asset Response:", response);

  if (response.code){
    errorArray.push(response);
  }

  // ---

  let asset_id = response.id;

  let historyData = {
    "asset_id": asset_id,
    "fromDate": "2020-04-29",
    "toDate": "2020-06-28",
    "ownerId": "2345",
    "locationId": "3456",
    "departmentId": "4567",
    "divisionId": "5678"
  }

  let historyParams = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(historyData)
  }

  response = await fetch("/api/createHistory", historyParams);
  response = await response.json();
  console.log("History Response:", response);

  if (response.code){
    errorArray.push(response);
  }

  // DOUBLE
  response = await fetch("/api/createHistory", historyParams);
  response = await response.json();
  console.log("History Response:", response);

  if (response.code){
    errorArray.push(response);
  }

  // ---

  let leaseData = {
    "asset_id": asset_id,
    "leaseStartDate": "2021-11-07",
    "leaseEndDate": "2022-11-06",
    "leaseCost": 200,
    "refreshDate": "2022-05-02"
  }

  let leaseParams = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(leaseData)
  }

  response = await fetch("/api/createLease", leaseParams);
  response = await response.json();
  console.log("Lease Response:", response);

  if (response.code){
    errorArray.push(response);
  }

  // ---

  let lease_id = response.id;

  let lessorData = {
    "leaseDetail_id": lease_id,
    "lessorName": "Adam Smith"
  }

  let lessorParams = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(lessorData)
  }

  response = await fetch("/api/createLessor", lessorParams);
  response = await response.json();
  console.log("Lessor Response:", response);

  if (response.code){
    errorArray.push(response);
  }

  // ---

  let valueData = {
    "asset_id": asset_id,
    "purchaseValue": 2100,
    "currentValue": 1400,
    "purchaseOrderId": "1234",
    "purchaseDetails": "Test Details",
    "purchasedBy": "23456",
    "purchaseDate": "2020-12-13"
  }

  let valueParams = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(valueData)
  }

  response = await fetch("/api/createValue", valueParams);
  response = await response.json();
  console.log("Value Response:", response);

  if (response.code){
    errorArray.push(response);
  }

  // ---

  let warrantyData = {
    "asset_id": asset_id,
    "hasWarranty": true,
    "warrantyStartDate":"2020-03-08", 
    "warrantyEndDate":"2021-03-08",
    "warrantyPlanName":"Generic Name",
    "warrantyDocument":"Test Document"
  }

  let warrantyParams = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(warrantyData)
  }

  response = await fetch("/api/createWarranty", warrantyParams);
  response = await response.json();
  console.log("Warranty Response:", response);

  if (response.code){
    errorArray.push(response);
  }

  // ---

  let assetDetailsData = {
    "asset_id": asset_id,
    "manufacturer": "Apple",
    "modelName": "A160", 
    "modelNumber": "7he8nw213e", 
    "serialNumber": "71219290",
    "processor": "Intel",
    "memory": "16", 
    "storage": "512", 
    "operatingSystem": "macOS"
  }

  let assetDetailsParams = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(assetDetailsData)
  }

  response = await fetch("/api/createAssetDetails", assetDetailsParams);
  response = await response.json();
  console.log("Asset Details Response:", response);

  if (response.code){
    errorArray.push(response);
  }

  // ---

  let licenseData = {
    "asset_id": asset_id,
    "license": "Test License 2"
  }

  let licenseParams = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(licenseData)
  }

  response = await fetch("/api/createLicense", licenseParams);
  response = await response.json();
  console.log("License Response:", response);

  if (response.code){
    errorArray.push(response);
  }

  // DOUBLE
  response = await fetch("/api/createLicense", licenseParams);
  response = await response.json();
  console.log("License Response:", response);

  if (response.code){
    errorArray.push(response);
  }

  // ---

  let shippingData = {
    "asset_id": asset_id,
    "shipping": "Test Shipping Detail"
  }

  let shippingParams = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(shippingData)
  }

  response = await fetch("/api/createShipping", shippingParams);
  response = await response.json();
  console.log("Shipping Response:", response);

  if (response.code){
    errorArray.push(response);
  }
  
  // ---

  let commentData = {
    "asset_id": asset_id,
    "commenterUserId": "90123",
    "comment": "Test Comment 2"
  }

  let commentParams = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(commentData)
  }

  response = await fetch("/api/createComment", commentParams);
  response = await response.json();
  console.log("Comment Response:", response);

  if (response.code){
    errorArray.push(response);
  }

  // DOUBLE
  response = await fetch("/api/createComment", commentParams);
  response = await response.json();
  console.log("Comment Response:", response);

  if (response.code){
    errorArray.push(response);
  }

  if (errorArray.length > 0){
    console.log("Error Array:", errorArray);
  }
  else{
    console.log("All Good!");
  }

}

