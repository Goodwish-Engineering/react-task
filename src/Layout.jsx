import { ArrowLeft, ArrowRight } from "lucide-react";
export default function Layout({children}) {
  return (
    <div className="flex flex-col h-screen w-screen bg-slate-100">
      
      <div className="flex flex-col justify-center items-center w-full bg-gray-800 text-white p-6 shadow-sm">
        
        <p className="text-gray-300 font-semibold text-lg mb-2">Welcome to My Mini Blog Application</p>
        
        <div className="flex items-center justify-center sm:justify-start gap-2 text-sm text-gray-400">
          
          <div className="flex items-center gap-1">
            <ArrowLeft size={16} />
            <ArrowRight size={16} />
          </div><span>Use arrow keys for navigation</span>

        </div>

      </div>

      <div className="flex-1 p-4">
        {children}
      </div>

      <div className="flex justify-center p-4 bg-gray-100">
        {/* Here will be pagination */}  
      </div>

    </div>
  );
}