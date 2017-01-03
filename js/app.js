(function () {
'use strict';
angular.module('LunchCheck',[])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];



function LunchCheckController($scope){
var arrayOfStrings = [];
var NumberOfElements = 0;
  $scope.myStyle = {"color" : "red"};
$scope.Message = "";

$scope.returnMessage = function () {
arrayOfStrings = splitString($scope.textBoxValue,",");
arrayOfStrings = ExcludEmptyElements(arrayOfStrings);
NumberOfElements = CountArrayElements(arrayOfStrings);

$scope.Message = popUpMessage(NumberOfElements );

}

function splitString(stringToSplit, separator) {
  var arrayOfStrings = [];

  if ( stringToSplit != undefined && stringToSplit != "" ) {
      arrayOfStrings = stringToSplit.split(separator);
  }
  return arrayOfStrings;
}

function ExcludEmptyElements(ar) {
  var newArr = [];
angular.forEach(ar, function(value) {
  value = value.replace(/^\s+|\s+$/g,'');
  if (value != "" && value != " ") {
    this.push( value);
  }
},newArr);
return newArr;
}

function CountArrayElements(ar) {
  return ar.length;
}

function  popUpMessage(NbrOfElements) {
  var MessageToReturn  = "";


  if (NbrOfElements > 0 ) {
    $scope.myStyle = {"color" : "green"};
     MessageToReturn  = "Enjoy!";
     if (NbrOfElements > 3) {MessageToReturn = "Too much!";}
  } else {
    MessageToReturn = "Please enter data first";
  $scope.myStyle = {"color" : "red"};
  }
  return MessageToReturn ;
}

};
})();
