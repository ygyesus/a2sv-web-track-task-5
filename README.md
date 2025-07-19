
# Contact Form with React Hook Form

A simple contact form built using React and the `useForm` hook from react-hook-form for efficient form state management and validation.


## Features

- Form validation for required fields
- Email format validation
- Responsive design that works on mobile and desktop
- Clean error messaging
- DevTools integration for form debugging
- Light/dark mode support

## Technologies Used

- React
- TypeScript
- react-hook-form
- Vite (assuming from the project structure)
- CSS3

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ygyesus/a2sv-web-track-task-5.git
   ```
2. Navigate to the project directory:
   ```bash
   cd a2sv-web-track-task-5
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```

## Usage

1. Fill in the form fields:
   - Name (required)
   - Email (required, must be valid format)
   - Message (required)
2. Submit the form
3. View the submitted data in the console

## Form Validation Rules

| Field    | Validation Rules                          |
|----------|------------------------------------------|
| Name     | Required                                 |
| Email    | Required, must be valid email format    |
| Message  | Required                                 |

## Project Structure


```markdown
📦 src
├── 📂 components
│   └── 📄 ContactForm.tsx    
├── 📄 main.tsx   
├── 📄 index.css   
├── 📄 App.tsx                 
└── 📄 App.css                 

```

## Customization

To modify the form:
1. Edit the validation rules in `ContactForm.tsx`
2. Adjust styles in `App.css`
3. Change the form fields in the JSX

## Responsive Design

The form adapts to different screen sizes:
- Desktop: Input fields are 800px wide
- Mobile (below 900px): Input fields shrink to 300px wide

