# fundamentaljschallenges
INFORMATION
<ul>
 <li>The challenges below are fundamental to JavaScript mastery for people whose knowledge of the language is below intermediate. See my intermediatejschallenges repository for intermediate challenges.</li>
 <li>See the <code>challenges.js</code> file in this repository for my solutions to the challenges. The challenges serial numbers in the file correspond with their numbers below.</li>
 </ul>
 
 <p>CHALLENGES</p>
 <ol>
   <p> &nbsp; </p>
    <li>
     <h3></h3>
     <p></p>
    </li>
 
  <p> &nbsp; </p>
    <li>
     <h3></h3>
     <p></p>
    </li>
 
  <p> &nbsp; </p>
    <li>
     <h3></h3>
     <p></p>
    </li>
 
 <p> &nbsp; </p>
   <li>
    <h3></h3>
    <p></p>
   </li>
 
 <p> &nbsp; </p>
  <li>
   <h3></h3>
   <p></p>
  </li>
 
 
 <p> &nbsp; </p>
  <li>
   <h3></h3>
   <p></p>
  </li>
 
 
 <p> &nbsp; </p>
 <li>
   <h3></h3>
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
        Handle the following cases:
   <br><br>
        'Mercury' weight = earthWeight * 0.378<br>
        'Venus' weight = earthWeight * 0.907<br>
        'Mars' weight = earthWeight * 0.377<br>
        'Jupiter' weight = earthWeight * 2.36<br>
        'Saturn' weight = earthWeight * 0.916<br>
        For all other inputs, return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.'
  </ul>
   </p>
  </li>
 
 
 <p> &nbsp; </p>
 <li>
   <h3>truthyOrFalsy()</h3>
   <p>
    It can be hard to keep track of what’s truthy or falsy in JavaScript. Write a function, <code>truthyOrFalsy()</code>, that takes in any value and returns true if that value is truthy and false if that value is falsy.
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
   <p>
    Write a function, <code>sillySentence()</code>, that has 3 string parameters and returns the following silly sentence with the blanks filled in by the arguments passed into the function:
    <p>
     I am so _______adjective_____ because I _____verb_____ coding! Time to write some more awesome _____(noun)_____!
 
       <p>
         Therefore, <code>sillySentence('excited', 'love', 'functions')</code> should return:
         <em>'I am so excited because I love coding! Time to write some more awesome functions!'</em>
       </p>
    </p>
   </p>
  </li>
 
 <p> &nbsp; </p>
 <li>
   <h3>howOld()</h3>
   <p>
    Write a function, <code>howOld()</code>, that has two number parameters, <code>age</code> and <code>year</code>, and returns how old someone who is currently that age was (or will be) during that year. Handle three different cases:
   <ul>
     <li>If the year is in the future, you should return a string in the following format:<br><br>
      <code>'You will be [calculated age] in the year [year passed in]'</code>
     </li>
      
     <li>If the year is before they were born, you should return a string in the following format:<br><br>
      <code>'The year [year passed in] was [calculated number of years] years before you were born'</code>
     </li>

    <li>If the year is in the past but not before the person was born, you should return a string in the following format:<br><br>
      <code>'You were [calculated age] in the year [year passed in]'</code>
    </li>
  </ul>
  </p>
  </li>
 
  <p> &nbsp; </p>
 <li>
   <h3>whatRelation()</h3>
   <p>
    Given the percentage of DNA shared between two people, you can calculate their likely familial relationship. Hence, write a function, <code>whatRelation()</code>, that has one number parameter, <code>percentSharedDNA</code>, and returns the likely relationship. The number passed in should always be an integer from 0 to 100.

  <p>Here’s how it’s supposed to calculate the relationship:</p>
  <ul>
     100 should return 'You are likely identical twins.'<br>
     35-99 should return 'You are likely parent and child or full siblings.'<br>
     14-34 should return 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'<br>
     6-13 should return 'You are likely 1st cousins.'<br>
     3-5 should return 'You are likely 2nd cousins.'<br>
     1-2 should return 'You are likely 3rd cousins.'<br>
     0 should return 'You are likely not related.'
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
 
 
