import { Stack } from 'react-bootstrap';
import styles from './MinNavBar.module.scss';

const MinNavBar = () => {
	return (
		<Stack className={styles.__main}>
			<a href="">Support</a>
			<span>|</span>
			<a href="">Privacy Policy</a>
			<span>|</span>
			<a href="">My Store</a>
		</Stack>
	);
};

export { MinNavBar };
