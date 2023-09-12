/**
 * Part 1: Creating Variables and Constants
 * In this file you should define the following variables with the exact names
 *
 * 1. fullName      -> assign it a value of your full name
 * 2. yearOfBirth   -> assign it a value of your year of birth
 * 3. hobby         -> assign it a value of your favorite hobby
 * 4. funFact       -> assign it a value of some fun fact about yourself
 * 5. image         -> assign it a value of a url of your image or ant image that represents you online
 */

// Part 1 answer 👇🏻 ...
let fullName = "Hasan Ali Albuloushi";
let yearOfBirth = 1993;
let hobby = "Playing Video Games";
let funFact = "I Love playing with Cats";
const image = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nytimes.com%2F2021%2F09%2F07%2Fscience%2Fcat-stripes-genetics.html&psig=AOvVaw3SHSQwbapEenHgX5m_EJEp&ust=1694532605894000&source=images&cd=vfe&opi=89978449&ved=0CA4QjRxqFwoTCOjdj4TwooEDFQAAAAAdAAAAABAg"






/**
 * Part 2: String Interpolation
 * Create the following new variables that interpolate
 * the variables defined above into strings.
 *
 * 1. fullNameString      -> assign it to: My name is {fullName}
 * 2. yearOfBirthString   -> assign it to: I am {YOUR_AGE}, and make sure you calculate your age from your year of birth
 * 3. hobbyString         -> assign it to: My hobby is {YOUR_HOBBY}
 * 
 * Uncomment the following lines and start interpolating.
 * You can uncomment a line by removing the // at the start
 */

 const fullNameString = `My name is ${fullName}`;
 const yearOfBirthString = `I am ${2023 - yearOfBirth}`;
 const hobbyString = `My hobby is ${hobby}`;




/**
 * Part 3: Re-assignment
 * Increment your hacker score
 * */

let stars = 0;

function incrementBy1() {
  // Increment stars by 1 👇🏻
  stars ++;
}
function decrementBy1() {
  // decrement stars by 1 👇🏻
  stars --;
}

function incrementBy2() {
  // Increment stars by 2 👇🏻
  stars = stars + 2;
}
function decrementBy2() {
  // decrement stars by 2 👇🏻
  stars = stars - 2;
}
