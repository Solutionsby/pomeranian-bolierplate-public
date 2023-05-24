import './styles.css';

export const WarmUp = () => {
  // function print_my_arguments() {
  //   let args = arguments;
  //   const arrayWithArguments = [];
  //   for (let i = 0; i < args.length; i++) {
  //     arrayWithArguments.push(args[i]);
  //   }
  //   return arrayWithArguments;
  // }

  // function arrayFlat(arrays) {
  //   return arrays.flat();
  // }
  // const reduceTables = (...arrays) => arrays.join();
  // {letter: "A", score: 5}, {letter: "E", score: 15}, {letter: "I", score: 6}, {letter: "O", score: 2}, {letter: "U", score: 0}

  const scores = [
    { letter: 'A', score: 5 },
    { letter: 'E', score: 15 },
    { letter: 'I', score: 6 },
    { letter: 'O', score: 2 },
    { letter: 'U', score: 0 },
  ];

  const names = ['Pawel', 'Michał', 'Grzegoż', 'Łukasz', 'Teresagit '];

  function ScoresFromLetters(names, scores, score) {
    let toUpperCase = names.map((name) => name.toUpperCase());
    let scoresLetter = scores.map((score) => score.letter);
    let SplitTheName = toUpperCase.map((name) => name.split(''));

    return SplitTheName.map((name) => {
      return name.map((letter) => {
        if (scoresLetter.includes(letter)) {
          return scores.find((item) => item.letter === letter)[score];
        } else {
          return 0;
        }
      });
    });
  }

  function SumTheScore() {
    let ArraywWithPoints = ScoresFromLetters(names, scores, 'score');
    return ArraywWithPoints.map((element) => {
      return element.reduce(function (a, b) {
        return a + b;
      });
    });
  }

  return (
    <div>
      {SumTheScore().map((el, index) => (
        <p>
          {' '}
          Imię {names[index]} zdobywa {el} punktów
        </p>
      ))}
    </div>
  );
};
