import "./globals.css";
import StoryblokProvider from "./components/StoryblokProvider";

export const metadata = {
  title: "Storyblok",
  description:
    "A small POC to find out if Next.js and Storyblok can be used to host multiple websites from one Space and codebase",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased h-screen bg-gradient-to-b from-gray-300/95 to-white text-stone-900/75">
        <StoryblokProvider>{children}</StoryblokProvider>
      </body>
    </html>
  );
}
