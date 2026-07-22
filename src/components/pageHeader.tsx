import { SearchIcon } from "lucide-react";
import { HeartIcon } from "lucide-react";
import { ShoppingBag } from "lucide-react";

export default function PageHeader() {
    return (
        <div className="grid grid-cols-3 items-center px-15 py-3">
            <div className="justify-self-start">
                <h2 className="text-xl font-bold">ATLAS</h2>
            </div>

            <nav className="justify-self-center flex gap-10 text-md font-medium ">
                <a href="#">New & Featured</a>
                <a href="#">Men</a>
                <a href="#">Women</a>
                <a href="#">Kids</a>
                <a href="#">Sale</a>
            </nav>

            <div className="justify-self-end flex items-center gap-4 text-black">
                <div className="relative">
                    <SearchIcon strokeWidth={1} className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="bg-gray-100 rounded-full pl-9 pr-4 py-2 text-sm outline-none"
                    />
                </div>
                <HeartIcon strokeWidth={1} className="w-6 h-6" />
                <ShoppingBag strokeWidth={1} className="w-6 h-6" />
            </div>
        </div>
    )
}