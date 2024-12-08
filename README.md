# Palindrome Checker

## Project Description
This project is a **Palindrome Checker**, created as part of **Day 3 of the 30 Days of JavaScript Challenge**. It takes a user input and checks if it is a palindrome—a word, phrase, or sequence that reads the same backward as forward (ignoring spaces, punctuation, and case).

---

## Features
- Input field for the user to enter text.
- Button to check if the text is a palindrome.
- Styled user interface for a clean and intuitive experience.
- Displays a success message if the text is a palindrome or an error message if it is not.

---

## Technologies Used
- **HTML**: For structuring the app.
- **CSS**: For styling the user interface.
- **JavaScript**: For the palindrome logic and dynamic DOM updates.

---

## How It Works
1. **Input Sanitization**:
   - The input text is converted to lowercase.
   - All non-alphanumeric characters (spaces, punctuation, etc.) are removed using the regex `/[\W_]/g`.

2. **Reversing Logic**:
   - The sanitized string is split into an array of characters, reversed, and then joined back together.

3. **Comparison**:
   - If the sanitized input matches its reversed version, it is identified as a palindrome.

4. **Feedback**:
   - A message is displayed based on the result:
     - **Success**: "Yes, it's a palindrome!"
     - **Error**: "No, it's not a palindrome."

---

## Example Input and Output
| Input                          | Output                           |
|--------------------------------|----------------------------------|
| "madam"                        | Yes, it's a palindrome!         |
| "hello"                        | No, it's not a palindrome.      |
| "A man, a plan, a canal: Panama" | Yes, it's a palindrome!         |

---

## How to Use
1. Clone the repository:
   ```bash
   git clone https://github.com/OmegaGbenga/Palindrome-Checker-Day3of30DaysJS.git
