"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Image from "next/image";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Facebook",
    href: "/docs/primitives/alert-dialog",
    description: "Take a look at my facebook account to get to know me more.",
  },
  {
    title: "Instagram",
    href: "/docs/primitives/hover-card",
    description: "For my aesthetics post.",
  },
  {
    title: "Github",
    href: "/docs/primitives/progress",
    description: "Dev skills status right here!",
  },
  {
    title: "LinkedIn",
    href: "/docs/primitives/scroll-area",
    description: "Work account I use for my profession.",
  },
];

const documentationFramework: { icon: string; framework: string }[] = [
  { framework: "React", icon: "/assets/images/react.png" },
  { framework: "Angular", icon: "/assets/images/angular.png" },
  { framework: "Nextjs", icon: "/assets/images/nextjs.png" },
];
export default function Navbar() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Home</NavigationMenuTrigger>
          <NavigationMenuContent className="bg-white border border-gray-300 shadow-md">
            <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                    href="#"
                  >
                    <div className="mt-4 mb-2 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      Beautifully designed components built with Tailwind CSS.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Contact">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem
                href="/docs/installation"
                title="
              About"
              >
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Photos">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Social</NavigationMenuTrigger>
          <NavigationMenuContent className="bg-white border border-gray-300 shadow-md">
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  className="hover:underline"
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Docs</NavigationMenuTrigger>
          <NavigationMenuContent className="bg-white border border-gray-300 shadow-md">
            <ul className="grid w-[200px] gap-4">
              <li>
                {documentationFramework.map((item, index) => (
                  <>
                    <NavigationMenuLink
                      asChild
                      key={index}
                      className="hover:bg-gray-200"
                    >
                      <Link href="#" className="flex-row items-center gap-2">
                        <div className="relative w-[30px] h-[30px]">
                          <Image
                            src={`${item.icon}`}
                            alt="React icon"
                            fill
                            sizes="w-[30px] h-[30px]"
                            className="object-contain"
                          />
                        </div>
                        {item.framework}
                      </Link>
                    </NavigationMenuLink>
                  </>
                ))}
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
