

# Homework #4 PseudoCode 



1. when the user opens the page, the start quiz page is displayed
2. If the user clicks the "View High Scores" button, the browser runs function to check to see if there are any previous scores stored
        a. If there are no previous scores, the browser displays "There are no previous scores" in the box where the high scores would be displayed
        b. if there are previous scores, the browser sorts the previous scores from highest to lowest, then displays the first 10 results
3. If the user clicks the "Start Quiz" button
        -  The "Code Quiz Challenge" box displays nothing
        a. The timer starts to count down from 75 in 1 second intervals
        b. The "questionBox" displays the first question and answers that are contained in buttons
4. If the user clicks on the a button
        a. If correct button is clicked
            - display "Correct!" at bottom
            - add 1 to counter to keep track of score
            - display next question
        b. If incorrect button is clicked
            - display "Incorrect!" at bottom
            - subtract 15 seconds from clock
            - display next question
5. After Last question is answered or time = 0
        a. the "Code Quiz Challenge Box" displays "All Done!"
        b. The final recorded score count is displayed
        c. A submit-text box and submit button is displayed
        d. When the text box is not empty, and the user clicks the submit button, display next page
6. After user enters valid input and submits name
        a. User name and score are stored in browser
        b. "High Scores" are retrieved and displayed
        c. "Take Quiz Again" or "Clear High Scores" buttons are displayed
7. If "Take Quiz Again" button is clicked, the quiz function repeats
8. If "Clear High Scores" button is selected
        a. Data is cleared from browser 
        b. Updated cleared Data list is displayed

