import '@/scss/index.scss';
import {Roboto} from 'next/font/google';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;


const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300','400', '700'],
})

export default function App({ Component, pageProps }) {
  return (
    <main className={roboto.className}>
       <Component {...pageProps} />
    </main>
    )
}
