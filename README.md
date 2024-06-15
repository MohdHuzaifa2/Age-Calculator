# Age Calculator

A simple and user-friendly web application to calculate your age based on your birth date. The Age Calculator provides your age in years, months, weeks, and days. Additionally, you can easily share your calculated age results with friends and family.

## Features

- **Accurate Age Calculation**: Get your age in years, months, weeks, and days.
- **Share Results**: Share your age calculation results with others via a share button.
- **Default Today's Date**: The date input field is pre-set to today's date for convenience.
- **Responsive Design**: The application is optimized for both desktop and mobile devices.

## Live Demo

Try the Age Calculator live: [Age Calculator](https://mohdhuzaifa2.github.io/Age-Calculator/).

## Usage

1. **Calculate Your Age**:
    - Enter your birth date in the input field.
    - The application will automatically calculate your age and display the results.

2. **Share Your Results**:
    - Click the "Share Your Results" button to share your age calculation with friends and family.

## Installation

To run the Age Calculator locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/mohdhuzaifa2/Age-Calculator.git
    ```
2. Navigate to the project directory:
    ```bash
    cd Age-Calculator
    ```
3. Open the `index.html` file in your preferred web browser.

## Implementation Details

### Setting Today's Date by Default

The date input field is set to today's date by default using JavaScript. This ensures users do not have to manually enter today's date.

```javascript
// Get today's date
const today = new Date();

// Format the date as YYYY-MM-DD
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
const day = String(today.getDate()).padStart(2, '0');

const formattedDate = `${year}-${month}-${day}`;

// Set the value of the date input to today's date
document.getElementById('currentDate').value = formattedDate;

```

## Share Button Implementation
The share button enables users to share their age calculation results. It uses the Web Share API for supported browsers and a fallback alert for unsupported browsers.

``` html
<button onclick="shareResults()">Share Your Results</button>

<script>
function shareResults() {
    // Retrieve the age calculation results
    const years = document.getElementById('years').innerText;
    const months = document.getElementById('months').innerText;
    const weeks = document.getElementById('weeks').innerText;
    const days = document.getElementById('days').innerText;

    // Create the share text
    const shareText = `I just used the Age Calculator and found out my age is:\n
    - Years: ${years}\n
    - Months: ${months}\n
    - Weeks: ${weeks}\n
    - Days: ${days}\n
    Try it yourself at: https://mohdhuzaifa2.github.io/Age-Calculator/`;

    // Use the Web Share API if available
    if (navigator.share) {
        navigator.share({
            title: 'Age Calculator Results',
            text: shareText,
            url: 'https://mohdhuzaifa2.github.io/Age-Calculator/'
        }).then(() => {
            console.log('Thanks for sharing!');
        }).catch(console.error);
    } else {
        // Fallback for browsers that don't support the Web Share API
        alert('Your browser does not support the Web Share API. Please copy and share manually:\n' + shareText);
    }
}
</script>
```

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
