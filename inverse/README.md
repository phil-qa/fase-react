Data Flow:

The state (count) is defined in the parent component (App.js).
The state and functions to update it are passed down to child components as props.
Child components trigger state changes in the parent component.

Reverse Data Flow:

The term "reverse data flow" refers to the process where child components initiate changes in the parent component's state.
In this case, IncrementButton and ResetButton components, which are children of App, can trigger state changes in App.

Specific Examples:
a) IncrementButton:

Receives the increment prop, which is the handleIncrement function from App.
When clicked, it calls this function, which updates the count state in App.

b) ResetButton:

Receives the reset prop, which is the handleReset function from App.
When clicked, it calls this function, which resets the count state in App.

Flow of Events:

User interacts with a child component (e.g., clicks IncrementButton).
Child component calls the function passed as a prop.
This function updates the state in the parent component (App).
The updated state is then passed back down to CounterDisplay, which re-renders with the new count.

This pattern is called "reverse data flow" because the data (state) is defined in the parent, but the actions that change this data are initiated in the child components. It allows for a clear separation of concerns, where the parent manages the state, and children are responsible for user interactions that may affect that state.
This approach is a fundamental concept in React, promoting a unidirectional data flow while still allowing child components to communicate changes back to their parents.
