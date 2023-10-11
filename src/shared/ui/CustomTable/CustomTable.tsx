import { Button, Space, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useDispatch, useSelector } from 'react-redux';

import { Person } from '../../../domain/model/apiServer.types';
import { RootState } from '../../../domain/store/store';
import {
  addToFavorites,
  removeFromFavorites,
} from '../../../features/PeopleTable/store/favoritesSlice';
import CustomTableProps from './CustomTable.types';

function CustomTable({ items }: CustomTableProps) {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites);
  const headings: ColumnsType<Person> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Height',
      dataIndex: 'height',
      key: 'height',
    },
    {
      title: 'Mass',
      dataIndex: 'mass',
      key: 'mass',
    },
    {
      title: 'Hair color',
      dataIndex: 'hair_color',
      key: 'hair_color',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          {favorites?.some((person) => person.name === record.name) ? (
            <Button
              key={record.name}
              danger
              onClick={() => dispatch(removeFromFavorites(record))}
            >
              Delete from favorites
            </Button>
          ) : (
            <Button
              key={record.name}
              type="primary"
              onClick={() => dispatch(addToFavorites(record))}
            >
              Add {record.name} to favorites
            </Button>
          )}
        </Space>
      ),
    },
  ];
  return (
    <Table
      columns={headings}
      dataSource={items?.map((i) => ({
        ...i,
        key: i.name,
      }))}
    />
  );
}

export default CustomTable;
