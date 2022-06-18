import { Link } from 'react-router-dom'
import Layout from './../../layout'

import { userRoutes } from './../../router/allRoutes'
const HelperPage = () => {
    return(<Layout>
         <div className="container">
         <div className="row">
           <div className="col">
           <ul className="text-left">
             { userRoutes.map((item, idx) => (
               <li key={idx}>
              <Link className="text-primary" to={item.path}>{item.path}</Link>
              </li>
             )) }
          </ul>
           </div>
         </div>
         </div>
    </Layout>)
}

export default HelperPage