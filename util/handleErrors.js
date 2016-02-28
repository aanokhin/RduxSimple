var notify = require('gulp-notify');

module.exports = function(error) {
    notify.onError({
        message: "<%= error.message %>"
    }).apply(this, arguments);
    console.log("error.message");

    this.emit('end');
};
