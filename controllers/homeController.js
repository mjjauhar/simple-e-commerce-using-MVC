module.exports = {
    home: (req, res) => {
        if (req.session.loggedIn) {
            let user = req.session.user;
            console.log(user);
            res.render('home', { user });
        }else{
            res.redirect('/');
        }
    }
}