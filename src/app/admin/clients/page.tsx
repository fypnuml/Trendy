import { getClients, getPartners } from "@/lib/data";
import { Plus, Edit, Trash2 } from "lucide-react";

export default function AdminClients() {
  const categories = [
    { title: "Clients", data: getClients() },
    { title: "Partners", data: getPartners() },
  ];

  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-charcoal mb-2">Clients & Partners</h1>
          <p className="text-sm text-charcoal-lighter">Manage logos shown in the Trust marquee.</p>
        </div>
        <button className="flex items-center gap-2 bg-copper text-white px-4 py-2 rounded-sm text-sm font-medium hover:bg-copper-light transition-colors">
          <Plus className="w-4 h-4" />
          Add Entity
        </button>
      </div>

      {categories.map(category => (
        <div key={category.title} className="mt-8">
          <h2 className="text-lg font-semibold text-charcoal mb-4">{category.title}</h2>
          <div className="bg-white rounded-sm border border-border shadow-sm overflow-hidden">
             <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-border">
                  <th className="p-4 text-[10px] font-semibold tracking-[0.1em] text-charcoal-lighter uppercase">Name</th>
                  <th className="p-4 text-[10px] font-semibold tracking-[0.1em] text-charcoal-lighter uppercase text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {category.data.map(item => (
                  <tr key={item.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="p-4 flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-copper/10 border border-copper/20 flex items-center justify-center">
                        <span className="text-xs font-bold text-copper">{item.name.charAt(0)}</span>
                      </div>
                      <span className="font-medium text-sm text-charcoal">{item.name}</span>
                    </td>
                    <td className="p-4 text-right space-x-2">
                       <button className="p-2 text-charcoal-lighter hover:text-copper transition-colors" title="Edit">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-charcoal-lighter hover:text-red-500 transition-colors" title="Delete">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
      
      <p className="text-xs text-charcoal-lighter text-center italic mt-6">
        * Note: Database integration is currently disabled. Changes made here will not persist across reloads.
      </p>
    </>
  );
}
