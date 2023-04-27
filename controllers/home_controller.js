// const Post = require('../models/post');
const User = require('../models/user');
const Habit = require('../models/habit');

module.exports.home = async function(req, res) {
    if(req.user){
        let habits = await Habit.find({userRef: req.user._id}); 
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