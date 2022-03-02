const divy = document.getElementById("trivia")
const questArr = [
    {
        questionId:1,
        question : "how are you?",
    },
    {
        questionId:2,
        question : "how old are you?",

    },
    {
        questionId:3,
        question : "alooooo?",
    },];


    const answerArr = [
        {
        answers: [1,2,3,4]
        },
        {
        answers: [1,2,3,4]
        },
        {
        answers: [1,2,3,4]
        },

    ];


for (const quest of questArr) {
    let html = `<br><label for="question${quest.questionId}">question ${quest.questionId}</label><br>`;
    for (let i = 0; i < 4; i++) {
        const answer = answerArr[i];
        console.log(answer.answers);
        for (const value of answer.answers) {
            html+= `<input type="radio" name="question ${quest.questionId}">`
            html += `<span>${value}</span>`
            
        }

        
    }
            
        

    divy.innerHTML += html

}