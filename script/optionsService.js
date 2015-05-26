myServiceApp.service('optionsService', function () {
        var opt = {};

        return {
            getOption: function () {
                return opt;
            },
            setOption: function(option) {
                opt = option;
            }
        };
    });
