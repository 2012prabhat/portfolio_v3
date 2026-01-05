import ReduxProvider from "@/lib/redux/provider";
import ThemeProvider from "@/providers/ThemeProvider";
import "@/app/globals.css";

export default function App({ Component, pageProps }) {
    return (
        <ReduxProvider>
            <ThemeProvider>
                <Component {...pageProps} />
            </ThemeProvider>
        </ReduxProvider>
    );
}
