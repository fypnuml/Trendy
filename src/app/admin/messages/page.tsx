import { getMessages } from "@/lib/data";
import { CheckCircle, Trash2 } from "lucide-react";

export default function AdminMessages() {
  const messages = getMessages();

  return (
    <>
      <div>
        <h1 className="text-2xl font-semibold text-charcoal mb-2">Messages</h1>
        <p className="text-sm text-charcoal-lighter">Contact form submissions from your website.</p>
      </div>

      <div className="bg-white rounded-sm border border-border shadow-sm overflow-hidden">
        {messages.length > 0 ? (
          <div className="divide-y divide-border">
            {messages.map(msg => (
               <div key={msg.id} className={`p-6 transition-colors ${msg.isRead ? 'bg-white' : 'bg-copper/[0.02]'}`}>
                 <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                       <div className={`w-2 h-2 rounded-full flex-shrink-0 ${msg.isRead ? 'bg-transparent' : 'bg-copper'}`} />
                       <div>
                         <h3 className="font-semibold text-charcoal text-sm">{msg.name}</h3>
                         <div className="flex items-center gap-3 mt-1 text-xs text-charcoal-lighter">
                           <span>{msg.email}</span>
                           <span className="hidden sm:inline w-1 h-1 rounded-full bg-border" />
                           <span>{msg.phone}</span>
                         </div>
                       </div>
                    </div>
                    <div className="flex items-center gap-4">
                       <span className="text-xs text-charcoal-lighter hidden md:inline-block">
                         {new Date(msg.createdAt).toLocaleString()}
                       </span>
                       <div className="flex gap-1">
                          <button className="p-2 text-charcoal-lighter hover:text-green-500 transition-colors" title="Mark as Read">
                             <CheckCircle className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-charcoal-lighter hover:text-red-500 transition-colors" title="Delete">
                             <Trash2 className="w-4 h-4" />
                          </button>
                       </div>
                    </div>
                 </div>
                 <div className="pl-5">
                   <p className="text-sm text-charcoal whitespace-pre-wrap bg-gray-50 p-4 rounded-sm border border-border">
                     {msg.message}
                   </p>
                 </div>
               </div>
            ))}
          </div>
        ) : (
          <div className="p-12 text-center">
            <p className="text-charcoal-lighter text-sm">No messages yet. When customers use the contact form, submissions will appear here.</p>
          </div>
        )}
      </div>
      
      <p className="text-xs text-charcoal-lighter text-center italic mt-4">
        * Note: Database integration is currently disabled. Submissions and deletions will not persist across reloads.
      </p>
    </>
  );
}
