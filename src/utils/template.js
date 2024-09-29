const emailSignupTemplate = `
<!DOCTYPE html>
<html>
<head>
    <title>Welcome Email</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #181D31;
        }
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            border: 2px solid #F2B00A;
            border-radius: 5px;
            background-color: #ffffff;
        }
        .email-header, .email-footer {
            text-align: center;
            padding: 10px;
            background-color: #FFF9C9;
            border-bottom: 2px solid #A64B2A;
        }
        .email-header {
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
        }
        .email-footer {
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;
        }
        .email-content {
            padding: 20px;
        }
        .button {
            display: inline-block;
            padding: 10px 20px;
            margin-top: 20px;
            font-size: 16px;
            color: #ffffff;
            background-color: #7367F0;
            text-decoration: none;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="email-header">
            <h1>Welcome to Gramophone!</h1>
        </div>
        <div class="email-content">
            <p>Hello {{name}},</p>
            <p>Welcome to {{my_company}}! We are so happy to have you here in our community.</p>
            <p>If you want to start discover music around the world, please verify your email address by clicking the button below:</p>
            <p>In case you did not create this account, you can ignore this email or contact our support team.</p>
            <p>Thank you for choosing us. We will be here for you at anytime.</p>
            <p>Warm regards,<br>The {{my_company}} Team</p>
        </div>
        <div class="email-footer">
            <p>&copy; 2024 {{my_company}}. All rights reserved.</p>
            <p>{{company_address}}</p>
        </div>
    </div>
</body>
</html>
`;

module.exports = { emailSignupTemplate };
