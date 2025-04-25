
# Angular SurveyJS PayPal Integration

This project demonstrates the integration of SurveyJS with PayPal payment processing in an Angular application. It allows users to complete a survey and then make a payment through PayPal.

## Features

- **SurveyJS Integration**: Utilizes the SurveyJS library to create and display customizable surveys
- **PayPal Payment Processing**: Seamlessly integrates PayPal's payment system after survey completion
- **Configurable Survey**: Survey questions and structure are loaded from a JSON file, making it easy to modify

## Technologies Used

- **Angular 19**: Modern web framework for building the application
- **SurveyJS**: Survey library for creating and rendering surveys
- **PayPal JavaScript SDK**: For handling payment processing

## How It Works

1. The application loads a survey from a JSON configuration file
2. Users complete the survey by answering all required questions
3. Upon survey completion, a PayPal payment button appears
4. Users can then complete their payment through PayPal
5. After successful payment, the survey data is logged (and could be saved to a database in a production environment)

## Setup and Configuration

### Prerequisites

- Node.js and npm installed
- Angular CLI installed (`npm install -g @angular/cli`)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/angular-surveyjs-paypal.git
   cd angular-surveyjs-paypal
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Configure PayPal credentials:
   - Update the PayPal client ID in `src/environments/environments.ts` for development
   - Update the PayPal client ID in `src/environments/environments.prod.ts` for production

4. Customize the survey:
   - Modify the survey structure in `public/assets/survey.json`

### Running the Application

- Development server:
  ```
  npm start
  ```
  Navigate to `http://localhost:4200/`

- Build for production:
  ```
  npm run build
  ```

## Customization Options

### Survey Customization

The survey structure is defined in `public/assets/survey.json`. You can modify this file to:
- Add more pages and questions
- Change question types
- Add validation rules
- Customize completion messages

### Payment Configuration

Payment settings can be adjusted in the `initPayPalButton` method in `src/app/components/survey.component.ts`:
- Change payment amount
- Modify currency
- Customize button appearance
- Add additional payment details

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
