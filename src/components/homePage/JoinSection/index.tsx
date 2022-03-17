import styles from './JoinSection.module.scss';

const JoinSection = () => {
	return (
		<div className={styles.__main}>
			<div className={styles.container}>
				<div className={styles.heading}>
					<h1>AT HANGER YOU CAN</h1>
				</div>
				<div className={styles.graphics}>
					<div className={styles.overlay}>
						<h1>Collaborate</h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export { JoinSection };
