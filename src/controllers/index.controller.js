
const indexController = {};

indexController.renderIndex = (req, res) => {
    res.render('index');
};

indexController.renderAbout = (req, res) => {
    res.render('about');
};

indexController.renderMe = (req, res) => {
    res.render('me');
};

module.exports = indexController;