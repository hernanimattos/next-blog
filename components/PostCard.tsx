import * as React from 'react';
import Utils from '@utils/utils';
import { NextComponentType } from 'next';
import Link from 'next/link';
import NavLink from '@components/NavLink/';

interface IPostCard {
    id: string;
    title: string;
    picture: string;
    description: string;
}

const PostCard: NextComponentType<{}, {}, IPostCard> = (props) => {
    const { id, title, picture, description } = props;
    const newTitle = Utils.cutString(title, 0, 10);

    return (
        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article className="overflow-hidden rounded-lg shadow-lg">
                <a href="#">
                    <img
                        alt="Placeholder"
                        className="block h-auto w-full"
                        src="https://picsum.photos/600/400/?random"
                    />
                </a>

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 className="text-lg">
                        <Link href={`/post/${id}`}>{newTitle}</Link>
                    </h1>
                    <p className="text-grey-darker text-sm">14/4/19</p>
                </header>

                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                    <a
                        className="flex items-center no-underline hover:underline text-black"
                        href="#"
                    >
                        <p className="ml-2 text-sm"> {title}</p>
                    </a>
                    <a
                        className="no-underline text-grey-darker hover:text-red-dark"
                        href="#"
                    >
                        <span className="hidden">Like</span>
                        <i className="fa fa-heart"></i>
                    </a>
                </footer>
            </article>
        </div>
    );
};

export default PostCard;
