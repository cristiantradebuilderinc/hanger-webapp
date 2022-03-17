import styles from './NewsLetter.module.scss';
import {
	TiSocialFacebook,
	TiSocialTwitter,
	TiSocialYoutube,
} from 'react-icons/ti';
import { FiInstagram } from 'react-icons/fi';
const NewsLetter = () => {
	return (
		<div className={styles.__main}>
			<div className={styles.container}>
				<div className={styles.heading}>
					<h1>STAY PLUGGED IN TO FASHION</h1>
				</div>
				<div className={styles.graphics}>
					<div className={styles.overlay}>
						<h1>Hanger</h1>
					</div>
					<div className={styles.form}>
						<h2>SIGN UP FOR OUR NEWSLETTER</h2>
						<input type="text" placeholder="Email Address" />
						<button>Submit</button>
					</div>
				</div>
				<div className={styles.social}>
					<TiSocialFacebook />
					<TiSocialTwitter />
					<FiInstagram />
					<TiSocialYoutube />
				</div>
			</div>
		</div>
	);
};

export { NewsLetter };
