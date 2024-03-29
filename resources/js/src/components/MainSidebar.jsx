

import { Sidebar } from 'flowbite-react';
import { HiChartPie, HiShoppingBag, HiUser } from 'react-icons/hi';


export default function Component({ className }) {
    return (
        <Sidebar aria-label="Sidebar with logo branding example" className={className}>
            <Sidebar.Logo href="#" img="/logo.png" imgAlt="Flowbite logo">
                Flowbite
            </Sidebar.Logo>
            <Sidebar.Items>
                <Sidebar.ItemGroup className='flex flex-wrap'>
                    <Sidebar.Item href="#" icon={HiChartPie}>
                        <span className='mx-4'>Dashboard</span>
                    </Sidebar.Item>
                    <Sidebar.Collapse icon={HiShoppingBag} label="Supermarket">
                        <Sidebar.Item className="justify-between ml-5" href="/users" icon={HiUser}>
                            <span className='mx-2 flex justify-between text-sm'>Users List</span>
                        </Sidebar.Item>
                        <Sidebar.Item className="justify-between ml-5" icon={HiUser}>
                            <span className='mx-2 flex justify-between text-sm'>SuperMarket List</span>
                        </Sidebar.Item>
                        <Sidebar.Item className="justify-between ml-5" icon={HiUser}>
                            <span className='mx-2 flex justify-between text-sm'>Supermarket Payroll</span>
                        </Sidebar.Item>
                    </Sidebar.Collapse>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    );
}

