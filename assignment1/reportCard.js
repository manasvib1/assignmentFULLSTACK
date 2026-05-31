class Student
{
    constructor(name,scores)
    {
        this.name=name;
        this.scores=scores;
    }

    get average()
    {
        let sum=0
        for(let score of this.scores)      
        {
            sum+=score;
        }
        return sum/this.scores.length;    
    }

    get letterGrade()
    {
        const avg = this.average;
        if (avg >= 90) return 'A';
        else if (avg >= 80) return 'B';
        else if (avg >= 70) return 'C';
        else if (avg >= 60) return 'D';
        else return 'F';
    }

    summary()
    {
        let highest=this.scores[0];
        let lowest=this.scores[0];
        for(let score of this.scores)
        {
            if(score>highest) highest=score;
            if(score<lowest) lowest=score;
        }
        return {highest,lowest}
    }
}

function getRemark(grade)
{
    switch(grade)
    {
        case 'A': return 'Excellent!';
        case 'B': return 'Good job!';
        case 'C': return 'Satisfactory';
        case 'D': return 'Needs improvement';
        case 'F': return 'Failed';
        default: return 'Invalid grade';
    }
}
const name=process.argv[2];
const scores=process.argv.slice(3).map(Number); 
if (!name||scores.length === 0||scores.some(isNaN))
{
    console.log("Provide atleast 3 names with scores");
    process.exit(1);
}
const student=new Student(name,scores);
const {highest,lowest}=student.summary();
const[score1,score2, ...remaining]=scores;
const status=student.average>=60?"Passed":"Failed";

console.log(`
    --Report Card--
    Name: ${student.name}
    Score 1: ${score1}
    Score 2: ${score2}
    Remaining Scores: ${remaining.join(", ")}
    Average: ${student.average.toFixed(2)}
    Grade: ${student.letterGrade}
    Status: ${status}
    Remark: ${getRemark(student.letterGrade)}

    Highest Score: ${highest}
    Lowest Score: ${lowest}
`);
