/* eslint-disable @typescript-eslint/no-explicit-any */
import { Book, Menu, Trees, Zap } from 'lucide-react';
import { auth } from '@/auth';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import Image from 'next/image';
import Link from 'next/link';

import { LogoutButton } from './auth/logout-button';
import { LanguageSwitcher } from './language-switcher';

interface MenuItem {
  title: any;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface Navbar1Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  authLinks?: {
    login: {
      title: string;
      url: string;
    };
    signup: {
      title: string;
      url: string;
    };
  };
}

const Navbar = async ({
  logo = {
    url: '/',
    src: '/safety-center-logo.jpg',
    alt: 'logo',
    title: 'Safety Center',
  },
  menu = [
    // { title: 'Home', url: '#' },
    {
      title: 'Departments',
      url: '#',
      items: [
        {
          title: 'Administration',
          description: 'The latest industry news, updates, and info',
          icon: <Book className="size-5 shrink-0" />,
          url: '/department/administration',
        },
        {
          title: 'Spectroscopy',
          description: 'Our mission is to innovate and empower the world',
          icon: <Trees className="size-5 shrink-0" />,
          url: '/department/spectroscopy',
        },
      ],
    },
    {
      title: 'Safety Courses',
      url: '#',
      items: [
        {
          title: 'Work and fire protection',
          description: 'Get all the answers you need right here',
          icon: <Zap className="size-5 shrink-0" />,
          url: '/courses/work-and-fire-protection',
        },
        // {
        //   title: "Spectroscopy",
        //   description: "We are here to help you with any questions you have",
        //   icon: <Sunset className="size-5 shrink-0" />,
        //   url: "#",
        // },
      ],
    },
    {
      title: 'Contact',
      url: '#',
    },
    {
      title: <LanguageSwitcher />,
      url: '#',
    },
    {
      title: 'Emergency',
      url: '/emergency',
    },
  ],
  authLinks = {
    login: { title: 'Login', url: '/auth/login' },
    signup: { title: 'Sign up', url: '/auth/register' },
  },
}: Navbar1Props) => {
  const session = await auth();
  return (
    <section className="fixed top-0 left-0 w-full z-50 bg-white shadow px-4 py-4">
      <div className=" mx-auto">
        {/* Desktop Menu */}
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-6">
            {/* Logo */}
            <Link href={logo.url} className="flex items-center gap-2">
              <div className="relative">
                {' '}
                {/* Adjust width as needed */}
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={600}
                  height={300}
                  className="object-contain h-12  w-auto max-w-full"
                />
              </div>
              <span className="text-sm text-gray-400 font-semibold tracking-tighter">
                {logo.title}
              </span>
            </Link>
          </div>
          <div className="flex gap-2 items-center">
            <div className="flex items-center">
              <NavigationMenu translate="yes">
                <NavigationMenuList>
                  {menu.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            {session ? (
              <>
                <LogoutButton />
              </>
            ) : (
              <>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="bg-[#28485D] text-white"
                >
                  <Link href={authLinks.login.url}>
                    {authLinks.login.title}
                  </Link>
                </Button>

                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="bg-[#28485D] text-white"
                >
                  <Link href={authLinks.signup.url}>
                    {authLinks.signup.title}
                  </Link>
                </Button>
              </>
            )}
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href={logo.url} className="flex items-center gap-2 relative ">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={600}
                height={300}
                className="object-contain h-12 w-auto max-w-full"
              />
            </Link>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <Link href={logo.url} className="flex items-center gap-2">
                      <Image
                        src={logo.src}
                        alt="..."
                        fill
                        className="max-h-8"
                      />
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4"
                  >
                    {menu.map((item) => renderMobileMenuItem(item))}
                  </Accordion>

                  <div className="flex flex-col gap-3">
                    {session ? (
                      <>
                        <LogoutButton />
                      </>
                    ) : (
                      <>
                        <Button asChild variant="outline">
                          <Link href={authLinks.login.url}>
                            {authLinks.login.title}
                          </Link>
                        </Button>
                        <Button asChild variant="outline">
                          <Link href={authLinks.signup.url}>
                            {authLinks.signup.title}
                          </Link>
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <div translate="yes">
        <NavigationMenuItem key={item.title}>
          <NavigationMenuTrigger translate="yes">
            <span translate="yes">{item.title}</span>
          </NavigationMenuTrigger>
          <NavigationMenuContent
            className="bg-popover text-popover-foreground"
            translate="yes"
          >
            {item.items.map((subItem) => (
              <NavigationMenuLink asChild key={subItem.title} className="w-80">
                <SubMenuLink item={subItem} />
              </NavigationMenuLink>
            ))}
          </NavigationMenuContent>
        </NavigationMenuItem>
      </div>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={item.url}
        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground"
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a key={item.title} href={item.url} className="text-md font-semibold">
      {item.title}
    </a>
  );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <Link
      className="flex flex-row gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-muted hover:text-accent-foreground"
      href={item.url}
    >
      <div className="text-foreground">{item.icon}</div>
      <div>
        <div className="text-sm font-semibold" translate="yes">
          <span translate="yes">{item.title}</span>
        </div>
        {item.description && (
          <p
            className="text-sm leading-snug text-muted-foreground"
            translate="yes"
          >
            <span translate="yes">{item.description}</span>
          </p>
        )}
      </div>
    </Link>
  );
};

export { Navbar };
