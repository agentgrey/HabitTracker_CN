// const Post = require('../models/post');
const User = require('../models/user');
const Habit = require('../models/habit');

module.exports.home = async function(req, res) {
    if(req.user){
        let habits = await Habit.find({user: req.user._id}); 
        console.log(habits)
        return res.render('home', {
            title : "Habit Tracker",
            habits : habits,
            // weeklyDates : await getOneWeekDate()
        })
    }else{
        return res.render('home', {
            title: "Home"
        });
    }
}

module.exports.notFound = async function(req, res) {
    return res.render('404', {
        title :'Not Found!'
    });
}