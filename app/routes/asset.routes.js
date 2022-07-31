module.exports = (app) => {

    const assets = require("../controllers/asset.controller.js");

    let router = require("express").Router();

    router.post("/createAsset", assets.createAsset);
    router.get("/asset/:id", assets.getAssetWithId);

    router.post("/createCategory", assets.createCategory);
    router.get("/category/:id", assets.getCategoryWithId);

    router.post("/createType", assets.createType);
    router.get("/type/:id", assets.getTypeWithId);

    router.post("/createSubType", assets.createSubType);
    router.get("/subType/:id", assets.getSubTypeWithId);

    router.post("/createHistory", assets.createHistory);
    router.get("/history/:id", assets.getHistoryWithId);

    router.post("/createLease", assets.createLease);
    router.get("/lease/:id", assets.getLeaseWithId);   

    router.post("/createLessor", assets.createLessor);
    router.get("/lessor/:id", assets.getLessorWithId);

    router.post("/createValue", assets.createValue);
    router.get("/value/:id", assets.getValueWithId);

    router.post("/createWarranty", assets.createWarranty);
    router.get("/warranty/:id", assets.getWarrantyWithId);

    router.post("/createAssetDetails", assets.createAssetDetails);
    router.get("/assetDetails/:id", assets.getAssetDetailsWithId);

    router.post("/createLicense", assets.createLicense);
    router.get("/license/:id", assets.getLicenseWithId);

    router.post("/createShipping", assets.createShipping);
    router.get("/shipping/:id", assets.getShippingWithId);

    router.post("/createComment", assets.createComment);
    router.get("/comment/:id", assets.getCommentWithId);

    router.get("/getAllTypes", assets.getAllTypes);
    router.get("/getAllCategories", assets.getAllCategories);

    router.delete("/category/:id", assets.deleteCategory);
    router.delete("/type/:id", assets.deleteType);
    router.delete("/subType/:id", assets.deleteSubType);
    router.delete("/asset/:id", assets.deleteAsset);

    router.get("/allEmployees", assets.allEmployees);


    // // Create a new Tutorial
    // router.post("/", assets.create);

    // // Retrieve all Tutorials
    // router.get("/", assets.findAll);

    // // Retrieve all published Tutorials
    // router.get("/published", assets.findAllPublished);

    // // Retrieve a single Tutorial with id
    // router.get("/:id", tutorials.findOne);

    // // Update a Tutorial with id
    // router.put("/:id", tutorials.update);

    // // Delete a Tutorial with id
    // router.delete("/:id", tutorials.delete);

    // // Delete all Tutorials
    // router.delete("/", tutorials.deleteAll);

    app.use('/api/', router); // this line sets that "http://localhost:3000/api/" is the new BASE_URL in this file

};