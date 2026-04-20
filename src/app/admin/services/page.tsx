import { getServices } from "@/lib/data";
import { Plus, Edit, Trash2 } from "lucide-react";

export default function AdminServices() {
  const services = getServices();

  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-charcoal mb-2">Services</h1>
          <p className="text-sm text-charcoal-lighter">Manage what you offer.</p>
        </div>
        <button className="flex items-center gap-2 bg-copper text-white px-4 py-2 rounded-sm text-sm font-medium hover:bg-copper-light transition-colors">
          <Plus className="w-4 h-4" />
          Add Service
        </button>
      </div>

      <div className="bg-white rounded-sm border border-border shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-border">
              <th className="p-4 text-[10px] font-semibold tracking-[0.1em] text-charcoal-lighter uppercase">Service Name</th>
              <th className="p-4 text-[10px] font-semibold tracking-[0.1em] text-charcoal-lighter uppercase hidden md:table-cell">Category</th>
              <th className="p-4 text-[10px] font-semibold tracking-[0.1em] text-charcoal-lighter uppercase hidden lg:table-cell">Description</th>
              <th className="p-4 text-[10px] font-semibold tracking-[0.1em] text-charcoal-lighter uppercase text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {services.map(service => (
              <tr key={service.id} className="hover:bg-gray-50/50 transition-colors">
                <td className="p-4">
                  <span className="font-medium text-sm text-charcoal">{service.title}</span>
                  <span className="block md:hidden text-xs text-copper mt-1">{service.category}</span>
                </td>
                <td className="p-4 hidden md:table-cell">
                   <span className="inline-block px-2 py-1 text-[10px] tracking-wide uppercase bg-charcoal/5 text-charcoal rounded-sm">
                     {service.category}
                   </span>
                </td>
                <td className="p-4 hidden lg:table-cell text-sm text-charcoal-lighter max-w-xs truncate">
                  {service.description}
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
      <p className="text-xs text-charcoal-lighter text-center italic mt-4">
        * Note: Database integration is currently disabled. Changes made here will not persist across reloads.
      </p>
    </>
  );
}
