import { getProjects } from "@/lib/data";
import { Plus, Edit, Star, Trash2 } from "lucide-react";

export default function AdminProjects() {
  const projects = getProjects();

  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-charcoal mb-2">Projects</h1>
          <p className="text-sm text-charcoal-lighter">Manage your portfolio.</p>
        </div>
        <button className="flex items-center gap-2 bg-copper text-white px-4 py-2 rounded-sm text-sm font-medium hover:bg-copper-light transition-colors">
          <Plus className="w-4 h-4" />
          Add Project
        </button>
      </div>

      <div className="bg-white rounded-sm border border-border shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-border">
              <th className="p-4 text-[10px] font-semibold tracking-[0.1em] text-charcoal-lighter uppercase">Project Details</th>
              <th className="p-4 text-[10px] font-semibold tracking-[0.1em] text-charcoal-lighter uppercase hidden md:table-cell">Client</th>
              <th className="p-4 text-[10px] font-semibold tracking-[0.1em] text-charcoal-lighter uppercase hidden lg:table-cell">Year</th>
              <th className="p-4 text-[10px] font-semibold tracking-[0.1em] text-charcoal-lighter uppercase text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {projects.map(project => (
              <tr key={project.id} className="hover:bg-gray-50/50 transition-colors">
                <td className="p-4 flex items-center gap-4">
                  <div className="w-12 h-12 bg-charcoal-lighter/10 rounded-sm flex-shrink-0 flex items-center justify-center">
                    <span className="text-[8px] uppercase tracking-widest text-charcoal/30">IMG</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                       <span className="font-medium text-sm text-charcoal">{project.title}</span>
                       {project.isFeatured && <Star className="w-3 h-3 text-gold fill-gold" />}
                    </div>
                    <span className="text-[10px] text-copper tracking-wide uppercase mt-1 block">{project.category}</span>
                  </div>
                </td>
                <td className="p-4 hidden md:table-cell text-sm text-charcoal max-w-[150px] truncate">
                   {project.client}
                </td>
                <td className="p-4 hidden lg:table-cell text-sm text-charcoal-lighter">
                  {project.year}
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
