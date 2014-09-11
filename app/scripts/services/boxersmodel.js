'use strict';

angular.module('angularGeneratedApp')
    .factory('boxersModel', function () {
        // Service logic
        // ...

        var dummyContact = {
            address: {
                street: "5 Glen Stree",
                suburb: "Ashfield",
                state: "NSW",
                postCode: "2045"

            },
            phone: "0415 567 876"
        };

        var dummyClub = {
            name: "BlackBelt Pro Gym"
        };

        var dummyTrainer = {
            firstName: "Bobby",
            lastName: "Smith",
            club: dummyClub
        }

        var listOfRegisteredBoxers = [
            {firstName: "Muhammad", lastName: "Faisal", dob: "21/07/1970", registration: {number: "345", date: "21/07/2010"}, class: "senior", trainer: dummyTrainer, club: dummyClub, contact: dummyContact},
            {firstName: "Johny", lastName: "Green", dob: "02/01/1980", registration: {number: "563", date: "02/01/2013"}, class: "senior", trainer: dummyTrainer, club: dummyClub, contact: dummyContact},
            {firstName: "Peppy", lastName: "Leonard", dob: "21/01/1985", registration: {number: "123", date: "21/01/2014"}, class: "junior", trainer: dummyTrainer, club: dummyClub, contact: dummyContact}
        ];

        // Public API here
        return {
            listRegisteredBoxers: function () {
                return listOfRegisteredBoxers;
            },

            registerNewBoxer: function (boxer) {
                listOfRegisteredBoxers.push(boxer);
            }
        };
    });
