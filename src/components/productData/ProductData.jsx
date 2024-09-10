import React, { useState } from 'react';
import './product.css';

const ProductData = ({ data }) => {
    const [currentPage, setCurrentPage] = useState(1);
                
    const entriesPerPage = 9;
    const indexOfLastEntry = currentPage * entriesPerPage;
    const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
    const currentEntries = data.slice(indexOfFirstEntry, indexOfLastEntry);

    const totalPages = Math.ceil(data.length / entriesPerPage);

    const handlePageChange = (pageNumber) => {  
        setCurrentPage(pageNumber);
    };

    return (
        <div className='product-container'>
            {
                currentEntries && currentEntries.map((item) => (
                    <div className='div2' key={item.id}>
                        <img src={item?.thumbnail} alt="" />
                        <div>
                            <p>{item?.title}</p>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                            <div>$ {item?.price}</div>
                            <div>⭐ {item?.rating}</div>
                        </div>
                    </div>
                ))
            }

            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <ul style={{ listStyle: 'none', padding: 0, display: 'inline-flex' }}>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                        <li key={pageNumber} style={{ margin: '0 5px' }}>
                            <button
                                onClick={() => handlePageChange(pageNumber)}
                                style={{
                                    border: '1px solid #ddd',
                                    borderRadius: '5px',
                                    padding: '5px 10px',
                                    backgroundColor: currentPage === pageNumber ? '#007bff' : '#fff',
                                    color: currentPage === pageNumber ? '#fff' : '#007bff',
                                    cursor: 'pointer',
                                    outline: 'none',
                                    marginBottom:'30px'
                                }}
                            >
                                {pageNumber}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ProductData;
