const Resource = require('../models/resource');
const mongoose = require('mongoose');

exports.index = (req, res) => {
    res.send('Site Home Page');
};


exports.show = (req, res) => {
    res.send('Show all registration entries Page');
};


exports.new = (req, res) => {
    res.send('New Registration page');
};


exports.edit = (req, res) => {
    res.send('Edit Page');
};


exports.create = async (req, res) => {
    res.send('Create Page');
};


exports.update = (req, res) => {
    res.send('Update Registration Info page');
};


exports.destroy = (req, res) => {
    res.send('Delete Info page');
};