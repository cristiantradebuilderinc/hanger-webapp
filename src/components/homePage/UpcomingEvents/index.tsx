import styles from './UpcomingEvents.module.scss';

const UpcomingEvents = () => {
	return (
		<div className={styles.__main}>
			<div className={styles.container}>
				<div className={styles.heading}>
					<h1>Upcoming Events</h1>
				</div>
				<div className={styles.graphics}>
					{/* <div className={styles.overlay}>
						<h1>Collaborate</h1>
					</div> */}
				</div>
				<div>
					<p>
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
						nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
						volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
						ullamcorper suscipit lobortis.
					</p>
				</div>
				<div>
					<p className={styles.callToAction}>See All Events</p>
				</div>
			</div>
		</div>
	);
};

export { UpcomingEvents };
