import React from 'react'

const OrderPage = () => {
  return (
    <div className='p-4 lg:px-20 xl:px-40'>
        <table className='w-full border-separate border-spacing-3'>
            <thead>
                <tr className='text-left'>
                    <th className='hidden md:block'>ID</th>
                    <th>Date</th>
                    <th>Price</th>
                    <th className='hidden md:block'>Products</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr className='text-sm md:text-base odd:bg-slate-200'>
                    <td className='hidden md:block py-6 px-1'>53489289</td>
                    <td className='py-6 px-1'>2023-07-12</td>
                    <td className='py-6 px-1'>73.34</td>
                    <td className='hidden md:block py-6 px-1'>Burger(2), Fries</td>
                    <td className='py-6 px-1'>reached 20s ago..</td>
                
                </tr>
                <tr className='text-sm md:text-base odd:bg-slate-200'>
                    <td className='hidden md:block py-6 px-1'>53489289</td>
                    <td className='py-6 px-1'>2023-07-12</td>
                    <td className='py-6 px-1'>73.34</td>
                    <td className='hidden md:block py-6 px-1'>Burger(2), Fries</td>
                    <td className='py-6 px-1'>Delievered</td>
                
                </tr>
                <tr className='text-sm md:text-base odd:bg-slate-200'>
                    <td className='hidden md:block py-6 px-1'>53489289</td>
                    <td className='py-6 px-1'>2023-07-12</td>
                    <td className='py-6 px-1'>73.34</td>
                    <td className='hidden md:block py-6 px-1'>Burger(2), Fries</td>
                    <td className='py-6 px-1'>Delievered</td>
                
                </tr>
                <tr className='text-sm md:text-base odd:bg-slate-200'>
                    <td className='hidden md:block py-6 px-1'>53489289</td>
                    <td className='py-6 px-1'>2023-07-12</td>
                    <td className='py-6 px-1'>73.34</td>
                    <td className='hidden md:block py-6 px-1'>Burger(2), Fries</td>
                    <td className='py-6 px-1'>Delievered</td>
                
                </tr>
                
                <tr className='text-sm md:text-base bg-red-100'>
                    <td className='hidden md:block py-6 px-1'>53489289</td>
                    <td className='py-6 px-1'>2023-07-12</td>
                    <td className='py-6 px-1'>73.34</td>
                    <td className='hidden md:block py-6 px-1'>Burger(2), Fries</td>
                    <td className='py-6 px-1'>On the way.....</td>
                
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default OrderPage