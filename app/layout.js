import { Inter, Montserrat, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
export const montserrat = Montserrat({ subsets: ["latin"] });
export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={[
          inter.className,
          montserrat.className,
          poppins.className,
        ].join(" ")}
      >
        {children}
      </body>
    </html>
  );
}
