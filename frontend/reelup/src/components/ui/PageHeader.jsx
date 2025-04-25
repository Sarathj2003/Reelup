import { ChevronLeft } from 'lucide-react';

const PageHeader = ({ title, onBack }) => (
  <div className="relative mb-6 flex items-center justify-center">
    
    <button
      onClick={onBack}
      className="absolute -left-4 top-[1px] flex items-center gap-1 text-gray-600 hover:text-red-500 px-3 py-1 transition-colors"
    >
      <ChevronLeft size={20} className='mt-0.5'/>
      <span className="text-base font-medium">Back</span>
    </button>

    <h2 className="text-2xl font-bold text-center">{title}</h2>
  </div>
);

export default PageHeader;
