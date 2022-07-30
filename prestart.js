const mysql = require('mysql2/promise');

require('dotenv').config();
const dbConfig = require("./app/config/db.config.js");

const mysqlConnectionObject = {
	host     : process.env.SQL_HOSTNAME,
	port     : process.env.SQL_PORT,
	user     : process.env.SQL_USERNAME,
	password : process.env.SQL_PASSWORD
};

mysql.createConnection(mysqlConnectionObject)
.then((connection)=>{
	// console.log("connection:", connection);
	connection.query(`CREATE DATABASE IF NOT EXISTS \`${process.env.SQL_DB_NAME}\`;`)
	.then((result)=>{
		// console.log("result:", result);
		connection.end();
	});
})

// CONNECTING TWICE WITH VANILLA MYSQL AND THEN WITH KNEX AS VANILLA CREATE TABLE IS INCONVENIENT AND KNEX CREATE DATABASE IS COMPLICATED
// THEREFORE, USING BOTH TO DO A JOB EACH (THAT THEY ARE INDIVIDUALLY GOOD AT)

// Setting up the required tables
const knex = require('knex')({
  client: dbConfig.dialect,
  connection: {
    host     : dbConfig.HOST,
    user     : dbConfig.USER,
    password : dbConfig.PASSWORD,
    database : dbConfig.DB,
    charset  : 'utf8'
  }
});

async function checkTables(){

  if (!await knex.schema.hasTable('subTypes')){
    await knex.schema.createTable('subTypes', function(table) {
      table.increments('id').primary().notNullable();
      table.integer('category_id').unsigned().notNullable(); // CHECK IF THIS SHOULD BE INT OR STRING
      table.integer('type_id').unsigned().notNullable(); // CHECK IF THIS SHOULD BE INT OR STRING
      table.string('subTypeName').notNullable();
      table.dateTime('created_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP'));
      table.dateTime('updated_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
    })
    .then(function() {
      console.log("Table created or exists!");
    })
    .catch(function(err) {
      console.error("Table was not created:", err);
    });
  }


  if (!await knex.schema.hasTable('types')){
    await knex.schema.createTable('types', function(table) {
      table.increments('id').primary().notNullable();
      table.integer('category_id').unsigned().notNullable(); // CHECK IF THIS SHOULD BE INT OR STRING
      table.string('typeName').notNullable();
      table.dateTime('created_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP'));
      table.dateTime('updated_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
    })
    .then(function() {
      console.log("Table created or exists!");
    })
    .catch(function(err) {
      console.error("Table was not created:", err);
    });
  }


  if (!await knex.schema.hasTable('categories')){
    await knex.schema.createTable('categories', function(table) {
      table.increments('id').primary().notNullable();
      table.string('categoryName').notNullable();
      table.dateTime('created_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP'));
      table.dateTime('updated_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
    })
    .then(function() {
      console.log("Table created or exists!");
    })
    .catch(function(err) {
      console.error("Table was not created:", err);
    });
  }


  if (!await knex.schema.hasTable('comments')){
    await knex.schema.createTable('comments', function(table) {
      table.increments('id').primary().notNullable();
      table.integer('asset_id').unsigned().notNullable();
      table.string('commenterUserId').notNullable();
      table.string('comment').notNullable(); // ACTUAL COMMENT
      table.dateTime('created_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP')); // THIS CAN BE USED AS THE "timestamp" FIELD FROM THE DB DIAGRAM
      table.dateTime('updated_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
    })
    .then(function() {
      console.log("Table created or exists!");
    })
    .catch(function(err) {
      console.error("Table was not created:", err);
    });
  
  }
 

  if (!await knex.schema.hasTable('shipping')){
    await knex.schema.createTable('shipping', function(table) {
      table.increments('id').primary().notNullable();
      table.integer('asset_id').unsigned().notNullable();
      table.string('shipping').notNullable(); // FOR NOW THIS IS THE ONLY SPECIFIC COLUMN. AWAITING FURTHER INSTRUCTIONS. 
      table.dateTime('created_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP'));
      table.dateTime('updated_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
    })
    .then(function() {
      console.log("Table created or exists!");
    })
    .catch(function(err) {
      console.error("Table was not created:", err);
    });
  }


  if (!await knex.schema.hasTable('licenses')){
    await knex.schema.createTable('licenses', function(table) {
      table.increments('id').primary().notNullable();
      table.integer('asset_id').unsigned().notNullable();
      table.string('license').notNullable(); // FOR NOW THIS IS THE ONLY SPECIFIC COLUMN. AWAITING FURTHER INSTRUCTIONS. 
      table.dateTime('created_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP'));
      table.dateTime('updated_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
    })
    .then(function() {
      console.log("Table created or exists!");
    })
    .catch(function(err) {
      console.error("Table was not created:", err);
    });
  }


  if (!await knex.schema.hasTable('assetDetails')){
    await knex.schema.createTable('assetDetails', function(table) {
      table.increments('id').primary().notNullable();
      table.integer('asset_id').unsigned().notNullable();
      table.string('manufacturer').notNullable();
      table.string('modelName').notNullable();
      table.string('modelNumber').notNullable();
      table.string('serialNumber').notNullable();
      table.string('processor').notNullable();
      table.string('memory').notNullable();
      table.string('storage').notNullable();
      table.string('operatingSystem').notNullable();
      table.dateTime('created_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP'));
      table.dateTime('updated_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
    })
    .then(function() {
      console.log("Table created or exists!");
    })
    .catch(function(err) {
      console.error("Table was not created:", err);
    });
  }


  if (!await knex.schema.hasTable('warrantyDetails')){
    await knex.schema.createTable('warrantyDetails', function(table) {
      table.increments('id').primary().notNullable();
      table.integer('asset_id').unsigned().notNullable();
      table.boolean('hasWarranty').notNullable();
      table.date('warrantyStartDate').notNullable();
      table.date('warrantyEndDate').notNullable();
      table.string('warrantyPlanName').notNullable();
      table.string('warrantyDocument').notNullable();
      table.dateTime('created_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP'));
      table.dateTime('updated_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
    })
    .then(function() {
      console.log("Table created or exists!");
    })
    .catch(function(err) {
      console.error("Table was not created:", err);
    });
  }
  

  if (!await knex.schema.hasTable('valueDetails')){
    await knex.schema.createTable('valueDetails', function(table) {
      table.increments('id').primary().notNullable();
      table.integer('asset_id').unsigned().notNullable();
      table.string('purchaseValue').notNullable(); // LEAVING THESE VALUE FIELDS AS STRINGS INSTEAD OF FLOATS AS WE MIGHT NEED TO ACCOMMODATE CURRENCY
      table.string('currentValue').notNullable();
      table.string('purchaseOrderId').notNullable();
      table.string('purchaseDetails').notNullable();
      table.string('purchasedBy').notNullable();
      table.date('purchaseDate').notNullable();
      table.dateTime('created_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP'));
      table.dateTime('updated_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
    })
    .then(function() {
      console.log("Table created or exists!");
    })
    .catch(function(err) {
      console.error("Table was not created:", err);
    });
  }


  if (!await knex.schema.hasTable('lessorDetails')){
    await knex.schema.createTable('lessorDetails', function(table) {
      table.increments('id').primary().notNullable();
      table.integer('leaseDetail_id').unsigned().notNullable(); // ID FROM THE LEASE TABLE (hasOne RELATION)
      table.string('lessorName').notNullable(); // FOR NOW THIS IS THE ONLY COLUMN. AWAITING FURTHER INSTRUCTIONS.
      table.dateTime('created_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP'));
      table.dateTime('updated_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
    })
    .then(function() {
      console.log("Table created or exists!");
    })
    .catch(function(err) {
      console.error("Table was not created:", err);
    });
  }


  if (!await knex.schema.hasTable('leaseDetails')){
    await knex.schema.createTable('leaseDetails', function(table) {
      table.increments('id').primary().notNullable();
      table.integer('asset_id').unsigned().notNullable();
      table.date('leaseStartDate').notNullable();
      table.date('leaseEndDate').notNullable();
      // LESSOR DETAILS
      table.string('leaseCost').notNullable();
      table.date('refreshDate').notNullable();
      table.dateTime('created_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP'));
      table.dateTime('updated_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
    })
    .then(function() {
      console.log("Table created or exists!");
    })
    .catch(function(err) {
      console.error("Table was not created:", err);
    });
  }
  

  if (!await knex.schema.hasTable('histories')){
    await knex.schema.createTable('histories', function(table) {
      table.increments('id').primary().notNullable();
      table.integer('asset_id').unsigned().notNullable();
      table.date('fromDate').notNullable();
      table.date('toDate').notNullable();
      table.string('ownerId').notNullable();
      table.string('locationId').notNullable();
      table.string('departmentId').notNullable();
      table.string('divisionId').notNullable();
      table.dateTime('created_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP'));
      table.dateTime('updated_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
    })
    .then(function() {
      console.log("Table created or exists!");
    })
    .catch(function(err) {
      console.error("Table was not created:", err);
    });
  }


  if (!await knex.schema.hasTable('assets')){
    await knex.schema.createTable('assets', function(table) {
      table.increments('id').primary().notNullable();
      table.string('companyId').notNullable();
      table.integer('category_id').unsigned().notNullable();
      table.integer('type_id').unsigned().notNullable();
      table.integer('sub_type_id').unsigned().notNullable();
      table.string('currentOwnerId').notNullable();
      table.string('currentDepartmentId').notNullable();
      table.string('currentDivisionId').notNullable();
      table.string('currentLocationId').notNullable();
      table.string('currentState').notNullable();
      // HISTORIES (MULTIPLE)
      table.boolean('isLeased').notNullable();
      table.boolean('isOwned').notNullable();
      // LEASE DETAILS
      // VALUE DETAILS
      // WARRANTY DETAILS
      // ASSET DETAILS
      // LICENSES (MULTIPLE)
      // SHIPPING DETAILS (MULTIPLE???) (ASSUMING THAT ONLY ONE ENTRY FOR NOW)
      // COMMENTS (MULTIPLE)
      table.string('approval').notNullable();
      table.dateTime('created_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP'));
      table.dateTime('updated_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
    })
    .then(function() {
      console.log("Table created or exists!");
    })
    .catch(function(err) {
      console.error("Table was not created:", err);
    });
  }
  
}



async function dropTables(){

  await knex.schema.dropTable('subTypes')
    .then(function() {
      console.log("Table dropped!");
    })
    .catch(function(err) {
      console.error("Table was not dropped:", err);
    });

  await knex.schema.dropTable('types')
    .then(function() {
      console.log("Table dropped!");
    })
    .catch(function(err) {
      console.error("Table was not dropped:", err);
    });

  await knex.schema.dropTable('categories')
    .then(function() {
      console.log("Table dropped!");
    })
    .catch(function(err) {
      console.error("Table was not dropped:", err);
    });

  await knex.schema.dropTable('comments')
    .then(function() {
      console.log("Table dropped!");
    })
    .catch(function(err) {
      console.error("Table was not dropped:", err);
    });

  await knex.schema.dropTable('shipping')
    .then(function() {
      console.log("Table dropped!");
    })
    .catch(function(err) {
      console.error("Table was not dropped:", err);
    });

  await knex.schema.dropTable('licenses')
    .then(function() {
      console.log("Table dropped!");
    })
    .catch(function(err) {
      console.error("Table was not dropped:", err);
    });

  await knex.schema.dropTable('assetDetails')
    .then(function() {
      console.log("Table dropped!");
    })
    .catch(function(err) {
      console.error("Table was not dropped:", err);
    });

  await knex.schema.dropTable('warrantyDetails')
    .then(function() {
      console.log("Table dropped!");
    })
    .catch(function(err) {
      console.error("Table was not dropped:", err);
    });

  await knex.schema.dropTable('valueDetails')
    .then(function() {
      console.log("Table dropped!");
    })
    .catch(function(err) {
      console.error("Table was not dropped:", err);
    });

  await knex.schema.dropTable('lessorDetails')
    .then(function() {
      console.log("Table dropped!");
    })
    .catch(function(err) {
      console.error("Table was not dropped:", err);
    });

  await knex.schema.dropTable('leaseDetails')
    .then(function() {
      console.log("Table dropped!");
    })
    .catch(function(err) {
      console.error("Table was not dropped:", err);
    });  

  await knex.schema.dropTable('histories')
    .then(function() {
      console.log("Table dropped!");
    })
    .catch(function(err) {
      console.error("Table was not dropped:", err);
    });


  await knex.schema.dropTable('assets')
    .then(function() {
      console.log("Table dropped!");
    })
    .catch(function(err) {
      console.error("Table was not dropped:", err);
    });

}


// // FOR DROPPING TABLES, CALL THIS
// dropTables()
//   .then(()=>{ // this only runs after all tables were created or verified to have already existed
//     knex.destroy();
//   })


checkTables()
  .then(()=>{ // this only runs after all tables were created or verified to have already existed
    knex.destroy();
  });


