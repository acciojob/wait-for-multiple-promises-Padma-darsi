//your JS code here. If required.
const output = document.getElementById("output");

    // Create a random delay promise
    function createRandomPromise(name) {
      const delay = Math.random() * 2 + 1; // Between 1 and 3 seconds
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ name, time: delay });
        }, delay * 1000);
      });
    }

    const startTime = performance.now();

    // Create 3 promises
    const promises = [
      createRandomPromise("Promise 1"),
      createRandomPromise("Promise 2"),
      createRandomPromise("Promise 3")
    ];

    // Wait for all promises
    Promise.all(promises).then((results) => {
      const endTime = performance.now();
      const totalTime = ((endTime - startTime) / 1000).toFixed(3);

      // Remove loading row
      const loadingRow = document.getElementById("loading");
      if (loadingRow) {
        loadingRow.remove();
      }

      // Add each promise result
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
  