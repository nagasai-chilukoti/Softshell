// pages/_app.js

import '../styles/sectionStyles.css'; // ✅ add your custom styles here

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
