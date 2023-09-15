import Link from "next/link";
import {
  FiCreditCard,
  FiHome,
  FiLogOut,
  FiMenu,
  FiRepeat,
  FiSettings,
  FiTrendingUp,
} from "react-icons/fi";

const NavItem = ({
  title,
  href,
  icon,
}: {
  title: string;
  href: string;
  icon: React.ReactNode;
}) => {
  return (
    <li className="w-full list-none flex mb-4 items-center">
      <span className="w-6 h-6 mr-2">{icon}</span>
      <Link href={href} className="text-lg">
        {title}
      </Link>
    </li>
  );
};

export default function Sidebar() {
  return (
    <aside className="h-full" role="navigation">
      <nav
        className="hidden xl:flex flex-col bg-gray-100 rounded-md h-full p-8 xl:w-72"
        role="navigation"
      >
        <span className="mb-40 w-24 h-12">
          {/* <Logo /> */}
          BankRoll
        </span>
        <ul className="text-md">
          <NavItem
            icon={<FiHome />}
            title="Overview"
            href="/dashboard/overview"
          />
          <NavItem
            icon={<FiRepeat />}
            title="Transactions"
            href="/dashboard/transactions"
          />
          <NavItem
            icon={<FiCreditCard />}
            title="Accounts"
            href="/dashboard/accounts"
          />
          <NavItem
            icon={<FiTrendingUp />}
            title="Analytics"
            href="/dashboard/analytics"
          />
          <hr className="w-full h-px bg-gray-200 my-8" />
          <li className="w-full list-none flex mb-4 items-center">
            <span className="w-6 h-6 mr-2">
              <FiLogOut />
            </span>
            <Link href="/" className="text-lg">
              Log out
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
