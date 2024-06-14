import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({weight:['400', '500', '700'], subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Next Hero",
    template: "%s | Next Hero"
  },
  description: "Powered by Next Hero",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div className="container mx-auto">
          <NavBar></NavBar>
          {children}
        </div>
      </body>
    </html>
  );
}
