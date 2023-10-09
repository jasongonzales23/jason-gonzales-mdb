import NavItem from "./nav-item";
import MindsdbLogo from "./mindsdb-logo";
import BracesIcon from "./braces-icon";
import RobotIcon from "./robot-icon";
import Image from "next/image";

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

  return (
    <ul className="h-full space-y-2 font-medium p-2 flex flex-row flex-wrap	content-start">
      {NavItems}
      <li className="absolute bottom-6">
        <a className="flex flex-col items-center justify-center text-gray-900 rounded-lg hover:bg-gray-100 group w-8 h-8">
          <Image
            src="/settings-icon.svg"
            width="24"
            height="24"
            alt="settings"
          />
        </a>
      </li>
    </ul>
  );
}
