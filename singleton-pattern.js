// Singleton desing pattern limits the number of instances of a particular object to just one the single instance is called the singleton this is useful when exactly one object is needed to coordinate action across the system you use a singleton as the source of config settings for a web app or on the client side for aything initiated with an API key Sinleton also serve as a shared resource namespace which isolate implementation code from the flobal namespace so as to provide a single point of access for funtions namespace in your code is a primary use of singletons a well known use case for this JQuery

var mySingleton = (function(){
   // Instance stores a ref to the singleton
   var instance;
   function init() {
      //singleton
      //.private methos and variables
      function privateMethod() {
         console.log('I am private');
      }

      var privateVariable = "I am also private";
      var privateRandomNUmber = Math.random();

      return{
         //Public method and variable
         publicMethod : function () {
            console.log('The public can see me!');
         },
         publicProperty: 'I am also public',
         getRandomNUmber: function () {
               return privateRandomNUmber;
         }
      };
   };

   return {
      // Get the singleton instance if one exists
      // or create one if it doesn't exists
      getInstance: function () {
         if(!instance){
            instance = init();
         }
         return instance
         
      }
   }
})();

var singleA = mySingleton.getInstance();
var singleB = mySingleton.getInstance();
console.log(singleA.privateMethod);
console.log(singleA.privateVariable);
singleA.publicMethod();
console.log(singleA.publicProperty)
console.log(singleA.getRandomNUmber() === singleB.getRandomNUmber())
