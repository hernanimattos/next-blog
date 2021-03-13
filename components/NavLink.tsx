import React, { Fragment } from 'react';
import Link from 'next/link';

interface IProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    to: string | { href: string; as: string };
    nav: Array<any>;
    text: string;
}

const LinkWrapper = React.forwardRef(({ to, ...props }: IProps, ref: any) => {
    const { text } = props;

    const clickHandler = (ele: React.MouseEvent<HTMLAnchorElement>) => {};

    return (
        <Link href={to}>
            <a {...props} ref={ref} onClick={clickHandler}>
                {text}
            </a>
        </Link>
    );
});

const NavLink = (props) => {
    const { nav } = props;

    return (
        <Fragment>
            {nav &&
                Array.isArray(nav) &&
                nav.map((linkProps: IProps, i: number) => (
                    <LinkWrapper
                        {...linkProps}
                        {...props}
                        key={`${i}-${linkProps.to}`}
                    ></LinkWrapper>
                ))}
        </Fragment>
    );
};

export default NavLink;
