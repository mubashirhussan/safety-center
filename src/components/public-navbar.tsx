// ❌ NO "use client" here
import { Book, Menu, Trees, Zap } from "lucide-react";
import { auth } from "@/auth";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { LogoutButton } from "./auth/logout-button";
// import LogoutButton from "./LogoutButton"; // make sure it's a client component if you use it

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

export default async function PublicNavbar() {
  const session = await auth();
  const isLoggedIn = !!session;

  const menu: MenuItem[] = [
    {
      title: "Departments",
      url: "#",
      items: [
        {
          title: "Administration",
          description: "The latest industry news, updates, and info",
          icon: <Book className="size-5 shrink-0" />,
          url: "/department/administration",
        },
        {
          title: "Spectroscopy",
          description: "Our mission is to innovate and empower the world",
          icon: <Trees className="size-5 shrink-0" />,
          url: "/department/spectroscopy",
        },
      ],
    },
    {
      title: "Safety Courses",
      url: "#",
      items: [
        {
          title: "Work and fire protection",
          description: "Get all the answers you need right here",
          icon: <Zap className="size-5 shrink-0" />,
          url: "/courses/work-and-fire-protection",
        },
      ],
    },
    { title: "Contact", url: "/contact" },
    { title: "Deutsch", url: "#" },
    { title: "Emergency", url: "/emergency" },
  ];

  const filteredMenu = [
    ...(isLoggedIn
      ? [{ title: "My Account", url: "/my-account/my-info" }]
      : []),
    ...menu.filter((item) => !(isLoggedIn && item.title === "Departments")),
  ];

  return (
    <section className="fixed top-0 left-0 w-full z-50 bg-white shadow px-4 py-4">
      <div className="mx-auto">
        {/* Desktop */}
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/safety-center-logo.jpg"
                alt="logo"
                width={600}
                height={300}
                className="object-contain h-12 w-auto max-w-full"
              />
              <span className="text-sm text-gray-400 font-semibold tracking-tighter">
                Safety Center
              </span>
            </Link>
          </div>
          <div className="flex gap-2 items-center">
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {filteredMenu.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {!isLoggedIn ? (
              <>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="bg-[#28485D] text-white"
                >
                  <Link href="/auth/login">Login</Link>
                </Button>
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="bg-[#28485D] text-white"
                >
                  <Link href="/auth/register">Sign Up</Link>
                </Button>
              </>
            ) : (
              // You can use a <LogoutButton /> client component here
              <LogoutButton />
            )}
          </div>
        </nav>

        {/* Mobile */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 relative ">
              <Image
                src="/safety-center-logo.jpg"
                alt="logo"
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
                    <Link href="/" className="flex items-center gap-2">
                      <Image
                        src="/safety-center-logo.jpg"
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
                    {filteredMenu.map((item) => renderMobileMenuItem(item))}
                  </Accordion>

                  <div className="flex flex-col gap-3">
                    {!isLoggedIn ? (
                      <>
                        <Button asChild variant="outline">
                          <Link href="/auth/login">Login</Link>
                        </Button>
                        <Button asChild variant="outline">
                          <Link href="/auth/register">Sign Up</Link>
                        </Button>
                      </>
                    ) : (
                      <LogoutButton />
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
}

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent className="bg-popover text-popover-foreground">
          {item.items.map((subItem) => (
            <NavigationMenuLink asChild key={subItem.title} className="w-80">
              <SubMenuLink item={subItem} />
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
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
        <div className="text-sm font-semibold">{item.title}</div>
        {item.description && (
          <p className="text-sm leading-snug text-muted-foreground">
            {item.description}
          </p>
        )}
      </div>
    </Link>
  );
};
