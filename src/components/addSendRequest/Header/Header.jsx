import Logo from "../../../assets/navbar/navbar.png";

const Header = () => {
	return (
		<header className="main-header">
			<div className="container">
				<div className="row justify-content-md-between">
					<div>
						<img src={Logo}></img>
					</div>
					<div className="row">
						<p className="mb-0 ml-2 close-text">ثبت درخواست ارسال بسته</p>
						<button type="button" class="close" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
