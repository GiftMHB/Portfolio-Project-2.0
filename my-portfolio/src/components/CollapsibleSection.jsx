import { ChevronDown } from "lucide-react";
import OvalShape from "./UI/ovalShape";

export default function CollapsibleSection({ title, count, variant, isOpen, onToggle, children }) {
    const countLabel = count !== undefined && count !== null ? String(count) : "";

    return (
        <div className={`${isOpen ? "bg-black" : "bg-gray-900"} border-b mb-10 p-4 mt-5 `}>
            <div onClick={onToggle} className={`${isOpen ? "bg-black" : "bg-gray-900"} flex justify-between items-center transition-all duration-300 ease-in-out px-4 `}>
                <div className="flex items-center gap-3 cursor-pointer">
                    <span>{variant}</span>
                    <span>{title}</span>
                    {countLabel && <OvalShape title={countLabel} />}
                </div>

                <ChevronDown className={isOpen ? "rotate-180 transition-transform" : "transition-transform"} />
            </div>

            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "overflow-y-auto pb-4" : "max-h-0"}`}>
                <div className="px-4 mt-8">
                    {children}
                </div>
            </div>
        </div>
    );
}