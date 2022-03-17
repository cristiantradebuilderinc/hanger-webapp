import { Button } from 'react-bootstrap';
import styles from './ShopByCategory.module.scss';

const ShopByCategory = () => {
	return (
		<div className={styles.__main}>
			<div className={styles.content}>
				<h2>SHOP BY CATEGORY</h2>
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

export { ShopByCategory };
