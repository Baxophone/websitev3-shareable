import React from 'react';
import './Sidebar.css';

function Sidebar() {
    return (
        <div className='sidebar-wrap'>
            <div className='sidebar-body'>
                <button className='sidebar-toggle'>
                    <i class="bi bi-arrow-left"></i>
                </button>
                <ul style={{ listStyleType: "none" }}>
                    <li>
                        <a className='sidebar-item' href='#'>
                            <div className='sidebar-item-icon'>
                                <i class="bi bi-house-door"></i>
                            </div>
                            Home
                        </a>
                    </li>
                    <li>
                        <a className='sidebar-item' href='#'>
                            <div className='sidebar-item-icon'>
                                <i class="bi bi-person-badge"></i>
                            </div>    
                            Organization
                        </a>
                    </li>
                    <li>
                        <a className='sidebar-item' href='#'>
                            <div className='sidebar-item-icon'>
                                <i class="bi bi-trophy"></i>    
                            </div>    
                            Achievements
                        </a>
                    </li>
                    <li>
                        <a className='sidebar-item' href='#'>
                            <div className='sidebar-item-icon'>
                                <i class="bi bi-cash-stack"></i>
                            </div>    
                            Your Donations
                        </a>
                    </li>
                    <li>
                        <a className='sidebar-item' href='#'>
                            <div className='sidebar-item-icon'>
                                <i class="bi bi-clipboard"></i>
                            </div>    
                            Reports
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;