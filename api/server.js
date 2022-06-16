const express = require('express');

const projectRoutes = require('./project/router');
const resourceRoutes = require('./resource/router');
const taskRoutes = require('./task/router');

const server = express();
server.use(express.json());

server.use('/api/project', projectRoutes);
server.use('/api/resource', resourceRoutes);
server.use('/api/task', taskRoutes)


module.exports = server;