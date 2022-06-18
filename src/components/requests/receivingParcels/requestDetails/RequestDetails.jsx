import Layout from "../../../../layout/layout";
import ParcelDetail from "./parcelDetail/ParcelDetail";
import SideBar from "../../../receivingParcel/sendingRequests/senderRequest/sidebar/Sidebar";

const RequestDetails = () => {
	return (
		<Layout>
			<div className="sending-parcels">
				<div className="container">
					<div className="row">
						<div className="col-md-3 mt-5 pt-3">
							<SideBar />
						</div>
						<div className="col-md-8 offset-md-1 mt-5 pt-3">
							<section className="sending-parcels__filter-section mt-md-0">
								<div>
									<ParcelDetail />
								</div>
							</section>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default RequestDetails;
