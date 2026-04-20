import { getSettings } from "@/lib/data";
import { Save } from "lucide-react";

export default function AdminSettings() {
  const settings = getSettings();

  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-charcoal mb-2">Settings</h1>
          <p className="text-sm text-charcoal-lighter">Manage global site configuration.</p>
        </div>
        <button className="flex items-center gap-2 bg-copper text-white px-4 py-2 rounded-sm text-sm font-medium hover:bg-copper-light transition-colors">
          <Save className="w-4 h-4" />
          Save Changes
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* General Settings */}
        <div className="bg-white p-6 rounded-sm border border-border shadow-sm">
          <h2 className="text-lg font-semibold text-charcoal mb-6">General Information</h2>
          <div className="space-y-4">
             <div>
                <label className="block text-[10px] font-semibold tracking-[0.15em] text-charcoal-lighter uppercase mb-2">Company Name</label>
                <input type="text" defaultValue={settings.companyName} className="w-full px-3 py-2 border border-border rounded-sm text-sm outline-none focus:border-copper" />
             </div>
             <div>
                <label className="block text-[10px] font-semibold tracking-[0.15em] text-charcoal-lighter uppercase mb-2">Tagline</label>
                <input type="text" defaultValue={settings.tagline} className="w-full px-3 py-2 border border-border rounded-sm text-sm outline-none focus:border-copper" />
             </div>
             <div>
                <label className="block text-[10px] font-semibold tracking-[0.15em] text-charcoal-lighter uppercase mb-2">Email Address</label>
                <input type="email" defaultValue={settings.email} className="w-full px-3 py-2 border border-border rounded-sm text-sm outline-none focus:border-copper" />
             </div>
             <div>
                <label className="block text-[10px] font-semibold tracking-[0.15em] text-charcoal-lighter uppercase mb-2">Phone Number</label>
                <input type="tel" defaultValue={settings.phone} className="w-full px-3 py-2 border border-border rounded-sm text-sm outline-none focus:border-copper" />
             </div>
             <div>
                <label className="block text-[10px] font-semibold tracking-[0.15em] text-charcoal-lighter uppercase mb-2">WhatsApp Number (For Button)</label>
                <input type="text" defaultValue={settings.whatsappNumber} className="w-full px-3 py-2 border border-border rounded-sm text-sm outline-none focus:border-copper" />
             </div>
             <div>
                <label className="block text-[10px] font-semibold tracking-[0.15em] text-charcoal-lighter uppercase mb-2">Physical Address</label>
                <input type="text" defaultValue={settings.address} className="w-full px-3 py-2 border border-border rounded-sm text-sm outline-none focus:border-copper" />
             </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="bg-white p-6 rounded-sm border border-border shadow-sm">
          <h2 className="text-lg font-semibold text-charcoal mb-6">Social Media Links</h2>
          <div className="space-y-4">
             {Object.entries(settings.socialMedia).map(([platform, url]) => (
                <div key={platform}>
                  <label className="block text-[10px] font-semibold tracking-[0.15em] text-charcoal-lighter uppercase mb-2">{platform}</label>
                  <input type="url" defaultValue={url} placeholder={`https://${platform}.com/...`} className="w-full px-3 py-2 border border-border rounded-sm text-sm outline-none focus:border-copper" />
                </div>
             ))}
          </div>
        </div>
      </div>
      <p className="text-xs text-charcoal-lighter text-center italic mt-4">
        * Note: Database integration is currently disabled. Changes made here will not persist across reloads.
      </p>
    </>
  );
}
