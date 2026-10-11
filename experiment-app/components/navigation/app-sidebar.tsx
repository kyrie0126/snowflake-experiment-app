"use client";

import {
    User,
    Package,
    Factory,
    Lightbulb,
    ChevronDown,
} from "lucide-react";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    useSidebar,
} from "@/components/ui/sidebar";
import {
    Collapsible,
    CollapsibleTrigger,
    CollapsibleContent,
} from "@/components/ui/collapsible";
import Link from "next/link";

export default function AppSidebar() {
    const { state } = useSidebar();

    return (
        <Sidebar collapsible="icon">
            <SidebarHeader>
                {state === "expanded" ? (
                <div>
                    <div className="font-semibold">Company Name</div>
                    <div className="text-sm text-muted-foreground">
                    SCM Platform
                    </div>
                </div>
                ) : (
                <div className="font-semibold">CN</div>
                )}
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Workspace</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton
                                    render={<Link href="/" />}
                                    className="hover:text-sidebar-primary hover:bg-sidebar-primary-foreground"
                                >
                                    <User />
                                    <span>My Work</span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>

                            <Collapsible defaultOpen className="group/collapsible">
                                <SidebarMenuItem>
                                    <CollapsibleTrigger
                                        render={
                                            <SidebarMenuButton>
                                                <Package />
                                                <span>Purchase Orders</span>
                                                <ChevronDown className="ml-auto transition-transform group-data-open/collapsible:rotate-180" />
                                            </SidebarMenuButton>
                                        }
                                    />
                                    <CollapsibleContent>
                                        <SidebarMenuSub>
                                            <SidebarMenuSubItem>
                                                <SidebarMenuSubButton
                                                    render={<Link href="/purchase-orders/lookup" />}
                                                    className="hover:text-sidebar-primary hover:bg-sidebar-primary-foreground"
                                                >
                                                    <span>Lookup</span>
                                                </SidebarMenuSubButton>
                                            </SidebarMenuSubItem>
                                            <SidebarMenuSubItem>
                                                <SidebarMenuSubButton
                                                    render={<Link href="/purchase-orders/pending-receipts" />}
                                                    className="hover:text-sidebar-primary hover:bg-sidebar-primary-foreground"
                                                >
                                                    <span>Pending Receipts</span>
                                                </SidebarMenuSubButton>
                                            </SidebarMenuSubItem>
                                        </SidebarMenuSub>
                                    </CollapsibleContent>
                                </SidebarMenuItem>
                            </Collapsible>
                            <SidebarMenuItem>
                                <SidebarMenuButton
                                    render={<Link href="/suppliers" />}
                                    className="hover:text-sidebar-primary hover:bg-sidebar-primary-foreground"
                                >
                                    <Factory />
                                    <span>Suppliers</span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton
                                    render={<Link href="/insights" />}
                                    className="hover:text-sidebar-primary hover:bg-sidebar-primary-foreground"
                                >
                                    <Lightbulb />
                                    <span>Insights</span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup />
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
}