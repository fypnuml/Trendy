import { redirect } from "next/navigation";
import { verifySession, deleteSession } from "@/lib/auth";
import Link from "next/link";
import {
  LayoutDashboard,
  Grid3x3,
  Image as ImageIcon,
  Users,
  MessageSquare,
  LogOut,
  Menu,
} from "lucide-react";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await verifySession();

  if (!session) {
    redirect("/admin/login");
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-charcoal text-white h-screen sticky top-0">
        <div className="p-6 border-b border-white/10">
          <span className="text-2xl font-serif font-semibold tracking-tight">Grace Aluminum</span>
          <span className="text-[10px] tracking-[0.2em] text-copper uppercase block mt-1">Admin Panel</span>
        </div>

        <nav className="flex-1 py-6 px-4 space-y-2">
          <Link href="/admin" className="flex items-center gap-3 px-4 py-3 rounded-sm text-sm font-medium hover:bg-white/5 transition-colors">
            <LayoutDashboard className="w-4 h-4 text-copper" />
            Dashboard
          </Link>
          <Link href="/admin/services" className="flex items-center gap-3 px-4 py-3 rounded-sm text-sm font-medium hover:bg-white/5 transition-colors">
            <Grid3x3 className="w-4 h-4 text-copper" />
            Services
          </Link>
          <Link href="/admin/projects" className="flex items-center gap-3 px-4 py-3 rounded-sm text-sm font-medium hover:bg-white/5 transition-colors">
            <ImageIcon className="w-4 h-4 text-copper" />
            Projects
          </Link>
          <Link href="/admin/clients" className="flex items-center gap-3 px-4 py-3 rounded-sm text-sm font-medium hover:bg-white/5 transition-colors">
            <Users className="w-4 h-4 text-copper" />
            Clients & Partners
          </Link>
          <Link href="/admin/messages" className="flex items-center gap-3 px-4 py-3 rounded-sm text-sm font-medium hover:bg-white/5 transition-colors">
            <MessageSquare className="w-4 h-4 text-copper" />
            Messages
          </Link>
        </nav>

        <div className="p-4 border-t border-white/10">
          <form action={async () => {
            "use server";
            await deleteSession();
            redirect("/admin/login");
          }}>
            <button className="flex items-center gap-3 px-4 py-3 w-full rounded-sm text-sm font-medium hover:bg-red-500/10 hover:text-red-400 transition-colors">
              <LogOut className="w-4 h-4" />
              Sign Out
            </button>
          </form>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-h-screen">
        <header className="h-16 md:hidden bg-white border-b flex items-center px-4 justify-between sticky top-0 z-10">
           <span className="text-lg font-serif font-semibold text-charcoal">Grace Admin</span>
           <button className="p-2 text-charcoal">
             <Menu className="w-6 h-6" />
           </button>
        </header>
        
        <div className="flex-1 p-6 md:p-10 w-full max-w-7xl mx-auto space-y-6 overflow-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
