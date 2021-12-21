// create an email pattern

let emailValid = 'rohanmostofa11@gmail.com';

// Regular Expression pattern one
let pattern = /^[a-z0-9._-]{1,}@[a-z0-9]{1,}\.[a-z]{2,10}$/;

console.log(pattern.test(emailValid));



// create a username pattern

let username = 'rohan_dev';

// Regular Expression pattern two
let pattern2 = /^[a-z0-9\-_]{5,12}$/;

console.log(pattern2.test(username));



// create a bangladeshi phone number pattern

let bdPhn = '+8801548789877';

// Regular Expression pattern three
let pattern3 = /^(01|8801|\+8801)[0-9]{9}$/;

console.log(pattern3.test(bdPhn));



// create a password pattern

let pass = '!@(^%)Ff.8f=f\'"/';

// Regular Expression pattern four
let pattern4 = /^[a-zA-Z0-9~!@#$%^&*)(-_\=+<>,./?:;"']{6,16}$/;

console.log(pattern4.test(pass));



// create a zipcode pattern

let zipcode = 85746;

// Regular Expression pattern five

// US zip code system
let pattern5 = /^[0-9]{5}/;

console.log(pattern5.test(zipcode));




