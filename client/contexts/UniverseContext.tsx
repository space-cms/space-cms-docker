import { createContext, useCallback, useEffect, useMemo, useState } from 'react'

export interface IUniverseState {}
export interface IUniverseProps {
	readonly children: JSX.Element | JSX.Element[]
}

export const UniverseContext = createContext<IUniverseState>({})

const UniverseProvider = ({ children }: IUniverseProps) => {
	const [ universe ] = useState<IUniverseState>({})

	const alertOnChange = useCallback((message: string) => console.log(message), [])

	useMemo(
		() => {
			alertOnChange('mount')
		},
		[ alertOnChange ]
	)

	return <UniverseContext.Provider value={universe}>{children}</UniverseContext.Provider>
}

export default UniverseProvider
