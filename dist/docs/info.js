"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.info = void 0;
var path = require("path");
var info = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'proyecto-final',
      version: '1.0.0',
      description: 'API para el proyecto final de coderhouse, con Node, Express y MongoDB, con manejo de información para un e-commerce.'
    },
    servers: [{
      url: 'http://localhost:8080'
    }]
  },
  apis: ['./src/docs/*.yml']
};
exports.info = info;