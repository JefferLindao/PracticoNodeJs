const express = require('express');
const secure = require('./secure')
const response = require('../../../network/response');
const router = express.Router();
const controller = require('./index');

//Router
router.get('/', list);
router.get('/:id', get);
router.post('/', upsert);
router.post('/follow/:id', secure('follow'), follow);
router.get('/:id/following', following);
router.put('/', secure('update'), upsert);

function list(req, res, next) {
  controller.list()
    .then((lista) => {
      response.sucess(req, res, lista, 200);
    }).catch((next));
}

function get(req, res, next) {
  controller.get(req.params.id)
    .then((user) => {
      response.sucess(req, res, user, 200);
    }).catch((next));
}

function upsert(req, res, next) {
  controller.upsed(req.body)
    .then((user) => {
      response.sucess(req, res, user, 201);
    }).catch((next));
}

function follow(req, res, next) {
  controller.follow(req.user.id, req.params.id)
    .then((data) => {
      response.sucess(req, res, data, 201);
    }).catch(next);
}

function following(req, res, next) {
  return controller.following(req.params.id)
    .then((data) => {
      response.sucess(req, res, data, 201);
    }).catch(next);
}

module.exports = router;
