/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
    // Write your code here
    const result = grades.map(grade=>{
        if(grade<38) return grade;
        
        const remainder = grade % 5;
        const difference = 5 - remainder;
            
        if(difference < 3){
            return grade + difference;
        }
         return grade;
    })
   return result;
}
