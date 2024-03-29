import { Checkbox, Spinner, Table } from 'flowbite-react';
import React from 'react';
import { useGetUsersQuery } from '../../store/store';

const UsersIndex = () => {

    const { data, isError, isLoading, error } = useGetUsersQuery()

    if (isLoading) {
        return <Spinner aria-label="Default status example" />;
    }

    if (isError) {
        return <div>Error: {error.message}</div>
    }

    return (
        <div className="overflow-x-auto">
            <Table hoverable>
                <Table.Head>
                    <Table.HeadCell className="p-4">
                        <Checkbox />
                    </Table.HeadCell>
                    <Table.HeadCell>Name</Table.HeadCell>
                    <Table.HeadCell>Email</Table.HeadCell>
                    <Table.HeadCell>status</Table.HeadCell>
                    <Table.HeadCell>Role</Table.HeadCell>
                    <Table.HeadCell>Phone</Table.HeadCell>
                    <Table.HeadCell></Table.HeadCell>
                    <Table.HeadCell>
                        <span className="sr-only">Edit</span>
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {
                        data.map((user) => (
                            <Table.Row key={user.id}>
                                <Table.Cell className="p-4">
                                    <Checkbox />
                                </Table.Cell>
                                <Table.Cell>
                                    <div className="flex items-center">
                                        <div className="ml-4">
                                            <div className="text-sm font-medium text-gray-900">
                                                {user.name}
                                            </div>
                                        </div>
                                    </div>
                                </Table.Cell>
                                <Table.Cell>
                                    <div className="text-sm text-gray-900">
                                        {user.email}
                                    </div>
                                </Table.Cell>
                                <Table.Cell>
                                    <div className="text-sm text-gray-900">
                                        {user.status}
                                    </div>
                                </Table.Cell>
                                <Table.Cell>
                                    <div className="text-sm text-gray-900">
                                        {user.role ? user.role.name : "Employee"}
                                    </div>
                                </Table.Cell>
                                <Table.Cell>
                                    <div className="text-sm text-gray-900">
                                        {user.phone}
                                    </div>
                                </Table.Cell>
                                <Table.Cell>
                                    <div className="flex justify-end">
                                        <a
                                            href={`/users/${user.id}`}
                                            className="text-indigo-600 hover:text-indigo-900"
                                        >
                                            Edit
                                        </a>
                                    </div>
                                </Table.Cell>
                            </Table.Row>
                        ))
                    }

                </Table.Body>
            </Table>
        </div>
    );
}

export default UsersIndex