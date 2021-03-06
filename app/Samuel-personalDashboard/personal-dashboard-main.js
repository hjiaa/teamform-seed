/**
 * Created by Samuel on 2/11/2016.
 */

var dasApp = angular.module("dashboard", ['firebase']);
dasApp.controller("dashboardController", function ($scope, $firebaseArray, $firebaseObject, $firebaseAuth) {
    $scope.username = "Samuel He";
    var skillsRef = firebase.database().ref().child("skills");
    $scope.skills = $firebaseArray(skillsRef);
    $scope.receiveNewSikll = function () {
        $scope.skills.$add($scope.newSkill);
        $scope.newSkill = '';
    };



    $scope.firebaseObj = {
        "users": [{
            "name": "samuel",
            "id": 232794508173451340,
            "skills": ["Angular", "design", "Nodejs"],
            "teamsAsMember": [4455],
            "teamsAsLeader": [3344],
            "teamsApplying": [8899, 9977],
            "eventsManaging": [666777],
            "profilePic": "https://scontent-hkg3-1.xx.fbcdn.net/v/t1.0-9/11811378_670467616420822_8367557776291472237_n.jpg?oh=daf68581e51d412ce96010adf7d77648&oe=588A7872",
            "notifs": [{
                "sender": "xinyu",
                "receiver": "samuel",
                "type": "invitation",
                "read": false,
                "content": "You were invited to join XXX team"
            }]
        }],
        "events": [{
            "eventID": 666777,
            "adminID": 111194508173451340,
            "allTeams": [3344, 6688],
            "eventName": "3111h",
            "description": "a course",
            "maxSize": 8,
            "minSize": 5
        }],
        "teams": [{
            "teamID": 3344,
            "leaderID": 232794508173451340,
            "membersID": [445664508173451340, 232794508173451340],
            "teamName": "Undefined",
            "belongstoEvent": 666777,
            "preferedSize": 8,
            "pendingApplicants": [1433664508173451340],
            "invitedPeople": [555564508173451340],
            "desiredSkills": ["Angular", "Vue"]
        }]
    };

    var dummyDataRef = firebase.database().ref().child("dummyData");
    dummyDataRef.set($scope.firebaseObj);
    var syncObject = $firebaseObject(dummyDataRef);
    syncObject.$bindTo($scope, "firebaseObj");

    var auth = $firebaseAuth();
    auth.$signInWithPopup("facebook").then(function(firebaseUser) {
        console.log("Signed in as:", firebaseUser.uid);
    }).catch(function(error) {
        console.log("Authentication failed:", error);
    });

});
dasApp.directive("skillitem", function () {
    return {
        restrict: "E",
        templateUrl: "components/skillitem.html",
        scope: {
            name: "@"
        },
        replace: false
    }
});




