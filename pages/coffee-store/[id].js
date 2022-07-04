import {useRouter} from 'next/router';
import Link from 'next/link';

const CoffeeStore = () => {
	const router = useRouter();
	return (
				<div>
	 				Coffeee Store: {router.query.id}
	 				<Link href="/">
	 					<a>Back to Home</a>
	 				</Link>
	 			</div>
	 		);
}
export default CoffeeStore;