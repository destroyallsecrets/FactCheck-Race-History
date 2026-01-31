
import React from 'react';

const ComparisonTable: React.FC = () => {
  return (
    <div className="overflow-x-auto my-8 bg-white rounded-xl shadow-sm border border-stone-200">
      <table className="min-w-full divide-y divide-stone-200">
        <thead className="bg-stone-50">
          <tr>
            <th className="px-6 py-4 text-left text-xs font-semibold text-stone-500 uppercase tracking-wider">Feature</th>
            <th className="px-6 py-4 text-left text-xs font-semibold text-stone-900 uppercase tracking-wider bg-red-50/50">New World Chattel Slavery</th>
            <th className="px-6 py-4 text-left text-xs font-semibold text-stone-500 uppercase tracking-wider">Pre-Colonial / Ancient Slavery</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-stone-200">
          <tr>
            <td className="px-6 py-4 font-medium text-stone-600">Basis</td>
            <td className="px-6 py-4 text-stone-900 bg-red-50/20">Racial (Blackness = Slave)</td>
            <td className="px-6 py-4 text-stone-700">Debt, War, or Crime</td>
          </tr>
          <tr>
            <td className="px-6 py-4 font-medium text-stone-600">Duration</td>
            <td className="px-6 py-4 text-stone-900 bg-red-50/20">Permanent (For Life)</td>
            <td className="px-6 py-4 text-stone-700">Often Temporary / Manumission possible</td>
          </tr>
          <tr>
            <td className="px-6 py-4 font-medium text-stone-600">Inheritance</td>
            <td className="px-6 py-4 text-stone-900 bg-red-50/20">Hereditary (Born into status)</td>
            <td className="px-6 py-4 text-stone-700">Generally not inherited</td>
          </tr>
          <tr>
            <td className="px-6 py-4 font-medium text-stone-600">Legal Status</td>
            <td className="px-6 py-4 text-stone-900 bg-red-50/20">Legal "Object" / Property</td>
            <td className="px-6 py-4 text-stone-700">Human with limited rights</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;
