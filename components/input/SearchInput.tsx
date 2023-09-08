'use client'
import React, {useEffect, useState} from 'react';
import {useRouter} from "next/navigation";
import qs from "query-string"

import Input from "@/components/input/Input";
import useDebounce from "@/hooks/useDebounce";

const SearchInput = () => {
  const router = useRouter()
  const [value, setValue] = useState<string>("")
  const debounceValue = useDebounce<string>(value, 500)

  useEffect(() => {
    const query = {
      title: debounceValue
    }
    const url = qs.stringifyUrl({
      url: '/search',
      query: query
    })
    router.push(url)
  }, [debounceValue, router])
  
  return (
    <Input
      placeholder={"Search track"}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default SearchInput;