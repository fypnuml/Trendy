import { getServices, getProjects, getClients, getMessages } from "@/lib/data";
import { Grid3x3, ImageIcon, Users, MessageSquare } from "lucide-react";

export default function AdminDashboard() {
  const stats = [
    { label: "Total Services", value: getServices().length, icon: <Grid3x3 className="w-5 h-5" /> },
    { label: "Total Projects", value: getProjects().length, icon: <ImageIcon className="w-5 h-5" /> },
    { label: "Clients & Partners", value: getClients().length, icon: <Users className="w-5 h-5" /> },
    { label: "Unread Messages", value: getMessages().filter(m => !m.isRead).length, icon: <MessageSquare className="w-5 h-5" /> },
  ];

  const recentMessages = getMessages().slice(0, 5);

  return (
    <>
      <div>
        <h1 className="text-2xl font-semibold text-charcoal mb-2">Dashboard Overview</h1>
        <p className="text-sm text-charcoal-lighter">Welcome back to the Trendy admin panel.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-sm border border-border shadow-sm flex items-center justify-between">
            <div>
              <p className="text-[10px] font-semibold tracking-[0.1em] text-charcoal-lighter uppercase mb-1">
                {stat.label}
              </p>
              <p className="text-3xl font-display font-bold text-charcoal">{stat.value}</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-copper/10 flex items-center justify-center text-copper">
              {stat.icon}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <div className="flex items-center justify-between mb-4">
           <h2 className="text-lg font-semibold text-charcoal">Recent Messages</h2>
           <button className="text-sm text-copper hover:underline">View All</button>
        </div>
        
        <div className="bg-white rounded-sm border border-border shadow-sm overflow-hidden">
          {recentMessages.length > 0 ? (
            <div className="divide-y divide-border">
              {recentMessages.map((msg) => (
                <div key={msg.id} className="p-4 hover:bg-gray-50 flex items-start gap-4 transition-colors">
                  <div className={`w-2 h-2 mt-2 rounded-full flex-shrink-0 ${msg.isRead ? 'bg-transparent' : 'bg-copper'}`} />
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-sm text-charcoal">{msg.name}</span>
                      <span className="text-xs text-charcoal-lighter">{new Date(msg.createdAt).toLocaleDateString()}</span>
                    </div>
                    <p className="text-sm text-charcoal-lighter line-clamp-1">{msg.message}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
             <div className="p-8 text-center text-sm text-charcoal-lighter">
                No recent messages
             </div>
          )}
        </div>
      </div>
    </>
  );
}
