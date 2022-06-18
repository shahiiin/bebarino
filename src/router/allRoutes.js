import { Redirect } from "react-router-dom";
// landing page
import LandingPage from "./../pages/landing";
// sign in
import SigninPage from "../pages/signin/signInPage/SignInPage";
import CodeIsSentPage from "../pages/signin/codeIsSentPage/CodeIsSentPage";
import WelcomePage from "../pages/signin/welcomPage/WelcomePage";
// receiving parcel
import SendingRequestsPage from "../pages/receivingParcel/sendingRequests";
import SenderRequestPage from "../pages/receivingParcel/sendingRequests/senderRequest";
import AcceptingRequestPage from "../pages/receivingParcel/sendingRequests/senderRequest/acceptingRequest";
import SchedulingHandOffPage from "../pages/receivingParcel/schedulingHandOff";
import SuggestingNewTimePage from "../pages/receivingParcel/schedulingHandOff/suggestingNewTime";
import TripPage from "../pages/receivingParcel/trip";
import DeliveryverificationPage from "../pages/receivingParcel/deliveryVerification";
// add-send-request pages
import AddSendRequestPage from "../pages/send-request/addSendRequestPage";
import SendRequestParcelInfoPage from "../pages/send-request/parcelInfo/ParcelInfoPage";
import SendRequestOtherServicesPage from "../pages/send-request/otherServices/OtherServicesPage";
import SendRequestFinalizingPage from "../pages/send-request/finalizing/FinalizingPage";
// email template
import EmailTemplatePage from "../pages/emailTemplate";
// informative pages
import HowWorksPage from "./../pages/informative/how-works";
import FaqPage from "../pages/informative/faq";
import AboutPage from "./../pages/informative/about";
import TermOfUsePage from "./../pages/termOfUse";
// rquest pages
import SendingParcelsPage from "../pages/requests/sendingParcels/SendingParcels";
import RequestDetailsPage from "../pages/requests/sendingParcels/requestDetails/RequestDetails";
import ChoosingParcelPage from "../pages/requests/sendingParcels/choosingParcel/ChoosingParcel";
import ReceivingParcelsPage from "../pages/requests/receivingParcels/ReceivingParcels";
import ReceiverRequestDetailsPage from "../pages/requests/receivingParcels/requestDetails/RequestDetails";
import ChoosingTripPage from "../pages/requests/receivingParcels/choosingTrip/ChoosingTrip";
//helper page
import HelperPage from "../pages/helper";
// user account
import RequestPage from "../pages/userAccount/requests";
const userRoutes = [
  // helper page
  { path: "/helper", component: HelperPage },
  // user account
  { path: "/requests", component: RequestPage },
  // informative pages
  { path: "/term-of-use", component: TermOfUsePage },
  { path: "/how-works", component: HowWorksPage },
  { path: "/faq", component: FaqPage },
  { path: "/about", component: AboutPage },
  // email template
  { path: "/email-template", component: EmailTemplatePage },
  // receiving parcel
  { path: "/delivery-verification", component: DeliveryverificationPage },
  { path: "/trip", component: TripPage },
  { path: "/suggesting-new-time", component: SuggestingNewTimePage },
  { path: "/scheduling-hand-off", component: SchedulingHandOffPage },
  { path: "/sender-request", component: SenderRequestPage },
  { path: "/sending-request", component: SendingRequestsPage },
  { path: "/accepting-request", component: AcceptingRequestPage },
  //sign in
  { path: "/signin", component: SigninPage },
  //sign in-temp
  { path: "/signin-code-is-sent", component: CodeIsSentPage },
  { path: "/signin-welcome", component: WelcomePage },

  // add-send-request pages
  { path: "/add-send-request", component: AddSendRequestPage },
  // add-send-request pages-temp
  {
    path: "/add-send-request/parcel-info",
    component: SendRequestParcelInfoPage,
  },
  {
    path: "/add-send-request/other-services",
    component: SendRequestOtherServicesPage,
  },
  {
    path: "/add-send-request/finalizing",
    component: SendRequestFinalizingPage,
  },

  // request pages
  { path: "/sending-parcels", component: SendingParcelsPage },
  { path: "/request-details", component: RequestDetailsPage },
  { path: "/choosing-parcel", component: ChoosingParcelPage },
  { path: "/receiving-parcels", component: ReceivingParcelsPage },
  {
    path: "/receiving-parcels/request-details",
    component: ReceiverRequestDetailsPage,
  },
  { path: "/choosing-trip", component: ChoosingTripPage },

  { path: "/", component: LandingPage },
  { path: "/", exact: true, component: () => <Redirect to="/" /> },
];

const authRoutes = [];

export { userRoutes };
