module.exports = {
    admin: (req, res) => {
        if (req.session.adminlogin) {
            res.render('admin');
        }else{
            res.redirect('/');
        }
    }
}