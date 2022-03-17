import { Button } from 'react-bootstrap';
import styles from './LatestStories.module.scss';

const LatestStories = () => {
	return (
		<div className={styles.__main}>
			<div className={styles.content}>
				<h2>LATEST STORIES</h2>
				<h1>Lorem Ipsum Dorset</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
					nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
					volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
					ullamcorper suscipit lobortis.
				</p>
				<Button className={styles.button}>Shop Now</Button>
			</div>
			<div className={styles.graphics}></div>
		</div>
	);
};

export { LatestStories };
