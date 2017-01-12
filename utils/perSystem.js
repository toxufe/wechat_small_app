if (typeof oObject == "undefined") {
    var oObject = {}
    oObject.O = '';
    oObject.Oper = function (a, b) {
        switch (this.O) {
            case "+":
            //console.log(888,a);
                return a + b;
            case "-":
                return a - b;
            case "x":
                return a * b;
            case "/":
                return a / b;
        }

    }

    oObject.OperSymol = function(c){
       this.O = c;
    }
}
function perSystem() {
    return oObject;
}
module.exports = {
    perSystem: perSystem()
}
