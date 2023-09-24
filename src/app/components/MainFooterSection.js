import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-12 flex flex-col items-center justify-center lg:flex-row lg:justify-between">
        {/* Column 1 */}
        <div className="flex flex-col items-center mb-8 lg:mb-0 lg:flex-row">
          <div className="mb-4 lg:mb-0">
            <h3 className="text-xl font-bold">Column 1</h3>
            <p>Content for column 1.</p>
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col items-center mb-8 lg:mb-0 lg:flex-row">
          <div className="mb-4 lg:mb-0">
            <h3 className="text-xl font-bold">Column 2</h3>
            <p>Content for column 2.</p>
          </div>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col items-center">
          <div className="mb-4 lg:mb-0">
            <h3 className="text-xl font-bold">Column 3</h3>
            <p>Content for column 3.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

