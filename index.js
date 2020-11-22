var readlinesync=require("readline-sync");
var chalk=require("chalk");
var score=0;
//Intro
var username=readlinesync.question("Welcome to Shawshank Quiz may i know your name?:");
console.log("Welcome "+ chalk.magentaBright.bold(username)+ " to the quiz about Shawshank Redemption");
console.log(chalk.yellowBright("---------------------------------------------"));
//array of question
var questions=[{
  question:"What is Brooks's job at the prison?\n\n a.he runs the kitchen\n b.he runs the library\n c.he's the warden's personal assistant\n d.he doesn't have a job\n",
  answer:'b',
  },{
  question:"Why does Brooks hold a shiv to Heywood's throat?\n\n a.Heywood stole food from him\n b.Heywood threw a rock at Jake\n c.Brooks has the beginnings of Alzheimer's\n d.Brooks doesn't want to be released from prison\n",
  answer:'d'
  },
  {
  question:"What job is Brooks given on the outside?\n\n a.bagging groceries at a Food-Way\n b.cleaning bathrooms in an office building\n c.parking cars at wrestling events\n d.shelving books at a city library\n",
  answer:'a'
  },
   {
  question:"What is Red's special skill?\n\n a.mediating arguments between inmates\n b.obtaining contraband goods from outside\n c.predicting cell searches\n d.making moonshine\n",
  answer:'b'
  },
  {
  question:"Where is Andy first assigned to work at the prison?\n\n a.the kitchen\n b.the laundry\n c.the mailroom\n d.the kitchen garden\n",
  answer:'b'
  },
   {
  question:"What does Andy request from Captain Hadley, in return for setting up the tax shelter for his inheritance?\n\n a.a better work detail\n b.beer for the guys working on the roof\n c.money for himself\n d.extra rations from the kitchen\n",
  answer:'b'
  },
   {
  question:"Why is Tommy shot to death?\n\n a.he gets in a vicious fight in the yard\n b.he tries to climb over the fence\n c.he tries to shiv a guard\n d.he knows too much about Andy's false conviction\n",
  answer:'d'
  },
   {
  question:"Where does Red find the money and letter from Andy?\n\n a.in a stone wall, along a hayfield\n b.under the porch of Andy's old house\n c.in the break room of the Food-Way\n d.buried near a statue in a city park\n",
  answer:'a'
  },
   {
  question:"Where do Andy and Red reunite?\n\n a.on the beach\n b.in a beachside bar\n c.at the border, in Fort Hancock\n d.they don't\n",
  answer:'a'
  },
   {
  question:"Where does Andy get the suit and shoes he wears to the banks??\n\n a.he buys them with Warden Norton's money\n b.he stole them from Norton's office\n c.he steals them from a haberdashery\n d.he takes them from his own things, in storage\n",
  answer:'b'
  },
  ];

  //play function
    
    function play(question,answer)
    {
      var userans=readlinesync.question(question+"\nANS:");

       if(userans==answer)
      {
        console.log(chalk.greenBright("Yay! You are Right"));
        score=score+1;
      }
     else
     {
       console.log(chalk.redBright("Ahh! You are Wrong"));
       score=score-1;
     }
     console.log("Current Score:"+score);
     console.log(chalk.yellowBright("----------------------"));
    }

    //loop
    for(var i=0;i<questions.length;i++)
    {
      var currentquestion=questions[i];
      play(currentquestion.question,currentquestion.answer);
    }
    console.log("Total Score="+chalk.cyanBright(score));
    