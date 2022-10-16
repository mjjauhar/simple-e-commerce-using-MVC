module.exports = {
    home: (req, res) => {
        let user = req.session.user;
        console.log(user);
        res.render('home',{user});
    }
}