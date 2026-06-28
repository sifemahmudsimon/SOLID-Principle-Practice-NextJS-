// app/components/Pagination.tsx
'use client';

import React from 'react';

interface PaginationProps {
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

/**
 *
 * @param totalPages
 * @param currentPage
 * @param onPageChange
 * @constructor
 *
 * @example
 *   // Sample data: 23 items
 *   const data = Array.from({ length: 23 }, (_, i) => `Item ${i + 1}`);
 *   // Number of items per page
 *   const itemsPerPage = 5;
 *   // State to track current page
 *   const [currentPage, setCurrentPage] = useState(1);
 *   // Calculate total number of pages
 *   const totalPages = Math.ceil(data.length / itemsPerPage);
 *   // Slice data to show only items for the current page
 *   const currentItems = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
 *
 *   <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage}/>
 */

export default function Pagination ({ totalPages, currentPage, onPageChange }:PaginationProps){
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="flex gap-2 justify-center mt-4">
            {pages.map((page) => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={`px-3 py-1 rounded ${
                        page === currentPage ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
                    }`}
                >
                    {page}
                </button>
            ))}
        </div>
    );
};


