import NavItem from "./nav-item";
import MindsdbLogo from "./mindsdb-logo";
import BracesIcon from "./braces-icon";
import RobotIcon from "./robot-icon";

const navItems = [
  {
    name: "home",
    href: "/",
    description: "Home page",
    icon: MindsdbLogo,
    activeRoute: false,
  },
  {
    name: "data source",
    href: "/chat-project/add-datasource",
    description: "Add your datastore",
    icon: BracesIcon,
    activeRoute: true,
  },
  {
    name: "chatbot",
    href: "chatbot",
    description: "Do something with a chatbot",
    icon: RobotIcon,
    activeRoute: false,
  },
];

export default function NavItems() {
  const NavItems = navItems.map((item) => {
    const { name, icon, href, activeRoute } = item;
    return <NavItem key={name} icon={icon} activeRoute={activeRoute}></NavItem>;
  });

  return <ul className="space-y-2 font-medium p-2">{NavItems}</ul>;
}
