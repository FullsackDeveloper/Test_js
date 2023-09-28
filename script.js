let questions=[
    {
        question: "WHO IS GOD?",
        answers:['ALLOH','ISO','BUD-SANAMLAR','KOINOT'],
        answer:['a'],
    },
    {
        question: "WHO IS YOUR PROPHET? ",
        answers:['MUHAMMAD S.A.V','UMAR','USMON','ABU BAKR','ALI'],
        answer:['a'],
    },
    {
        question: "WHAT IS RELIGION?",
        answers:['ISLOM','XRISTIAN','BUDDAVIYLIK','ZARDUSHTIYLIK'],
        answer:['a'],
    },
    {
        question: "WHAT IS YOUR BOOK?",
        answers:['QURÓN','INJIL','TAVROT','ZARDUSHT'],
        answer:['a'],
    },
    {
        question: "ARE YOU PREPARED FOR SUCH QUESTIONS?",
        answers:['YES','NO','IN SHAA ALLOH \n NOW I LEARN','...'],
        answer:['c'],
    }
    
]
alert('Each question is worth 20 points.');
function main_job(questions) {
    let start = new Date();
    let number = 1;
    let counter=0;
    let m=questions.length;
    for(let i = 0; i < m; i++){
       let l=[];
        
        l[0]= prompt(`${number}-question\n  
        ${questions[i].question}\n
        a)${questions[i].answers[0]}\n
        b)${questions[i].answers[1]}\n
        c)${questions[i].answers[2]}\n
        d)${questions[i].answers[3]}`
        );
        
        if(l[0] == questions[i].answer[0]){
            counter++;
        }
        number++;
    };
    let  points = counter;
     let finish = new Date();
     alert(`You answered ${m} out of ${counter} questions correctly.\n ${points} points.\n You spent ${finish-start} ms to solve the test.`);
    };
main_job(questions);










