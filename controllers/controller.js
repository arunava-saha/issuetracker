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
        Project.create({
            Name: req.body.name,
            Description: req.body.desc,
            Author: req.body.author
        });
        return res.redirect('back');
    } catch (error) {
        console.log(error);
        return res.redirect('back');
    }
}

// @desc the Project details page from the project list are displaya
// @route /project/:id
// @method get
const project = async (req, res) => {
    try {
        let projects = await Project.findById(req.params.id).populate({ path: 'Issues' });

        if (project) {
            return res.render('Project', {
                Title: 'Issue Tracker',
                Page: 'Project DETAILS',
                project,
                Contributer: 'Arunava Saha'
            })
        }
        return res.redirect('back');
    } catch (error) {
        console.log(error);
        return res.redirect('back');
    }
}



// @desc to create a Issue in the project
// @route /project/:id
// @method Post
const createIssue = async (req, res) => {
    try {
        let project = await Project.findById(req.params.id);
        if (project) {
            let issue = await Issue.create({
                Title: req.body.title,
                Description: req.body.desc,
                Labels: req.body.labels,
                Author: req.body.author
            });
            project.issues.push(issue);

            if (!(typeof req.body.labels === 'String')) {
                for (let l of lreq.body.labels) {
                    let isP = project.Labels.find((e) => e == l);
                    if (!isP) {
                        project.labels.push(l);
                    }
                }
            } else {
                let isP = project.Labels.find((o) => o == req.body.labels);
                if (!isP) {
                    project.labels.push(req.body.labels);
                }
            }
            await project.save();
            return res.redirect(`back`);
        } else {
            return res.redirect(`back`);
        }
    } catch (error) {
        console.log(error);
        return res.redirect('back');
    }
}

module.exports = {
    home, createProject, createIssue, project
}