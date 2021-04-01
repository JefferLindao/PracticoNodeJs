const express = require('express');
const response = require('../../../network/response');
const router = express.Router();
const controller = require('./index');

//Router
router.get('/', list);
router.get('/:id', get);
router.post('/', upsert);
router.put('/', upsert);

function list(req, res) {
  controller.list()
    .then((lista) => {
      response.sucess(req, res, lista, 200);
    }).catch((err) => {
      response.error(req, res, err.message, 500)
    });
}

function get(req, res) {
  controller.get(req.params.id)
    .then((user) => {
      response.sucess(req, res, user, 200);
    }).catch((err) => {
      response.error(req, res, err.message, 500);
    });
  response.sucess(req, res, lista, 200);
}

function upsert(req, res) {
  controller.upsed(req, res)
    .then((user) => {
      response.sucess(req, res, user, 201);
    }).catch((err) => {
      response.error(req, res, err.message, 500);
    });
}

module.exports = router;
