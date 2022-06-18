import "./sidebar.scss";
import User from "./user";
import ListItems from "./listItems";
const Sidebar = () => {
  return (
    <aside className="requests__sidebar">
      <div className="mb-4">
        <User />
      </div>
      <ListItems />
    </aside>
  );
};

export default Sidebar;
