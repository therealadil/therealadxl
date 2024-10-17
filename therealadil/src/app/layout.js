export default function RootLayout({ children }) {
    return (
        <html lang="en"> {/* Add language attribute */}
            <body>
                <main>{children}</main>
            </body>
        </html>
    );
}
