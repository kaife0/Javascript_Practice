
let a = prompt("enter first Number")

let b = prompt("enter second number");
if(isNaN(a)|| isNaN(b)){
    // console.log("invalid input");
    throw SyntaxError("Not allowed Motherfucker!")

}
 let sum = parseInt(a) + parseInt(b);

 function main(){

     let x = 1;
     try {
         console.log("The sum is ", sum*x); 
         return true;
         
        } catch (error) {
            console.log("Error Motherfucker")
            return false;
        }
        finally{
            console.log("Files are being closed and db connection is being closed");
            
        }
    }

    let k = main();
