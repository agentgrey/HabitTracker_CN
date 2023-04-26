module.exports.signIn = async function(req, res) {
    try {
        return res.render('user_sign_in');
    } catch (error) {
        console.log('Error in usersController/signIn: ', error);
        return res.redirect('back');
    }
}


module.exports.signUp = async function(req, res) {
    try {
        return res.render('user_sign_up')
    } catch (error) {
        console.log('Error in usersController/signUp: ', error);
        return res.redirect('back');
    }
}