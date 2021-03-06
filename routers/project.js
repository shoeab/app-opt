var express = require('express');
var SubLob = require('../models/sub_lob');
var Project= require('../models/project');

var projectRouter = express.Router();

projectRouter
  .route('/projects')
  .post(function (request, response) {

    console.log('POST /projects');

    var project = new Project({
      title: request.body.title,
      sub_lob_id: request.body.sub_lob_id,
      status: request.body.status,
      year: request.body.year,
      quarter: request.body.quarter,
      month: request.body.month,
      no_of_members: request.body.no_of_members,
    });
    project.save(function(err) {
      if(err) {
        response.send(err);
        return;
      }
      else{
        response.json({ 
        success: true,
        message: 'Sub Lob has been created!'
      });
      }
      
    });

    /*var lob = new Lob(request.body);

    lob.save();*/

    /*response.status(201).send(lob);*/
  })
  .get(function (request, response) {

    console.log('GET /projects');

    Project.find(function (error, project) {

      if (error) {
        response.status(500).send(error);
        return;
      }

      console.log(project);

      response.json(project);
    });
  });

projectRouter
  .route('/projects/by/sublob/:subLobId')
  .get(function (request, response) {

    console.log('GET /projects/by/sublob/:subLobId '+request.params.subLobId);

    var subLobId = request.params.subLobId;

    console.log(subLobId);

    Project.find({ sub_lob_id: subLobId }, function (error, project) {

      if (error) {
        response.status(500).send(error);
        return;
      }

      console.log(project);

      response.json(project);

    });
  })
projectRouter
  .route('/projects/by/sublob/:subLobId/:projectId')
  .get(function (request, response) {

    console.log('GET /projects/by/sublob/:subLobId/:projectId '+request.params.subLobId);

    var subLobId = request.params.subLobId;
    var projectId = request.params.projectId;
    /*
    var quarter = request.params.quarter;
    var month = request.params.month;*/


    Project.find({ sub_lob_id: subLobId, title: projectId }, function (error, project) {

      if (error) {
        response.status(500).send(error);
        return;
      }

      console.log(project);

      response.json(project);

    });
  })
  /*-------------------------------------------------------------------*/
projectRouter
  .route('/projects/by/sublob/:subLobId/:projectId/:year')
  .get(function (request, response) {

    console.log('GET /projects/by/sublob/:subLobId/:projectId/:year '+request.params.subLobId);

    var subLobId = request.params.subLobId;
    var projectId = request.params.projectId;
    var year = request.params.year;/*
    var quarter = request.params.quarter;
    var month = request.params.month;*/

    console.log(subLobId);
    console.log(year);

    Project.find({ sub_lob_id: subLobId, title: projectId, year: year }, function (error, project) {

      if (error) {
        response.status(500).send(error);
        return;
      }

      console.log(project);

      response.json(project);

    });
  })
  /*-------------------------------------------------------------------*/
projectRouter
  .route('/projects/by/sublob/:subLobId/:projectId/:year/:quarter')
  .get(function (request, response) {

    console.log('GET /projects/by/sublob/:subLobId/:projectId/:year/:quarter '+request.params.subLobId);

    var subLobId = request.params.subLobId;
    var projectId = request.params.projectId;
    var year = request.params.year;
    var quarter = request.params.quarter;
    
    console.log(subLobId);
    console.log(year);
    console.log(quarter);

    Project.find({ sub_lob_id: subLobId, title: projectId, year: year , quarter: quarter }, function (error, project) {

      if (error) {
        response.status(500).send(error);
        return;
      }

      console.log(project);

      response.json(project);

    });
  })
  /*-------------------------------------------------------------------*/
projectRouter
  .route('/projects/by/sublob/:subLobId/:projectId/:year/:quarter/:month')
  .get(function (request, response) {

    console.log('GET /projects/by/sublob/:subLobId/:projectId/:year/:quarter/:month '+request.params.subLobId);

    var subLobId = request.params.subLobId;
    var projectId = request.params.projectId;
    var year = request.params.year;
    var quarter = request.params.quarter;
    var month = request.params.month;
    
    console.log(subLobId);
    console.log(year);
    console.log(quarter);

    Project.find({ sub_lob_id: subLobId, title: projectId, year: year, quarter: quarter, month: month }, function (error, project) {

      if (error) {
        response.status(500).send(error);
        return;
      }

      console.log(project);

      response.json(project);

    });
  })
  /*-------------------------------------------------------------------*/
  .put(function (request, response) {

    console.log('PUT /lobs/:lobId');

    var lobId = request.params.lobId;

    Lob.findOne({ id: lobId }, function (error, lob) {

      if (error) {
        response.status(500).send(error);
        return;
      }

      if (lob) {
        lob.name = request.body.name;
        lob.description = request.body.description;
        lob.quantity = request.body.quantity;
        
        lob.save();

        response.json(lob);
        return;
      }

      response.status(404).json({
        message: 'Lob with id ' + lobId + ' was not found.'
      });
    });
  })
  .patch(function (request, response) {

    console.log('PATCH /lobs/:lobId');

    var lobId = request.params.lobId;

    Lob.findOne({ id: lobId }, function (error, lob) {
      
      if (error) {
        response.status(500).send(error);
        return;
      }

      if (lob) {

        for (var property in request.body) {
          if (request.body.hasOwnProperty(property)) {
            if (typeof lob[property] !== 'undefined') {
              lob[property] = request.body[property];
            }
          }
        }

        // if (request.body.name) {
        //   lob.name = request.body.name;
        // }

        // if (request.body.description) {
        //   lob.description = request.body.description;
        // }

        // if (request.body.quantity) {
        //   lob.quantity = request.body.quantity;
        // }

        lob.save();

        response.json(lob);
        return;
      }

      response.status(404).json({
        message: 'Lob with id ' + lobId + ' was not found.'
      });
    });
  })
  .delete(function (request, response) {

    console.log('DELETE /lobs/:lobId');

    var lobId = request.params.lobId;

    Lob.findOne({ id: lobId }, function (error, lob) {
      
      if (error) {
        response.status(500).send(error);
        return;
      }

      if (lob) {
        lob.remove(function (error) {

          if (error) {
            response.status(500).send(error);
            return;
          }

          response.status(200).json({
            'message': 'Lob with id ' + lobId + ' was removed.'
          });
        });
      } else {
        response.status(404).json({
          message: 'Lob with id ' + lobId + ' was not found.'
        });
      }
    });
  });

module.exports = projectRouter;