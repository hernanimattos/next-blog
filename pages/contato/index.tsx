import * as React from 'react';
import { useForm } from 'react-hook-form';
import { NextPage } from 'next';
import Layout from '@containers/Layout';

type Inputs = {
    example: string;
    exampleRequired: string;
};

const Contato: NextPage = () => {
    const { register, handleSubmit, watch, errors } = useForm<Inputs>();
    const onSubmit = (data) => console.log(data);
    return (
        <Layout>
            <div className="flex items-center min-h-screen w-full">
                <div className="container mx-auto ">
                    <div className="mx-auto bg-white rounded-md shadow-sm">
                        <div className="text-center">
                            <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
                                Contato
                            </h1>
                        </div>
                        <div className="m-7">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="mb-6">
                                    <label
                                        htmlFor="name"
                                        className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                                    >
                                        Nome
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="John Doe"
                                        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                                        ref={register}
                                    />
                                </div>
                                <div className="mb-6">
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                                    >
                                        E-mail
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="you@company.com"
                                        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                                        ref={register}
                                    />
                                </div>
                                <div className="mb-6">
                                    <label
                                        htmlFor="phone"
                                        className="text-sm text-gray-600 dark:text-gray-400"
                                    >
                                        Telefone
                                    </label>
                                    <input
                                        type="text"
                                        name="phone"
                                        id="phone"
                                        placeholder="+1 (555) 1234-567"
                                        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                                        ref={register}
                                    />
                                </div>
                                <div className="mb-6">
                                    <label
                                        htmlFor="message"
                                        className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                                    >
                                        Mensagem
                                    </label>

                                    <textarea
                                        rows={5}
                                        name="message"
                                        id="message"
                                        placeholder="Your Message"
                                        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                                        ref={register}
                                    ></textarea>
                                </div>
                                <div className="mb-6">
                                    <button
                                        type="submit"
                                        className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
                                    >
                                        Enviar
                                    </button>
                                </div>
                                <p
                                    className="text-base text-center text-gray-400"
                                    id="result"
                                ></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Contato;
