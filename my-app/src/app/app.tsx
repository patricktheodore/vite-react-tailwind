import { Navigation } from "components/layouts/navigation";
import { Splash } from "components/layouts/splash";
import LandingBackground from "assets/LandingBackground.svg"

const App = (): JSX.Element => {
  return (
		<main className="bg-lime-400 w-full h-full grid grid-cols-1 lg:grid-cols-3">
			{/* <Navigation /> */}

			<div className="col-span-1 lg:col-span-2 w-full h-full object-fill">
				<svg
					viewBox="0 0 500 564"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M2 1H1V2V264.406V265.406H2H161H162V264.406V2V1H161H2Z"
						fill="#66E98B"
						stroke="black"
						strokeWidth="2"
					/>
					<path
						d="M161 1H160V2V263.4V264.4H161H546H547V263.4V2V1H546H161Z"
						fill="#97F3B1"
						stroke="black"
						strokeWidth="2"
					/>
					<path
						d="M2 263H1V264V561V562H2H114H115V561V264V263H114H2Z"
						fill="#73EF96"
						stroke="black"
						strokeWidth="2"
					/>
					<path
						d="M114 262.936H113V263.936V562V563H114H546H547V562V263.936V262.936H546H114Z"
						fill="#67FF92"
						stroke="black"
						strokeWidth="2"
					/>
				</svg>
			</div>

			<div className="col-span-1 lg:col-span-1 w-full h-full object-fill">
				<svg
					viewBox="0 0 250 564"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M1.99963 1.01184H0.999634V2.01184V103.61V104.61H1.99963H154.972H155.972V103.61V2.01184V1.01184H154.972H1.99963Z"
						fill="#EB066D"
						stroke="black"
						strokeWidth="2"
					/>
					<path
						d="M138.975 1.01184H137.975V2.01184V162.96V163.96H138.975H309.944H310.944V162.96V2.01184V1.01184H309.944H138.975Z"
						fill="#EE73F9"
						stroke="black"
						strokeWidth="2"
					/>
					<path
						d="M2 92H1V93V562V563H2H310H311V562V93V92H310H2Z"
						fill="#F841B3"
						stroke="black"
						strokeWidth="2"
					/>
					<path
						d="M164.994 563L165.994 563L165.994 562L166 381.006L166 380.006L165 380.006L2.00632 380L1.00632 380L1.00628 381L1 561.994L0.999965 562.994L1.99996 562.994L164.994 563Z"
						fill="#F65AD6"
						stroke="black"
						strokeWidth="2"
					/>
				</svg>
			</div>

			{/* <Splash /> */}
		</main>
	);
};

export default App;
