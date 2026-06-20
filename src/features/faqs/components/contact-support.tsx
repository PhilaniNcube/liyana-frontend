import { Phone, Mail, MapPin } from "lucide-react";

export function ContactSupport() {
  return (
    <section className="w-full bg-zinc-50 dark:bg-zinc-900 py-16 md:py-24 border-t border-border">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-4">
        <h2 className="text-3xl font-bold text-secondary dark:text-white">Still have questions?</h2>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
          Our dedicated support team is ready to assist you with precision and empathy.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
          {/* Box 1 */}
          <div className="bg-white dark:bg-zinc-950 border border-border p-6 flex flex-col items-center gap-3">
            <Phone className="text-primary size-8" />
            <h4 className="font-bold text-xs uppercase tracking-widest text-zinc-400">Call Us</h4>
            <p className="font-bold text-secondary dark:text-white text-base">0860 123 456</p>
          </div>
          {/* Box 2 */}
          <div className="bg-white dark:bg-zinc-950 border border-border p-6 flex flex-col items-center gap-3">
            <Mail className="text-primary size-8" />
            <h4 className="font-bold text-xs uppercase tracking-widest text-zinc-400">Email</h4>
            <p className="font-bold text-secondary dark:text-white text-base">support@liyana.co.za</p>
          </div>
          {/* Box 3 */}
          <div className="bg-white dark:bg-zinc-950 border border-border p-6 flex flex-col items-center gap-3">
            <MapPin className="text-primary size-8" />
            <h4 className="font-bold text-xs uppercase tracking-widest text-zinc-400">Visit</h4>
            <p className="font-bold text-secondary dark:text-white text-base">Find a Branch</p>
          </div>
        </div>
      </div>
    </section>
  );
}
