module.exports = {
    ensureAuth: function(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        } else {
            res.redirect('/auth/google')
        }

        // ========= Decide if we use it or not  =================
        // },
        // ensureGuest: function(req, res, next) {
        //     if (req.isAuthenticated()) {
        //         res.redirect('/planets/all');
        //     } else {
        //         console.log(`notAuthenticated`, req.isAuthenticated())
        //         return next();
        //     }

        //     // next();
    }
}