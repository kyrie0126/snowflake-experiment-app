import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";
import AppSidebar from "@/components/navigation/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

import { getSites } from "@/lib/data/navigation/sidebar-data"


const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
})

export const metadata: Metadata = {
  title: "Experiment Application",
  description: "Built for testing Snowflake-hosted nextjs apps.",
};

export default async function RootLayout({ children }: LayoutProps<"/">) {

  const sites = await getSites();

  return (
    <html lang="en" className={`${instrumentSans.variable}`}>
      <body className="min-h-full flex flex-col">
        <SidebarProvider>
          <AppSidebar sites={sites}/>
          <main>
            <SidebarTrigger />
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}