teamapp.controller('homeController', ['$scope',"$rootScope" , function($rootScope,$scope) {



  // For stupid test case, comment out the only useful function here
  
  $scope.loginhelper = function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  // var user = result.user;
  localStorage.setItem('loginStatus', true);

  successFlag = true;

  if (successFlag) {
      // $('.loginB').toggle();
      $('.cd-user-modal').removeClass('is-visible');
      $('.loginB').css('display', 'none');
    }

    var data = result.user.providerData[0];
    $rootScope.loginWithEmail(data['email']);

    if ($rootScope.currentUser['id'] == 0) {
      var newUser = {
        eventsManaging:[],
        email:data['email'],
        name:data['displayName'],
        notifis:[],
        profilePic:data['photoURL'],
        skills:[],
        teamsApplying:[],
        teamsAsLeader:[],
        teamsAsMember:[]
      };

      $rootScope.addUser(newUser);
      console.log("user added");
      //$rootScope.loginWithEmail(data['email']);
    }

    console.log($rootScope.currentUser['name']);
    // $rootScope.test();

  };

  $scope.loginErrorHandler = function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  console.log(error);
  if (errorCode == 'auth/account-exists-with-different-credential') {
    // $('.loginB').toggle();
    $rootScope.loginWithEmail(email);
    localStorage.setItem('loginStatus', true);
    console.log($rootScope.currentUser['name']);
    location.assign('#');
  }
};

  // Login helper functions
  $scope.login = function(providerName) {
    var successFlag = false;
    switch (providerName) {
      case 'google':
      var provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('https://www.googleapis.com/auth/plus.login');
      break;
    // case 'twitter':
    // var provider = new firebase.auth.TwitterAuthProvider();
    // break;
    case 'facebook':
    var provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('user_friends');
    break;
    // case 'github':
    // var provider = new firebase.auth.GithubAuthProvider();
    // break;
    default:
      // statements_def
      console.log('error login');
      return;
    }

    firebase.auth().signInWithPopup(provider).then($scope.loginhelper).catch($scope.loginErrorHandler);

};

$scope.i = 0;

$scope.login_selected = function() {
      // mainNav.children('ul').removeClass('is-visible');
      // $('.cd-user-modal').addClass('is-visible');
      // $scope.cdUserModal = ;
      // $scope.cdUserModal.addClass('is-visible');

      $('.cd-user-modal').addClass('is-visible');
      // $('#cd-login').css('display', 'none');

      // if ($('#cd-login').css('display')==='none')
      // {
        // $('#cd-login').toggle();
      // }
      // console.log( $('.loginB').css('display') != 'none' && $('#cd-login').css('display') == 'none' );

      // if ( ($('.loginB').css('display') != 'none' && $('#cd-login').css('display') == 'none') ) {
      //   $('#cd-login').toggle();
      // }

      if ($scope.i++ == 0) {
        $('#cd-login').toggle();
      }
      // formLogin.addClass('is-selected');
      // formSignup.removeClass('is-selected');
      // formForgotPassword.removeClass('is-selected');
      $('.cd-switcher').children('li').eq(0).children('a').addClass('selected');
      // tabSignup.removeClass('selected');
    };

    $scope.signup_selected = function(){
      // mainNav.children('ul').removeClass('is-visible');
      $('.cd-user-modal').addClass('is-visible');
      // formLogin.removeClass('is-selected');
      // formSignup.addClass('is-selected');
      // formForgotPassword.removeClass('is-selected');
      $('.cd-user-modal').removeClass('selected');
      // tabSignup.addClass('selected');
    };

    // $scope.switcher = function(event) {
    //   event.preventDefault();
    //   $(event.target).is( $('.cd-switcher').children('li').eq(0).children('a') ) ? $scope.login_selected() : $scope.signup_selected();
    //   // $scope.login_selected();
    // }

// $scope.changeVisible = function(event) {

//   if( $(event.target).is($('.cd-user-modal')) || $(event.target).is('.cd-close-form') ) {
//      $('.cd-user-modal').removeClass('is-visible');
//   }
// }

$scope.features = [
{
  image_path: "Fenghaoan/images/invite_people.png",
  title: "Invite People",
  content: "kdfla;jf jflkd jfldkjf lkajflkdjaflk jdlksjf lkjfalkjd lkfjkdajf lkjaflk jdalkf jlkdajf lkjflk ja",
  flip: "true"
},
{
  image_path: "Fenghaoan/images/skill_visualization.png",
  title: "Skill Visualization",
  content: "kdfla;jf jflkd jfldkjf lkajflkdjaflk jdlksjf lkjfalkjd lkfjkdajf lkjaflk jdalkf jlkdajf lkjflk ja",
  flip: "false"
},
{
  image_path: "Fenghaoan/images/smart.png",
  title: "Smart Pick Team Member",
  content: "kdfla;jf jflkd jfldkjf lkajflkdjaflk jdlksjf lkjfalkjd lkfjkdajf lkjaflk jdalkf jlkdajf lkjflk ja",
  flip: "true"
},
{
  image_path: "Fenghaoan/images/merge.png",
  title: "Merge Team",
  content: "kdfla;jf jflkd jfldkjf lkajflkdjaflk jdlksjf lkjfalkjd lkfjkdajf lkjaflk jdalkf jlkdajf lkjflk ja",
  flip: "false"
},

];

$scope.developers = [
{
  name: "FENG Haoan",
  image: "Fenghaoan/images/feature1.png",
  content: "kdfla;jf jflkd jfldkjf lkajflkdjaflk jdlksjf lkjfalkjd lkfjkdajf lkjaflk jdalkf jlkdajf lkjflk ja",
  personal_website: "https://www.google.com",
  flip: "false"
},
{
  name: "FENG Haoan",
  image: "Fenghaoan/images/feature1.png",
  content: "kdfla;jf jflkd jfldkjf lkajflkdjaflk jdlksjf lkjfalkjd lkfjkdajf lkjaflk jdalkf jlkdajf lkjflk ja",
  personal_website: "https://www.google.com",
  flip: "true"
},
{
  name: "FENG Haoan",
  image: "Fenghaoan/images/feature1.png",
  content: "kdfla;jf jflkd jfldkjf lkajflkdjaflk jdlksjf lkjfalkjd lkfjkdajf lkjaflk jdalkf jlkdajf lkjflk ja",
  personal_website: "https://www.google.com",
  flip: "false"
},
{
  name: "FENG Haoan",
  image: "Fenghaoan/images/feature1.png",
  content: "kdfla;jf jflkd jfldkjf lkajflkdjaflk jdlksjf lkjfalkjd lkfjkdajf lkjaflk jdalkf jlkdajf lkjflk ja",
  personal_website: "https://www.google.com",
  flip: "true"
},
];
}]);

teamapp.directive('featureCard', function() {
  return {
    restrict: 'E',
    templateUrl: "Fenghaoan/js/featureCard.html",
    replace: true,
    link: function($scope, iElm, iAttrs, controller) {

    }
  };
});

teamapp.directive('developerCard', function() {
  return {
    restrict: 'E',
    templateUrl: "Fenghaoan/js/developerCard.html",
    replace: true,
    link: function($scope, iElm, iAttrs, controller) {

    }
  };
});
