
import Head from "next/head";
import MapBox from "./Components/MapBox";
import styles from "./Home.module.css";
import { Panos } from "./Components/Panos";
import Switcher from "./Components/Switcher";
import { useAppStore } from "./stores";
import { MapProvider } from "react-map-gl";

export default function Home() {
	const mainPano = useAppStore((state) => state.mainPano);
	return (
		<MapProvider>
			<div className={styles.container}>
				<Head>
					<title>Create Next App</title>
					<meta name="description" content="Generated by create next app" />
					<link rel="icon" href="/favicon.ico" />
					<link
						href="https://api.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.css"
						rel="stylesheet"
					/>
					<link
						rel="stylesheet"
						href="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.7.2/mapbox-gl-geocoder.css"
						type="text/css"
					/>
				</Head>

				<main className={styles.main}>
					<div id="map" className={mainPano ? styles.area : styles.full}>
						<MapBox />
					</div>
					<div id="pano" className={!mainPano ? styles.area : styles.full}>
						<Panos />
					</div>
					<Switcher />
				</main>
			</div>
		</MapProvider>
	);
}