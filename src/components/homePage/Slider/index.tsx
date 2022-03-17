import { Button } from 'react-bootstrap';
import styles from './Slider.module.scss';

const Slider = () => {
	return (
		<div className={styles.__main}>
			<div className={styles.message}>
				<h6>FASHION PROFESSIONALS</h6>
				<h1>CHANGE YOUR GAME</h1>
			</div>
			<div className={styles.form}>
				<input type="email" placeholder="Email address" />
				<Button className={styles.button}>Sign up with email</Button>
				<div className={styles.eula}>
					<input type="checkbox" />
					<p>I agree to Hanger’s Terms of Use & Privacy Policy</p>
				</div>
			</div>
		</div>
	);
};

export { Slider };
