'use server';

import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

// Define the type for form data
export type FormData = {
  consultationFields: string[];
  name: string;
  phone: string;
  email: string;
  message: string;
};

export async function submitToGoogleSheets(data: FormData) {
  try {
    // Create a JWT client using service account credentials
    const serviceAccountAuth = new JWT({
      email: process.env.NEXT_PUBLIC_GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const doc = new GoogleSpreadsheet(
      process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID as string,
      serviceAccountAuth,
    );

    // Load the document properties and sheets
    await doc.loadInfo();

    // Get the first sheet
    const sheet = doc.sheetsByIndex[0];

    // Format the consultation fields as a comma-separated string
    const consultationFieldsString = data.consultationFields.join(', ');

    // Add a new row with the form data
    await sheet.addRow({
      timestamp: new Date().toISOString(),
      consultationFields: consultationFieldsString,
      name: data.name,
      phone: data.phone,
      email: data.email,
      message: data.message,
    });

    return { success: true };
  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    return { success: false, error: 'Failed to submit to Google Sheets' };
  }
}
