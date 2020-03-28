import Link from 'next/link';
import styled from '@emotion/styled';

const HeaderDiv = styled('div')`
    background: red;
    padding: 15px;
`
const HeaderLink = styled('a')`
    padding: 15px;
    color: white;
    border-right: 1px solid #DDD;
    border-left: 1px solid #DDD;
    text-decoration: none;
`

export const Header = () => (
    <HeaderDiv>
        <Link href='/' passHref>
            <HeaderLink>Home</HeaderLink>
        </Link>
        <Link href='/foo' passHref>
            <HeaderLink>Saved Dexes</HeaderLink>
        </Link>
        <Link href='/foo' passHref>
            <HeaderLink>Create New Dex</HeaderLink>
        </Link>
    </HeaderDiv>
)