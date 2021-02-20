import React, { Fragment } from 'react';
import Link, { LinkProps } from 'next/link';

interface IProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    to: string | { href: string; as: string };
    linkp: Array<any>;
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

const CLink = (props) => {
    const { linkp } = props;

    return (
        <Fragment>
            {linkp &&
                linkp.map((linkProps: IProps, i: number) => (
                    <LinkWrapper
                        {...linkProps}
                        {...props}
                        key={`${i}-${linkProps.to}`}
                    ></LinkWrapper>
                ))}
        </Fragment>
    );
};

export default CLink;
