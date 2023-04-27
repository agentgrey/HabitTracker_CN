const Habit = require('../models/habit');
const User = require('../models/user');

module.exports.createHabit = async function(req, res) {
    try {
        // console.log("req.body: ", req.body);
        // console.log("req.user: ", req.user);
        let habit = Habit.findOne({title: req.body.habit, user: req.user._id}).populate();

        if(habit) {
            console.log('Habit exists');
            return res.redirect('/');
        } else {
            let habit = await Habit.create({
                title: req.body.title,
                desc: req.body.desc,
                user: req.user._id
            });
            return res.redirect('/');
        }
    } catch (error) {
        console.log('Error in habitController/createHabit: ', error);
        return;
    }
}