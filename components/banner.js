import styles from "./banner.module.css";

const Banner = (props) => {
	return (
	<div className ={styles.container} >
		<h1> 
			<span className ={styles.title1} >Coffee</span> 
			<span className ={styles.title2} >Finder</span>
		</h1>
		<p className ={styles.subTitle}>Discover Your Local Coffee Shop</p>
		<div className={styles.buttonWrapper}>
			<button className ={styles.button} onClick={
				props.handleOnClick}>
				{ props.buttonText } 
			</button>
		</div>
	</div>
	);
}
export default Banner;