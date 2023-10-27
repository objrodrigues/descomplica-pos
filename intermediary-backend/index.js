import inquirer from "inquirer";

inquirer.prompt(
    [
        {
            type: 'input',
            name: 'nome',
            message: 'Qual seu nome?',
        },
        {
            type: 'list',
            name: 'idade',
            message: 'Qual sua idade?',
            choices: [
                '-18',
                '18 a 30',
                '30+',
            ],
        }
    ]
).then((answers) => {
    console.log(
        "Oi me chamo " + answers.nome +
        " e tenho " + answers.idade + " anos de vida"
    )
});