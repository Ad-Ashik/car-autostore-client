import React, { useEffect, useState } from 'react';
import Summary from '../Summary/Summary';

const Summarys = () => {
    const [summarys, setSummarys] = useState([]);
    useEffect(() => {
        fetch('summary.json')
            .then(res => res.json())
            .then(data => setSummarys(data));
    }, []);
    return (
        <div className='mb-20'>
            <h2 className='text-center pb-10 text-2xl font-bold uppercase'>Business Summary</h2>
            <div className='grid gap-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1'>
                {
                    summarys.map(summary => <Summary
                        key={summary.img}
                        summary={summary}
                    ></Summary>)
                }
            </div>
        </div>

    );
};

export default Summarys;