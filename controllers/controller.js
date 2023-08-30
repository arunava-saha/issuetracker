const Project = require('../models/project')
const Issue = require('../models/issue')


// @desc the Home page where the project list are displaya
// @route /
// @method get
const home = async (req, res) => {
    try {
        let projects = await Project.find({});
        return res.render('Home', {
            Title: 'Issue Tracker',
            Page: 'Home Page',
            projects,
            Contributer: 'Arunava Saha'
        })
    } catch (error) {
        console.log(error);
        return;
    }
}

// @desc to create a project
// @route /project
// @method Post
const createProject = async (req, res) => {
    try {

    } catch (error) {
        console.log(error);
    }
}
// @desc to Get the Issues of the project
// @route /project/issue
// @method get
const getIssue = async (req, res) => {
    try {

    } catch (error) {
        console.log(error);
    }
}
// @desc to create a Issue in the project
// @route /project/issue
// @method Post
const createIssue = async (req, res) => {
    try {

    } catch (error) {
        console.log(error);
    }
}




module.exports = {
    home, createProject
}