import {useRouter} from 'next/router';
import Link from 'next/link';

import coffeeStoresData from '../../data/coffee-stores.json';

export function getStaticProps(staticProps) {
	const params = staticProps.params;
	return {
		props: {
			coffeeStore: coffeeStoresData.find(coffeeStore => {
				return coffeeStore.id.toString() === params.id; //dynamic ID
			})
		}
	}
}

export function getStaticPaths() {
	return {
		paths: [
		{ params: { id: '0' } },
		{ params: { id: '1' } }
		],
		fallback: true,
	}
}

const CoffeeStore = (props) => {
	const router = useRouter();

	{if(router.isFallback) {
		return <div>Loading Ho rae hai... </div>
	}} 
	console.log("props: dekho: ", props);
	return (
		<div>
		Coffeee Store: {router.query.id}
		<Link href="/">
		<a>Back to Home</a>
		</Link>
		<p> {props.coffeeStore.address} </p>
		<p> {props.coffeeStore.name} </p>
		</div>
		);
}
export default CoffeeStore;