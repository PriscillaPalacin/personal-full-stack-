module.exports = function(app, passport, db) {
      app.get('/', function(req, res) {
          res.render('index.ejs');
      });
// ==============================PROFILE SECTION =========================
          app.get('/profile', isLoggedIn, function(req, res) {
              db.collection('messages').find().toArray((err, result) => {
                if (err) return console.log(err)
                res.render('profile.ejs', {
                  user : req.user,
                  messages: result
                })
              })
          });

  // =======================LOGIN ===============================

          app.get('/login', function(req, res) {
                  res.render('login.ejs', { message: req.flash('loginMessage') });
                  });

// process the login form
          app.post('/login', passport.authenticate('local-login', {
            successRedirect : '/profile', // redirect to the secure profile section
            failureRedirect : '/login', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
            }));

          app.get("/shirts", function(req, res){
          res.render("shirts.ejs")
          })

          app.get("/pants", function(req, res){
          res.render("pants.ejs")
          })

          app.get("/hats", function(req, res){
          res.render("hats.ejs")
          })

          app.get("/cart", function(req, res){
            db.collection('cart').find().toArray((err, result) => {
              // ^^^getting the data from the collecting and turning into array.
                  if (err) return console.log(err)
                  res.render('cart.ejs', {
                    selectedItem: result
                  })
          })
        })



          // LOGOUT ==============================
          app.get('/logout', function(req, res) {
              req.logout();
              res.redirect('/');
          });

          // POST REQUEST ================================================

          app.post("/cart", (req, res) => {
            db.collection("cart").save({selectedItem: req.body.selectedItem})
              res.redirect("/shirts")
            })

          // DELETE =======================================================

          app.delete("/cart", (req, res) => {
            db.collection("cart").findOneAndDelete({name: req.body.selectedItem}, (err, result) => {
              if (err) return res.send(500, err)
              res.send("cart item deleted!")
            })
          })

          function isLoggedIn(req, res, next) {
            if (req.isAuthenticated())
              return next();
              res.redirect('/');
          }
}
