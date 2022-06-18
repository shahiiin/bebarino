// style
import "./CodeIsSent.scss";

const CodeIsSent = () => {
	const handleSubmit = (event) => {
		event.preventDefault();
	};
	return (
		<dive className="code-is-sent">
			<h1 className="mb-3">ورود</h1>
			<form onSubmit={handleSubmit} className="pt-5">
				<label className="code-is-sent__sub-title">
					لطفا کد ارسالی به
					<span className="mx-2">rh.khodaie@gmail.com</span>
					را وارد کنید
				</label>
				<div className="d-flex align-items-center justify-content-lg-between my-5">
					<input className="code-is-sent__input" type="text" maxLength="1" />
					<input className="code-is-sent__input" type="text" maxLength="1" />
					<input className="code-is-sent__input" type="text" maxLength="1" />
					<input className="code-is-sent__input" type="text" maxLength="1" />
					<input className="code-is-sent__input" type="text" maxLength="1" />
				</div>
				<div className="d-flex py-3">
					<div className="col-md-6 pr-0">
						<button className="primary-outline-button w-100">
							تغییر ایمیل
						</button>
					</div>
					<div className="col-md-6 pl-0">
						<button className="primary-button w-100">ورود</button>
					</div>
				</div>
				<div className="text-center mt-5 pt-3">
					<p className="code-is-sent__timer">۰۰:۳۰</p>
					<p className="code-is-sent__resend">
						{/* here put the resend icon source URL */}
						{/* <img src={} alt="resend icon"/> */}
						ارسال مجدد
					</p>
				</div>
			</form>
		</dive>
	);
};

export default CodeIsSent;
