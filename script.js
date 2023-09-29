let questions = [
    {
        question: "WHO IS GOD?",
        answers: ['ALLOH', 'ISO', 'BUD-SANAMLAR', 'KOINOT'],
        answer: ['a'],
    },
    {
        question: "WHO IS YOUR PROPHET? ",
        answers: ['MUHAMMAD S.A.V', 'UMAR', 'USMON', 'ABU BAKR', 'ALI'],
        answer: ['a']
    },
    {
        question: "WHAT IS RELIGION?",
        answers: ['ISLOM', 'XRISTIAN', 'BUDDAVIYLIK', 'ZARDUSHTIYLIK'],
        answer: ['a']
    },
    {
        question: "WHAT IS YOUR BOOK?",
        answers: ['QURÓN', 'INJIL', 'TAVROT', 'ZARDUSHT'],
        answer: ['a']
    },
    {
        question: "ARE YOU PREPARED FOR SUCH QUESTIONS?",
        answers: ['YES', 'NO', 'IN SHAA ALLOH \n NOW I LEARN', '...'],
        answer: ['a']
    }

]
alert('Each question is worth 1 points.');
let start = +prompt("Menu: \n 1.Testni Boshlash\n 2.Yangi savol qo'shish\n 3.Chiqish.");
switch(start){
    case 1:
        function main_job(questions) {
            let start = new Date();
            let number = 1;
            let counter = 0;
            let m = questions.length;
            for (let i = 0; i < m; i++) {
                let l = [];
                function reply(l) {
                    l[0] = prompt(`${number}-question\n  
                    ${questions[i].question}\n
                    0.Finish the test \n
                    a)${questions[i].answers[0]}
                    b)${questions[i].answers[1]}
                    c)${questions[i].answers[2]}
                    d)${questions[i].answers[3]}`
                    );
                };
                reply(l);
        
                if (l[0].toLowerCase() == questions[i].answer[0]) { counter++; }
                if (l[0].toLowerCase() == 0) { break; }
        
                while (!(l[0].toLowerCase() == "a" || l[0].toLowerCase() == "b" || l[0].toLowerCase() == "c" || l[0].toLowerCase() == "d")) {
                    alert(`Enter only the letters given in the option.`);
                    reply(l);
                }
        
        
        
        
        
        
                number++;
            };
            let points = counter;
            let finish = new Date();
            alert(`You answered ${m} out of ${counter} questions correctly.\n ${points} points.\n You spent ${finish - start} ms to solve the test.`);
        };
        main_job(questions);
    case 2:

    case 3:
        let exit = +prompt("Daf bo'lib ketsang okeymi ? \n 1.Juda okey");
        if(exit=='1'){alert("Sog'bo'lasiz.");}
        while(!(exit == '1')){
            exit = +prompt("Daf bo'lib ketsang okeymi ? \n 1.Juda okey");
        }

}












