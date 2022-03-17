import { Button } from 'react-bootstrap';
import styles from './GetStarted.module.scss';

const GetStarted = () => {
	return (
		<div className={styles.__main}>
			<div className={styles.overlay}>
				<div className={styles.message}>
					<h1>GROW YOUR BUSINESS WITH HANGER</h1>
					<h2>Get Started</h2>
				</div>
			</div>
		</div>
	);
};

export { GetStarted };
