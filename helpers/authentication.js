module.exports = {
  isAuth: (req, res, next) => {
    if (req.isAuthenticated()) {
      console.log(req.user);
      return next();
    }
    req.flash("error", "Please, login first");
    res.redirect("/login");
  }
}