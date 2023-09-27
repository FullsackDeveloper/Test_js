let questions=[
    {
        question: "WHO IS GOD?",
        answers:['ALLOH','ISO','BUD-SANAMLAR','KOINOT'],
    },
    {
        question: "WHO IS YOUR PROPHET? ",
        answers:['MUHAMMAD S.A.V','UMAR','USMON','ABU BAKR','ALI'],
    },
    {
        question: "WHAT IS RELIGION?",
        answers:['ISLOM','XRISTIAN','BUDDAVIYLIK','ZARDUSHTIYLIK'],
    },
    {
        question: "WHAT IS YOUR BOOK?",
        answers:['QURÓN','INJIL','TAVROT','ZARDUSHT'],
    },
    {
        question: "ARE YOU PREPARED FOR SUCH QUESTIONS?",
        answers:['YES','NO','IN SHAA ALLOH \n NOW I LEARN','...'],
    }
    
];
let k = ['a','a','a','a','a'];
alert('Each question is worth 20 points.');
function main_job(i,m,l,counter) {
    for(i = 0; i < m; i++){
        l=[];
        
        l[i]= prompt(`  
        ${questions[i].question}\n
        a)${questions[i].answers[0]}\n
        b)${questions[i].answers[1]}\n
        c)${questions[i].answers[2]}\n
        d)${questions[i].answers[3]}`
        );
        
        if(l[i] == k[i]){
            counter++;
        }
    };
    
     ball = counter*20;
    
     alert(`You answered ${m} out of ${counter} questions correctly.\n ${ball} ball.`);
}
let counter=0, i, l, ball;
let m=Object.keys(questions).length;
main_job(i,m,l,counter);










