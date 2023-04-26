
module.exports.home = async function(req, res) {
    try {
        return res.end("<h1> Home Controller </h1>");
    } catch (error) {
        console.log('Error in homeController/home: ', error);
        return res.redirect(back);
    }
}