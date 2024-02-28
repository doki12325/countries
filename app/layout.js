import Navbar from "@components/navbar";
import "@styles/globals.css";
import Store from "@utils/store";

export const metadata = {
  title: "Countries",
  description: "Find information for any country!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Store>
          <Navbar />
          {children}
        </Store>
      </body>
    </html>
  );
}
