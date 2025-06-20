//your JS code here. If required.
const output = document.getElementById("output");

    // Step 1: Function to create a promise that resolves after 1–3 seconds
    function createRandomPromise(name) {
      const delay = Math.random() * 2 + 1; // Random delay between 1 and 3 seconds
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ name, time: delay });
        }, delay * 1000);
      });
    }

    // Step 2: Track start time
    const startTime = performance.now();

    // Step 3: Create 3 promises
    const promises = [
      createRandomPromise("Promise 1"),
      createRandomPromise("Promise 2"),
      createRandomPromise("Promise 3")
    ];

    // Step 4: Wait for all to resolve
    Promise.all(promises).then((results) => {
      const endTime = performance.now();
      const totalTime = ((endTime - startTime) / 1000).toFixed(3);

      // Step 5: Clear "Loading..." row
      output.innerHTML = "";

      // Step 6: Add a row for each resolved promise
      results.forEach((result) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${result.name}</td>
          <td>${result.time.toFixed(3)}</td>
        `;
        output.appendChild(row);
      });

      // Step 7: Add Total row
      const totalRow = document.createElement("tr");
      totalRow.innerHTML = `
        <td><strong>Total</strong></td>
        <td><strong>${totalTime}</strong></td>
      `;
      output.appendChild(totalRow);
    });