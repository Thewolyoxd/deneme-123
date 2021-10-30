const mongoose = require("mongoose");

const macabre_guard = mongoose.Schema({
    banlı: Array,
    owner: Array,
    bot: Array
});

module.exports = mongoose.model("Discord Guard", macabre_guard);
