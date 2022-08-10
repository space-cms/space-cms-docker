import Head from 'next/head'
import { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider, EmotionCache } from '@emotion/react'
import createEmotionCache from '../utils/createEmotionCache'
import theme from '../styles/theme'

import '@fontsource/cousine'
import UniverseProvider from '../contexts/UniverseContext'

interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache
}

const clientSideEmotionCache = createEmotionCache()

const MyApp = (props: MyAppProps) => {
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<meta name='viewport' content='initial-scale=1, width=device-width' />
			</Head>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<UniverseProvider>
					<Component {...pageProps} />
				</UniverseProvider>
			</ThemeProvider>
		</CacheProvider>
	)
}

export default MyApp
