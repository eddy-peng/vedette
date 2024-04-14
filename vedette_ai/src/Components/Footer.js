import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div className='footer'>
            <div className="footer-container">
                <Link className='banner-link' to='/solution'>Google x iSchool 2024</Link>
                <div className='primary-links'>
                    <Link className='footer-link' to='/solution'>Solution</Link>
                    <Link className='footer-link' to='/team'>Team</Link>
                    <Link className='footer-link' to='/milestones'>Milestones</Link>
                    <Link className='footer-link' to='/milestones'>View Demo</Link>
                </div>
            </div>
        </div>
    )
}