"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/navigation/nav-main"
import { NavUser } from "@/components/navigation/nav-user"
import { TeamSwitcher } from "@/components/navigation/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

import { getCurrentUser } from "@/lib/data/navigation/sidebar-data"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Purchase Orders",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Pending Receipts",
          url: "#",
        },
        {
          title: "History",
          url: "#",
        },
        {
          title: "Lookup",
          url: "#",
        },
      ],
    },
    {
      title: "Customer Orders",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Active",
          url: "#",
        },
        {
          title: "History",
          url: "#",
        },
        {
          title: "Lookup",
          url: "#",
        },
      ],
    },
    {
      title: "Suppliers",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Performance",
          url: "#",
        },
        {
          title: "Lookup",
          url: "#",
        },
      ],
    },
    {
      title: "Customers",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Performance",
          url: "#",
        },
        {
          title: "Lookup",
          url: "#",
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
