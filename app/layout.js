"use client"

import './globals.css'
import { FeaturesProvider } from '@components/Context'
import { useEffect } from 'react'


export const metadata = {
  title: 'My html generator tool',
  description: 'It is an Amazing tool that genrates html based on your entered data',
}

export default function RootLayout({ children }) {

  // useEffect(() => {
  //   // Function to display the confirmation message
  //   const showConfirmationMessage = (event) => {
  //     // Customize the message according to your requirements
  //     const confirmationMessage = 'Are you sure you want to leave this page?';

  //     // Display the confirmation message to the user
  //     event.preventDefault();
  //     event.returnValue = confirmationMessage; // For older browsers
  //     return confirmationMessage; // For modern browsers
  //   };

  //   // Attach the event listener to the window object
  //   window.onbeforeunload = showConfirmationMessage;

  //   // Cleanup the event listener when the component unmounts
  //   return () => {
  //     window.onbeforeunload = null;
  //   };
  // }, []);
  
  return (
    <html lang="en">
      <body>
        <FeaturesProvider>
          {children}
        </FeaturesProvider>
      </body>
    </html>
  )
}
