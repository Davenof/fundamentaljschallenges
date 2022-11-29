# fundamentaljschallenges
INFORMATION
<ul>
 <li>The challenges below are fundamental to JavaScript mastery for people whose knowledge of the language is below intermediate. See my intermediatejschallenges repository for intermediate challenges.</li>
 <li>See the <code>challenges.js</code> file in this repository for my solutions to the challenges. The challenges serial numbers in the file correspond with their numbers below.</li>
 </ul>
 
 <p>CHALLENGES</p>
 <ol>
    <li>
     <h3>canIVote()</h3>
     <p>
      The most common minimum age to vote is 18. Write a function <code>canIVote()</code> that takes in a number, representing the person’s age, and returns the boolean <code>true</code> if they are 18 years old or older, and the boolean <code>false</code> if they are not.
     </p>
    </li>
 
  <p> &nbsp; </p>
    <li>
     <h3>agreeOrDisagree()</h3>
     <p>
      Write a function, <code>agreeOrDisagree()</code>, that takes in two strings, and returns <code>'You agree!'</code> if the two strings are the same and <code>'You disagree!'<</code> if the two strings are different.
     </p>
    </li>
 
  <p> &nbsp; </p>
    <li>
     <h3>lifePhase()</h3>
     <p>
      Write a function, <code>lifePhase()</code>, that takes in a person’s age, as a number, and returns which phase of life they are in.
      
       <ul>
        Here are the classifications: <br><br>
        0-3 should return <code>'baby'</code> <br>
        4-12 should return <code>'child'</code> <br>
        13-19 should return <code>'teen'</code> <br>
        20-64 should return <code>'adult'</code> <br>
        65-140 should return <code>'senior citizen'</code> <br>
        If the number is less than 0 or greater than 140, the program should return <code>'This is not a valid age'</code>
      </ul>
     </p>
    </li>
 
 <p> &nbsp; </p>
   <li>
    <h3>finalGrade()</h3>
    <p>
     Write a function, <code>finalGrade()</code>. It should:
    <ul>
      <li>take three arguments of type number</li>
      <li>find the average of those three numbers</li>
      <li>return the letter grade (as a string) that the average corresponds to</li>
     <li>return <code>‘You have entered an invalid grade.’</code> if any of the three grades are less than 0 or greater than 100</li>
    </ul>
     <p>
      0-59 should return: <code>'F'</code> <br>
      60-69 should return: <code>'D'</code> <br>
      70-79 should return: <code>'C'</code> <br>
      80-89 should return: <code>'B'</code> <br>
      90-100 should return: <code>'A'</code>
     </p>
    </p>
   </li>
 
 <p> &nbsp; </p>
  <li>
   <h3>reportingForDuty()</h3>
   <p>
    Write a function, <code>reportingForDuty()</code>, that has two string parameters, <code>rank</code> and <code>lastName</code>, and returns a string in the following format: <br><br> 
    <code>‘rank lastName reporting for duty!’</code>. <br><br> 
    Therefore, <code>reportingForDuty('Private', 'Fido') </code> should return <code>'Private Fido reporting for duty!'</code>

   </p>
  </li>
 
 
 <p> &nbsp; </p>
  <li>
   <h3>rollTheDice()</h3>
   <p>
    Write a function, <code>rollTheDice()</code>, which simulates two dice being rolled and totalled. The code should always return a whole number between 1 and 12.
   </p>
  </li>
 
 
 <p> &nbsp; </p>
 <li>
   <h3>calculateWeight()</h3>
   <p>
     Though an object’s mass remains consistent throughout the universe, weight is determined by the force of gravity on an object. Since different planets        have different gravity, the same object would weigh different amounts on each of those planets! Cool, huh?
     <br><br>
    Write a function, <code>calculateWeight()</code>. It should:
  <ul>
   <li>have two parameters: <code>earthWeight</code> and <code>planet</code></li>
   <li>expect <code>earthWeight</code> to be a number</li>
   <li>expect <code>planet</code> to be a string</li>
        <li>return a number representing what that Earth-weight would equate to on the planet passed in.</li>
  </ul>
  <ul>
   <p>Handle the following cases:</p>
   <br><br>
   'Mercury' weight = <code>earthWeight</code> * 0.378<br>
   <code>'Venus'</code> weight = <code>earthWeight</code> * 0.907<br>
        <code>'Mars'</code> weight = <code>earthWeight</code> * 0.377<br>
        <code>'Jupiter'</code> weight = <code>earthWeight</code> * 2.36<br>
        <code>'Saturn'</code> weight = <code>earthWeight</code> * 0.916<br>
        For all other inputs, return <code>'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.'</code>
  </ul>
   </p>
  </li>
 
 
 <p> &nbsp; </p>
 <li>
   <h3>truthyOrFalsy()</h3>
   <p>
    It can be hard to keep track of what’s truthy or falsy in JavaScript. Write a function, <code>truthyOrFalsy()</code>, that takes in any value and returns <code>true</code> if that value is truthy and <code>false</code> if that value is falsy.
   </p>
  </li>
 
 <p> &nbsp; </p>
 <li>
   <h3>numImaginaryFriends()</h3>
   <p>
     A person’s number of imaginary friends are always 25% (or 1/4) of their total friends. 
     <br><br>
    Write a function, <code>numImaginaryFriends()</code>, that takes in the total number of friends a person has and returns the number of imaginary friends they have.       
     <br><br>
     Since friends can only come in whole numbers, be sure to round your result up to the nearest whole number before returning it.
   </p>
  </li>
 
 <p> &nbsp; </p>
 <li>
   <h3>sillySentence()</h3>
   <div>
    Write a function, <code>sillySentence()</code>, that has 3 string parameters and returns the following silly sentence with the blanks filled in by the arguments passed into the function:
    <p>
     I am so _______adjective_____ because I _____verb_____ coding! Time to write some more awesome _____(noun)_____!
    </p>
       <p>
         Therefore, <code>sillySentence('excited', 'love', 'functions')</code> should return:
         <em>'I am so excited because I love coding! Time to write some more awesome functions!'</em>
       </p>
   </div>
  </li>
 
 <p> &nbsp; </p>
 <li>
   <h3>howOld()</h3>
   <div>
    Write a function, <code>howOld()</code>, that has two number parameters, <code>age</code> and <code>year</code>, and returns how old someone who is currently that age was (or will be) during that year. 
    <br><br>
    Handle three different cases:
    <br><br>
    <p>
            If the year is in the future, you should return a string in the following format:<br>
             <code>'You will be [calculated age] in the year [year passed in]'</code>
    </p>
    <p>
            If the year is before they were born, you should return a string in the following format:<br>
             <code>'The year [year passed in] was [calculated number of years] years before you were born'</code>
    </p>
    <p>
           If the year is in the past but not before the person was born, you should return a string in the following format:<br>
             <code>'You were [calculated age] in the year [year passed in]'</code>
    </p>
  </div>
  </li>
 
  <p> &nbsp; </p>
 <li>
   <h3>whatRelation()</h3>
   <p>
    Given the percentage of DNA shared between two people, you can calculate their likely familial relationship. Hence, write a function, <code>whatRelation()</code>, that has one number parameter, <code>percentSharedDNA</code>, and returns the likely relationship. The number passed in should always be an integer from 0 to 100.

  <p>Here’s how it’s supposed to calculate the relationship:</p>
  <ul>
     100 should return <code>'You are likely identical twins.'</code> <br>
     35-99 should return <code>'You are likely parent and child or full siblings.'</code> <br>
     14-34 should return <code>'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'</code> <br>
     6-13 should return <code>'You are likely 1st cousins.'</code> <br>
     3-5 should return <code>'You are likely 2nd cousins.'</code> <br>
     1-2 should return <code>'You are likely 3rd cousins.'</code> <br>
     0 should return <code>'You are likely not related.'</code>
  </ul>
   </p>
  </li>
 
 <p> &nbsp; </p>
 <li>
   <h3>tipCalculator()</h3>
   <p>
    Create a function, <code>tipCalculator()</code>, that has two parameters, a string representing the quality of the service received and a number representing the total cost.
   <p>
     Return the tip, as a number, based on the following:
     <ul>
       <code>‘bad’</code> should return a 5% tip<br>
       <code>‘ok’</code> should return a 15% tip<br>
       <code>‘good’</code> should return a 20% tip<br>
       <code>‘excellent’</code> should return a 30% tip<br>
       all other inputs should default to 18%
     </ul>
  </p>
   </p>
  </li>
 
 <p> &nbsp; </p>
 <li>
   <h3>toEmoticon()</h3>
   <p>
    Write a function, <code>toEmoticon()</code>, that takes in a string and returns the corresponding emoticon as a string. Use a switch/case, and cover these cases:
     <ul>
      <code>'shrug'</code> should return <code>'|_{"}_|'</code> <br>
      <code>'smiley face'</code> should return <code>':)'</code> <br>
      <code>'frowny face'</code> should return <code>':('</code> <br>
      <code>'winky face'</code> should return <code>';)'</code> <br>
      <code>'heart'</code> should return <code>'<3'</code> <br>
      any other input should return <code>'|_(* ~ *)_|'</code>
    </ul>
   </p>
  </li>
 </ol>
 
 
