import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'Wardrobe', href: '/wardrobe', current: false },
  { name: 'Planner', href: '/planner', current: false },
  { name: 'About', href: '/about', current: false },
];

export default function TopNav() {
  return (
    <Disclosure as="nav" className="bg-[#942D24]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Mobile Menu Button */}
        <div className="sm:hidden">
          <DisclosureButton className="p-2 text-gray-400 hover:bg-gray-700 hover:text-white rounded-md">
            <Bars3Icon className="size-6" />
          </DisclosureButton>
        </div>

        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/icons/logo.png"
            alt="Logo"
            className="h-10 w-auto"
          />

          <h1>Fit4U</h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex space-x-4">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`px-3 py-2 text-sm font-medium rounded-md ${
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Notifications & Profile */}
        <div className="flex items-center space-x-4">
            <a
              href="/login"
              className={`px-3 py-2 text-sm font-medium rounded-md ${
                false ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
            Login
            </a>
        </div>
      </div>

      {/* Mobile Menu */}
      <DisclosurePanel className="sm:hidden bg-gray-900 px-2 pb-3">
        {navigation.map((item) => (
          <DisclosureButton
            key={item.name}
            as="a"
            href={item.href}
            className={`block rounded-md px-3 py-2 text-base font-medium ${
              item.current ? 'text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
          >
            {item.name}
          </DisclosureButton>
        ))}
      </DisclosurePanel>
    </Disclosure>
  );
}
