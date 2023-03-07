import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <main data-theme="luxury">
      <Component {...pageProps} />
    </main> 
  )
}
