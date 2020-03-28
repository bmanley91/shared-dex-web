import Link from 'next/link';

const linkStyle = {
  marginRight: 15
}

export const Header = () => (
    <div>
        <Link href='/'>
            <a style={linkStyle}>Home</a>
        </Link>
        <Link href='/'>
            <a style={linkStyle}>My Dexes</a>
        </Link>
    </div>
)