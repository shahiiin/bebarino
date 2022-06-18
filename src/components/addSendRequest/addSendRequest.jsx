// style
import "./addSendRequest.scss";
// componnents
import Header from "./Header";
import SideForm from "./sideForm/SideForm";

const AddSendRequest = ({ children }) => {
	return (
		<>
			<Header />
			<main>
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-md-3 ml-lg-5 px-lg-4 order-1 order-md-0">
							<SideForm />
						</div>
						<div className="col-md-7 mr-lg-5">{children}</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default AddSendRequest;
