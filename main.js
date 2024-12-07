// Iterate through all the rows in the table
document.querySelectorAll('tbody tr').forEach(row => {
    // Find all radio inputs within the current row
    const radios = row.querySelectorAll('input[type="radio"]');
    if (radios.length > 0) {
        // Select the first radio button (value="1300565")
        radios[0].checked = true;
        // Dispatch events to simulate user interaction
        radios[0].dispatchEvent(new Event('change', { bubbles: true }));
        radios[0].dispatchEvent(new Event('click', { bubbles: true }));
        console.log(`Selected radio: Name=${radios[0].name}, Value=${radios[0].value}`);
    }
});

console.log("All questions answered with the first option.");
