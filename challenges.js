//JAVASCRIPT FUNDAMENTALS CHALLENGES
//See README file for challenges instructions

//1. canIVote()
const canIVote = (age) => {
    if (age >= 18) {
      return true;
    } else {
      return false;
    }
};

console.log(canIVote(19));

//2. agreeOrDisagree()
const agreeOrDisagree = (bride, groom) => {
    if (bride === groom) {
      return "You agree!";
    } else {
      return "You disagree!";
    }
};
  
console.log(agreeOrDisagree("yep", "yep"));

//3. lifePhase()
const lifePhase = (age) => {
    if (age >= 0 && age < 4) {
      return "baby";
    } else if (age >= 4 && age < 13) {
      return "child";
    } else if (age >= 13 && age < 20) {
      return "teen";
    } else if (age >= 20 && age < 65) {
      return "adult";
    } else if (age >= 65 && age < 141) {
      return "senior citizen";
    } else {
      return "This is not a valid age";
    }
};
  
console.log(lifePhase(5));
  
//4. finalGrade()
const finalGrade = (homework, test, exam) => {
    const average = (homework + test + exam) / 3;
  
    if (
      homework < 0 ||
      homework > 100 ||
      test < 0 ||
      test > 100 ||
      exam < 0 ||
      exam > 100
    ) {
      return "You have entered an invalid grade.";
    }
  
    if (average >= 0 && average < 60) {
      return "F";
    } else if (average >= 60 && average < 70) {
      return "D";
    } else if (average >= 70 && average < 80) {
      return "C";
    } else if (average >= 80 && average < 90) {
      return "B";
    } else if (average >= 90 && average < 101) {
      return "A";
    }
};
  
console.log(finalGrade(99, 90, 101));
  
//5. reportingForDuty()
const reportingForDuty = (rank, lastName) => {
    return `${rank} ${lastName} reporting for duty!`;
};
  
console.log(reportingForDuty("Private", "Fido"));

//6. rollTheDice()
const rollTheDice = () => {
    let die1 = Math.floor(Math.random() * 6 + 1);
    let die2 = Math.floor(Math.random() * 6 + 1);
  
    console.log(die1);
    console.log(die2);
    
    return die1 + die2;
  
};
  
console.log(rollTheDice());

//7. calculateWeight()

//Switch Cases Version
const calculateWeight = (earthWeight, planet) => {
    switch (planet) {
      case "Mercury":
        return earthWeight * 0.378;
        break;
      case "Venus":
        return earthWeight * 0.907;
        break;
      case "Mars":
        return earthWeight * 0.377;
        break;
      case "Jupiter":
        return earthWeight * 2.36;
        break;
      case "Saturn":
        return earthWeight * 0.916;
        break;
      default:
        return "Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.";
        break;
    }
};
  
console.log(calculateWeight(100, "Jupiter")); 
  
// If Statements Version
const calculateWeightIfVersion = (earthWeight, planet) => {
    if (planet === "Mercury") {
        return "Your Mercury Earth-weight equates to " + earthWeight * 0.378 + "kg";
  } else if (planet === "Venus") {
      return (
      "Your Earth-weight on planet Venus equates to " +
      earthWeight * 0.907 +
      "kg"
      );
  } else if (planet === "Mars") {
      return (
      "Your Earth-weight on planet Mars equates to " +
      earthWeight * 0.377 +
      "kg"
      );
  } else if (planet === "Jupiter") {
      return (
      "Your Earth-weight on planet Jupiter equates to " +
      earthWeight * 2.36 +
      "kg"
      );
  } else if (planet === "Saturn") {
      return (
      "Your Earth-weight on planet Saturn equates to " +
      earthWeight * 0.916 +
      "kg"
      );
  } else {
      return "Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.";
  }
};

console.log(calculateWeightIfVersion(100, "Jupiter"));

//8. truthyOrFalsy()
const truthyOrFalsy = (value) => {
    if (value) {
      return true;
    } else {
      return false;
    }
};
  
console.log(truthyOrFalsy());

//9. numImaginaryFriends()
const numImaginaryFriends = (totalFriends) => {
    const imaginaryFriends = Math.ceil((25 / 100) * totalFriends);
  
    return imaginaryFriends;
};
  
console.log(numImaginaryFriends(500));

//10. sillySentence()
const sillySentence = (adjective, verb, noun) => {
    return `I am so ${adjective} because I ${verb} coding! Time to write some more awesome ${noun}!`;
};
  
console.log(sillySentence("excited", "love", "functions"));

//11. howOld()
const howOld = (age, year) => {
    let currentYear = 2022;
    let birthYear = currentYear - age;
  
    if (year > currentYear) {
        return ('You will be ' + ((year - currentYear) + age) + ' in the year ' + year);
    } else if (year < birthYear) {
        return ('The year ' + year + ' was ' + (birthYear - year) + ' years before you were born');
    } else if (year > birthYear && year < currentYear) {
        return ('You were ' + (year - birthYear) + ' in the year ' + year);
    } 
};
  
console.log(howOld(41, 1990));


//12. whatRelation()
const whatRelation = (percentSharedDNA) => {
    if (percentSharedDNA === 100) {
        return "You are likely identical twins.";
    } else if (percentSharedDNA >= 35 && percentSharedDNA <= 99) {
        return "You are likely parent and child or full siblings.";
    } else if (percentSharedDNA >= 14 && percentSharedDNA <= 34) {
        return "You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.";
    } else if (percentSharedDNA >= 6 && percentSharedDNA <= 13) {
        return "You are likely 1st cousins.";
    } else if (percentSharedDNA >= 3 && percentSharedDNA <= 5) {
        return "You are likely 2nd cousins.";
    } else if (percentSharedDNA >= 1 && percentSharedDNA <= 2) {
        return "You are likely 3rd cousins";
    } else if ((percentSharedDNA === 0)) {
        return "You are likely not related.";
    } else {
        return 'Invalid input. Only numbers between 1-2, 3-5, 6-13, 14-34, 35-99 are allowed, as well as 0 and 100, respectively.';
    }
};
  
console.log(whatRelation(65));

//13. tipCalculator()
const tipCalculator = (quality, total) => {
    switch (quality) {
        case "bad":
            return (5 / 100) * total;
            break;
        case "ok":
            return (15 / 100) * total;
            break;
        case "good":
            return (20 / 100) * total;
            break;
        case "excellent":
            return (30 / 100) * total;
            break;
        default:
            return (18 / 100) * total;
            break;
    }
};
  
console.log(Math.floor(tipCalculator("bad", 150)));

//14. toEmoticon()
const toEmoticon = (emoticon) => {
    switch (emoticon) {
      case 'shrug':
        return '|_{"}_|';
        break;
      case 'smiley face':
        return ':)';
        break;
      case 'frowny face':
        return ':(';
        break;
      case 'winky face':
        return ';)';
        break;
      case 'heart':
        return '<3';
        break;
      default:
        return '|_(* ~ *)_|';
        break;
    }
};
  
console.log(toEmoticon('heart'));
  
  
  
  
  
  