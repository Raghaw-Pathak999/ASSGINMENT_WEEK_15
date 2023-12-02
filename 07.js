
const userMap = new Map();

function addUser(name, age, email) {
  userMap.set(email, { name, age, email });
}

function updateUser(email, updatedInfo) {
  if (userMap.has(email)) {
    const user = userMap.get(email);
    Object.assign(user, updatedInfo);
  } else {
    console.log(`User with email ${email} not found.`);
  }
}

function deleteUser(email) {
  if (userMap.has(email)) {
    userMap.delete(email);
    console.log(`User with email ${email} deleted.`);
  } else {
    console.log(`User with email ${email} not found.`);
  }
}

addUser('John Doe', 25, 'john@example.com');
addUser('Jane Smith', 30, 'jane@example.com');

console.log('Initial User Map:', userMap);

updateUser('john@example.com', { age: 26 }); // Update John's age
console.log('User Map after Update:', userMap);

deleteUser('jane@example.com'); // Delete Jane from the map
console.log('User Map after Deletion:', userMap);
