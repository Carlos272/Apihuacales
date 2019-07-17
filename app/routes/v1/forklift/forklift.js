// *************************************************+
// APIS FOR Forklift UTILITIES 
// *************************************************+

var express = require('express');
var router = express.Router();
var forkliftModel = require('../../../model/forkliftModel');
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'huacales',
  password: '',
  port: 5432,
})



//Endpoint to know if the API is running.
// Get
router.get('/', function (req, res) {

    pool.query('SELECT * FROM forklift', (error, list) => {
        if (error) {
            res.status(500).send({
                success: false,
                message: error
            });
            return;
        }
        res.status(200).send({
            success: true,
            res: list.rows
        });
       
      })

});

// Get by id
router.get('/:id', function (req, res) {
    var id = parseInt(req.params.id)
    pool.query('SELECT * FROM forklift where IdForklift= $1', [id], (error, list) => {
        if (error) {
            res.status(500).send({
                success: false,
                message: error
            });
            return;
        }
        res.status(200).send({
            success: true,
            res: list.rows
        });
       
      })

});


//Create
router.post('/create', function (req, res) {

    var forklift= {   
        UBWTag: req.body.UBWTag,
        InsDateTime: req.body.InsDateTime,
        Description: req.body.Description,
        Active: req.body.Active,
        Position_X: req.body.Position_X,
        Position_Y: req.body.Position_Y,
        Position_Z: req.body.Position_Z,
        Ip: req.body.Ip
     
    };
    pool.query('insert into forklift (ubwtag, insdatetime, description,active, position_x, position_y, position_z, ip) values ($1,$2,$3, $4,$5,$6,$7,$8)', 
    [forklift.UBWTag, forklift.InsDateTime,forklift.Description,forklift.Active,forklift.Position_X,forklift.Position_Y,
        forklift.Position_Z,forklift.Ip],(error, results) => {
            if (error) {
                res.status(500).send({
                    success: false,
                    message: error
                });
                return;
            }
            res.status(200).send({
                success: true,
                message: 'forklift created'
            });
      })

});


//Update

router.put('/update/:id', function (req, res) {
 var id = parseInt(req.params.id)
    var forklift= {   
        UBWTag: req.body.UBWTag,
        InsDateTime: req.body.InsDateTime,
        Description: req.body.Description,
        Active: req.body.Active,
        Position_X: req.body.Position_X,
        Position_Y: req.body.Position_Y,
        Position_Z: req.body.Position_Z,
        Ip: req.body.Ip
     
    };
    pool.query('Update  forklift set ubwtag = $1, insdatetime = $2, description = $3, active = $4, position_x = $5, position_y = $6, position_z = $7, ip = $8 where IdForklift= $9 ', 
    [forklift.UBWTag, forklift.InsDateTime,forklift.Description,forklift.Active,forklift.Position_X,forklift.Position_Y,
        forklift.Position_Z,forklift.Ip, id],(error, results) => {
            if (error) {
                res.status(500).send({
                    success: false,
                    message: error
                });
                return;
            }
            res.status(200).send({
                success: true,
                message: 'forklift updated'
            });
      })

});




//Delete
router.delete('/delete/:id', function (req, res) {
    var id = parseInt(req.params.id)

       pool.query('Delete from forklift where IdForklift= $1', [id],(error, results) => {
               if (error) {
                   res.status(500).send({
                       success: false,
                       message: error
                   });
                   return;
               }
               res.status(200).send({
                   success: true,
                   message: 'forklift deleted'
                
               });
         })
   
   });



module.exports = router;