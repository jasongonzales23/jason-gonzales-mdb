type NavItem = {
  icon: () => React.JSX.Element;
  activeRoute: boolean;
};
export default function NavItem({ icon, activeRoute }: NavItem) {
  const isActive = activeRoute ? "bg-green" : "";
  return (
    <li className="flex flex-nowrap flex-col">
      <a
        href="#"
        className={`${isActive} flex flex-col items-center justify-center text-gray-900 rounded-lg hover:bg-gray-100 group w-8 h-8`}
      >
        {icon()}
      </a>
    </li>
  );
}
