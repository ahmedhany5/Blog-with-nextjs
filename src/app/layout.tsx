import { RootLayoutHeader } from "@/components/root/RootLayoutHeader";
import "./globals.css"

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (<>

        <html lang="en">

            <body>
                <RootLayoutHeader />
                {children}

            </body>
        </html>
    </>
    );
}
