import { ApplicationData } from "@/types";

export const welcomeEmailTemplate = (name: string): string => `
  <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f4f4f9;
          color: #333;
          margin: 0;
          padding: 0;
          line-height: 1.6;
        }
        .container {
          max-width: 600px;
          margin: 20px auto;
          background: #ffffff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .company-name {
          font-family: 'Arial', sans-serif;
          font-size: 36px;
          font-weight: bold;
          color: #2c3e50; /* Dark color for company name */
          margin-bottom: 10px;  
        }
        .header {
          text-align: center;
          margin-bottom: 20px;
        }
        .header img {
          max-width: 150px;
        }
        .header h1 {
          color: #004085;
          margin: 10px 0;
          font-size: 24px;
        }
        .header h2 {
          color: #6c757d;
          margin: 0;
          font-size: 18px;
        }
        .content {
          margin-bottom: 20px;
        }
        .content p {
          margin: 10px 0;
        }
        .button {
          display: inline-block;
          background-color: #004085;
          color: #ffffff;
          padding: 10px 20px;
          text-decoration: none;
          border-radius: 5px;
          font-weight: bold;
          margin: 20px 0;
        }
        .footer {
          text-align: center;
          color: #777;
          font-size: 0.9em;
          margin-top: 20px;
        }
        .footer a {
          color: #004085;
          text-decoration: none;
        }
        .footer a:hover {
          text-decoration: underline;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1 class="company-name">Amigo Immigration Services</h1>
          <h2>Welcome to Global Opportunities!</h2>
        </div>
        <div class="content">
          <p>Dear ${name},</p>
          <p>We’re thrilled to welcome you to <b>${process.env.NEXT_PUBLIC_COMPANY_NAME}</b>, where dreams of international success become reality. Thank you for trusting us to guide you through your immigration and global career journey.</p>
          <p>At Amigo Immigration, we are committed to helping you achieve your aspirations, whether they involve studying abroad, building a global career, or experiencing new cultures.</p>
          <p>Our team has received your application and will connect with you shortly to take the next steps. Until then, feel free to explore the wealth of resources on our website to learn more about the opportunities awaiting you.</p>
          <p>
            <a href="https://www.amigoimmigrant.com" class="button">Explore Opportunities</a>
          </p>
        </div>
        <div class="footer">
          <p><b>The Amigo Immigration Team</b></p>
          <p>📧 <a href="mailto:info@amigoimmigrant.com">info@amigoimmigrant.com</a> | 🌐 <a href="https://www.amigoimmigrant.com">www.amigoimmigrant.com</a></p>
          <p>Stay connected with us:</p>
          <p>
            <a href="https://www.facebook.com/AmigoImmigration">Facebook</a> | 
            <a href="https://twitter.com/AmigoImmigrant">Twitter</a> | 
            <a href="https://www.linkedin.com/company/amigo-immigration">LinkedIn</a> | 
            <a href="https://www.instagram.com/amigoimmigration">Instagram</a>
          </p>
        </div>
      </div>
    </body>
    </html>
`;

export const userDataEmailTemplate = (data: ApplicationData): string => {
  return `
   <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f4f4f9;
          color: #333;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 600px;
          margin: 20px auto;
          background: #ffffff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .header {
          text-align: center;
          margin-bottom: 20px;
        }
        .header h2 {
          color: #004085;
        }
        .content {
          margin-bottom: 20px;
        }
        .content p {
          margin: 10px 0;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin: 20px 0;
        }
        table, th, td {
          border: 1px solid #ddd;
        }
        th, td {
          padding: 8px;
          text-align: left;
        }
        th {
          background-color: #f4f4f9;
        }
        a {
          color: #004085;
          text-decoration: none;
        }
        .footer {
          text-align: center;
          color: #777;
          font-size: 0.9em;
          margin-top: 20px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>${process.env.NEXT_PUBLIC_COMPANY_NAME!} - New Application Submission</h2>
        </div>
        <div class="content">
          <p>A new application has been submitted with the following details:</p>
          <table>
            <tr>
              <th>Field</th>
              <th>Details</th>
            </tr>
            <tr>
              <td><b>Name</b></td>
              <td>${data.name}</td>
            </tr>
            <tr>
              <td><b>Email</b></td>
              <td>${data.email}</td>
            </tr>
            <tr>
              <td><b>Mobile</b></td>
              <td>${data.mobile}</td>
            </tr>
            <tr>
              <td><b>Date of Birth</b></td>
              <td>${data.dob}</td>
            </tr>
            <tr>
              <td><b>Degree</b></td>
              <td>${data.degree}</td>
            </tr>
            <tr>
              <td><b>Department</b></td>
              <td>${data.department}</td>
            </tr>
            <tr>
              <td><b>CV URL</b></td>
              <td><a href="${data.cv}" target="_blank">View CV</a></td>
            </tr>
          </table>
        </div>
        <div class="footer">
          <p>Sent by <b>${process.env.NEXT_PUBLIC_COMPANY_NAME!}</b></p>
          <p>Contact us: <a href="mailto:info@${process.env.NEXT_PUBLIC_COMPANY_NAME!.toLowerCase()}.com">info@${process.env.NEXT_PUBLIC_COMPANY_NAME!.toLowerCase()}.com</a></p>
        </div>
      </div>
    </body>
    </html>
`;
};
