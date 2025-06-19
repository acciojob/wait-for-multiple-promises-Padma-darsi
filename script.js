//your JS code here. If required.
const output = document.getElementById("output");

// Step 1: Add loading row
output.innerHTML = `
  <tr>
    <td colspan="2">Loading...</td>
  </tr>
`;

// Step 2: Function to create a promise
function createRandomPromise(name) {
  const delay = Math.random() * 2 + 1; // Random between 1 and 3 seconds
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name, time: delay });
    }, delay * 1000); // Convert to milliseconds
  });
}

// Step 3: Start time tracking
const startTime = performance.now();

// Step 4: Create 3 promises
const promise1 = createRandomPromise("Promise 1");
const promise2 = createRandomPromise("Promise 2");
const promise3 = createRandomPromise("Promise 3");

// Step 5: Wait for all promises to resolve
Promise.all([promise1, promise2, promise3]).then((results) => {
  const endTime = performance.now();
  const totalTime = ((endTime - startTime) / 1000).toFixed(3);

  // Clear loading row
  output.innerHTML = "";

  // Add rows for each promise
  results.forEach((result) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${result.name}</td>
      <td>${result.time.toFixed(3)}</td>
    `;
    output.appendChild(row);
  });

  // Add total row
  const totalRow = document.createElement("tr");
  totalRow.innerHTML = `
    <td><strong>Total</strong></td>
    <td><strong>${totalTime}</strong></td>
  `;
  output.appendChild(totalRow);
});
