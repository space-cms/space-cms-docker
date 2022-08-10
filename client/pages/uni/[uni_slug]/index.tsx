import { GetServerSidePropsContext } from 'next'

interface IUniversePageProps {
	readonly params: {
		readonly uni_slug: string
	}
}

const UniversePage = ({ params: { uni_slug } }: IUniversePageProps) => {
	return (
		<div>
			uni: <strong>{uni_slug}</strong>
		</div>
	)
}

export const getServerSideProps = async ({ params }: GetServerSidePropsContext) => {
	return { props: { params } }
}

export default UniversePage
