import "./ReceivingParcels.scss";

import Layout from "../../../layout/layout";
import FilterSection from "./filterSection";
import SearchAndFilterSection from "./searchAndFilterSection/SearchAndFilterSection";
import SenderCards from "./senderCards/SenderCards";

const ReceivingParcels = () => {
	return (
		<Layout>
			<div className="sending-parcels">
				<div className="container">
					<div className="row">
						<div className="col-md-3 mt-5 pt-3">
							<FilterSection />
						</div>
						<div className="col-md-8 offset-md-1 mt-5 pt-3">
							<section className="sending-parcels__filter-section mt-md-0">
								<div>
									<SearchAndFilterSection />
									<SenderCards />
								</div>
							</section>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default ReceivingParcels;
