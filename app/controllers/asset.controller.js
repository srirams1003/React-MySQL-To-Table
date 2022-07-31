const bookshelf = require('../config/database').bookshelf;
const knex = require('../config/database').knex;

const Asset = require("../models/asset");
const AssetDetails = require("../models/assetDetails");
const Category = require("../models/category");
const Comment = require("../models/comment");
const History = require("../models/history");
const Lease = require("../models/lease");
const Lessor = require("../models/lessor");
const License = require("../models/license");
const Shipping = require("../models/shipping");
const SubType = require("../models/subType");
const Type = require("../models/type");
const Value = require("../models/value");
const Warranty = require("../models/warranty");

exports.allEmployees = (req, res) => {
  // knex.raw("SELECT * FROM types WHERE id=?", [2])
  knex.raw("SELECT * FROM testcompany")
  .then((result)=>{
    res.send(result[0]);
    console.log("Result is : ", result[0]);
  })
  .catch((err) => {
    res.send(err);
    console.log(err);
  });
};



exports.createComment = (req, res) => {

  Comment.forge({
    "asset_id": req.body.asset_id,
    "commenterUserId": req.body.commenterUserId,
    "comment": req.body.comment
  })
    .save()
    .then(result => result.toJSON())
    .then(result => {
        res.send(result);
        console.log("Result is : ", result);
    })
    .catch((err) => {
      res.send(err);
      console.log(err);
    });
};

exports.getCommentWithId = (req, res) => {

  Comment.where({ "id": req.params.id })
    .fetch({
      withRelated: [], require: true
    })
    .then(result => result.toJSON())
    .then((result)=>{
      res.send(result);
      console.log("Result is : ", result);
    })
    .catch((err) => {
      res.send(err);
      console.log(err);
    });
};


exports.createShipping = (req, res) => {

  Shipping.forge({
    "asset_id": req.body.asset_id,
    "shipping": req.body.shipping
  })
    .save()
    .then(result => result.toJSON())
    .then(result => {
        res.send(result);
        console.log("Result is : ", result);
    })
    .catch((err) => {
      res.send(err);
      console.log(err);
    });
};

exports.getShippingWithId = (req, res) => {

  Shipping.where({ "id": req.params.id })
    .fetch({
      withRelated: [], require: true
    })
    .then(result => result.toJSON())
    .then((result)=>{
      res.send(result);
      console.log("Result is : ", result);
    })
    .catch((err) => {
      res.send(err);
      console.log(err);
    });
};


exports.createLicense = (req, res) => {

  License.forge({
    "asset_id": req.body.asset_id,
    "license": req.body.license
  })
    .save()
    .then(result => result.toJSON())
    .then(result => {
        res.send(result);
        console.log("Result is : ", result);
    })
    .catch((err) => {
      res.send(err);
      console.log(err);
    });
};

exports.getLicenseWithId = (req, res) => {

  License.where({ "id": req.params.id })
    .fetch({
      withRelated: [], require: true
    })
    .then(result => result.toJSON())
    .then((result)=>{
      res.send(result);
      console.log("Result is : ", result);
    })
    .catch((err) => {
      res.send(err);
      console.log(err);
    });
};


exports.createAssetDetails = (req, res) => {

  AssetDetails.forge({
    "asset_id": req.body.asset_id,
    "manufacturer": req.body.manufacturer,
    "modelName": req.body.modelName,
    "modelNumber": req.body.modelNumber,
    "serialNumber": req.body.serialNumber,
    "processor": req.body.processor,
    "memory": req.body.memory,
    "storage": req.body.storage,
    "operatingSystem": req.body.operatingSystem
  })
    .save()
    .then(result => result.toJSON())
    .then(result => {
        res.send(result);
        console.log("Result is : ", result);
    })
    .catch((err) => {
      res.send(err);
      console.log(err);
    });
};

exports.getAssetDetailsWithId = (req, res) => {

  AssetDetails.where({ "id": req.params.id })
    .fetch({
      withRelated: [], require: true
    })
    .then(result => result.toJSON())
    .then((result)=>{
      res.send(result);
      console.log("Result is : ", result);
    })
    .catch((err) => {
      res.send(err);
      console.log(err);
    });
};


exports.createWarranty = (req, res) => {

  Warranty.forge({
    "asset_id": req.body.asset_id,
    "hasWarranty": req.body.hasWarranty,
    "warrantyStartDate": req.body.warrantyStartDate,
    "warrantyEndDate": req.body.warrantyEndDate,
    "warrantyPlanName": req.body.warrantyPlanName,
    "warrantyDocument": req.body.warrantyDocument
  })
    .save()
    .then(result => result.toJSON())
    .then(result => {
        res.send(result);
        console.log("Result is : ", result);
    })
    .catch((err) => {
      res.send(err);
      console.log(err);
    });
};

exports.getWarrantyWithId = (req, res) => {

  Warranty.where({ "id": req.params.id })
    .fetch({
      withRelated: [], require: true
    })
    .then(result => result.toJSON())
    .then((result)=>{
      res.send(result);
      console.log("Result is : ", result);
    })
    .catch((err) => {
      res.send(err);
      console.log(err);
    });
};


exports.createValue = (req, res) => {

  Value.forge({
    "asset_id": req.body.asset_id,
    "purchaseValue": req.body.purchaseValue,
    "currentValue": req.body.currentValue,
    "purchaseOrderId": req.body.purchaseOrderId,
    "purchaseDetails": req.body.purchaseDetails,
    "purchasedBy": req.body.purchasedBy,
    "purchaseDate": req.body.purchaseDate
  })
    .save()
    .then(result => result.toJSON())
    .then(result => {
        res.send(result);
        console.log("Result is : ", result);
    })
    .catch((err) => {
      res.send(err);
      console.log(err);
    });
};

exports.getValueWithId = (req, res) => {

  Value.where({ "id": req.params.id })
    .fetch({
      withRelated: [], require: true
    })
    .then(result => result.toJSON())
    .then((result)=>{
      res.send(result);
      console.log("Result is : ", result);
    })
    .catch((err) => {
      res.send(err);
      console.log(err);
    });
};


exports.createLessor = (req, res) => {

  Lessor.forge({
    "leaseDetail_id": req.body.leaseDetail_id,
    "lessorName": req.body.lessorName
  })
    .save()
    .then(result => result.toJSON())
    .then(result => {
        res.send(result);
        console.log("Result is : ", result);
    })
    .catch((err) => {
      res.send(err);
      console.log(err);
    });
};

exports.getLessorWithId = (req, res) => {

  Lessor.where({ "id": req.params.id })
    .fetch({
      withRelated: [], require: true
    })
    .then(result => result.toJSON())
    .then((result)=>{
      res.send(result);
      console.log("Result is : ", result);
    })
    .catch((err) => {
      res.send(err);
      console.log(err);
    });

};


exports.createLease = (req, res) => {

  Lease.forge({
    "asset_id": req.body.asset_id,
    "leaseStartDate": req.body.leaseStartDate,
    "leaseEndDate": req.body.leaseEndDate,
    // LESSOR DETAILS
    "leaseCost": req.body.leaseCost,
    "refreshDate": req.body.refreshDate
  })
    .save()
    .then(result => result.toJSON())
    .then(result => {
        res.send(result);
        console.log("Result is : ", result);
    })
    .catch((err) => {
      res.send(err);
      console.log(err);
    });
};

exports.getLeaseWithId = (req, res) => {

  Lease.where({ "id": req.params.id })
    .fetch({
      withRelated: ['lessorDetails'], require: true
    })
    .then(result => result.toJSON())
    .then((result)=>{
      res.send(result);
      console.log("Result is : ", result);
    })
    .catch((err) => {
      res.send(err);
      console.log(err);
    });

};


exports.createHistory = (req, res) => {

  History.forge({
    "asset_id": req.body.asset_id,
    "fromDate": req.body.fromDate,
    "toDate": req.body.toDate,
    "ownerId": req.body.ownerId,
    "locationId": req.body.locationId,
    "departmentId": req.body.departmentId,
    "divisionId": req.body.divisionId
  })
    .save()
    .then(result => result.toJSON())
    .then(result => {
        res.send(result);
        console.log("Result is : ", result);
    })
    .catch((err) => {
      res.send(err);
      console.log(err);
    });
};

exports.getHistoryWithId = (req, res) => {

  History.where({ "id": req.params.id })
    .fetch({
      withRelated: [], require: true
    })
    .then(result => result.toJSON())
    .then((result)=>{
      res.send(result);
      console.log("Result is : ", result);
    })
    .catch((err) => {
      res.send(err);
      console.log(err);
    });

};


exports.createAsset = (req, res) => {

  Asset.forge({
    "companyId": req.body.companyId,
    "category_id": req.body.category_id,
    "type_id": req.body.type_id,
    "sub_type_id": req.body.sub_type_id,
    "currentOwnerId": req.body.currentOwnerId,
    "currentDepartmentId": req.body.currentDepartmentId,
    "currentDivisionId": req.body.currentDivisionId,
    "currentLocationId": req.body.currentLocationId,
    "currentState": req.body.currentState,
    // HISTORIES (MULTIPLE)
    "isLeased": req.body.isLeased,
    "isOwned": req.body.isOwned,
    // LEASE DETAILS
    // VALUE DETAILS
    // WARRANTY DETAILS
    // ASSET DETAILS
    // LICENSES (MULTIPLE)
    // SHIPPING DETAILS (MULTIPLE???) (EDIT: ASSUMING THAT ONLY ONE ENTRY FOR NOW)
    // COMMENTS (MULTIPLE)
    "approval": req.body.approval
  })
    .save()
    .then(result => result.toJSON())
    .then(result => {
        res.send(result);
        console.log("Result is : ", result);
    })
    .catch((err) => {
      res.send(err);
      console.log(err);
    });
};

exports.getAssetWithId = (req, res) => {

  Asset.where({ "id": req.params.id })
    .fetch({
      withRelated: ['histories', 'leaseDetails', 'leaseDetails.lessorDetails', 'valueDetails', 'warrantyDetails', 'assetDetails', 'licenses', 'shipping', 'comments'], require: true
    })
    .then(result => result.toJSON())
    .then((result)=>{
      res.send(result);
      console.log("Result is : ", result);
    })
    .catch((err) => {
      res.send(err);
      console.log(err);
    });

};


exports.createCategory = (req, res) => {

  Category.forge({"categoryName": req.body.categoryName})
    .save()
    .then(result => result.toJSON())
    .then(result => {
        res.send(result);
        console.log("Result is : ", result);
    })
    .catch((err) => {
      res.send(err);
      console.log(err);
    });
};

exports.getCategoryWithId = (req, res) => {

  Category.where({ "id": req.params.id })
    .fetch({
      withRelated: ['types', 'types.subTypes'], require: true
    })
    .then(result => result.toJSON())
    .then((result)=>{
      res.send(result);
      console.log("Result is : ", result);
    })
    .catch((err) => {
      res.send(err);
      console.log(err);
    });

};

exports.createType = (req, res) => {

  Type.forge({"typeName": req.body.typeName, "category_id":req.body.category_id})
    .save()
    .then(result => result.toJSON())
    .then(result => {
        res.send(result);
        console.log("Result is : ", result);
    })
    .catch((err) => {
      res.send(err);
      console.log(err);
    });
};

exports.getTypeWithId = (req, res) => {

  Type.where({ "id": req.params.id })
    .fetch({
      withRelated: ['subTypes'], require: true
    })
    .then(result => result.toJSON())
    .then((result)=>{
      res.send(result);
      console.log("Result is : ", result);
    })
    .catch((err) => {
      res.send(err);
      console.log(err);
    });

};

exports.createSubType = (req, res) => {

  SubType.forge({"subTypeName": req.body.subTypeName, "category_id":req.body.category_id, "type_id":req.body.type_id})
    .save()
    .then(result => result.toJSON())
    .then(result => {
        res.send(result);
        console.log("Result is : ", result);
    })
    .catch((err) => {
      res.send(err);
      console.log(err);
    });
};

exports.getSubTypeWithId = (req, res) => {

  SubType.where({ "id": req.params.id })
    .fetch({
      require: true
    })
    .then(result => result.toJSON())
    .then((result)=>{
      res.send(result);
      console.log("Result is : ", result);
    })
    .catch((err) => {
      res.send(err);
      console.log(err);
    });

};

exports.getAllCategories = (req, res) => {
  
  Category
    .fetchAll({
      withRelated: ['types', 'types.subTypes'], require: true
    })
    .then(result => result.toJSON())
    .then((result)=>{
      res.send(result);
      console.log("Result is : ", result);
    })
    .catch((err) => {
      res.send(err);
      console.log(err);
    });
};


exports.deleteCategory = (req, res) => {

  Category.forge({ "id": req.params.id }).destroy({ cascadeDelete: true })
    .then(result => result.toJSON())
    .then((result)=>{
      res.send(result);
      console.log("Result is : ", result);
    })
    .catch((err) => {
      res.send(err);
      console.log(err);
    });

};

exports.deleteType = (req, res) => {

  Type.forge({ "id": req.params.id }).destroy({ cascadeDelete: true })
    .then(result => result.toJSON())
    .then((result)=>{
      res.send(result);
      console.log("Result is : ", result);
    })
    .catch((err) => {
      res.send(err);
      console.log(err);
    });

};

exports.deleteSubType = (req, res) => {

  SubType.forge({ "id": req.params.id }).destroy({ cascadeDelete: true })
    .then(result => result.toJSON())
    .then((result)=>{
      res.send(result);
      console.log("Result is : ", result);
    })
    .catch((err) => {
      res.send(err);
      console.log(err);
    });

};

exports.deleteAsset = (req, res) => {

  Asset.forge({ "id": req.params.id }).destroy({ cascadeDelete: true })
    .then(result => result.toJSON())
    .then((result)=>{
      res.send(result);
      console.log("Result is : ", result);
    })
    .catch((err) => {
      res.send(err);
      console.log(err);
    });

};


exports.getAllTypes = (req, res) => {

  // knex.raw("SELECT * FROM types WHERE id=?", [2])
  knex.raw("SELECT * FROM types")
  .then((result)=>{
    res.send(result[0]);
    console.log("Result is : ", result[0]);
  })
  .catch((err) => {
    res.send(err);
    console.log(err);
  });

  // // alternate method with all the related subTypes too
  // Type
  //   .fetchAll({
  //     withRelated: ['subTypes'], require: true
  //   })
  //   .then(result => result.toJSON())
  //   .then((result)=>{
  //     res.send(result);
  //     console.log("Result is : ", result);
  //   })
  //   .catch((err) => {
  //     res.send(err);
  //     console.log(err);
  //   });

};
