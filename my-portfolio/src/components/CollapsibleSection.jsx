import { ChevronDown } from "lucide-react";

export default function CollapsibleSection({ title, count, variant, isOpen, onToggle, children }) {

    return (
        <div className=" bg-orange-500/20 rounded-3xl border-b m-10 p-4 mt-5">
            <div onClick={onToggle} className="flex justify-between items-center transition-all duration-300 ease-in-out">
                <div className="flex items-center gap-3">
                    <span>{variant}</span>
                    <span>{title}</span>
                    <span>{count}</span>
                </div>

                <ChevronDown className={isOpen ? "rotate-180 transition-transform" : "transition-transform"} />
            </div>

            <div className={isOpen ? "max-h-screen" : "max-h-0 overflow-hidden"}>
                {children}
            </div>
        </div>
    );
}