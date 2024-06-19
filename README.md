ID: 11339525
DisplayName Component
Description:
This component displays the user's name and email. If the user is not logged in, it shows a login prompt with a button to navigate to the login page.

Key Features:

Shows user's name and email if logged in.
Displays a "Login to display name" message and a "Log In" button if the user is not logged in.
Uses the useRouter hook from expo-router for navigation.
FeaturedJobs Component
Description:
This component displays a horizontal list of featured jobs with specific job details like the company name, job title, salary, and location. Each job card has a unique background color and an icon representing the job type.

Key Features:

Renders a list of job cards horizontally.
Each job card has a unique background color and icon.
Job details include the company name, job title, salary, and location.
Uses the FontAwesome5 icons library for job-specific icons.
Footer Component
Description:
This component provides a footer section with alternative login options (Apple, Google, Facebook) and a registration link.

Key Features:

Displays alternative login options using icons.
Includes a horizontal line separator and text indicating "Or continue with".
Provides a registration link.
loginForm Component
Description:
This component renders a login form with input fields for the user's name and email. Upon submission, it navigates to the home page with the user's details if both fields are filled.

Key Features:

Input fields for user name and email.
A "Log in" button that validates the input and navigates to the home page with the provided details.
Uses the useRouter hook from expo-router for navigation.
PopularJobs Component
Description:
This component displays a vertical list of popular jobs with details such as job title, company name, salary, and location. Each job card includes an icon representing the job type.

Key Features:

Renders a vertical list of job cards.
Each job card displays the job title, company name, salary, and location.
Uses the FontAwesome5 icons library for job-specific icons.
SearchBar Component
Description:
This component provides a search bar for users to search for jobs or positions and includes a filter button for additional search criteria.

Key Features:

Search input field with a placeholder text.
Search icon within the input field.
Filter button for advanced search options.
Uses the Ionicons icons library.
Welcome Component
Description:
This component displays a welcome message for users when they access the app, encouraging them to log in and apply for jobs.

Key Features:

Displays the app name "Jobizz".
Shows a welcome message with an emoji.
Encourages users to log in and apply for jobs.