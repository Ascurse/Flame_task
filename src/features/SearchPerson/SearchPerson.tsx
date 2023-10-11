import { Select, Spin } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Person } from '../../domain/model/apiServer.types';
import debounce from '../../shared/hooks/useDebounce';
import { fetchSearchPerson } from './model/fetchSearchPerson';
import SearchPersonProps from './SearchPerson.types';

function SearchPerson({ placeholder, style }: SearchPersonProps) {
  const [data, setData] = useState<Person[]>([]);
  const [value, setValue] = useState<string>();
  const [isFetching, setIsFetching] = useState(false);
  const navigate = useNavigate();

  const debouncedHandleSearch = debounce(async (newValue: string) => {
    setIsFetching(true);
    const searchData = await fetchSearchPerson(newValue);
    setData(searchData);
    setIsFetching(false);
  }, 600);

  const handleSearch = (newValue: string) => {
    debouncedHandleSearch(newValue);
  };

  const handleChange = (newValue: string) => {
    setValue(newValue);
  };

  const handleOptionClick = (url: string) => {
    if (url) {
      const id = url.match(/\d+/)?.[0];
      if (id) {
        navigate(`/people/${id}`);
      }
    }
  };

  return (
    <Select
      showSearch
      value={value}
      placeholder={placeholder}
      style={style}
      defaultActiveFirstOption={false}
      filterOption={false}
      onSearch={handleSearch}
      onChange={handleChange}
      notFoundContent={isFetching ? <Spin size="small" /> : null}
      options={(data || []).map((d) => ({
        value: d.url,
        label: d.name,
      }))}
      onSelect={handleOptionClick}
    />
  );
}

export default SearchPerson;
